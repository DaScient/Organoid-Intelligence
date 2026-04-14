# Organoid Intelligence: Biological Computing In Living Systems

**Author:** Don M. Tadaya | **Publisher:** DaScient Press Ltd. | **Copyright © 2026 DaScient, LLC**

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Python](https://img.shields.io/badge/Python-3.9%2B-brightgreen.svg)](https://python.org)
[![Chapters](https://img.shields.io/badge/Chapters-24-orange.svg)](docs/textbook/)
[![Status](https://img.shields.io/badge/Status-Research-red.svg)](docs/textbook/)
[![DaScient Press](https://img.shields.io/badge/Publisher-DaScient%20Press%20Ltd.-purple.svg)](https://dascient.com)

---

## About This Repository

This repository is the official open-source companion to **"Organoid Intelligence: Biological Computing In Living Systems"** — a textbook that explores the frontier of biological computing using brain organoids. It bridges cutting-edge neuroscience, bioengineering, computational theory, and ethics to present a comprehensive treatment of Organoid Intelligence (OI) as an emerging paradigm in computing.

**Organoid Intelligence** refers to the use of lab-grown three-dimensional brain tissue — known as cerebral organoids — as biological computing substrates. These living systems, derived from human induced pluripotent stem cells (iPSCs), can form spontaneous neural networks, exhibit learning-like plasticity, and process information through mechanisms that evolution has refined over hundreds of millions of years. The energy efficiency, adaptability, and parallelism of biological neural computation represent a fundamentally different approach to information processing compared to silicon-based architectures.

This textbook and repository are organized for students, researchers, and engineers at all levels — from biology undergraduates encountering computational neuroscience for the first time, to experienced researchers seeking to implement hybrid bio-digital computing systems. The materials span theoretical foundations, experimental protocols, computational simulations, interactive visualizations, and deep explorations of the ethical and governance landscapes that will shape the field's future.

The repository brings together 24 chapters across 8 thematic parts, 5 appendices, laboratory protocols, computational simulations, Python and web-based visualizations, curated datasets, starter-pack tutorials, and capstone projects. Whether you are exploring the neuroscience of organoid systems, implementing reservoir computing algorithms, or examining the moral philosophy of synthetic biological minds, this repository provides the scaffolding to engage deeply with each domain.

---

## Table of Contents

### Textbook Structure

**[Book Overview](docs/textbook/BOOK_OVERVIEW.md)**

#### Part I — Foundations
| Chapter | Title |
|---------|-------|
| [Chapter 1](docs/textbook/part-01-foundations/chapter-01-emergence-biological-computing.md) | The Emergence of Biological Computing |
| [Chapter 2](docs/textbook/part-01-foundations/chapter-02-history-brain-organoids.md) | A History of Brain Organoids |
| [Chapter 3](docs/textbook/part-01-foundations/chapter-03-neuroscience-foundations.md) | Neuroscience Foundations for Biocomputing |

#### Part II — Biological Substrate
| Chapter | Title |
|---------|-------|
| [Chapter 4](docs/textbook/part-02-biological-substrate/chapter-04-engineering-brain-organoids.md) | Engineering Brain Organoids |
| [Chapter 5](docs/textbook/part-02-biological-substrate/chapter-05-vascularization-challenge.md) | The Vascularization Challenge |
| [Chapter 6](docs/textbook/part-02-biological-substrate/chapter-06-myelination-signal-propagation.md) | Myelination and Signal Propagation |

#### Part III — Biocomputer Interface
| Chapter | Title |
|---------|-------|
| [Chapter 7](docs/textbook/part-03-biocomputer-interface/chapter-07-electrophysiological-interfaces.md) | Electrophysiological Interfaces |
| [Chapter 8](docs/textbook/part-03-biocomputer-interface/chapter-08-3d-neural-interfaces.md) | Three-Dimensional Neural Interfaces |
| [Chapter 9](docs/textbook/part-03-biocomputer-interface/chapter-09-optogenetic-communication.md) | Optogenetic Communication |

#### Part IV — Computational Theory
| Chapter | Title |
|---------|-------|
| [Chapter 10](docs/textbook/part-04-computational-theory/chapter-10-reservoir-computing.md) | Reservoir Computing in Neural Substrates |
| [Chapter 11](docs/textbook/part-04-computational-theory/chapter-11-active-inference-predictive-processing.md) | Active Inference and Predictive Processing |
| [Chapter 12](docs/textbook/part-04-computational-theory/chapter-12-language-of-neurons.md) | The Language of Neurons: Neural Coding |

#### Part V — Scaling
| Chapter | Title |
|---------|-------|
| [Chapter 13](docs/textbook/part-05-scaling/chapter-13-manufacturing-organoid-systems.md) | Manufacturing Organoid Computing Systems |
| [Chapter 14](docs/textbook/part-05-scaling/chapter-14-organoid-networks.md) | Organoid Networks and Connectivity |
| [Chapter 15](docs/textbook/part-05-scaling/chapter-15-hybrid-bio-digital-supercomputers.md) | Hybrid Bio-Digital Supercomputers |

#### Part VI — Applications
| Chapter | Title |
|---------|-------|
| [Chapter 16](docs/textbook/part-06-applications/chapter-16-drug-discovery-personalized-medicine.md) | Drug Discovery and Personalized Medicine |
| [Chapter 17](docs/textbook/part-06-applications/chapter-17-biological-artificial-intelligence.md) | Biological Artificial Intelligence |
| [Chapter 18](docs/textbook/part-06-applications/chapter-18-environmental-climate-modeling.md) | Environmental and Climate Modeling |

#### Part VII — Ethics & Governance
| Chapter | Title |
|---------|-------|
| [Chapter 19](docs/textbook/part-07-ethics-governance/chapter-19-moral-status-of-organoids.md) | The Moral Status of Organoids |
| [Chapter 20](docs/textbook/part-07-ethics-governance/chapter-20-donor-rights-genetic-ownership.md) | Donor Rights and Genetic Ownership |
| [Chapter 21](docs/textbook/part-07-ethics-governance/chapter-21-global-governance.md) | Global Governance of Organoid Intelligence |

#### Part VIII — Future
| Chapter | Title |
|---------|-------|
| [Chapter 22](docs/textbook/part-08-future/chapter-22-rise-of-living-computers.md) | The Rise of Living Computers |
| [Chapter 23](docs/textbook/part-08-future/chapter-23-end-of-silicon-monopoly.md) | The End of the Silicon Monopoly |
| [Chapter 24](docs/textbook/part-08-future/chapter-24-civilization-synthetic-minds.md) | Civilization and Synthetic Minds |

#### Appendices
| Appendix | Title |
|----------|-------|
| [Appendix A](docs/textbook/appendices/appendix-a-glossary.md) | Glossary of Key Terms |
| [Appendix B](docs/textbook/appendices/appendix-b-lab-protocols.md) | Lab Protocols Reference |
| [Appendix C](docs/textbook/appendices/appendix-c-math-foundations.md) | Mathematical Foundations |
| [Appendix D](docs/textbook/appendices/appendix-d-regulatory-frameworks.md) | Regulatory Frameworks |
| [Appendix E](docs/textbook/appendices/appendix-e-annotated-bibliography.md) | Annotated Bibliography |

---

## Quick Start

### Prerequisites
- Python 3.9+
- Git

### Setup

```bash
# Clone the repository
git clone https://github.com/DaScient/Organoid-Intelligence.git
cd Organoid-Intelligence

# Install visualization dependencies
pip install -r visualizations/python/requirements.txt

# Run the beginner starter pack
cd starter-packs/beginner
pip install -r requirements.txt
python getting_started.py

# Launch a visualization
cd visualizations/python
python 01_neuron_action_potential.py
```

### Web Visualizations

Open `visualizations/web/index.html` in your browser — no server needed.

---

## Repository Structure

```
Organoid-Intelligence/
├── docs/textbook/          # 24-chapter research textbook
├── visualizations/         # Python & web-based interactive visualizations
├── simulations/            # Core computational simulation engines
├── protocols/              # Lab protocols & training guides
├── starter-packs/          # Beginner / Intermediate / Advanced onboarding
├── datasets/               # Curated dataset index
├── capstones/              # Project assignments
└── generate_docx.py        # Compile textbook to Word document
```

---

## How to Use Each Section

| Section | Audience | Purpose |
|---------|----------|---------|
| `docs/textbook/` | All | Deep reading, citations, theory |
| `visualizations/` | Students, Educators | Interactive learning tools |
| `simulations/` | Researchers, Engineers | Computational experiments |
| `protocols/` | Lab Scientists | Bench-ready procedures |
| `starter-packs/` | Beginners → Advanced | Guided learning path |
| `datasets/` | Data Scientists | Link to real OI-relevant datasets |
| `capstones/` | Courses | Graded project assignments |

---

## Contributing

We welcome contributions! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on submitting issues, pull requests, and new content.

---

## Citation

If you use this repository or textbook in your research, please cite:

```bibtex
@book{tadaya2026organoid,
  title     = {Organoid Intelligence: Biological Computing In Living Systems},
  author    = {Tadaya, Don M.},
  year      = {2026},
  publisher = {DaScient Press Ltd.},
  copyright = {2026 DaScient, LLC},
  url       = {https://github.com/DaScient/Organoid-Intelligence}
}
```

---

## License

Copyright © 2026 DaScient, LLC. All rights reserved.

This repository is licensed under the [Apache License 2.0](LICENSE). The textbook content (`docs/textbook/`) is made available for educational and research use. See the LICENSE file for full terms.
