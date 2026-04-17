"""
Module 1: Hello Neuron (Leaky Integrate-and-Fire)
Reference: Chapter 3 (Neuroscience Foundations)

This script simulates a single biological neuron receiving electrical 
input over time, integrating that input, and firing an action potential (spike).
"""
import numpy as np
import matplotlib.pyplot as plt

def simulate_lif_neuron(duration_ms=100, dt=1.0, current_injection=1.5):
    """Simulates a Leaky Integrate-and-Fire Neuron."""
    
    # Biological Parameters
    tau_m = 10.0      # Membrane time constant (ms)
    V_rest = -70.0    # Resting membrane potential (mV)
    V_thresh = -55.0  # Spiking threshold (mV)
    V_reset = -80.0   # Post-spike reset potential (mV)
    R_m = 10.0        # Membrane resistance (MOhm)
    
    # Time vector and voltage array
    times = np.arange(0, duration_ms, dt)
    voltages = np.ones_like(times) * V_rest
    spikes = []
    
    # Simulation Loop
    for i in range(1, len(times)):
        # The "Leaky Integration" differential equation
        dV = (-(voltages[i-1] - V_rest) + R_m * current_injection) / tau_m
        voltages[i] = voltages[i-1] + dV * dt
        
        # The "Fire" condition
        if voltages[i] >= V_thresh:
            spikes.append(times[i])
            voltages[i] = 20.0 # Artificial spike peak for visualization
            if i + 1 < len(times):
                voltages[i+1] = V_reset # Reset membrane
                
    return times, voltages, spikes

if __name__ == "__main__":
    t, v, spike_times = simulate_lif_neuron(current_injection=1.8)
    
    plt.figure(figsize=(10, 4))
    plt.plot(t, v, color='blue', linewidth=1.5)
    plt.axhline(-55, color='red', linestyle='--', label='Threshold (-55 mV)')
    plt.title(f"Hello Neuron: LIF Model ({len(spike_times)} Spikes Fired)")
    plt.xlabel("Time (ms)")
    plt.ylabel("Membrane Potential (mV)")
    plt.legend()
    plt.grid(True, alpha=0.3)
    plt.savefig("hello_neuron.png")
    print(f"Simulation complete. Neuron fired {len(spike_times)} times.")
