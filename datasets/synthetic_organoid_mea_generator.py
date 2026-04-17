"""
Synthetic Organoid MEA Dataset Generator
Reference: Chapter 10 (Reservoir Computing) & Chapter 12 (Neural Coding)

Generates realistic Multi-Electrode Array (MEA) data mimicking a mature 
cerebral organoid. It models individual neuron spiking (Izhikevich model), 
network-wide synchronous bursts, and electrode spatial mapping.
"""
import numpy as np
import h5py
import os

def generate_organoid_dataset(duration_sec=60, fs=20000, n_neurons=1000, n_electrodes=64, save_path="organoid_mea_dataset.h5"):
    print(f"Generating {duration_sec} seconds of synthetic organoid MEA data...")
    np.random.seed(42)
    n_steps = duration_sec * fs
    dt = 1000 / fs # ms per step
    
    # 1. Izhikevich Model Parameters (Heterogeneous organoid population)
    # 80% Excitatory (Regular Spiking), 20% Inhibitory (Fast Spiking)
    ne = int(n_neurons * 0.8)
    ni = n_neurons - ne
    
    re = np.random.rand(ne)
    ri = np.random.rand(ni)
    
    a = np.concatenate((0.02 * np.ones(ne), 0.02 + 0.08 * ri))
    b = np.concatenate((0.2 * np.ones(ne), 0.25 - 0.05 * ri))
    c = np.concatenate((-65 + 15 * re**2, -65 * np.ones(ni)))
    d = np.concatenate((8 - 6 * re**2, 2 * np.ones(ni)))
    
    # Random sparse connectivity matrix
    S = np.random.rand(n_neurons, n_neurons)
    W = np.zeros((n_neurons, n_neurons))
    W[:ne, :] = 0.5 * (S[:ne, :] < 0.1) # Excitatory weights
    W[ne:, :] = -1.0 * (S[ne:, :] < 0.2) # Inhibitory weights
    
    v = -65 * np.ones(n_neurons)
    u = b * v
    firings = []
    
    # 2. Simulate Network Dynamics (with Bursting)
    for t in range(n_steps):
        # Thalamic-like noise + slow oscillation driving network bursts
        burst_drive = 5.0 * np.sin(2 * np.pi * 0.5 * (t * dt / 1000))
        I = np.concatenate((5 * np.random.randn(ne), 2 * np.random.randn(ni))) + max(0, burst_drive)
        
        fired = np.where(v >= 30)[0]
        if len(fired) > 0:
            v[fired] = c[fired]
            u[fired] += d[fired]
            I += np.sum(W[:, fired], axis=1)
            for f in fired:
                firings.append((t, f))
                
        # Izhikevich updates
        v += dt * (0.04 * v**2 + 5 * v + 140 - u + I)
        u += dt * a * (b * v - u)

    # 3. Map Neurons to Electrodes (Spatial mapping)
    # Simulate a physical 8x8 MEA grid
    neuron_positions = np.random.rand(n_neurons, 2) * 2.0 # 2x2 mm organoid
    electrode_positions = np.array([(i*0.25, j*0.25) for i in range(8) for j in range(8)])
    
    # Create Continuous MEA Traces
    mea_traces = np.random.randn(n_electrodes, n_steps) * 5.0 # Background noise (uV)
    spike_waveform = np.array([0, -20, -60, 30, 10, 0]) # Simple spike shape
    
    print("Mapping neural spikes to electrode spatial fields...")
    for t, neuron_id in firings:
        if t + len(spike_waveform) >= n_steps: continue
        n_pos = neuron_positions[neuron_id]
        
        # Calculate distance to all electrodes
        dists = np.linalg.norm(electrode_positions - n_pos, axis=1)
        affected_electrodes = np.where(dists < 0.3)[0] # 300um detection radius
        
        for el in affected_electrodes:
            attenuation = max(0, 1 - (dists[el] / 0.3))
            mea_traces[el, t:t+len(spike_waveform)] += spike_waveform * attenuation

    # 4. Save to HDF5 (Standard format for electrophysiology)
    os.makedirs(os.path.dirname(save_path), exist_ok=True) if os.path.dirname(save_path) else None
    with h5py.File(save_path, 'w') as f:
        f.create_dataset('mea_voltage_uv', data=mea_traces, compression="gzip")
        f.create_dataset('sample_rate_hz', data=fs)
        f.create_dataset('electrode_positions_mm', data=electrode_positions)
        print(f"Dataset successfully saved to {save_path}")

if __name__ == "__main__":
    generate_organoid_dataset()
