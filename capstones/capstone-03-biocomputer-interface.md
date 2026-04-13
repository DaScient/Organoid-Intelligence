# Capstone Project 3: Designing an MEA Recording and Signal Processing Pipeline

**Associated Part**: Part III — The Biocomputer Interface (Chapters 7–9)

---

## Project Overview

In this capstone project, students will design and implement a complete data acquisition and signal processing pipeline for multi-electrode array (MEA) recordings from brain organoids. MEA technology is the primary interface between biological neural tissue and digital computing systems in organoid intelligence, enabling the recording of extracellular electrical activity from hundreds to thousands of electrodes simultaneously. Students will work through the entire pipeline—from MEA hardware selection and recording protocol design, through signal conditioning and spike detection, to high-level network analysis and stimulus-response characterization. The project emphasizes practical signal processing skills that are directly applicable to organoid intelligence research: bandpass filtering to separate spikes from local field potentials (LFPs), threshold-based spike detection, dimensionality reduction for spike sorting, and statistical analysis of network activity patterns. Students will implement each processing stage in Python using real or simulated MEA data, producing a modular and well-documented codebase that could serve as the foundation for an actual organoid intelligence data acquisition system. By the end of this project, students will understand the full chain from biological neural activity to digital representations suitable for downstream computation, closing the loop between the biological substrate of Part II and the computational frameworks of Part IV.

---

## Learning Objectives

Upon completion of this capstone project, students will be able to:

- **Evaluate MEA hardware configurations** by comparing electrode count, spacing, material properties, and noise characteristics for organoid recording applications.
- **Design a structured recording protocol** that captures baseline spontaneous activity, evoked responses to electrical stimulation at multiple frequencies, and pharmacological wash-in/washout conditions.
- **Implement digital signal processing pipelines** including bandpass filtering, artifact rejection, and common-average referencing for multi-channel electrophysiology data.
- **Detect and classify extracellular spikes** using threshold-based detection followed by principal component analysis (PCA) and unsupervised clustering for spike sorting.
- **Quantify neural network activity** by computing firing rates, detecting bursts using inter-spike interval (ISI) algorithms, and characterizing network-level burst statistics.
- **Generate publication-quality visualizations** including raster plots, firing rate heatmaps, cross-correlation matrices, and stimulus-evoked response traces.
- **Perform stimulus-response analysis** by measuring evoked potential latency, amplitude, and reliability across repeated stimulus presentations.
- **Assess signal quality** by computing signal-to-noise ratios, electrode impedance characteristics, and identifying common artifacts in organoid MEA recordings.

---

## Background

Multi-electrode arrays (MEAs) are microfabricated devices that enable the simultaneous recording of extracellular electrical potentials from multiple points across a neural tissue preparation. In the context of organoid intelligence, MEAs serve as the primary bidirectional interface: they record the spontaneous and evoked electrical activity of brain organoids while also providing the means to deliver targeted electrical stimulation. Understanding the principles of MEA recording and the associated signal processing challenges is essential for anyone working in the organoid intelligence field.

Modern MEA systems range from standard planar arrays with 60 electrodes (such as the Multi Channel Systems MEA2100) to high-density complementary metal-oxide-semiconductor (CMOS) arrays with up to 26,400 electrodes (such as the MaxWell Biosystems MaxOne). Electrode diameters typically range from 10 to 30 µm, with inter-electrode spacing of 30 to 200 µm. The extracellular signals recorded by MEAs are sampled at high rates—typically 20 to 30 kHz—to capture the fast dynamics of action potentials, which have waveform durations of approximately 1–2 ms. At these sampling rates, a single 60-channel recording session of 10 minutes generates approximately 720 MB of raw data (at 16-bit resolution), while high-density arrays can produce data rates exceeding 1 GB per minute.

The raw extracellular signal contains two primary components of interest. High-frequency components (300–3000 Hz) correspond to extracellular action potentials (spikes) from neurons near the electrode. Low-frequency components (1–100 Hz) represent local field potentials (LFPs), which reflect the summed synaptic activity of larger neuronal populations. Separating these components requires careful bandpass filtering. Additionally, MEA recordings are subject to several noise sources: thermal (Johnson) noise from electrode impedance ($V_{noise} = \sqrt{4 k_B T R \Delta f}$, where $R$ is electrode impedance, $T$ is temperature, and $\Delta f$ is bandwidth), biological artifacts from muscle contraction or movement, electrical interference at 50/60 Hz from power lines, and stimulation artifacts when combining recording with electrical stimulation. Effective signal processing must address all of these noise sources while preserving the biological signals of interest.

---

## Requirements

- **Python** 3.8 or higher
- **NumPy** (≥1.20) for numerical computation
- **SciPy** (≥1.7) for signal processing (`scipy.signal`) and clustering (`scipy.cluster`)
- **Matplotlib** (≥3.4) for visualization
- **scikit-learn** (≥0.24) for PCA and k-means clustering
- **Jupyter Notebook** or **JupyterLab** for interactive development
- **h5py** or **Neo** (optional) for reading standard electrophysiology data formats
- Sample MEA data (provided as part of the course, or students may generate synthetic data using the provided simulation script)

---

## Tasks

### Task 1: Select an MEA Configuration for Organoid Recording

Evaluate and select an appropriate MEA configuration for recording from cortical brain organoids. Consider and compare at least three commercial MEA systems across the following parameters:

- **Electrode count and layout**: Compare 60-channel standard arrays (8×8 grid), 256-channel high-density arrays, and CMOS-based systems with thousands of electrodes. Discuss how electrode count affects spatial resolution and the ability to track individual neurons versus population activity.
- **Electrode spacing**: Analyze the tradeoff between spatial coverage (wider spacing, e.g., 200 µm) and spatial resolution (closer spacing, e.g., 30 µm). Consider that brain organoid diameters typically range from 1 to 4 mm.
- **Electrode material**: Compare titanium nitride (TiN), platinum black, gold, and PEDOT:PSS coatings in terms of impedance (typically 50–500 kΩ at 1 kHz), signal-to-noise ratio, biocompatibility, and long-term stability.
- **3D electrode options**: Discuss whether planar or 3D protruding electrodes are more appropriate for organoid recording, considering that organoids are three-dimensional structures that sit on top of the array.

Provide a recommendation with detailed justification, including a comparison table of the evaluated systems.

### Task 2: Design a Recording Protocol

Design a complete recording protocol for characterizing the electrophysiological properties of a cortical brain organoid at Week 12 of maturation. The protocol should include:

- **Pre-recording preparation** (30 min): Allow the organoid to equilibrate on the MEA in fresh recording medium (artificial cerebrospinal fluid or conditioned culture medium) at 37°C with 5% CO₂. Document the expected impedance check procedure.
- **Baseline recording** (5 min): Record spontaneous activity with no stimulation. This establishes the intrinsic firing rates, burst patterns, and network dynamics.
- **Electrical stimulation series**: Deliver biphasic current pulses (200 µs per phase, 50–500 µA amplitude) through a designated stimulation electrode at three frequencies:
  - 1 Hz stimulation for 2 minutes (120 pulses)
  - 5 Hz stimulation for 2 minutes (600 pulses)
  - 10 Hz stimulation for 2 minutes (1200 pulses)
  - Include 2-minute rest periods between each stimulation frequency.
- **Recovery period** (5 min): Record spontaneous activity after the stimulation series to assess any lasting changes in network behavior.
- **Pharmacological validation** (optional but recommended): Apply 10 µM CNQX (AMPA receptor antagonist) and record for 5 minutes to confirm that observed activity is glutamatergic synaptic activity. Follow with a washout period of 15 minutes.

Specify the total recording duration, expected file sizes, and data management plan.

### Task 3: Implement a Bandpass Filter Pipeline

Implement a complete signal conditioning pipeline in Python that processes raw multi-channel MEA data into analysis-ready signals. The pipeline should include the following stages:

- **Common-average referencing (CAR)**: Subtract the median signal across all channels from each individual channel to remove common-mode noise. Justify why the median is preferred over the mean for this application.
- **Notch filter**: Apply a notch filter at 50 Hz (or 60 Hz depending on locale) and its harmonics (100 Hz, 150 Hz) to remove power line interference. Use a second-order IIR notch filter with a quality factor of Q = 30.
- **Spike band extraction**: Apply a 4th-order Butterworth bandpass filter (300–3000 Hz) to extract the spike band. Use `scipy.signal.butter` and `scipy.signal.filtfilt` (zero-phase filtering) to avoid phase distortion.
- **LFP band extraction**: Apply a 4th-order Butterworth bandpass filter (1–100 Hz) to extract the LFP band. Downsample the LFP signal to 1 kHz after filtering to reduce data size.
- **Artifact rejection**: Implement an artifact detector that identifies and blanks segments where the signal amplitude exceeds 10 standard deviations from the mean (typically caused by stimulation artifacts or mechanical disturbances). Replace artifact segments with NaN values or zeros and record the timing of rejected segments.

Demonstrate the pipeline on sample data by showing the raw signal, each intermediate processing stage, and the final filtered signals (spike band and LFP band) for at least three channels.

### Task 4: Implement Spike Detection Using Threshold Crossing

Implement a spike detection algorithm based on negative threshold crossing. The steps are:

- **Noise estimation**: Calculate the noise level $\sigma_{noise}$ for each channel using the median absolute deviation (MAD) estimator, which is robust to the presence of spikes: $\sigma_{noise} = \frac{\text{median}(|x|)}{0.6745}$ where $x$ is the bandpass-filtered signal.
- **Threshold setting**: Set the detection threshold for each channel as $threshold = -5 \times \sigma_{noise}$. Discuss why a negative threshold is used (extracellular spikes are typically negative-going) and why 5× the noise level is a common choice (balancing sensitivity and false positive rate).
- **Peak detection**: Detect threshold crossings and identify the peak (minimum value) within a ±0.5 ms window around each crossing. Implement a refractory period of 1 ms to prevent double-detection of the same spike.
- **Waveform extraction**: Extract a 2 ms waveform snippet (1 ms before and 1 ms after the peak) for each detected spike. Store waveforms in a matrix organized by channel.
- **Validation**: Report the total number of spikes detected per channel, the mean waveform shape per channel, and the signal-to-noise ratio (defined as peak amplitude divided by $\sigma_{noise}$) for each channel. Exclude channels with SNR < 3 from further analysis.

### Task 5: Perform Spike Sorting Using PCA and K-Means Clustering

Implement a basic spike sorting pipeline to identify putative individual neurons from the detected spikes on each channel:

- **Feature extraction**: Apply PCA to the matrix of spike waveforms from each channel. Retain the first 3 principal components, which typically capture >90% of the waveform variance. Plot the explained variance ratio to justify the number of components retained.
- **Clustering**: Apply k-means clustering to the PCA-projected spike features. Use the elbow method (inertia vs. k) and silhouette score to determine the optimal number of clusters (typically 1–4 units per channel). Implement automated selection of k by identifying the "elbow" point.
- **Cluster validation**: For each identified cluster (putative unit), plot: (a) the mean waveform ± standard deviation, (b) the inter-spike interval (ISI) histogram to check for refractory period violations (< 2 ms ISIs should be <1% for a well-isolated unit), and (c) the autocorrelogram. Flag units with >2% refractory period violations as multi-unit activity (MUA) rather than single-unit activity (SUA).
- **Visualization**: Create a scatter plot of the first two principal components colored by cluster assignment, overlaid with cluster centroids and decision boundaries.

### Task 6: Calculate Firing Rates, Burst Detection, and Network Statistics

Compute comprehensive activity statistics from the sorted spike data:

- **Firing rates**: Calculate the mean firing rate for each unit over the entire recording and in sliding windows of 10 seconds (with 5-second overlap) to capture temporal dynamics.
- **Burst detection**: Implement an ISI-based burst detection algorithm: a burst begins when two consecutive spikes have an ISI less than a specified threshold (e.g., 100 ms for a "maximum beginning ISI"), continues as long as subsequent ISIs remain below a "maximum within-burst ISI" (e.g., 200 ms), and requires a minimum of 3 spikes per burst. Calculate burst rate (bursts/min), mean burst duration, mean spikes per burst, and inter-burst interval for each unit.
- **Network burst detection**: Detect network-wide bursts where a minimum of 25% of active channels participate in bursting within a 100 ms window. Calculate network burst rate, synchrony index, and participation rate (fraction of active channels involved in each network burst).
- **Summary statistics table**: Present a table of all computed metrics for each identified unit and for the network as a whole.

### Task 7: Generate Visualizations

Produce a comprehensive set of publication-quality figures:

- **Raster plot**: A plot showing spike times for all sorted units across the full recording duration, with stimulation periods highlighted in shaded regions. Units should be ordered by channel position on the MEA.
- **Firing rate heatmap**: A 2D heatmap showing the firing rate of each channel mapped to its spatial position on the MEA grid. Use color intensity to represent firing rate, with the color scale clearly indicated.
- **Cross-correlation matrix**: Compute pairwise cross-correlograms (±50 ms lag, 1 ms bins) for all pairs of units. Display a matrix of peak cross-correlation values as a heatmap. Identify pairs with significant correlations (>3 standard deviations above shuffle-corrected baseline).
- **Example waveforms**: A multi-panel figure showing representative sorted waveforms (mean ± SD) from at least 4 channels, each with 1–3 identified units shown in different colors.
- **LFP spectral analysis**: Compute and plot the power spectral density of the LFP signal (using Welch's method with 1-second windows), identifying peaks in standard frequency bands: delta (1–4 Hz), theta (4–8 Hz), alpha (8–13 Hz), beta (13–30 Hz), and gamma (30–100 Hz).

### Task 8: Implement Stimulus-Response Analysis

Analyze the organoid's response to electrical stimulation delivered during the recording protocol:

- **Peri-stimulus time histogram (PSTH)**: For each stimulation frequency (1 Hz, 5 Hz, 10 Hz), compute the PSTH by aligning spikes to stimulus onset across all stimulus presentations. Use 1 ms bins and plot the mean firing rate as a function of time relative to stimulus onset (from −20 ms to +100 ms). Identify the evoked response as the firing rate peak above baseline activity.
- **Evoked potential analysis**: In the LFP band, compute the stimulus-triggered average (STA) by averaging the LFP waveform aligned to each stimulus pulse. Measure the latency (time from stimulus to the first negative peak, typically 5–20 ms for monosynaptic responses), amplitude (peak-to-trough voltage), and variability (standard deviation across trials) of the evoked potential.
- **Response reliability**: Calculate the trial-to-trial reliability of evoked responses by computing the correlation coefficient between individual trial LFP responses and the STA. Report the fraction of trials with significant evoked responses (amplitude > 2× baseline SD).
- **Frequency-dependent adaptation**: Compare evoked response amplitudes across the three stimulation frequencies. Plot the mean evoked potential amplitude as a function of stimulus number within each frequency block to characterize adaptation (expected decrease in amplitude with higher frequencies due to synaptic depression).
- **Spatial analysis**: Map the spatial distribution of evoked response amplitudes across the MEA to identify which regions of the organoid are most responsive to stimulation and estimate the spatial extent of signal propagation.

---

## Deliverables

- **Python Processing Pipeline**: A well-structured, modular Python codebase (organized into functions or classes) implementing all processing stages from raw data to final analysis. Code should be documented with docstrings and inline comments explaining signal processing decisions. The pipeline should be executable on the provided sample data (or generated synthetic data) and produce all outputs without manual intervention.
- **Sample Output Visualizations**: A complete set of figures as specified in Tasks 7 and 8, saved as high-resolution PNG or PDF files suitable for publication. Each figure should have appropriate titles, axis labels, scale bars, and legends.
- **Signal Quality Report** (1 page): A summary report assessing the quality of the recording, including: number of active channels, overall SNR distribution, percentage of channels excluded due to noise, and comparison of spontaneous vs. evoked activity levels.
- **Methods Description** (2 pages, single-spaced): A detailed methods section written in the style of a neuroscience journal paper, describing all signal processing steps, parameter choices (with justifications), and analysis methods. This document should be sufficiently detailed that another researcher could reproduce the analysis. Include a pipeline flowchart showing the data flow from raw recording to final outputs.

---

## Evaluation Rubric

| Criterion | Points | Description |
|---|---|---|
| **MEA Configuration Selection** | 10 | Thorough comparison of at least three systems with justified recommendation. Comparison table is complete and accurate. |
| **Recording Protocol Design** | 10 | Protocol is complete, practical, and well-structured with appropriate timing, stimulation parameters, and controls. |
| **Filter Pipeline Implementation** | 15 | All filtering stages are correctly implemented with appropriate filter parameters. Zero-phase filtering is used. CAR and artifact rejection are functional. Pipeline is demonstrated on sample data. |
| **Spike Detection** | 15 | Correct implementation of MAD-based noise estimation, threshold detection, refractory period enforcement, and waveform extraction. Validation metrics are reported. |
| **Spike Sorting** | 15 | PCA and k-means are correctly applied. Cluster number selection is data-driven. Cluster quality is assessed with ISI histograms and refractory period violations. |
| **Network Analysis** | 10 | Firing rates, burst detection, and network burst statistics are correctly computed with appropriate parameter choices. Summary table is complete. |
| **Visualizations** | 10 | All specified figures are produced at publication quality. Figures are informative, well-labeled, and use appropriate color scales. |
| **Stimulus-Response Analysis** | 10 | PSTH, evoked potentials, response reliability, and frequency-dependent adaptation are correctly analyzed and clearly presented. |
| **Code Quality and Documentation** | 5 | Code is modular, well-documented, and follows Python best practices. Methods description is clear and reproducible. |
| **Total** | **100** | |

---

## Extensions

These optional tasks are for students seeking additional challenge:

- **Real-Time Spike Sorting**: Implement an online (real-time) spike sorting algorithm that processes data in streaming fashion, using a sliding window approach. Compare the accuracy and computational cost of your online algorithm with the offline PCA + k-means approach. Discuss the latency requirements for closed-loop organoid intelligence systems (typically <10 ms from spike to classification) and evaluate whether your implementation meets this constraint.

- **Optogenetic Stimulation Protocol**: Design an alternative stimulation protocol using optogenetics instead of electrical stimulation. Specify the opsin (e.g., Channelrhodopsin-2 for excitation, Halorhodopsin for inhibition), the viral delivery strategy (AAV serotype, promoter, titer), the light source specifications (wavelength, intensity in mW/mm², pulse duration), and the expected advantages over electrical stimulation (cell-type specificity, no stimulation artifact). Adapt the signal processing pipeline to handle optogenetic stimulation, noting that the absence of electrical stimulation artifacts simplifies the processing.

- **Simulated MEA Data Generator**: Build a synthetic MEA data generator that produces realistic multi-channel extracellular recordings from a simulated neural network. The generator should include configurable parameters for: number of neurons, firing rates, waveform templates, electrode positions, noise levels, and spatial decay of signal amplitude with distance from the neuron. Use this generator to validate your spike detection and sorting pipeline under controlled conditions with known ground truth, and report detection accuracy, false positive rate, and sorting accuracy as a function of SNR.

- **Information-Theoretic Analysis**: Apply information-theoretic measures to the stimulus-response data. Compute the mutual information between stimulus and response using the direct method (binning spike counts in response windows) and the PSTH-based method. Estimate the information transfer rate in bits per second for each stimulation frequency. Compare the information capacity of the organoid with theoretical limits and with published values from in vivo cortical recordings.

---

## References

1. Obien, M. E. J., Deligkaris, K., Bullmann, T., Bakkum, D. J., & Frey, U. (2015). Revealing neuronal function through microelectrode array recordings. *Frontiers in Neuroscience*, 8, 423.

2. Quiroga, R. Q., Nadasdy, Z., & Ben-Shaul, Y. (2004). Unsupervised spike detection and sorting with wavelets and superparamagnetic clustering. *Neural Computation*, 16(8), 1661–1687.

3. Müller, J., Ballini, M., Livi, P., et al. (2015). High-resolution CMOS MEA platform to study neurons at subcellular, cellular, and network levels. *Lab on a Chip*, 15(13), 2767–2780.

4. Cotterill, E., Charlesworth, P., Thomas, C. W., Bhatt, D. K., & Bhatt, M. (2016). A comparison of computational methods for detecting bursts in neuronal spike trains and their application to human stem cell-derived neuronal networks. *Journal of Neurophysiology*, 116(2), 306–321.

5. Trujillo, C. A., Gao, R., Negraes, P. D., et al. (2019). Complex oscillatory waves emerging from cortical organoids model early human brain network development. *Cell Stem Cell*, 25(4), 558–569.

6. Bakkum, D. J., Frey, U., Radivojevic, M., et al. (2013). Tracking axonal action potential propagation on a high-density microelectrode array across hundreds of sites. *Nature Communications*, 4, 2181.
