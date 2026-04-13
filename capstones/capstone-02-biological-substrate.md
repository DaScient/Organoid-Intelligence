# Capstone Project 2: Designing an Organoid Fabrication and Maturation Plan

**Associated Part**: Part II — The Biological Substrate (Chapters 4–6)

---

## Project Overview

In this capstone project, students will design a comprehensive, end-to-end protocol for generating, culturing, and maturing cortical brain organoids from induced pluripotent stem cells (iPSCs). The project encompasses the full organoid engineering pipeline: iPSC maintenance and quality control, neural induction, three-dimensional aggregation and embedding, long-term maturation with defined milestones, and the critical challenges of vascularization and myelination. Students will be required to make and justify key design decisions at each stage—choosing between alternative growth factor cocktails, matrix materials, and culture formats—while considering practical constraints such as cost, reproducibility, and scalability. The project also requires students to develop a vascularization strategy to address the diffusion limitation that restricts organoid growth and survival beyond approximately 500 µm in diameter. A detailed maturation timeline will track the expected developmental progression from pluripotent cells through neural progenitors to functional cortical circuits exhibiting spontaneous electrical activity. By completing this project, students will gain the practical knowledge needed to produce the biological substrates that underpin organoid intelligence systems, while developing critical thinking about the tradeoffs inherent in biological engineering. This capstone directly connects to the subsequent interface and computing capstones by establishing the tissue foundation upon which electrodes are placed and computations are performed.

---

## Learning Objectives

Upon completion of this capstone project, students will be able to:

- **Describe the iPSC reprogramming process** and explain the critical quality control steps required before initiating neural differentiation.
- **Design a neural induction protocol** by selecting appropriate small molecules and growth factors, specifying concentrations and timing, and justifying choices based on developmental biology principles.
- **Compare and evaluate scaffold materials** (biological vs. synthetic extracellular matrices) for 3D organoid culture, considering mechanical properties, batch variability, and biocompatibility.
- **Construct a detailed maturation timeline** that maps expected cellular and molecular milestones to specific culture time points, from neural rosette formation through synaptogenesis.
- **Develop a vascularization strategy** by evaluating current approaches (microfluidic perfusion, endothelial co-culture, bioprinted scaffolds) and selecting the most appropriate method for a given application.
- **Design quality control checkpoints** using immunostaining, electrophysiology, and morphological criteria to assess organoid health and developmental progress.
- **Estimate resource requirements** including reagent costs, equipment needs, and personnel time for a defined production scale.
- **Address reproducibility challenges** by defining quantitative acceptance and rejection criteria for organoid batches.

---

## Background

Brain organoids are three-dimensional, self-organizing neural tissues derived from human pluripotent stem cells that recapitulate key aspects of early brain development. The generation of cortical organoids begins with induced pluripotent stem cells (iPSCs), which are somatic cells reprogrammed to a pluripotent state through the expression of defined transcription factors (Oct4, Sox2, Klf4, and c-Myc, known as the Yamanaka factors). Quality-controlled iPSC lines must demonstrate pluripotency marker expression (SSEA-4, TRA-1-60, Oct4), a normal karyotype, and the absence of residual reprogramming transgene expression before use in organoid generation.

Neural induction is achieved by dual SMAD inhibition—simultaneous blockade of BMP and TGF-β signaling pathways—using small molecules such as dorsomorphin (or LDN-193189) and SB431542. This directs pluripotent cells toward a neuroectodermal fate within the first 7–10 days of culture. The resulting neural progenitor cells can then be aggregated into embryoid bodies (EBs) and embedded in extracellular matrix scaffolds to support three-dimensional growth. The Lancaster protocol, first published in 2013, demonstrated that embedding EBs in Matrigel droplets and culturing them under orbital shaking conditions allows the self-organization of neural tissue containing discrete brain regions with cortical layering.

A major limitation of current organoid technology is the lack of vascularization. Without a functional blood supply, oxygen and nutrients can only reach the organoid interior through passive diffusion, which is effective only over distances of approximately 200–400 µm. This diffusion barrier leads to necrotic cores in organoids larger than about 1 mm in diameter, limiting their growth, maturation, and long-term viability. Several strategies have been developed to address this challenge, including microfluidic perfusion systems that provide controlled media flow, co-culture with endothelial cells that can form primitive vascular networks, and bioprinted scaffolds with pre-formed channel architectures. The choice of vascularization strategy has significant implications for organoid size, maturation, and suitability for organoid intelligence applications, where sustained neural activity over weeks to months is required.

---

## Tasks

### Task 1: Design an iPSC-to-Neural Progenitor Differentiation Protocol

Develop a detailed protocol for differentiating iPSCs into neural progenitor cells (NPCs). Specify the following for each phase: (a) **iPSC Maintenance** (Days −7 to 0): culture medium (e.g., mTeSR Plus or Essential 8), substrate coating (vitronectin or Matrigel), passage method (EDTA vs. enzymatic), and seeding density. (b) **Neural Induction** (Days 0–10): dual SMAD inhibition reagents with exact concentrations (e.g., LDN-193189 at 100 nM, SB431542 at 10 µM), medium composition (DMEM/F12 with N2 supplement), and medium change schedule. (c) **Neural Progenitor Expansion** (Days 10–18): addition of FGF2 (20 ng/mL) and EGF (20 ng/mL) for progenitor expansion, transition to neural basal medium with B27 supplement. Provide a day-by-day schedule for the first 18 days with specific media formulations and volumes for a standard 6-well plate format.

### Task 2: Plan the 3D Aggregation and Embedding Strategy

Design the transition from 2D neural progenitor cultures to 3D organoid structures. Address the following decisions: (a) **Aggregation method**: compare forced aggregation in ultra-low-attachment V-bottom plates (seeding at 9,000–18,000 cells per well) versus spontaneous EB formation in suspension culture. Justify your choice. (b) **Matrix embedding**: compare Matrigel (mouse-derived, batch-variable, rich in laminin and collagen IV) with synthetic alternatives such as PEG-based hydrogels functionalized with RGD peptides or alginate-based matrices. Consider mechanical stiffness (0.1–1 kPa range appropriate for neural tissue), batch-to-batch variability, defined composition, and cost. Select one matrix and justify your choice. (c) **Culture format**: specify whether organoids will be maintained in static culture, on orbital shakers (80–90 rpm), or in spinning bioreactors. Discuss the tradeoffs between nutrient distribution, shear stress, and scalability.

### Task 3: Create a Maturation Timeline from Week 0 to Week 20

Develop a comprehensive maturation timeline presented as a Gantt chart or equivalent visual format. For each phase, specify the expected developmental milestones and the markers or assays used to confirm them:

- **Weeks 0–2**: EB formation, neural induction initiation. Markers: loss of Oct4, onset of PAX6 and SOX1 expression.
- **Weeks 2–4**: Neural rosette formation, apical-basal polarity establishment. Markers: ZO-1 (apical), N-cadherin, Nestin.
- **Weeks 4–8**: Cortical progenitor zone formation, early neurogenesis. Markers: TBR2 (intermediate progenitors), CTIP2 (deep-layer neurons), ventricular zone–like structures.
- **Weeks 8–12**: Upper-layer neuron generation, initial synaptogenesis. Markers: SATB2 (upper-layer neurons), SYN1 (synapsin), PSD-95. First spontaneous electrical activity detectable by MEA.
- **Weeks 12–16**: Circuit maturation, increased synaptic density, emergence of oscillatory activity. Markers: GFAP (astrocytes), VGLUT1 (glutamatergic), GAD67 (GABAergic). Network burst activity on MEA.
- **Weeks 16–20**: Functional maturation, myelination onset. Markers: MBP and O4 (oligodendrocytes), mature firing patterns, stimulus-response capabilities.

### Task 4: Design a Vascularization Strategy

Evaluate three vascularization approaches and select the most appropriate one for organoid intelligence applications. For each approach, discuss the mechanism, advantages, limitations, and current state of the technology:

(a) **Microfluidic perfusion**: Design a perfusable chip with channels that provide continuous medium flow around and through the organoid. Specify channel dimensions, flow rates (typically 0.1–10 µL/min), and the expected improvement in oxygen penetration depth.

(b) **Endothelial co-culture**: Plan the co-culture of brain organoids with human umbilical vein endothelial cells (HUVECs) or iPSC-derived endothelial cells. Specify the ratio of neural to endothelial cells, the timing of co-culture initiation, and the expected degree of vascular network infiltration.

(c) **Bioprinted scaffolds**: Design a sacrificial bioprinted scaffold with channel architecture that can be perfused after organoid embedding. Specify the bioink composition, channel diameter (100–400 µm), and spacing.

Select one approach and provide a detailed justification considering: compatibility with MEA recording, scalability to 50 organoids, cost, and demonstrated evidence in published literature.

### Task 5: Plan Quality Control Checkpoints

Design a comprehensive quality control (QC) program with checkpoints at Weeks 1, 4, 8, 12, and 20. For each checkpoint, specify:

- **Immunostaining panel**: list of antibodies, expected staining patterns, and pass/fail criteria (e.g., "≥80% of organoids must show PAX6+ neural rosettes at Week 2").
- **Morphological assessment**: size range (e.g., 500 µm–2 mm diameter at Week 8), shape regularity, absence of excessive cystic structures, and necrotic core assessment (live/dead staining with calcein AM/ethidium homodimer).
- **Electrophysiology milestones**: expected onset of spontaneous activity (Week 8–10), minimum firing rate criteria (≥0.1 Hz by Week 12), and network burst criteria (≥1 burst/min by Week 16).
- **Molecular QC**: RT-qPCR panel for key markers at each stage, with fold-change thresholds relative to undifferentiated iPSCs.

### Task 6: Estimate Costs and Resources for Producing 50 Organoids

Prepare a detailed cost estimate for generating and maintaining 50 cortical organoids through 20 weeks of culture. Include the following categories:

- **Reagents**: stem cell maintenance media, neural induction factors (LDN-193189, SB431542), growth factors (FGF2, EGF, BDNF, NT-3), Matrigel or synthetic matrix, basal media and supplements (N2, B27), antibiotics.
- **Consumables**: culture plates (6-well, ultra-low-attachment), pipette tips, conical tubes, cryovials, embedding molds.
- **Equipment amortization**: biosafety cabinet, CO₂ incubator, orbital shaker or bioreactor, microscope, MEA system (amortized over expected 5-year lifespan).
- **Personnel**: estimated person-hours per week for routine maintenance (medium changes, passaging, QC checks).
- **Total cost per organoid** and comparison with published estimates in the literature.

### Task 7: Address Reproducibility — Define Acceptance and Rejection Criteria

One of the greatest challenges in organoid research is the high variability between individual organoids, between batches, and between iPSC lines. Define a reproducibility framework that includes:

- **Quantitative acceptance criteria**: minimum and maximum size at each time point, minimum percentage of organoids expressing key markers, electrophysiology thresholds, and morphological scoring rubric.
- **Batch rejection criteria**: conditions under which an entire batch should be discarded (e.g., contamination, >50% of organoids failing QC, abnormal karyotype detected in random sampling).
- **Inter-batch normalization**: strategies for comparing data across batches, including internal reference standards and normalization to house-keeping markers.
- **Statistical framework**: minimum sample size per batch for QC assessment, appropriate statistical tests for comparing batches, and definition of "equivalent" batches.

---

## Deliverables

- **Protocol Document** (10–15 pages): A comprehensive, step-by-step protocol document formatted in the style of a Nature Protocols publication, including reagent lists with catalog numbers, equipment lists, timing annotations, troubleshooting tips, and anticipated results for each stage.
- **Maturation Timeline** (Gantt chart): A visual timeline spanning Weeks 0–20 showing all milestones, QC checkpoints, medium changes, and expected marker expression. This may be produced using project management software, a spreadsheet, or a drawing tool.
- **Cost Estimate Spreadsheet**: An itemized spreadsheet with unit costs, quantities, and totals for each category, with a summary showing total cost and cost-per-organoid.
- **QC Checklist**: A printable checklist document that could be used in a laboratory setting for each QC checkpoint, with spaces for recording results and pass/fail determinations.
- **Written Justification** (3 pages, single-spaced): A scientific justification document explaining the rationale behind each major design decision, with references to primary literature. Address at minimum: choice of neural induction protocol, matrix selection, vascularization strategy, and reproducibility framework.

---

## Evaluation Rubric

| Criterion | Points | Description |
|---|---|---|
| **Differentiation Protocol** | 15 | Complete and accurate iPSC-to-NPC protocol with correct growth factors, concentrations, and timing. Day-by-day schedule is practical and well-organized. |
| **3D Aggregation Strategy** | 10 | Thoughtful comparison of aggregation methods and matrices. Selection is well-justified with consideration of practical constraints. |
| **Maturation Timeline** | 15 | Comprehensive timeline with accurate developmental milestones and markers. Gantt chart is clear and informative. Timeline aligns with published literature. |
| **Vascularization Strategy** | 15 | All three approaches are accurately described. Selected strategy is well-justified for organoid intelligence applications with practical implementation details. |
| **Quality Control Program** | 15 | QC checkpoints are comprehensive, with specific markers, quantitative criteria, and practical pass/fail thresholds at each stage. |
| **Cost Estimate** | 10 | Itemized and realistic cost estimate with all major categories included. Cost-per-organoid is reasonable and compared with published estimates. |
| **Reproducibility Framework** | 10 | Quantitative acceptance/rejection criteria are clearly defined. Statistical framework is appropriate. Inter-batch normalization strategy is practical. |
| **Written Justification** | 10 | Clear scientific writing with well-reasoned arguments supported by primary literature. All major design decisions are addressed. |
| **Total** | **100** | |

---

## Extensions

These optional tasks are for students seeking additional challenge:

- **Automated Bioreactor Integration**: Design a protocol adaptation for an automated bioreactor system (e.g., the SpinΩ bioreactor or a commercially available perfusion bioreactor). Specify the modifications needed for automated medium exchange, pH and dissolved oxygen monitoring, and real-time imaging. Estimate the improvement in throughput and reproducibility compared to manual culture, and discuss the engineering requirements for scaling to hundreds of organoids.

- **Patient-Specific Disease-Modeling Organoids**: Adapt your protocol for generating organoids from patient-derived iPSC lines carrying specific neurological disease mutations. Choose one disease model (e.g., Rett syndrome with MECP2 mutation, Timothy syndrome with CACNA1C mutation, or tuberous sclerosis with TSC1/TSC2 mutations). Describe the expected phenotypic differences from wild-type organoids, additional QC steps needed, appropriate isogenic controls (CRISPR-corrected lines), and how disease-specific phenotypes might be quantified. Discuss the implications for using disease-model organoids in organoid intelligence systems.

- **Assembloid Construction**: Extend your protocol to generate multi-region assembloids by fusing cortical organoids with subpallial (ventral forebrain) organoids to model interneuron migration, or with thalamic organoids to create cortico-thalamic circuits. Specify the fusion protocol, timeline for integration, and methods for assessing functional connectivity between regions.

---

## References

1. Lancaster, M. A., Renner, M., Martin, C.-A., et al. (2013). Cerebral organoids model human brain development and microcephaly. *Nature*, 501(7467), 373–379.

2. Paşca, A. M., Sloan, S. A., Clarke, L. E., et al. (2015). Functional cortical neurons and astrocytes from human pluripotent stem cells in 3D culture. *Nature Methods*, 12(7), 671–678.

3. Qian, X., Nguyen, H. N., Song, M. M., et al. (2016). Brain-region-specific organoids using mini-bioreactors for modeling ZIKV exposure. *Cell*, 165(5), 1238–1254.

4. Cakir, B., Xiang, Y., Tanaka, Y., et al. (2019). Engineering of human brain organoids with a functional vascular-like system. *Nature Methods*, 16(11), 1169–1175.

5. Velasco, S., Kedaigle, A. J., Simmons, S. K., et al. (2019). Individual brain organoids reproducibly form cell diversity of the human cerebral cortex. *Nature*, 570(7762), 523–527.

6. Giandomenico, S. L., Mierau, S. B., Gibbons, G. M., et al. (2019). Cerebral organoids at the air–liquid interface generate diverse nerve tracts with functional output. *Nature Neuroscience*, 22(4), 669–679.
