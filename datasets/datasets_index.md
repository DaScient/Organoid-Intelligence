# Organoid Intelligence — Dataset Index

## Introduction

This document provides a comprehensive index of all datasets associated with the *Organoid Intelligence: Biological Computing In Living Systems* textbook. Each entry includes a unique identifier, descriptive metadata, format and size information, licensing details, citation references, and mappings to relevant textbook chapters.

The datasets span five primary categories: multi-electrode array (MEA) electrophysiology recordings, organoid imaging data, computational simulation outputs, genomic and transcriptomic profiling data, and standardized benchmark datasets for evaluating organoid computing performance. Together, they provide the empirical and computational foundation for the exercises, analyses, and capstone projects described throughout the textbook.

Researchers and students are encouraged to use these datasets as starting points for exploration. Each dataset has been selected or designed to illustrate specific concepts—from the biophysics of action potentials to the information-processing capabilities of self-organized neural networks—and can be combined across categories for integrative analyses. For detailed instructions on loading and working with these data formats, refer to the [Datasets README](README.md).

---

## Dataset Catalog

### MEA Electrophysiology Recordings

#### DS-001: Cortical Organoid MEA Baseline Recordings

| Field | Details |
|---|---|
| **ID** | DS-001 |
| **Name** | Cortical Organoid MEA Baseline Recordings |
| **Category** | MEA Electrophysiology |
| **Description** | Spontaneous extracellular activity recorded from human cortical organoids cultured on 64-channel planar MEAs over a 12-week maturation period. The dataset includes raw voltage traces sampled at 20 kHz, spike-sorted unit data, and local field potential (LFP) recordings filtered below 300 Hz. Weekly recording sessions capture the progressive emergence of organized network bursting as the organoid matures. |
| **Format** | NWB, HDF5 |
| **Approximate Size** | 2.8 GB |
| **License** | CC-BY-4.0 |
| **Citation/Source** | Trujillo, C.A. et al. (2019). Complex oscillatory waves emerging from cortical organoids model early human brain network development. *Cell Stem Cell*, 25(4), 558–569. |
| **Related Chapters** | Chapters 3 (Electrophysiology Fundamentals), 5 (Organoid Maturation), 8 (Network Analysis) |
| **Access URL/DOI** | `10.xxxx/oi-dataset-001` |

---

#### DS-002: DishBrain Pong Gameplay Electrophysiology

| Field | Details |
|---|---|
| **ID** | DS-002 |
| **Name** | DishBrain Pong Gameplay Electrophysiology |
| **Category** | MEA Electrophysiology |
| **Description** | Electrophysiology data from the landmark DishBrain experiments in which cortical neurons cultured on high-density MEAs learned to play the video game Pong. The dataset includes stimulus-evoked responses, closed-loop feedback signals, and neural activity traces recorded during gameplay sessions. Performance metrics such as rally length and response latency are included alongside the raw electrophysiology. |
| **Format** | HDF5, CSV |
| **Approximate Size** | 4.1 GB |
| **License** | CC-BY-4.0 |
| **Citation/Source** | Kagan, B.J. et al. (2022). In vitro neurons learn and exhibit sentience when embodied in a simulated game-world. *Neuron*, 110(23), 3952–3969. |
| **Related Chapters** | Chapters 1 (Introduction to OI), 6 (Embodied Biological Computing), 10 (Closed-Loop Systems) |
| **Access URL/DOI** | `10.xxxx/oi-dataset-002` |

---

#### DS-013: MEA High-Density Recording (4096-channel)

| Field | Details |
|---|---|
| **ID** | DS-013 |
| **Name** | MEA High-Density Recording (4096-channel) |
| **Category** | MEA Electrophysiology |
| **Description** | Ultra-high-density MEA recordings from brain organoids using a 4,096-channel CMOS array with 17.8 µm inter-electrode pitch. This dataset provides exceptional spatial resolution for mapping activity propagation across the organoid–electrode interface. Includes raw voltage data, spike-sorted output with over 200 identified units, and detailed electrode position metadata for spatial analysis. |
| **Format** | NWB, HDF5 |
| **Approximate Size** | 5.2 GB |
| **License** | CC-BY-4.0 |
| **Citation/Source** | Sharf, T. et al. (2022). Functional neuronal circuitry and oscillatory dynamics in human brain organoids. *Nature Communications*, 13, 4403. |
| **Related Chapters** | Chapters 3 (Electrophysiology Fundamentals), 8 (Network Analysis), 12 (High-Density Recording Techniques) |
| **Access URL/DOI** | `10.xxxx/oi-dataset-013` |

---

### Organoid Imaging Data

#### DS-004: Organoid Calcium Imaging Time Series (GCaMP6)

| Field | Details |
|---|---|
| **ID** | DS-004 |
| **Name** | Organoid Calcium Imaging Time Series (GCaMP6) |
| **Category** | Imaging |
| **Description** | Time-lapse calcium imaging recordings from cortical organoids expressing the genetically encoded calcium indicator GCaMP6s. Captured at 10 frames per second over 30-minute sessions, these recordings reveal synchronized calcium transients indicative of functional neural network activity. The dataset includes raw fluorescence video, extracted ΔF/F₀ traces for individual regions of interest (ROIs), and event detection annotations. |
| **Format** | TIFF stacks, AVI, CSV |
| **Approximate Size** | 8.5 GB |
| **License** | CC-BY-4.0 |
| **Citation/Source** | Quadrato, G. et al. (2017). Cell diversity and network dynamics in photosensitive human brain organoids. *Nature*, 545(7652), 48–53. |
| **Related Chapters** | Chapters 4 (Calcium Imaging Methods), 5 (Organoid Maturation), 9 (Functional Connectivity Analysis) |
| **Access URL/DOI** | `10.xxxx/oi-dataset-004` |

---

#### DS-005: Confocal Z-Stacks of Cortical Organoid Layers

| Field | Details |
|---|---|
| **ID** | DS-005 |
| **Name** | Confocal Z-Stacks of Cortical Organoid Layers |
| **Category** | Imaging |
| **Description** | High-resolution confocal microscopy z-stacks of sectioned cortical organoids at weeks 8, 12, and 20 of maturation. Each stack includes multi-channel immunofluorescence staining for neuronal markers (MAP2, TUJ1), astrocytic markers (GFAP, S100β), and progenitor markers (SOX2, PAX6). The images reveal the progressive development of cortical layer-like organization, ventricular zone–like regions, and radial glial scaffolding. |
| **Format** | TIFF stacks, OME-ZARR |
| **Approximate Size** | 12.3 GB |
| **License** | CC-BY-4.0 |
| **Citation/Source** | Lancaster, M.A. et al. (2013). Cerebral organoids model human brain development and microcephaly. *Nature*, 501(7467), 373–379. |
| **Related Chapters** | Chapters 2 (Organoid Biology), 5 (Organoid Maturation), 7 (Structural Analysis) |
| **Access URL/DOI** | `10.xxxx/oi-dataset-005` |

---

#### DS-014: Organoid Vascularization Imaging Series

| Field | Details |
|---|---|
| **ID** | DS-014 |
| **Name** | Organoid Vascularization Imaging Series |
| **Category** | Imaging |
| **Description** | Light-sheet microscopy images of vascularized brain organoids generated through co-culture with endothelial cells. This longitudinal imaging series captures the progressive formation of vascular-like tubular networks within the organoid over a 6-week period. Includes cleared-tissue whole-mount images, segmentation masks of vascular structures, and quantitative measurements of vessel density and branching morphology. |
| **Format** | TIFF stacks, OME-ZARR |
| **Approximate Size** | 15.7 GB |
| **License** | CC-BY-4.0 |
| **Citation/Source** | Cakir, B. et al. (2019). Engineering of human brain organoids with a functional vascular-like system. *Nature Methods*, 16(11), 1169–1175. |
| **Related Chapters** | Chapters 2 (Organoid Biology), 13 (Advanced Organoid Engineering), 14 (Long-Term Organoid Maintenance) |
| **Access URL/DOI** | `10.xxxx/oi-dataset-014` |

---

### Simulation Outputs

#### DS-003: Brainoware Speech Recognition Spike Data

| Field | Details |
|---|---|
| **ID** | DS-003 |
| **Name** | Brainoware Speech Recognition Spike Data |
| **Category** | Simulation / MEA |
| **Description** | Neural response data from the Brainoware platform in which brain organoids were used as reservoir computing substrates for speech recognition tasks. The dataset includes ultrasonic stimulus waveforms delivered to the organoid, evoked multi-channel spike responses, extracted feature vectors, and classification outputs for a vowel recognition task. Training and testing partitions are pre-defined for reproducible evaluation. |
| **Format** | HDF5, CSV, NumPy (.npy) |
| **Approximate Size** | 780 MB |
| **License** | CC-BY-4.0 |
| **Citation/Source** | Cai, H. et al. (2023). Brain organoid reservoir computing for artificial intelligence. *Nature Electronics*, 6, 1032–1039. |
| **Related Chapters** | Chapters 6 (Embodied Biological Computing), 9 (Reservoir Computing), 11 (OI Applications) |
| **Access URL/DOI** | `10.xxxx/oi-dataset-003` |

---

#### DS-006: Hodgkin-Huxley Single Neuron Simulation Outputs

| Field | Details |
|---|---|
| **ID** | DS-006 |
| **Name** | Hodgkin-Huxley Single Neuron Simulation Outputs |
| **Category** | Simulation |
| **Description** | Comprehensive simulation outputs from the classic Hodgkin-Huxley neuron model, including membrane voltage trajectories, sodium and potassium conductance dynamics, gating variable time courses (m, h, n), and input–output frequency-current (f-I) curves. Parameter sweep results explore the effects of varying temperature, channel density, and injected current amplitude on neuronal excitability and action potential waveform morphology. |
| **Format** | CSV, NumPy (.npy), JSON |
| **Approximate Size** | 45 MB |
| **License** | CC-BY-4.0 |
| **Citation/Source** | Simulated data generated for textbook exercises. Based on: Hodgkin, A.L. & Huxley, A.F. (1952). A quantitative description of membrane current and its application to conduction and excitation in nerve. *J. Physiol.*, 117(4), 500–544. |
| **Related Chapters** | Chapters 3 (Electrophysiology Fundamentals), 4 (Computational Neuroscience Foundations) |
| **Access URL/DOI** | `10.xxxx/oi-dataset-006` |

---

#### DS-007: Reservoir Computing Benchmark — NARMA-10

| Field | Details |
|---|---|
| **ID** | DS-007 |
| **Name** | Reservoir Computing Benchmark — NARMA-10 |
| **Category** | Simulation / Benchmark |
| **Description** | Input–output datasets for the NARMA-10 (Nonlinear Auto-Regressive Moving Average, order 10) benchmark task, widely used to evaluate the computational capacity of reservoir computing systems. Includes input time series, target output sequences, reservoir state matrices from both simulated and organoid-based reservoirs, and trained readout weights. Performance metrics (NRMSE, correlation coefficients) are provided for comparison. |
| **Format** | CSV, NumPy (.npy), JSON |
| **Approximate Size** | 120 MB |
| **License** | CC-BY-4.0 |
| **Citation/Source** | Simulated data generated for textbook exercises. NARMA-10 task definition: Atiya, A.F. & Parlos, A.G. (2000). New results on recurrent network training. *Neural Computation*, 12(2), 307–318. |
| **Related Chapters** | Chapters 9 (Reservoir Computing), 10 (Closed-Loop Systems), 11 (OI Applications) |
| **Access URL/DOI** | `10.xxxx/oi-dataset-007` |

---

#### DS-008: Reservoir Computing Benchmark — Spoken Digit Recognition

| Field | Details |
|---|---|
| **ID** | DS-008 |
| **Name** | Reservoir Computing Benchmark — Spoken Digit Recognition |
| **Category** | Simulation / Benchmark |
| **Description** | A speech recognition benchmark dataset adapted for reservoir computing evaluation in the context of organoid intelligence. Contains mel-frequency cepstral coefficient (MFCC) features extracted from spoken digit recordings (digits 0–9), reservoir state trajectories from organoid-derived and simulated spiking networks, and classification results from linear readout layers. Includes cross-validated accuracy scores and confusion matrices. |
| **Format** | CSV, NumPy (.npy), JSON |
| **Approximate Size** | 95 MB |
| **License** | CC-BY-4.0 |
| **Citation/Source** | Audio features derived from the Free Spoken Digit Dataset (FSDD). Jackson, Z. et al. (2018). Free Spoken Digit Dataset. GitHub repository. |
| **Related Chapters** | Chapters 9 (Reservoir Computing), 11 (OI Applications) |
| **Access URL/DOI** | `10.xxxx/oi-dataset-008` |

---

#### DS-009: Active Inference Simulation Trajectories

| Field | Details |
|---|---|
| **ID** | DS-009 |
| **Name** | Active Inference Simulation Trajectories |
| **Category** | Simulation |
| **Description** | Simulation outputs from active inference models applied to organoid decision-making scenarios. The dataset includes belief state evolution trajectories, variational free energy landscapes, expected free energy calculations for action selection, prediction error signals, and policy distributions over time. Scenarios include simple foraging tasks, multi-armed bandit problems, and sensorimotor contingency learning paradigms. These data support exercises exploring how the free energy principle may underlie organoid adaptive behavior. |
| **Format** | CSV, JSON, NumPy (.npy) |
| **Approximate Size** | 210 MB |
| **License** | CC-BY-4.0 |
| **Citation/Source** | Simulated data generated for textbook exercises. Framework based on: Friston, K.J. et al. (2017). Active inference, curiosity and insight. *Neural Computation*, 29(10), 2633–2683. |
| **Related Chapters** | Chapters 10 (Closed-Loop Systems), 15 (Theoretical Frameworks for OI) |
| **Access URL/DOI** | `10.xxxx/oi-dataset-009` |

---

#### DS-010: Spiking Neural Network (SNN) Population Dynamics

| Field | Details |
|---|---|
| **ID** | DS-010 |
| **Name** | Spiking Neural Network (SNN) Population Dynamics |
| **Category** | Simulation |
| **Description** | Large-scale spiking neural network simulation outputs modeling populations of 10,000 leaky integrate-and-fire (LIF) neurons with excitatory and inhibitory sub-populations connected via spike-timing-dependent plasticity (STDP) rules. The dataset includes spike rasters, population firing rate histograms, synaptic weight matrices at multiple time points during learning, membrane potential traces for selected neurons, and network connectivity graphs. These simulations approximate the scale and dynamics observed in mature brain organoids. |
| **Format** | NumPy (.npy), CSV, JSON |
| **Approximate Size** | 480 MB |
| **License** | CC-BY-4.0 |
| **Citation/Source** | Simulated data generated for textbook exercises using the NEST simulator framework. Gewaltig, M.-O. & Diesmann, M. (2007). NEST (NEural Simulation Tool). *Scholarpedia*, 2(4), 1430. |
| **Related Chapters** | Chapters 4 (Computational Neuroscience Foundations), 8 (Network Analysis), 9 (Reservoir Computing) |
| **Access URL/DOI** | `10.xxxx/oi-dataset-010` |

---

### Genomic and Transcriptomic Data

#### DS-011: iPSC-Derived Organoid scRNA-seq (Week 4–20)

| Field | Details |
|---|---|
| **ID** | DS-011 |
| **Name** | iPSC-Derived Organoid scRNA-seq (Week 4–20) |
| **Category** | Genomic |
| **Description** | Single-cell RNA sequencing data from iPSC-derived cortical organoids sampled at weeks 4, 8, 12, 16, and 20 of in vitro differentiation. The dataset captures over 50,000 individual cell transcriptomes, enabling identification of neuronal subtypes (glutamatergic, GABAergic), glial precursors, radial glia, and intermediate progenitor populations. Includes raw count matrices, normalized expression data, cell type annotations, UMAP embeddings, and pseudotime trajectory analysis results. |
| **Format** | H5AD, CSV |
| **Approximate Size** | 3.2 GB |
| **License** | CC-BY-4.0 |
| **Citation/Source** | Velasco, S. et al. (2019). Individual brain organoids reproducibly form cell diversity of the human cerebral cortex. *Nature*, 570(7762), 523–527. |
| **Related Chapters** | Chapters 2 (Organoid Biology), 5 (Organoid Maturation), 13 (Advanced Organoid Engineering) |
| **Access URL/DOI** | `10.xxxx/oi-dataset-011` |

---

#### DS-012: Organoid Maturation Transcriptome Atlas

| Field | Details |
|---|---|
| **ID** | DS-012 |
| **Name** | Organoid Maturation Transcriptome Atlas |
| **Category** | Genomic |
| **Description** | A bulk RNA-seq transcriptome atlas tracking gene expression changes across 10 time points spanning organoid maturation from week 2 to week 24. The dataset includes normalized expression values (TPM), differential expression analysis results comparing consecutive time points, gene ontology enrichment analysis outputs, and curated gene sets for neuronal maturation, synaptogenesis, and gliogenesis pathways. This atlas provides a molecular timeline of organoid development that complements electrophysiological and imaging observations. |
| **Format** | CSV, H5AD |
| **Approximate Size** | 850 MB |
| **License** | CC-BY-4.0 |
| **Citation/Source** | Gordon, A. et al. (2021). Long-term maturation of human cortical organoids matches key early postnatal transitions. *Nature Neuroscience*, 24, 331–342. |
| **Related Chapters** | Chapters 2 (Organoid Biology), 5 (Organoid Maturation), 7 (Structural Analysis) |
| **Access URL/DOI** | `10.xxxx/oi-dataset-012` |

---

### Benchmark and Reference Datasets

#### DS-015: OI Energy Efficiency Benchmark Comparison

| Field | Details |
|---|---|
| **ID** | DS-015 |
| **Name** | OI Energy Efficiency Benchmark Comparison |
| **Category** | Benchmark |
| **Description** | A comprehensive benchmark dataset comparing the energy efficiency and computational performance of organoid-based computing systems against conventional silicon processors (CPUs, GPUs), neuromorphic chips (Intel Loihi, IBM TrueNorth, BrainScaleS), and theoretical limits. Metrics include operations per watt, task-specific accuracy per energy unit, embodied carbon estimates, and scaling projections. This dataset supports exercises and discussions on the sustainability advantages and practical limitations of biological computing substrates. |
| **Format** | CSV, JSON |
| **Approximate Size** | 15 MB |
| **License** | CC-BY-4.0 |
| **Citation/Source** | Compiled from multiple sources for textbook exercises. Primary reference: Smirnova, L. et al. (2023). Organoid intelligence (OI): the new frontier in biocomputing and intelligence-in-a-dish. *Frontiers in Science*, 1, 1017235. |
| **Related Chapters** | Chapters 1 (Introduction to OI), 11 (OI Applications), 16 (Future Directions and Ethical Considerations) |
| **Access URL/DOI** | `10.xxxx/oi-dataset-015` |

---

## Dataset Summary Table

| ID | Name | Category | Format | Size | License |
|---|---|---|---|---|---|
| DS-001 | Cortical Organoid MEA Baseline Recordings | MEA | NWB, HDF5 | 2.8 GB | CC-BY-4.0 |
| DS-002 | DishBrain Pong Gameplay Electrophysiology | MEA | HDF5, CSV | 4.1 GB | CC-BY-4.0 |
| DS-003 | Brainoware Speech Recognition Spike Data | Simulation/MEA | HDF5, CSV, NPY | 780 MB | CC-BY-4.0 |
| DS-004 | Organoid Calcium Imaging Time Series (GCaMP6) | Imaging | TIFF, AVI, CSV | 8.5 GB | CC-BY-4.0 |
| DS-005 | Confocal Z-Stacks of Cortical Organoid Layers | Imaging | TIFF, OME-ZARR | 12.3 GB | CC-BY-4.0 |
| DS-006 | Hodgkin-Huxley Single Neuron Simulation Outputs | Simulation | CSV, NPY, JSON | 45 MB | CC-BY-4.0 |
| DS-007 | Reservoir Computing Benchmark — NARMA-10 | Simulation/Benchmark | CSV, NPY, JSON | 120 MB | CC-BY-4.0 |
| DS-008 | Reservoir Computing Benchmark — Spoken Digit Recognition | Simulation/Benchmark | CSV, NPY, JSON | 95 MB | CC-BY-4.0 |
| DS-009 | Active Inference Simulation Trajectories | Simulation | CSV, JSON, NPY | 210 MB | CC-BY-4.0 |
| DS-010 | Spiking Neural Network (SNN) Population Dynamics | Simulation | NPY, CSV, JSON | 480 MB | CC-BY-4.0 |
| DS-011 | iPSC-Derived Organoid scRNA-seq (Week 4–20) | Genomic | H5AD, CSV | 3.2 GB | CC-BY-4.0 |
| DS-012 | Organoid Maturation Transcriptome Atlas | Genomic | CSV, H5AD | 850 MB | CC-BY-4.0 |
| DS-013 | MEA High-Density Recording (4096-channel) | MEA | NWB, HDF5 | 5.2 GB | CC-BY-4.0 |
| DS-014 | Organoid Vascularization Imaging Series | Imaging | TIFF, OME-ZARR | 15.7 GB | CC-BY-4.0 |
| DS-015 | OI Energy Efficiency Benchmark Comparison | Benchmark | CSV, JSON | 15 MB | CC-BY-4.0 |

---

## Dataset Format Specifications

### NWB (Neurodata Without Borders)

NWB is an open standard for neurophysiology data built on HDF5. It provides a hierarchical, self-describing file format designed to store diverse electrophysiology data types—including raw voltage traces, spike times, stimulus information, and experimental metadata—within a single file. NWB files can be read and written using the `pynwb` Python library and are the recommended format for sharing neurophysiology data through the DANDI Archive.

### HDF5 (Hierarchical Data Format 5)

HDF5 is a versatile binary data format that supports large, complex, heterogeneous datasets organized in a hierarchical group/dataset structure. It supports chunking, compression, and random access, making it well-suited for large electrophysiology recordings and simulation outputs. Python users can access HDF5 files through the `h5py` library.

### OME-ZARR

OME-ZARR is a cloud-optimized, chunked array format for bioimaging data based on the Zarr storage specification. It supports multi-resolution pyramidal storage, enabling efficient remote access and visualization of large volumetric microscopy datasets without downloading entire files. OME-ZARR files can be read with the `zarr` Python library and visualized with tools such as napari.

### TIFF (Tagged Image File Format)

TIFF is a widely supported raster image format used extensively in microscopy. Multi-page TIFF files (TIFF stacks) store three-dimensional image data as sequential two-dimensional slices. Python libraries such as `scikit-image`, `tifffile`, and `Pillow` provide robust support for reading and writing TIFF stacks, including support for multi-channel fluorescence data.

### H5AD (AnnData HDF5)

H5AD is the native on-disk format for the AnnData object used by the `scanpy` single-cell analysis framework. It stores gene expression count matrices alongside cell-level and gene-level metadata, dimensionality reduction embeddings (PCA, UMAP, t-SNE), clustering results, and analysis parameters in a structured HDF5 container. H5AD files are the de facto standard for sharing single-cell RNA-seq analysis results.

### CSV (Comma-Separated Values)

CSV is a plain-text tabular format universally supported across programming languages and analysis platforms. While not optimal for very large datasets due to lack of compression and type information, CSV files provide maximum interoperability and human readability. They are used in this collection for spike timestamp tables, metadata summaries, benchmark results, and small-to-medium simulation outputs.

### NumPy (.npy / .npz)

NumPy's binary serialization format stores dense numerical arrays with full type and shape preservation. `.npy` files store single arrays; `.npz` files store collections of named arrays in a compressed archive. These formats offer fast I/O and are ideal for simulation outputs, weight matrices, and intermediate computational results within Python-based analysis workflows.

### JSON (JavaScript Object Notation)

JSON is a lightweight, human-readable data interchange format used in this collection for storing simulation parameters, experimental metadata, benchmark configuration files, and structured analysis results. JSON files can be loaded in Python using the built-in `json` module or the `pandas` library.

### FASTQ

FASTQ is a text-based format for storing raw sequencing reads along with their per-base quality scores. FASTQ files from RNA-seq experiments can be processed using alignment tools such as STAR or HISAT2 and quantification tools such as featureCounts or Salmon. Due to their large size, FASTQ files in this collection are hosted on external repositories with DOI links provided.

### BAM (Binary Alignment Map)

BAM is the binary, compressed version of the SAM (Sequence Alignment Map) format, storing aligned sequencing reads against a reference genome. BAM files include read sequences, quality scores, alignment coordinates, and mapping quality metrics. They can be accessed using `pysam` in Python or `samtools` on the command line.

---

## Recommended Tools

The following Python libraries and tools are recommended for working with the datasets in this collection:

### Electrophysiology

| Tool | Description | Install |
|---|---|---|
| **pynwb** | Read and write NWB neurophysiology files | `pip install pynwb` |
| **neo** | Unified interface for reading electrophysiology data across formats | `pip install neo` |
| **spikeinterface** | Comprehensive spike sorting and analysis framework | `pip install spikeinterface` |
| **elephant** | Electrophysiology analysis toolkit (spike train statistics, spectral analysis) | `pip install elephant` |
| **MNE-Python** | Analysis of LFP and time-series neural data | `pip install mne` |

### Imaging

| Tool | Description | Install |
|---|---|---|
| **scikit-image** | Image processing and analysis in Python | `pip install scikit-image` |
| **tifffile** | Fast TIFF file reading and writing | `pip install tifffile` |
| **napari** | Multi-dimensional image viewer with OME-ZARR support | `pip install napari` |
| **zarr** | Chunked, compressed array storage (for OME-ZARR) | `pip install zarr` |
| **CaImAn** | Calcium imaging analysis (deconvolution, cell detection) | `pip install caiman` |

### Simulation and Computation

| Tool | Description | Install |
|---|---|---|
| **NumPy** | Fundamental array computing library | `pip install numpy` |
| **SciPy** | Scientific computing (signal processing, optimization) | `pip install scipy` |
| **pandas** | Tabular data analysis and manipulation | `pip install pandas` |
| **matplotlib** | Data visualization and plotting | `pip install matplotlib` |
| **NEST** | Spiking neural network simulator | See [nest-simulator.org](https://www.nest-simulator.org/) |
| **Brian2** | Equation-based spiking neural network simulator | `pip install brian2` |

### Genomics and Transcriptomics

| Tool | Description | Install |
|---|---|---|
| **scanpy** | Single-cell RNA-seq analysis framework | `pip install scanpy` |
| **anndata** | Annotated data matrices for single-cell data | `pip install anndata` |
| **pysam** | BAM/SAM file access | `pip install pysam` |
| **DESeq2** | Differential expression analysis (R package, via rpy2) | R: `BiocManager::install("DESeq2")` |

### General

| Tool | Description | Install |
|---|---|---|
| **h5py** | HDF5 file access in Python | `pip install h5py` |
| **Jupyter** | Interactive notebook environment for data exploration | `pip install jupyterlab` |
| **seaborn** | Statistical data visualization | `pip install seaborn` |

---

## Citation Guidelines

When using datasets from this collection in academic publications, technical reports, presentations, or derivative educational materials, please follow these citation guidelines:

### Citing Individual Datasets

Each dataset entry above includes a **Citation/Source** field. When using a specific dataset, cite the original source publication listed in that field. Additionally, reference this dataset collection:

> Organoid Intelligence Datasets Collection. In: *Organoid Intelligence: Biological Computing In Living Systems*. Dataset ID: [DS-XXX]. Available at: [DOI or URL].

### Example Citation

> Kagan, B.J. et al. (2022). In vitro neurons learn and exhibit sentience when embodied in a simulated game-world. *Neuron*, 110(23), 3952–3969. Dataset accessed via Organoid Intelligence Datasets Collection, DS-002. DOI: 10.xxxx/oi-dataset-002.

### Citing the Full Collection

When referencing the dataset collection as a whole:

> *Organoid Intelligence: Biological Computing In Living Systems* — Datasets Repository. Available at: https://github.com/your-org/Organoid-Intelligence/datasets

### Licensing Obligations

All datasets marked with CC-BY-4.0 require attribution when redistributing or adapting the data. Please include the dataset ID, name, and a link to this index in your attribution notice. For datasets with alternative licenses, consult the specific terms noted in the dataset entry above.

### Data Availability Statements

For publications using these datasets, we recommend including a data availability statement such as:

> "The datasets analyzed in this study are available through the Organoid Intelligence Datasets Repository (https://github.com/your-org/Organoid-Intelligence/datasets) under Creative Commons Attribution 4.0 International License. Individual dataset DOIs are listed in the repository's dataset index."

---

*Last updated: 2025. For corrections, additions, or questions about specific datasets, please open a GitHub issue in the Organoid Intelligence repository.*
