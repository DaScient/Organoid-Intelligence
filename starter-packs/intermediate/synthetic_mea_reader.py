"""
Module 2: Synthetic MEA Data Reader and Processor
Reference: Chapter 7 (Electrophysiological Interfaces)

Simulates reading raw voltage data from a 4-channel Multi-Electrode Array (MEA),
filtering out biological and electronic noise, and extracting digital spike times.
"""
import numpy as np
import matplotlib.pyplot as plt
from scipy.signal import butter, filtfilt, find_peaks

def create_synthetic_mea_data(duration_sec=2.0, fs=10000, n_channels=4):
    """Generates noisy MEA data with hidden neural spikes."""
    np.random.seed(42)
    n_samples = int(duration_sec * fs)
    time = np.arange(n_samples) / fs
    data = np.random.randn(n_channels, n_samples) * 10 # Base noise (uV)
    
    # Add 60Hz power line noise
    for ch in range(n_channels):
        data[ch] += np.sin(2 * np.pi * 60 * time) * 20
        
    # Inject synthetic spikes into random channels
    spike_template = np.array([0, -30, -100, 40, 10, 0]) 
    for _ in range(int(duration_sec * 20)): # ~20Hz overall firing rate
        ch = np.random.randint(0, n_channels)
        idx = np.random.randint(0, n_samples - len(spike_template))
        data[ch, idx:idx+len(spike_template)] += spike_template
        
    return time, data, fs

def process_mea_channel(time, raw_signal, fs):
    """Filters data and extracts computational spikes."""
    # 1. Bandpass filter (300Hz - 3000Hz) to remove slow biological drift and fast noise
    nyq = 0.5 * fs
    b, a = butter(3, [300/nyq, 3000/nyq], btype='band')
    filtered = filtfilt(b, a, raw_signal)
    
    # 2. Spike Detection using Median Absolute Deviation (MAD)
    noise_mad = np.median(np.abs(filtered)) / 0.6745
    threshold = -5 * noise_mad # Detect downward biological spikes
    
    # 3. Extract times
    peaks, _ = find_peaks(-filtered, height=-threshold, distance=int(fs*0.002))
    spike_times = time[peaks]
    
    return filtered, threshold, spike_times

if __name__ == "__main__":
    time, raw_data, fs = create_synthetic_mea_data()
    ch_idx = 0 
    
    filtered_data, threshold, spikes = process_mea_channel(time, raw_data[ch_idx], fs)
    
    fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(12, 6), sharex=True)
    
    ax1.plot(time, raw_data[ch_idx], color='gray', alpha=0.7)
    ax1.set_title(f"Raw MEA Recording (Channel {ch_idx}) with 60Hz Noise")
    ax1.set_ylabel("Voltage (uV)")
    
    ax2.plot(time, filtered_data, color='black', linewidth=0.8)
    ax2.axhline(threshold, color='red', linestyle='--', label=f'Threshold ({threshold:.1f} uV)')
    ax2.scatter(spikes, filtered_data[(spikes*fs).astype(int)], color='red', zorder=3, label='Detected Spikes')
    ax2.set_title("Filtered Signal & Digital Spike Extraction")
    ax2.set_ylabel("Voltage (uV)")
    ax2.set_xlabel("Time (s)")
    ax2.legend(loc='upper right')
    
    plt.tight_layout()
    plt.savefig('mea_processing_demo.png')
    print(f"Extracted {len(spikes)} discrete spikes from the biological noise.")
