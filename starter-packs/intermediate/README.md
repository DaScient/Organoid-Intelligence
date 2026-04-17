# Intermediate Module: The Bio-Digital Interface
**Companion to Chapters 7–9**

You now understand the neuron. But an organoid contains hundreds of thousands of neurons. To use them as a computer, we must establish a two-way street: reading their outputs and writing our inputs.

## Learning Objectives
1. Understand Multi-Electrode Arrays (MEAs) and their physical constraints.
2. Learn Digital Signal Processing (DSP) techniques required to clean biological noise.
3. Extract binary "Spike Trains" from raw analog voltage readings.

## The Hardware Reality
Living tissue is submerged in conductive liquid medium. The electrodes picking up the microvolt-level signals also pick up thermal noise, 60Hz power-line interference, and chemical artifacts. The first step of any Organoid Intelligence pipeline is signal cleaning.

## Actionable Next Step
Run `synthetic_mea_reader.py`. This script acts as a mock API for a high-density MEA. It generates raw, noisy biological data, applies bandpass filters, and isolates the computational "bits" (spikes) using thresholding.
