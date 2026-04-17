"""
Module 3: Bio-Digital Closed Loop Environment (DishBrain Architecture)
Reference: Chapter 11 (Active Inference) & Chapter 17 (Bio-AI)

This script provides the scaffolding for connecting an organoid to a digital environment.
It translates game states to electrode stimulation patterns and provides "predictable" 
or "unpredictable" feedback based on the organoid's performance (Active Inference).
"""
import numpy as np

class BioDigitalInterface:
    """Mock interface representing the hardware connection to the organoid."""
    def __init__(self, n_electrodes=64):
        self.n_electrodes = n_electrodes
        
    def stimulate(self, pattern):
        """Sends electrical pulses to the organoid."""
        # In physical implementation, this triggers the MEA hardware API
        pass
        
    def read_motor_region(self):
        """Reads spike rates from the designated 'motor' electrodes."""
        # Mocking an organoid's response
        return np.random.rand(2) # [Rate_Up, Rate_Down]

class OrganoidPongEnv:
    """A 1D Pong environment designed specifically for biological feedback."""
    def __init__(self, interface: BioDigitalInterface):
        self.interface = interface
        self.ball_pos = 5
        self.paddle_pos = 5
        self.grid_size = 10
        
    def _encode_state_to_stimulus(self):
        """Translates the ball position into an electrode stimulation pattern."""
        pattern = np.zeros(self.interface.n_electrodes)
        # Map the 1D ball position (0-10) to a specific region of electrodes
        region_start = int((self.ball_pos / self.grid_size) * (self.interface.n_electrodes - 5))
        pattern[region_start:region_start+5] = 1.0 # 1.0 represents a 500mV biphasic pulse
        return pattern
        
    def step(self):
        # 1. State Encoding -> Stimulate Organoid (Sensory Input)
        stim_pattern = self._encode_state_to_stimulus()
        self.interface.stimulate(stim_pattern)
        
        # 2. Read Organoid Response -> Decode to Action
        motor_spikes = self.interface.read_motor_region()
        if motor_spikes[0] > motor_spikes[1] and self.paddle_pos < self.grid_size:
            self.paddle_pos += 1
        elif motor_spikes[1] > motor_spikes[0] and self.paddle_pos > 0:
            self.paddle_pos -= 1
            
        # 3. Environment Dynamics
        # Simulate ball moving randomly for this 1D proof-of-concept
        self.ball_pos += np.random.choice([-1, 1])
        self.ball_pos = np.clip(self.ball_pos, 0, self.grid_size)
        
        # 4. Active Inference Feedback (The "Reward" mechanism)
        if self.ball_pos == self.paddle_pos:
            # HIT: Predictable, low-entropy feedback (Biology prefers this)
            feedback = np.ones(self.interface.n_electrodes) * 0.5 
            print("HIT  -> Sending predictable stimulus (Minimizing Free Energy)")
        else:
            # MISS: Unpredictable, chaotic white noise (Biology avoids this)
            feedback = np.random.rand(self.interface.n_electrodes) 
            print("MISS -> Sending chaotic stimulus (Increasing Surprise/Entropy)")
            
        self.interface.stimulate(feedback)

if __name__ == "__main__":
    hardware = BioDigitalInterface(n_electrodes=64)
    env = OrganoidPongEnv(hardware)
    
    print("Initiating Bio-Digital Closed Loop...")
    for step in range(5):
        print(f"\n--- Step {step+1} ---")
        env.step()
