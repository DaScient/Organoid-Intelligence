# Capstone Project 1: Building a Hodgkin-Huxley Neuron Simulation

**Associated Part**: Part I — Foundations of Organoid Intelligence (Chapters 1–3)

---

## Project Overview

In this capstone project, students will build a complete Hodgkin-Huxley (HH) neuron model from scratch in Python, systematically analyze its computational properties, and draw connections between biological neural dynamics and computational primitives relevant to organoid intelligence. The Hodgkin-Huxley model remains one of the most important biophysical models in neuroscience, providing a quantitative description of how action potentials are initiated and propagated through the interplay of voltage-gated ion channels. Students will progress from implementing the core differential equations for a single neuron, through characterizing its input-output properties, to constructing a small network of coupled neurons and analyzing emergent synchronization phenomena. The project culminates in a comparative analysis between biological and artificial neurons, helping students appreciate the computational richness of biological substrates. By the end of this project, students will have developed both the mathematical intuition and the practical programming skills necessary to model the fundamental building blocks of organoid intelligence systems. This project bridges the gap between theoretical neuroscience and the practical engineering challenges encountered when interfacing with living neural tissue.

---

## Learning Objectives

Upon completion of this capstone project, students will be able to:

- **Implement the Hodgkin-Huxley equations** as a system of coupled ordinary differential equations using numerical integration methods in Python.
- **Explain the roles of gating variables** (m, h, n) and their voltage-dependent rate constants in shaping the action potential waveform.
- **Analyze action potential generation** by identifying the sequence of ionic conductance changes during depolarization, repolarization, and the refractory period.
- **Characterize the input-output relationship** of a biological neuron by constructing and interpreting the frequency-current (f-I) curve.
- **Explore parameter sensitivity** by systematically varying ion channel conductances and observing effects on neural excitability, threshold behavior, and firing patterns.
- **Construct a small neural network** with synaptic coupling and analyze emergent dynamics such as synchronization, phase locking, and propagation delays.
- **Compare biological and artificial neurons** quantitatively in terms of energy consumption per spike, information capacity, temporal coding resolution, and computational expressiveness.
- **Communicate scientific results** effectively through well-documented code, publication-quality figures, and concise written analysis.

---

## Background

The Hodgkin-Huxley model, first published in 1952, describes the ionic mechanisms underlying the initiation and propagation of action potentials in the squid giant axon. The model earned Alan Hodgkin and Andrew Huxley the Nobel Prize in Physiology or Medicine in 1963 and remains the foundation for computational neuroscience. At its core, the model treats the neuronal membrane as an electrical circuit composed of a capacitor (the lipid bilayer) in parallel with several voltage-dependent conductances (ion channels) and their associated reversal potentials (determined by ion concentration gradients).

The membrane potential $V$ evolves according to the equation:

$$C_m \frac{dV}{dt} = I_{ext} - g_{Na} m^3 h (V - E_{Na}) - g_K n^4 (V - E_K) - g_L (V - E_L)$$

where $C_m$ is the membrane capacitance (typically 1 µF/cm²), $I_{ext}$ is the externally applied current, $g_{Na}$, $g_K$, and $g_L$ are the maximal conductances for sodium, potassium, and leak channels respectively, and $E_{Na}$, $E_K$, and $E_L$ are the corresponding reversal potentials. The variables $m$, $h$, and $n$ are gating variables that represent the probability of ion channel subunits being in the open state. Each gating variable $x \in \{m, h, n\}$ obeys a first-order kinetic equation:

$$\frac{dx}{dt} = \alpha_x(V)(1 - x) - \beta_x(V)x$$

where $\alpha_x(V)$ and $\beta_x(V)$ are voltage-dependent rate constants derived from experimental data. The sodium current requires three activation gates ($m^3$) and one inactivation gate ($h$), while the potassium current uses four activation gates ($n^4$). This gating structure captures the rapid activation and subsequent inactivation of sodium channels, and the slower activation of potassium channels, which together produce the characteristic action potential waveform. Understanding these dynamics is essential for interpreting the electrical activity of brain organoids and designing effective interfaces for organoid intelligence systems.

---

## Requirements

- **Python** 3.8 or higher
- **NumPy** (≥1.20) for numerical array operations
- **SciPy** (≥1.7) for ODE integration (`scipy.integrate.solve_ivp`)
- **Matplotlib** (≥3.4) for plotting and visualization
- **Jupyter Notebook** or **JupyterLab** for interactive development and documentation
- A basic understanding of differential equations and linear algebra
- Familiarity with Python programming, including functions, classes, and array operations

---

## Tasks

### Task 1: Implement the Hodgkin-Huxley Equations

Implement the complete HH model as a Python function suitable for use with `scipy.integrate.solve_ivp`. Define all rate constants $\alpha_x(V)$ and $\beta_x(V)$ for each gating variable using the original Hodgkin-Huxley parameterization. Use the following standard parameter values: $C_m = 1.0$ µF/cm², $g_{Na} = 120$ mS/cm², $g_K = 36$ mS/cm², $g_L = 0.3$ mS/cm², $E_{Na} = 50$ mV, $E_K = -77$ mV, $E_L = -54.387$ mV. Organize your code into a well-structured class or module with clear documentation. Validate your implementation by checking that the resting potential is approximately $-65$ mV and that a brief suprathreshold current pulse elicits a single action potential.

### Task 2: Simulate a Single Action Potential

Using your HH implementation, simulate the response to a step current injection of $I_{ext} = 10$ µA/cm² applied from $t = 10$ ms to $t = 40$ ms, over a total simulation window of 60 ms. Use `solve_ivp` with the RK45 method and a maximum step size of 0.01 ms to ensure numerical accuracy. Record the membrane potential and all gating variables over time. Verify that your action potential has the correct shape: rapid depolarization to approximately +40 mV, followed by repolarization and a brief hyperpolarization (undershoot) below resting potential.

### Task 3: Plot Membrane Voltage, Gating Variables, and Ionic Currents

Create a multi-panel figure (at least 3 subplots) showing: (a) the membrane voltage $V(t)$, (b) the gating variables $m(t)$, $h(t)$, and $n(t)$ on the same axes with a legend, and (c) the individual ionic currents $I_{Na}(t)$, $I_K(t)$, and $I_L(t)$. Use consistent time axes across all panels. Annotate key features: the threshold crossing, the peak of the action potential, and the refractory period. Ensure all figures are publication-quality with appropriate axis labels, units, font sizes, and a clear color scheme.

### Task 4: Analyze the Firing Rate vs. Input Current (f-I Curve)

Systematically vary the external current $I_{ext}$ from 0 to 200 µA/cm² in steps of 2 µA/cm². For each current value, simulate 500 ms of activity and count the number of action potentials (using a threshold crossing detector at 0 mV). Plot the firing rate (Hz) as a function of input current. Identify and annotate: (a) the rheobase current (minimum current for firing), (b) the linear range of the f-I curve, and (c) the saturation regime. Discuss whether the neuron exhibits Type I or Type II excitability and explain the biophysical basis for your observation.

### Task 5: Implement a Network of 10 Coupled HH Neurons

Extend your single-neuron model to a network of 10 HH neurons. Implement excitatory chemical synapses with the following dynamics: when a presynaptic neuron fires (crosses 0 mV from below), it delivers a synaptic current to connected postsynaptic neurons modeled as $I_{syn} = g_{syn} \cdot s(t) \cdot (V_{post} - E_{syn})$ where $E_{syn} = 0$ mV for excitatory synapses, $g_{syn} = 0.1$ mS/cm², and $s(t)$ is a synaptic gating variable with rise and decay kinetics. Generate a random connectivity matrix where each neuron has a 30% probability of connecting to any other neuron (no self-connections). Apply a constant background current of $I_{ext} = 10$ µA/cm² plus small Gaussian noise ($\sigma = 1$ µA/cm²) to each neuron independently.

### Task 6: Measure Synchronization Using Cross-Correlation Analysis

Record the spike times of all 10 neurons over a 2-second simulation. Compute the pairwise cross-correlation of spike trains (using bins of 1 ms) for all 45 unique neuron pairs. Calculate the synchronization index as the average peak cross-correlation across all pairs. Generate a raster plot showing the spike times of all neurons, a cross-correlation matrix (10×10 heatmap), and a histogram of pairwise synchronization values. Investigate how synchronization changes when you vary the synaptic conductance $g_{syn}$ over two orders of magnitude (0.01 to 1.0 mS/cm²). Plot the synchronization index as a function of $g_{syn}$.

### Task 7: Compare Biological vs. Artificial Neurons

Perform a quantitative comparison between a single HH neuron and a ReLU artificial neuron along the following dimensions: (a) **Energy per operation**: estimate the ATP molecules consumed per biological spike (approximately $10^8$ ATP molecules) and convert to joules; compare with the energy cost of a single multiply-accumulate operation on modern GPU hardware. (b) **Information capacity**: estimate the bits per spike for the HH neuron considering both rate coding and temporal coding (spike timing precision of ~1 ms); compare with the information carried by a single floating-point activation. (c) **Temporal dynamics**: compare the timescales of computation (ms for biological, ns for digital). (d) **Nonlinearity**: compare the threshold and saturation behavior of the HH neuron with the ReLU function. Present your analysis in a summary table and discuss the implications for organoid intelligence systems.

---

## Deliverables

- **Jupyter Notebook**: A complete, well-documented notebook containing all code, simulations, and analyses. The notebook should be executable from top to bottom without errors and should include markdown cells explaining each step.
- **f-I Curve Plot**: A publication-quality figure of the firing rate vs. input current curve with annotations for rheobase, linear range, and saturation.
- **Network Synchronization Analysis**: Raster plots, cross-correlation matrices, and synchronization index vs. synaptic conductance curves.
- **Comparison Table**: A formatted table comparing biological and artificial neuron properties across at least four dimensions.
- **Written Report** (2 pages, single-spaced): A concise report summarizing your findings, interpreting the biological significance of the HH model dynamics, and reflecting on what these properties mean for organoid intelligence. The report should address: What computational advantages do biological neurons offer? What are the limitations? How do network effects (synchronization) relate to information processing in organoids?

---

## Evaluation Rubric

| Criterion | Points | Description |
|---|---|---|
| **HH Model Implementation** | 20 | Correct implementation of all equations, rate constants, and parameters. Code is clean, well-documented, and modular. |
| **Single Neuron Analysis** | 15 | Accurate action potential simulation with correct shape. Multi-panel figures are clear and properly annotated. |
| **f-I Curve Analysis** | 15 | Complete f-I curve with correct identification of rheobase, linear range, and saturation. Accurate classification of excitability type. |
| **Network Implementation** | 15 | Correct synaptic coupling, random connectivity, and noise injection. Network simulation runs without errors. |
| **Synchronization Analysis** | 15 | Accurate cross-correlation computation, meaningful synchronization index, and systematic parameter sweep of synaptic conductance. |
| **Biological vs. Artificial Comparison** | 10 | Quantitative and well-reasoned comparison across all four dimensions. Calculations are clearly shown and realistic. |
| **Written Report** | 10 | Clear, concise scientific writing. Demonstrates understanding of biological neural dynamics and their relevance to organoid intelligence. |
| **Total** | **100** | |

---

## Extensions

These optional tasks are for students seeking additional challenge:

- **Calcium Dynamics**: Add intracellular calcium dynamics to the HH model by including a voltage-gated calcium channel ($I_{Ca}$) and a calcium-dependent potassium channel ($I_{KCa}$). Investigate how calcium dynamics affect bursting behavior and spike-frequency adaptation, two phenomena commonly observed in cortical organoid recordings.
- **Izhikevich Model Comparison**: Implement the Izhikevich simplified neuron model and reproduce the 20 different firing patterns described in Izhikevich (2003). Compare the computational cost (simulation time) and biological fidelity of the Izhikevich model versus the HH model. Discuss which model is more appropriate for large-scale organoid simulations.
- **Chaotic Dynamics**: Explore parameter regimes where the HH model exhibits chaotic behavior. Apply nonlinear dynamics tools (Lyapunov exponents, phase portraits, bifurcation diagrams) to characterize the transition from regular firing to chaos. Discuss the potential computational role of chaos in biological neural systems.
- **Stochastic Channels**: Replace the deterministic gating variables with stochastic channel models (using Gillespie algorithm or Langevin approximation). Investigate how channel noise affects spike timing reliability and information transmission, particularly in small neurons or small channel populations typical of developing organoids.

---

## References

1. Hodgkin, A. L., & Huxley, A. F. (1952). A quantitative description of membrane current and its application to conduction and excitation in nerve. *The Journal of Physiology*, 117(4), 500–544.

2. Izhikevich, E. M. (2003). Simple model of spiking neurons. *IEEE Transactions on Neural Networks*, 14(6), 1569–1572.

3. Dayan, P., & Abbott, L. F. (2001). *Theoretical Neuroscience: Computational and Mathematical Modeling of Neural Systems*. MIT Press.

4. Gerstner, W., Kistler, W. M., Naud, R., & Paninski, L. (2014). *Neuronal Dynamics: From Single Neurons to Networks and Models of Cognition*. Cambridge University Press.

5. Sripad, A., Sanchez, G., Zapata, M., et al. (2018). SNAVA — A real-time multi-FPGA multi-model spiking neural network simulation architecture. *Neural Networks*, 97, 28–45.

6. Lenk, K., Priwitzer, B., Ylä-Outinen, L., et al. (2016). Simulation of developing human neuronal cell networks. *BioMed Research International*, 2016, 4513202.
