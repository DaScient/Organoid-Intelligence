# Organoid Intelligence — Datasets Repository

## Overview

This directory contains curated datasets for organoid intelligence (OI) research, teaching, and experimentation. These datasets accompany the *Organoid Intelligence: Biological Computing In Living Systems* textbook and are designed to support hands-on exercises, capstone projects, and independent research endeavors across the emerging field of biological computing.

Organoid intelligence sits at the intersection of neuroscience, bioengineering, and computer science, leveraging three-dimensional brain organoids—self-organizing neural tissues derived from human induced pluripotent stem cells (iPSCs)—as substrates for computation and learning. The datasets assembled here reflect the multidisciplinary nature of this field. They span electrophysiology recordings captured from multi-electrode arrays (MEAs), high-resolution microscopy images of organoid cultures, computational simulation outputs from biophysical and reservoir computing models, genomic profiling data from single-cell sequencing experiments, and standardized benchmark datasets for evaluating organoid computing performance.

Each dataset has been selected or generated to align with specific textbook chapters, exercises, and capstone projects. Students and researchers can use these resources to reproduce key findings discussed in the textbook, explore alternative analyses, and develop novel approaches to biological computing. Whether you are a neuroscience student learning to analyze spike trains for the first time or an experienced computational researcher benchmarking a new reservoir computing architecture, these datasets provide a common foundation for study and experimentation.

All datasets are documented with metadata describing their provenance, format, size, licensing terms, and related textbook chapters. A comprehensive index of all available datasets can be found in [`datasets_index.md`](datasets_index.md).

---

## Dataset Categories

### 1. MEA Electrophysiology Recordings

Multi-electrode array (MEA) recordings form the backbone of experimental organoid intelligence research. These datasets capture the spontaneous and evoked electrical activity of brain organoid cultures grown on planar or three-dimensional electrode arrays.

Included data types:

- **Raw voltage traces** — Unprocessed extracellular voltage signals recorded at sampling rates of 10–30 kHz across 64 to 4,096 channels.
- **Spike-sorted data** — Processed recordings with individual neuronal unit activity extracted via spike detection and clustering algorithms. Includes spike timestamps, waveform shapes, and unit classification metadata.
- **Local field potential (LFP) recordings** — Low-pass filtered signals (typically < 300 Hz) capturing population-level neural oscillations, including theta, alpha, and gamma frequency bands.
- **Burst detection labels** — Annotated intervals identifying network-wide burst events, which are hallmarks of organoid maturation and functional connectivity.
- **Firing rate maps** — Spatiotemporal maps of neuronal firing rates across the electrode array, useful for visualizing activity propagation patterns.

**Formats:** HDF5, NWB (Neurodata Without Borders), CSV  
**Typical sizes:** 500 MB – 5 GB per recording session  
**Key features:** Spike timestamps, waveform shapes, firing rate maps, burst detection labels, inter-spike interval distributions, cross-correlation matrices.

### 2. Organoid Imaging Data

High-resolution microscopy imaging provides critical insight into the structural organization, cellular composition, and functional dynamics of brain organoids. These datasets capture organoids at various developmental stages, from early neuroepithelial rosette formation through cortical layer differentiation.

Included data types:

- **Confocal microscopy images** — Optical sections and z-stacks of immunofluorescence-stained organoids, with markers for neuronal identity (MAP2, TUJ1), astrocytic differentiation (GFAP), and progenitor populations (SOX2, PAX6).
- **Light-sheet microscopy volumes** — Whole-organoid volumetric reconstructions enabling three-dimensional analysis of tissue architecture and cellular spatial distributions.
- **Calcium imaging sequences** — Time-lapse recordings of intracellular calcium transients using genetically encoded indicators (GCaMP6s/f), capturing functional neural activity with single-cell resolution.
- **Volumetric reconstructions** — Processed three-dimensional renderings of organoid morphology derived from serial sectioning or cleared-tissue imaging.

**Formats:** TIFF stacks, OME-ZARR, AVI (calcium imaging videos)  
**Typical sizes:** 1 – 20 GB per dataset  
**Key features:** Multi-channel fluorescence, z-depth information, temporal resolution for calcium dynamics, segmentation masks.

### 3. Simulation Outputs

Computational modeling is essential for understanding the biophysical principles underlying organoid computation and for designing experiments that probe learning and information processing capabilities. These datasets contain outputs from a range of simulation frameworks.

Included data types:

- **Hodgkin-Huxley neuron simulations** — Membrane voltage traces, gating variable dynamics, and input–output response curves for single-compartment and multi-compartment neuron models.
- **Network-level reservoir computing benchmarks** — Performance metrics and internal state trajectories from recurrent neural networks driven by organoid-inspired connectivity patterns, evaluated on standard tasks such as NARMA-10 time series prediction and spoken digit classification.
- **Spiking neural network (SNN) simulations** — Population-level spike rasters, synaptic weight evolution, and plasticity rule dynamics from networks implementing spike-timing-dependent plasticity (STDP) and other biologically plausible learning rules.
- **Active inference model trajectories** — Belief state trajectories, prediction error signals, and free energy landscapes from active inference models applied to organoid decision-making and adaptive behavior scenarios.

**Formats:** CSV, NumPy (.npy), JSON  
**Typical sizes:** 10 MB – 500 MB  
**Key features:** Time-stamped state variables, parameter sweep results, convergence metrics, reproducibility metadata.

### 4. Genomic and Transcriptomic Data

Understanding the molecular identity of the cells within brain organoids is fundamental to interpreting their computational capabilities. These datasets provide gene expression profiles that characterize cell type composition, maturation state, and differentiation trajectories across organoid development.

Included data types:

- **Bulk RNA-seq** — Whole-transcriptome expression profiles from organoid samples collected at multiple time points during maturation (weeks 4 through 20+).
- **Single-cell RNA-seq (scRNA-seq)** — High-dimensional gene expression measurements at single-cell resolution, enabling identification of neuronal subtypes, glial populations, and progenitor cells within organoid cultures.
- **Count matrices** — Gene-by-cell expression count tables suitable for downstream analysis with standard bioinformatics pipelines.

**Formats:** FASTQ (raw reads), BAM (aligned reads), count matrices (CSV, H5AD)  
**Typical sizes:** 5 – 50 GB per dataset  
**Key features:** Cell type annotations, UMAP/t-SNE embeddings, pseudotime trajectory assignments, quality control metrics.

### 5. Benchmark and Reference Datasets

Standardized benchmarks are critical for comparing organoid computing performance across laboratories, protocols, and computational architectures. These datasets provide common evaluation frameworks and reference results.

Included data types:

- **Pattern recognition tasks** — Input stimulus sets and expected output classifications used to evaluate organoid learning capabilities in tasks such as image recognition and spatial navigation.
- **Time series prediction benchmarks** — Standard nonlinear time series (e.g., NARMA-10, Mackey-Glass) used to evaluate reservoir computing performance.
- **Classification accuracy comparisons** — Reference results from conventional silicon-based machine learning models (ANNs, SVMs) alongside organoid-based and neuromorphic computing results, enabling direct performance comparison.
- **Energy efficiency benchmarks** — Measurements of power consumption and computational throughput for organoid systems compared to conventional and neuromorphic hardware.

**Formats:** CSV, JSON, NumPy (.npy)  
**Typical sizes:** 1 MB – 100 MB  
**Key features:** Standardized train/test splits, performance metrics, energy consumption measurements, cross-platform comparison tables.

---

## Data Access and Licensing

### Licensing

- **Derived and synthetic datasets** generated for this textbook are released under the [Creative Commons Attribution 4.0 International License (CC-BY-4.0)](https://creativecommons.org/licenses/by/4.0/). You are free to share and adapt these datasets for any purpose, provided appropriate credit is given.
- **Original experimental datasets** sourced from published research retain their original licenses, which are documented in each dataset's metadata. Users must comply with the licensing terms specified by the original data providers.
- **Benchmark datasets** may carry additional terms from their originating organizations. Please consult the specific license information provided in [`datasets_index.md`](datasets_index.md).

### Citation Requirements

When using datasets from this repository in publications, presentations, or derivative works, please cite both the original data source (if applicable) and this textbook:

> *Organoid Intelligence: Biological Computing In Living Systems*. Datasets Repository. Available at: https://github.com/your-org/Organoid-Intelligence

Individual dataset citations are provided in the dataset index.

### Accessing External Datasets

Some datasets in this collection are too large to host directly in this repository. In such cases, we provide DOI links and access instructions pointing to external repositories such as:

- [DANDI Archive](https://dandiarchive.org/) — for NWB-formatted neurophysiology data
- [GEO (Gene Expression Omnibus)](https://www.ncbi.nlm.nih.gov/geo/) — for RNA-seq and scRNA-seq datasets
- [Zenodo](https://zenodo.org/) — for general-purpose research data archival
- [OpenNeuro](https://openneuro.org/) — for neuroscience datasets

---

## Usage Instructions

### Loading HDF5 Files

```python
import h5py

with h5py.File("organoid_mea_recording.h5", "r") as f:
    voltage_traces = f["raw_data/voltage"][:]
    timestamps = f["raw_data/timestamps"][:]
    sampling_rate = f["metadata"].attrs["sampling_rate_hz"]
    print(f"Loaded {voltage_traces.shape[1]} channels, {voltage_traces.shape[0]} samples at {sampling_rate} Hz")
```

### Loading NWB (Neurodata Without Borders) Files

```python
from pynwb import NWBHDF5IO

with NWBHDF5IO("organoid_recording.nwb", "r") as io:
    nwbfile = io.read()
    acquisition = nwbfile.acquisition["ElectricalSeries"]
    data = acquisition.data[:]
    rate = acquisition.rate
    print(f"Recording duration: {data.shape[0] / rate:.2f} seconds")
```

### Loading TIFF Image Stacks

```python
from skimage import io as skio

stack = skio.imread("confocal_zstack.tif")
print(f"Image stack shape: {stack.shape}")  # (z_slices, height, width) or (z, height, width, channels)
```

### Loading CSV Data

```python
import pandas as pd

spike_data = pd.read_csv("spike_timestamps.csv")
print(spike_data.head())
print(f"Total spikes: {len(spike_data)}")
```

### Loading H5AD Files (Single-Cell Data)

```python
import scanpy as sc

adata = sc.read_h5ad("organoid_scrna.h5ad")
print(f"Cells: {adata.n_obs}, Genes: {adata.n_vars}")
sc.pl.umap(adata, color="cell_type")
```

---

## Contributing

We welcome contributions of new datasets that advance organoid intelligence research and education. To contribute a dataset to this repository, please follow these guidelines:

1. **Open an issue** describing the dataset you wish to contribute, including its category, format, size, and relevance to the textbook.
2. **Prepare metadata** for your dataset following the schema in [`datasets_index.md`](datasets_index.md), including a unique dataset ID, description, format, license, citation, and related chapters.
3. **Ensure proper licensing** — all contributed datasets must have a clearly defined license. We strongly encourage open licenses such as CC-BY-4.0 or CC0.
4. **Provide documentation** — include a brief README or metadata file with your dataset describing experimental conditions, preprocessing steps, and any known limitations.
5. **Submit a pull request** with your dataset files (or external links for large datasets) and updated index entries.

For datasets larger than 100 MB, please host the data on an external repository (Zenodo, DANDI, etc.) and provide a DOI or stable URL in your contribution.

---

*This datasets repository is part of the Organoid Intelligence: Biological Computing In Living Systems textbook project. For questions, suggestions, or issues, please open a GitHub issue or contact the project maintainers.*
