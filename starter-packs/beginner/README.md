# Beginner Module: Hello Organoid
**Companion to Chapters 1–3**

Welcome to the foundation of Biological Computing. Before we can interface with 3D cerebral organoids, we must understand the fundamental unit of computation: the biological neuron.

## Learning Objectives
1. Understand how biological neurons process information differently from artificial neurons (ANNs).
2. Learn the concept of "Spiking" (Action Potentials) and temporal dynamics.
3. Simulate your first biologically plausible neuron.

## The Paradigm Shift
In traditional AI (like Deep Learning), a "neuron" outputs a continuous decimal value (e.g., 0.85) calculated via matrix multiplication and an activation function (like ReLU). 

In **Organoid Intelligence**, neurons output discrete, binary voltage spikes over time. Information is encoded not just in the presence of a spike, but in the *timing* and *frequency* of the spikes.

## Actionable Next Step
Run `hello_neuron.py`. This script simulates a **Leaky Integrate-and-Fire (LIF)** neuron. It is the "Hello World" of biological computing. Watch how the neuron accumulates electrical charge and "fires" when it crosses a threshold, then resets.
