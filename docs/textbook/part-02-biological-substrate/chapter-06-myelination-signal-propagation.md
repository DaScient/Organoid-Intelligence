# Chapter 6: Myelination and Signal Propagation

> *Part II — Biological Substrate*
>
> **Organoid Intelligence: Biological Computing In Living Systems**
> Copyright © 2026 DaScient, LLC

---

## Opening Vignette: The White Matter's Secret

In 1878, a young medical student in Paris named Louis-Antoine **Ranvier** peered through his microscope at a teased nerve fiber preparation and noticed something peculiar. At regular intervals along the length of the fiber, the glistening white sheath that surrounded the axon appeared to be *interrupted* — pinched down to almost nothing, leaving a tiny gap of exposed membrane roughly one to two micrometers wide. These constrictions, which Ranvier described with meticulous care in his *Leçons sur l'histologie du système nerveux* (1878), would come to bear his name: the **nodes of Ranvier**. But neither Ranvier nor anyone else at the time understood what these structures actually *did*. They were catalogued, illustrated, debated — and then largely forgotten for half a century.

Meanwhile, in Spain, Santiago **Ramón y Cajal** was revolutionizing our understanding of the nervous system itself. Through painstaking application of Golgi's silver staining method, Cajal established the **neuron doctrine** — the principle that the nervous system is composed of discrete cells, not a continuous reticulum — and produced anatomical drawings of such exquisite precision that they remain scientifically useful to this day. Cajal noted the myelinated fibers, the white matter that constitutes roughly half the volume of the human brain, but his attention was drawn primarily to the gray matter — the cell bodies and dendrites where computation appeared to occur. The white matter, the cabling between computational nodes, was considered infrastructure: necessary but uninteresting.

It took the insight of a physical chemist to ask the right question. In 1925, Ralph **Lillie** at the University of Chicago published a remarkable paper in which he proposed that the action potential did not propagate continuously along myelinated nerve fibers. Instead, Lillie hypothesized, the electrical signal *jumped* from one node of Ranvier to the next, skipping the insulated internodal segments entirely — a process he termed **saltatory conduction**, from the Latin *saltare*, meaning "to leap" (Lillie, 1925). Lillie's evidence was indirect, based on analogies with iron wire models of nerve conduction, and his proposal was met with considerable skepticism.

The definitive proof came from Japan. In 1941 and 1942, Ichiji **Tasaki** and Taiji **Takeuchi** at Keio University performed a series of elegant experiments on single myelinated nerve fibers from the toad *Bufo vulgaris*. Using extracellular electrodes positioned at precise intervals along a fiber, they demonstrated that the action current was generated exclusively at the nodes of Ranvier, with the internodal segments contributing only passive, electrotonic spread of current. When they blocked a single node with a local anesthetic, the action potential failed to propagate past it — but when they blocked an internode, transmission continued unimpeded (Tasaki, 1939; Huxley & Stämpfli, 1949). The signal was indeed jumping.

This discovery had profound implications. Saltatory conduction explained a puzzle that had troubled neurophysiologists for decades: how could the giant squid axon, nearly a millimeter in diameter, conduct impulses at the same velocity — roughly 25 meters per second — as a frog motor neuron only 12 micrometers across? The answer was myelin. By wrapping axons in layers of insulating lipid membrane, oligodendrocytes and Schwann cells had evolved a mechanism that increased conduction velocity by an order of magnitude while simultaneously *reducing* energy consumption by a factor of one hundred. Evolution had discovered the biological equivalent of coaxial cable insulation — approximately 300 million years before human engineers invented the electrical version.

For organoid intelligence, myelination presents both a critical challenge and a transformative opportunity. The brain organoids described in Chapters 4 and 5, for all their remarkable self-organization, typically lack one of the brain's most fundamental structural features: *they do not myelinate*. Standard cortical organoid protocols produce neurons, astrocytes, and sometimes even rudimentary synaptic networks — but the **oligodendrocytes** responsible for myelin formation are conspicuously absent. Without myelin, signals in organoid neural networks crawl along unmyelinated axons at velocities of 0.5 to 2 meters per second — an order of magnitude slower than the myelinated circuits of the adult human brain. Timing precision degrades. Signal-to-noise ratios plummet. The temporal coding strategies that underpin much of cortical computation (Chapter 12) become unreliable or impossible.

This chapter examines the biology of myelination, the physics of signal propagation, and the emerging protocols for engineering myelinated organoids — because until we solve the myelination problem, our biological computers will be running with the neural equivalent of dial-up internet in a fiber-optic world.

---

## 6.1 The Biology of Myelin

**Myelin** is the lipid-rich insulating sheath that wraps around axons in both the central and peripheral nervous systems. It is among the most metabolically expensive structures in the body to produce and maintain, yet it is so essential to neural function that its disruption causes devastating neurological disease. Understanding myelin biology is foundational to engineering myelinated circuits in organoid systems.

### 6.1.1 Oligodendrocytes in the Central Nervous System

In the CNS, myelin is produced by a specialized glial cell type: the **oligodendrocyte**. Each mature oligodendrocyte extends multiple branching processes, each of which wraps around a segment of a nearby axon, forming a compact, multilayered myelin sheath. A single oligodendrocyte can myelinate up to **50 axon segments** simultaneously — a remarkable feat of cellular multitasking that distinguishes it from its peripheral counterpart (Baumann & Pham-Dinh, 2001).

Oligodendrocytes arise from **oligodendrocyte precursor cells** (OPCs), which are identifiable by their expression of the proteoglycan **NG2**, the transcription factor **OLIG2**, and the receptor **PDGFRα**. OPCs are generated in specific germinal zones during embryonic development — the medial ganglionic eminence and, later, the cortical subventricular zone — and migrate extensively throughout the brain before differentiating into mature, myelinating oligodendrocytes (Kessaris et al., 2006).

The timing of myelination in human development is instructive for organoid engineering. In the human brain, OPCs begin to appear during the second trimester, but *compact myelin* — the tightly wrapped, functionally mature sheath — does not emerge until the third trimester and continues to develop well into the third decade of life. The prefrontal cortex, the seat of executive function and arguably the most computationally sophisticated region of the human brain, is among the last areas to fully myelinate (Fields, 2008). This extended timeline presents an obvious challenge for organoid systems, where experiments often run on timescales of weeks to months rather than years.

> **Key Insight:** The fact that a single oligodendrocyte can myelinate up to 50 axon segments simultaneously means that relatively few oligodendrocytes are needed to myelinate an organoid — but those few cells must be properly positioned, appropriately differentiated, and provided with signals that trigger the wrapping process.

### 6.1.2 Schwann Cells in the Peripheral Nervous System

In the PNS, myelination is carried out by **Schwann cells**, which differ fundamentally from oligodendrocytes in their relationship to axons. Each Schwann cell myelinates exactly *one* internodal segment of *one* axon — a **one-to-one** relationship that contrasts sharply with the oligodendrocyte's one-to-many architecture (Jessen & Mirsky, 2005).

Schwann cells derive from the **neural crest** and require axonal signals — particularly **Neuregulin-1 type III** (NRG1-III) — to initiate myelination. The amount of NRG1-III displayed on the axon surface determines whether a Schwann cell will myelinate the axon or simply ensheath it without forming compact myelin. Axons with a diameter below approximately **1 μm** are typically ensheathed but not myelinated, with multiple small-diameter axons bundled into **Remak bundles** by non-myelinating Schwann cells (Taveggia et al., 2005).

While Schwann cells are primarily relevant to peripheral nerve organoids and neuromuscular junction models, understanding their biology provides important comparative insights for engineering myelinated circuits in CNS organoids.

### 6.1.3 Myelin Composition

The myelin sheath has a distinctive biochemical composition optimized for electrical insulation. It consists of approximately **70–80% lipid** and **20–30% protein** by dry weight — an inversion of the typical cellular membrane ratio, which is roughly 50:50 (Norton & Cammer, 1984). This lipid enrichment is critical for myelin's insulating function, as lipid bilayers are inherently poor conductors of ionic current.

The major lipid components include:

- **Cholesterol** (~28% of total myelin lipid)
- **Galactocerebroside** (~22%)
- **Phospholipids** (ethanolamine plasmalogen, phosphatidylcholine, phosphatidylserine)
- **Sulfatide** (~4%)

The protein complement, though smaller by mass, plays essential structural and functional roles:

| Protein | Abbreviation | Location | Function |
|---------|-------------|----------|----------|
| **Myelin Basic Protein** | MBP | Cytoplasmic face | Compaction of cytoplasmic leaflets; essential for CNS myelination |
| **Proteolipid Protein** | PLP/DM20 | Transmembrane | Stabilization of intraperiod line; most abundant CNS myelin protein |
| **Myelin-Associated Glycoprotein** | MAG | Periaxonal membrane | Axon-glia signaling; maintains periaxonal space |
| **Myelin Oligodendrocyte Glycoprotein** | MOG | Outermost surface | Structural integrity; autoimmune target in MS |
| **Claudin-11** (OSP) | CLDN11 | Tight junctions | Paracellular barrier in myelin sheaths |
| **2',3'-Cyclic Nucleotide Phosphodiesterase** | CNPase | Non-compact myelin | Cytoskeletal regulation; marker for oligodendrocyte lineage |
| **Myelin Protein Zero** | P0/MPZ | Transmembrane (PNS) | Major PNS myelin protein; compaction of extracellular leaflets |
| **Peripheral Myelin Protein 22** | PMP22 | Transmembrane (PNS) | Membrane organization; mutated in Charcot-Marie-Tooth disease |

*Table 6.1: Major myelin proteins, their locations, and functions. Note that CNS and PNS myelin have distinct protein compositions, reflecting their different cellular origins.*

The high lipid content of myelin gives it its characteristic white appearance — hence the term **white matter** for brain regions dominated by myelinated fiber tracts. This seemingly simple observation belies a profound organizational principle: the human brain dedicates roughly half its volume to the wiring (white matter) that connects computational nodes (gray matter), an investment that underscores the importance of efficient signal propagation for neural computation (Fields, 2008).

---

## 6.2 Structure of the Myelin Sheath

The myelin sheath is not a uniform tube of insulation. It is a periodic structure with distinct functional domains, each contributing to the speed and reliability of signal propagation. Understanding this structure is essential for appreciating the biophysics of saltatory conduction and for engineering functional myelin in organoid systems.

### 6.2.1 Internodal Segments

The **internode** is the myelinated segment between two consecutive nodes of Ranvier. In the human CNS, internodal lengths range from approximately **0.2 to 2.0 mm**, with a strong correlation to axon diameter — larger axons have longer internodes. The relationship is approximately:

$$L_{\text{internode}} \approx 100 \times d$$

where $d$ is the axon diameter (Waxman, 1980). This ratio has been optimized by evolution to maximize conduction velocity for a given fiber caliber.

Each internode consists of **10 to 160 concentric wraps** of oligodendrocyte (or Schwann cell) membrane around the axon. The wrapping process is remarkably precise: the cytoplasm is squeezed out from between the membrane layers, producing **compact myelin** — a structure in which the lipid bilayers are separated by a distance of only ~12 nm at the **major dense line** (fused cytoplasmic surfaces) and ~2.5 nm at the **intraperiod line** (apposed extracellular surfaces).

The **g-ratio** — defined as the ratio of the inner axon diameter to the outer diameter of the myelinated fiber — is a key structural parameter:

$$g = \frac{d_{\text{axon}}}{d_{\text{fiber}}}$$

The optimal g-ratio for maximizing conduction velocity has been theoretically predicted and experimentally measured to be approximately **0.6 to 0.7** (Rushton, 1951; Chomiak & Bhui, 2009). Values significantly below this range indicate excessive myelin (wasted material and metabolic resources), while values above it indicate insufficient insulation for optimal conduction.

### 6.2.2 Nodes of Ranvier

The **node of Ranvier** is a **1–2 μm** gap in the myelin sheath where the axon membrane is directly exposed to the extracellular space. This is where the action potential is regenerated during saltatory conduction. The nodal membrane is remarkably specialized:

- **Voltage-gated sodium channels** — primarily **Nav1.6** in mature nodes — are clustered at extraordinarily high density: approximately **1,000–2,000 channels per μm²**, compared to ~25 channels per μm² in unmyelinated axons (Caldwell et al., 2000).
- The cytoskeletal scaffold protein **ankyrin G** anchors Nav channels, along with the cell adhesion molecule **neurofascin-186**, to the underlying actin–βIV-spectrin cytoskeleton.
- **KCNQ2/3 (Kv7)** potassium channels at the node contribute to setting the resting potential and controlling excitability.

The extreme concentration of sodium channels at nodes means that the total number of channels needed for the entire axon is dramatically reduced compared to an unmyelinated fiber of the same length. This has profound implications for energy efficiency: fewer channels opening means fewer sodium ions entering the axon, which means less work for the Na⁺/K⁺-ATPase to restore ionic gradients (see Section 6.3.4).

### 6.2.3 Paranodal and Juxtaparanodal Regions

Between the node and the internode lie two transitional zones with distinct molecular compositions:

**Paranodal region:** Immediately flanking the node, this region contains **septate-like junctions** formed by the interaction of axonal **Caspr** (Contactin-Associated Protein, also known as paranodin) and **Contactin** with glial **Neurofascin-155**. These junctions create a diffusion barrier that:
1. Prevents lateral diffusion of nodal sodium channels into the internode
2. Limits ionic exchange between the periaxonal space and the extracellular space
3. Anchors the terminal myelin loops to the axon surface

**Juxtaparanodal region:** Located just beneath the innermost myelin loops, this region contains clustered **Kv1.1 and Kv1.2** voltage-gated potassium channels. These channels are sequestered under the myelin sheath and are normally silent during action potential propagation. However, in demyelinating disease, exposure of juxtaparanodal K⁺ channels to the extracellular space causes potassium leakage and conduction block — one mechanism by which demyelination disrupts neural signaling (Poliak & Bhui, 2003).

| Domain | Width | Key Molecules | Primary Function |
|--------|-------|---------------|-----------------|
| **Node of Ranvier** | 1–2 μm | Nav1.6, Ankyrin G, Neurofascin-186, KCNQ2/3 | Action potential regeneration |
| **Paranode** | 5–10 μm | Caspr, Contactin, Neurofascin-155 | Axo-glial junction; diffusion barrier |
| **Juxtaparanode** | 10–15 μm | Kv1.1, Kv1.2, Caspr2, TAG-1 | K⁺ channel sequestration; repolarization reserve |
| **Internode** | 200–2000 μm | MBP, PLP, MAG, Compact Myelin | Electrical insulation; passive current spread |

*Table 6.2: Molecular domains of the myelinated axon. Each domain has a distinct molecular composition optimized for its functional role in saltatory conduction.*

---

## 6.3 Saltatory Conduction

The defining functional consequence of myelination is **saltatory conduction** — the rapid, energy-efficient propagation of action potentials by jumping between nodes of Ranvier. This section examines the biophysics of this process in detail.

### 6.3.1 Continuous vs. Saltatory Conduction

In **unmyelinated axons**, the action potential propagates continuously. Each patch of membrane must depolarize to threshold, open its voltage-gated sodium channels, generate an action potential, and depolarize the adjacent patch of membrane through local circuit currents. This process is slow because:

1. Every micrometer of membrane has high capacitance (~1 μF/cm²), which must be charged
2. The axial resistance of the cytoplasm limits how far local currents can spread
3. Every micrometer of membrane has leaky potassium and sodium channels that dissipate current

The result: conduction velocities of approximately **0.5–2 m/s** for typical unmyelinated C-fibers in mammals.

In **myelinated axons**, the picture is fundamentally different. The myelin sheath reduces the effective membrane capacitance by a factor of ~50 and increases the effective membrane resistance by a factor of ~5,000 in the internodal regions. This means that when an action potential is generated at one node, the resulting local circuit current can spread passively through the internode — losing relatively little charge to transmembrane leakage — and arrive at the next node with sufficient amplitude to depolarize it to threshold. The action potential is then *regenerated* at full amplitude at the next node, and the process repeats.

The result: conduction velocities of **5–150 m/s**, depending on fiber diameter and internode length.

### 6.3.2 The Biophysical Mechanism

The saltatory conduction cycle can be broken down into discrete steps:

1. **Action potential at Node n:** Nav1.6 channels open, Na⁺ rushes inward, membrane depolarizes to ~+30 mV
2. **Local circuit current:** Depolarization creates a voltage gradient between Node n and Node n+1. Current flows axially through the cytoplasm (inside) and returns through the extracellular space (outside)
3. **Passive spread through internode:** The high Rm and low Cm of the myelinated internode allow current to spread with minimal loss over distances of 0.2–2 mm
4. **Depolarization of Node n+1:** Arriving current charges the nodal membrane capacitance, depolarizing it toward threshold
5. **Action potential regeneration at Node n+1:** When threshold is reached (~−55 mV), Nav1.6 channels open and the action potential is regenerated at full amplitude
6. **The cycle repeats** at the next node

The key insight is that the internode acts as a **passive cable** — it does not generate action potentials, but merely transmits the signal electrotonically. The nodes are the active elements, functioning as **regenerative amplifiers** that boost the signal back to full amplitude at each step. This separation of transmission (passive, fast) and amplification (active, local) is an elegant engineering solution that biological neural circuits share, in principle, with fiber-optic communication systems that use repeater amplifiers at intervals along the cable.

### 6.3.3 Speed-Diameter Relationship

One of the most important quantitative relationships in neurophysiology is the dependence of conduction velocity on axon diameter. For **unmyelinated** fibers, the relationship is:

$$v_{\text{unmyelinated}} \propto \sqrt{d}$$

This arises from cable theory: the length constant $\lambda \propto \sqrt{d}$ (see Section 6.4), and conduction velocity scales with the length constant.

For **myelinated** fibers, the relationship is linear:

$$v_{\text{myelinated}} \propto d$$

The constant of proportionality is approximately **5.7 m/s per μm** of outer fiber diameter in mammalian peripheral nerves (Hursh, 1939; Waxman, 1980), giving the empirical relationship:

$$v \approx 5.7 \times d \quad \text{(m/s, with } d \text{ in μm)}$$

This linear relationship arises because both the internode length and the length constant increase linearly with diameter when the g-ratio is held constant, while the nodal delay remains approximately constant (Waxman & Bennett, 1972).

The practical consequence is dramatic. Consider the comparison at $d = 10$ μm:

- Unmyelinated: $v \approx 1.8\sqrt{10} \approx 5.7$ m/s
- Myelinated: $v \approx 5.7 \times 10 = 57$ m/s

A **10-fold increase** in speed from myelination alone — without any increase in axon diameter.

### 6.3.4 Energy Efficiency

Saltatory conduction is not only faster than continuous conduction — it is vastly more **energy efficient**. The energetic cost of an action potential is determined primarily by the amount of Na⁺ that enters the axon (and must subsequently be pumped out by the Na⁺/K⁺-ATPase).

In an unmyelinated axon, sodium channels are distributed along the entire length. In a myelinated axon, sodium channels are concentrated only at the nodes, which occupy roughly **0.1%** of the total axon surface area. The result is that saltatory conduction uses approximately **100 times less ATP** per action potential per unit length than continuous conduction (Hartline & Colman, 2007).

This energy saving is biologically critical. The human brain, which constitutes ~2% of body mass, consumes ~20% of the body's metabolic energy. Roughly half of that energy is spent on maintaining ionic gradients across neuronal membranes. Without myelination, the brain's energy requirements would be orders of magnitude higher — physiologically unsustainable.

For organoid intelligence, energy efficiency has practical implications. Organoids must be supplied with oxygen and glucose (Chapter 5), and the metabolic demands of unmyelinated neural networks may limit the density and complexity of circuits that can be sustained in culture.

| Property | Unmyelinated Axon | Myelinated Axon | Ratio |
|----------|------------------|-----------------|-------|
| **Conduction velocity** (d = 10 μm) | ~5.7 m/s | ~57 m/s | 10× |
| **Velocity-diameter relationship** | $v \propto \sqrt{d}$ | $v \propto d$ | — |
| **Na⁺ channel density** | ~25/μm² (uniform) | ~1500/μm² (nodes only) | 60× at nodes |
| **Total Na⁺ influx per AP per cm** | ~100% (reference) | ~1% | 100× reduction |
| **ATP cost per AP per cm** | High | ~1% of unmyelinated | ~100× savings |
| **Membrane capacitance** | ~1 μF/cm² | ~0.02 μF/cm² (internode) | 50× reduction |
| **Membrane resistance** | ~1 kΩ·cm² | ~5000 kΩ·cm² (internode) | 5000× increase |
| **Typical velocity range** | 0.5–2 m/s | 5–150 m/s | 10–75× |

*Table 6.3: Comparison of conduction properties in unmyelinated and myelinated axons. Myelination dramatically improves both speed and energy efficiency.*

---

## 6.4 Cable Theory and the Cable Equation

The theoretical framework for understanding signal propagation along axons is **cable theory**, originally developed for undersea telegraph cables by Lord Kelvin (William Thomson) in the 1850s and adapted for neurons by Wilfrid Rall in the 1960s. Cable theory provides the quantitative foundation for understanding how myelination affects signal propagation.

### 6.4.1 The Passive Cable Model

An axon can be modeled as a cylindrical cable with three key electrical parameters per unit length:

- **Membrane resistance ($R_m$):** The resistance of the membrane to transmembrane current flow (Ω·cm²). Higher $R_m$ means less current leaks out through the membrane.
- **Axial resistance ($R_a$):** The resistance of the intracellular cytoplasm to longitudinal current flow (Ω·cm). Lower $R_a$ means current flows more easily along the axon.
- **Membrane capacitance ($C_m$):** The capacitance of the membrane per unit area (F/cm²). Lower $C_m$ means less charge is needed to change the membrane potential.

These three parameters completely determine the passive electrical behavior of the cable. The distributed-parameter circuit model treats each infinitesimal length $dx$ of the axon as containing a parallel $R_m$–$C_m$ element connected to adjacent segments by the axial resistance $R_a$.

### 6.4.2 The Cable Equation

Applying Kirchhoff's current law to the distributed circuit model yields the **cable equation**:

$$\lambda^2 \frac{\partial^2 V}{\partial x^2} - \tau \frac{\partial V}{\partial t} = V$$

where:

- $V = V_m - V_{\text{rest}}$ is the deviation of the membrane potential from rest
- $\lambda = \sqrt{R_m / R_a}$ is the **length constant** (also called the space constant)
- $\tau = R_m C_m$ is the **time constant**

For a cylindrical axon of diameter $d$ with specific membrane resistance $r_m$ (Ω·cm²), specific axial resistivity $r_a$ (Ω·cm), and specific membrane capacitance $c_m$ (F/cm²):

$$\lambda = \sqrt{\frac{r_m \cdot d}{4 r_a}}$$

$$\tau = r_m \cdot c_m$$

The cable equation is a **linear partial differential equation** with well-known analytical solutions. For a point source of current injected at $x = 0$ at time $t = 0$, the steady-state solution (as $t \to \infty$) is:

$$V(x) = V_0 \, e^{-|x|/\lambda}$$

This shows that the voltage decays exponentially with distance from the injection site, with the length constant $\lambda$ determining the characteristic decay distance. At $x = \lambda$, the voltage has decayed to $1/e \approx 37\%$ of its initial value.

The time-dependent solution for a step current injection is:

$$V(x, t) = \frac{V_0}{2} \left[ e^{-x/\lambda} \, \text{erfc}\left(\frac{x}{2\sqrt{D t}} - \sqrt{\frac{t}{\tau}}\right) + e^{x/\lambda} \, \text{erfc}\left(\frac{x}{2\sqrt{D t}} + \sqrt{\frac{t}{\tau}}\right) \right]$$

where $D = \lambda^2/\tau$ is the effective diffusion coefficient for voltage spread and erfc is the complementary error function.

### 6.4.3 Length Constant and Time Constant

The **length constant** $\lambda$ determines *how far* a signal can travel passively along the axon before decaying to insignificance. Physically, it represents the balance between two competing processes:

1. **Axial current flow** (characterized by $R_a$): Current flowing along the inside of the axon
2. **Transmembrane leakage** (characterized by $R_m$): Current leaking out through the membrane

A large $\lambda$ means signals can spread far — desirable for rapid communication. For a typical unmyelinated axon ($r_m \approx 2000$ Ω·cm², $r_a \approx 100$ Ω·cm, $d = 1$ μm):

$$\lambda = \sqrt{\frac{2000 \times 0.0001}{4 \times 100}} = \sqrt{\frac{0.2}{400}} = \sqrt{0.0005} \approx 0.022 \text{ cm} = 0.22 \text{ mm}$$

The **time constant** $\tau$ determines *how quickly* the membrane responds to injected current. A small $\tau$ means rapid response — also desirable for fast signaling. For a typical unmyelinated axon ($r_m \approx 2000$ Ω·cm², $c_m \approx 1$ μF/cm²):

$$\tau = 2000 \times 1 \times 10^{-6} = 2 \times 10^{-3} \text{ s} = 2 \text{ ms}$$

### 6.4.4 Effect of Myelination on Cable Parameters

Myelination profoundly alters the cable parameters of the internode:

- **Membrane resistance $R_m$:** Increases by a factor of ~**5,000** (from ~2,000 to ~10,000,000 Ω·cm²). Each layer of myelin adds resistance in series, and 100+ layers compound multiplicatively.
- **Membrane capacitance $C_m$:** Decreases by a factor of ~**50** (from ~1 to ~0.02 μF/cm²). Capacitors in series add reciprocally, so many membrane layers dramatically reduce the effective capacitance.
- **Axial resistance $R_a$:** Essentially unchanged (still determined by the cytoplasm).

The quantitative consequences for the cable parameters are dramatic:

$$\lambda_{\text{myelinated}} = \sqrt{\frac{R_{m,\text{myelin}}}{R_a}} \approx \sqrt{\frac{5000 \times R_{m,\text{bare}}}{R_a}} \approx 70 \times \lambda_{\text{unmyelinated}}$$

$$\tau_{\text{myelinated}} = R_{m,\text{myelin}} \times C_{m,\text{myelin}} \approx 5000 \times \frac{1}{50} \times r_m c_m = 100 \times \tau_{\text{unmyelinated}}$$

Wait — the time constant *increases*? Yes, but the critical point is that the *conduction velocity* depends on the ratio of the length constant to the time constant (or more precisely, on $\lambda^2/\tau$), which increases enormously:

$$\frac{\lambda_{\text{myelin}}^2}{\tau_{\text{myelin}}} = \frac{(70\lambda_0)^2}{100\tau_0} = \frac{4900\lambda_0^2}{100\tau_0} = 49 \times \frac{\lambda_0^2}{\tau_0}$$

This ~50-fold increase in the effective diffusion coefficient for passive voltage spread, combined with the regeneration at nodes, accounts for the order-of-magnitude increase in conduction velocity.

| Parameter | Unmyelinated | Myelinated (Internode) | Change Factor |
|-----------|-------------|----------------------|---------------|
| $R_m$ (Ω·cm²) | ~2,000 | ~10,000,000 | ×5,000 |
| $C_m$ (μF/cm²) | ~1.0 | ~0.02 | ÷50 |
| $R_a$ (Ω·cm) | ~100 | ~100 | ×1 |
| $\lambda$ (mm) | ~0.2 | ~14 | ×70 |
| $\tau$ (ms) | ~2 | ~200 | ×100 |
| $\lambda^2/\tau$ (cm²/s) | ~0.002 | ~0.098 | ×49 |

*Table 6.4: Cable parameters for unmyelinated versus myelinated axon segments. While myelination increases both the length constant and the time constant, the net effect on signal propagation speed is strongly positive because λ increases much more than τ.*

> **Key Insight:** Myelination works by transforming the internode into a nearly ideal passive cable — high resistance to prevent current leakage, low capacitance for rapid charging, and long enough to skip over substantial distances. The nodes provide the regenerative amplification needed to maintain signal amplitude over indefinite distances.

---

## 6.5 Myelination in Organoids

The previous sections established why myelination matters for neural circuit function. This section addresses the central question for organoid intelligence: **how do we engineer myelinated neural circuits in vitro?**

### 6.5.1 The Myelination Challenge

Standard cerebral organoid protocols — including those pioneered by Lancaster et al. (2013) and Paşca et al. (2015) — predominantly generate **neurons**, **astrocytes**, and **neural progenitors**. The glaring absence is the **oligodendrocyte lineage**. In most published cortical organoid protocols, oligodendrocytes are either entirely absent or present only as rare, immature OPCs that fail to differentiate into myelinating cells (Velasco et al., 2019).

The reasons for this absence are both biological and technical:

1. **Lineage specification:** Oligodendrocytes require specific morphogen gradients (notably **Sonic Hedgehog**, SHH) that are more characteristic of ventral forebrain development than the dorsal cortical identity favored by most organoid protocols
2. **Timing:** In vivo, oligodendrogenesis occurs *after* the neurogenic period, requiring extended culture durations (months to years) that most protocols do not support
3. **Signals:** The signals that trigger OPC differentiation into myelinating oligodendrocytes — including thyroid hormone (T3), specific extracellular matrix components, and axonal signals such as NRG1 — are typically absent from standard organoid culture media
4. **Substrate:** Myelination is an activity-dependent process; oligodendrocytes preferentially myelinate electrically active axons (Gibson et al., 2014), requiring organoids with functional neural circuits before myelination can occur

### 6.5.2 Oligodendrocyte Precursor Cells (OPCs)

**OPCs** are the immediate precursors of myelinating oligodendrocytes and are identified by a characteristic set of molecular markers:

- **NG2** (CSPG4) — a chondroitin sulfate proteoglycan expressed on the OPC surface
- **OLIG2** — a basic helix-loop-helix transcription factor essential for oligodendrocyte specification
- **PDGFRα** — platelet-derived growth factor receptor alpha, the receptor for the principal OPC mitogen PDGF-AA
- **SOX10** — a transcription factor required for terminal differentiation
- **O4** — a sulfatide antigen marking the transition from OPC to pre-oligodendrocyte

OPCs can be generated from human iPSCs using directed differentiation protocols that recapitulate the ventral forebrain developmental program. Key steps include:

1. **Neural induction** with dual SMAD inhibition (SB431542 + LDN193189)
2. **Ventral patterning** with Smoothened agonist (SAG) or recombinant SHH to activate the hedgehog pathway
3. **OPC specification** with PDGF-AA and FGF-2 to promote proliferation of PDGFRα+ precursors
4. **Differentiation** with T3 (triiodothyronine) and withdrawal of mitogens to induce maturation into O4+/MBP+ oligodendrocytes

These protocols typically require **75–120 days** from iPSC stage to MBP-positive oligodendrocytes, with substantial variation between cell lines (Douvaras & Bhui, 2016).

### 6.5.3 Co-culture Approaches

One strategy for introducing myelination into organoids is to **co-culture** separately generated OPCs with neuronal organoids. This approach has several advantages:

- OPCs and neurons can be optimized independently before combining
- The ratio of OPCs to neurons can be controlled
- Different OPC-generation protocols can be tested with the same batch of organoids

Practical considerations for co-culture include:

1. **Timing:** OPCs should be added after neurons have extended axons and established basic circuit activity
2. **Ratio:** A ratio of approximately 1 OPC to 3–5 neurons approximates the in vivo ratio in white matter
3. **Media:** The co-culture medium must support both neuronal survival and oligodendrocyte differentiation — a non-trivial formulation challenge
4. **Duration:** Compact myelin formation requires 4–8 weeks of co-culture after OPC addition

### 6.5.4 Oligocortical Spheroids

A breakthrough in organoid myelination came with the development of **oligocortical spheroids** — organoids specifically engineered to contain both cortical neurons and oligodendrocytes.

**Marton et al. (2019)** at Stanford demonstrated that fusing cortical spheroids (containing glutamatergic neurons) with oligodendrocyte spheroids (containing OPCs generated via SHH/SAG patterning) produced **assembloids** in which oligodendrocytes migrated into neuronal territory and initiated myelination of axons. Electron microscopy confirmed compact myelin wrapping, and electrophysiology showed enhanced neural circuit function (Marton et al., 2019).

**Kim et al. (2019)** at Case Western Reserve University took a different approach, generating single organoids that contained both neurons and oligodendrocytes by supplementing the culture medium with PDGF-AA, IGF-1, and T3 at specific developmental stages. These **oligocortical spheroids** spontaneously produced MBP-positive myelin sheaths around axons within the organoid interior, with compact myelin confirmed by electron microscopy (Kim et al., 2019).

| Milestone | Timeline (in vivo) | Timeline (organoid) | Protocol |
|-----------|-------------------|---------------------|----------|
| OPC specification | GW 10–15 | Day 50–75 | SAG/SHH patterning |
| OPC migration | GW 15–25 | Day 75–100 | Co-culture or assembloid fusion |
| Pre-myelination (O4+ stage) | GW 25–35 | Day 100–130 | T3, IGF-1 supplementation |
| Initial myelin wrapping | GW 35–birth | Day 130–160 | Activity-dependent signals |
| Compact myelin maturation | Birth–30 years | Day 160–250+ | Extended culture with T3, ascorbic acid |

*Table 6.5: Timeline of myelination events in human development versus organoid culture. Organoid myelination roughly recapitulates in vivo timing but can be accelerated somewhat by optimized growth factor cocktails. GW = gestational week.*

---

## 6.6 Myelination Protocols and Maturation

This section provides practical guidance on growth factor requirements, maturation timelines, and verification methods for achieving myelination in organoid cultures.

### 6.6.1 Growth Factor Requirements

Successful myelination in organoids requires a carefully staged cocktail of growth factors and small molecules:

- **PDGF-AA** (10–20 ng/mL): The primary mitogen for OPCs, acting through PDGFRα to drive proliferation. Required during the OPC expansion phase; withdrawn during differentiation.
- **IGF-1** (Insulin-like Growth Factor 1, 100 ng/mL): Promotes OPC survival and differentiation. Acts synergistically with T3 to drive myelin gene expression.
- **T3** (Triiodothyronine, 40–60 ng/mL): The most potent signal for oligodendrocyte differentiation. T3 activates thyroid hormone receptors (TRα/TRβ) that directly upregulate MBP and PLP gene transcription. Absence of T3 is one of the primary reasons standard organoid protocols fail to produce myelination.
- **CNTF** (Ciliary Neurotrophic Factor, 10 ng/mL): Promotes oligodendrocyte survival and maturation through the JAK-STAT3 pathway.
- **NT-3** (Neurotrophin-3, 10 ng/mL): Enhances OPC migration and differentiation.
- **Ascorbic acid** (200 μM): Required for collagen synthesis and extracellular matrix organization; supports compact myelin formation.
- **Biotin** (100 ng/mL): Cofactor for fatty acid synthesis; supports the high lipid demands of myelin production.

### 6.6.2 Maturation Timeline

Myelination is a slow, multi-step process. In organoid culture, the approximate timeline is:

1. **Weeks 1–4 after OPC addition:** OPCs migrate throughout the organoid and contact axons. Some OPCs begin to extend processes that contact multiple axons ("surveying" behavior).
2. **Weeks 4–8:** Initial wrapping begins. Oligodendrocytes select specific axons (preferentially those >0.5 μm diameter and electrically active) and begin spiraling their membrane around them.
3. **Weeks 8–16:** Myelin compaction occurs. Cytoplasm is extruded from between membrane layers, and myelin proteins (MBP, PLP) are upregulated to stabilize the compact structure.
4. **Weeks 16–30+:** Maturation continues. Myelin sheath thickness increases, g-ratios approach optimal values (~0.6–0.7), and nodes of Ranvier become molecularly mature with Nav1.6 clustering.

> **Key Insight:** Achieving functionally mature myelination in organoids requires patience — typically 4–8 months of culture after OPC introduction. This timeline can be partially accelerated by optimizing T3 concentration, electrical stimulation of neural circuits, and co-culture with astrocytes that provide trophic support.

### 6.6.3 Verification Methods

Confirming that myelination has occurred — and assessing its quality — requires multiple complementary techniques:

- **Immunostaining for myelin markers:** MBP and PLP antibodies visualize myelin sheaths by confocal microscopy. Positive staining confirms oligodendrocyte maturation but does not prove *compact* myelin.
- **Electron microscopy (EM):** The gold standard. Transmission EM reveals the ultrastructure of myelin sheaths, including the number of wraps, compaction quality, and g-ratio. Essential for distinguishing compact myelin from loose ensheathment.
- **G-ratio measurement:** Quantitative analysis of EM images to determine the ratio of axon diameter to fiber diameter. Values of 0.6–0.7 indicate optimal myelination; values near 1.0 indicate no myelination.
- **Western blotting:** Quantifies myelin protein expression levels (MBP, PLP, MAG) relative to total protein.
- **Electrophysiology:** Conduction velocity measurements can indirectly assess myelination. Velocities >5 m/s suggest at least partial myelination of the underlying circuits.

| Method | What It Measures | Resolution | Throughput | Confirms Compact Myelin? |
|--------|-----------------|------------|------------|-------------------------|
| MBP/PLP immunostaining | Myelin protein expression | ~200 nm (confocal) | High | No (ensheathment only) |
| Transmission EM | Ultrastructure, wrap count | ~1 nm | Low | **Yes** |
| G-ratio analysis | Myelin thickness | ~1 nm (from EM) | Low | **Yes** |
| Western blot | Protein quantity | N/A | Medium | No |
| Conduction velocity | Functional myelination | N/A | Medium | Indirect |
| qRT-PCR | Myelin gene expression | N/A | High | No |

*Table 6.6: Methods for verifying myelination in organoid cultures. Electron microscopy remains the gold standard for confirming compact myelin formation.*

---

## 6.7 Impact on Signal Fidelity and Computation

Myelination is not merely a speed enhancement — it fundamentally alters the *quality* of neural computation in ways that are critical for organoid intelligence.

### 6.7.1 Signal-to-Noise Ratio

The **signal-to-noise ratio (SNR)** of neural communication depends on the reliability with which action potentials arrive at their destinations at predictable times and with predictable amplitudes. Myelination improves SNR through several mechanisms:

1. **Reduced jitter:** In unmyelinated axons, conduction velocity varies with temperature, ionic concentration, and the history of recent activity (activity-dependent slowing). Myelinated axons are more resistant to these perturbations because the regenerative nodes are brief and stereotyped.
2. **Reduced crosstalk:** Myelin insulation prevents **ephaptic coupling** — the unintended transfer of electrical signals between adjacent axons. In unmyelinated fiber bundles, action potentials in one axon can generate sufficient extracellular field potentials to influence neighboring axons, creating noise. Myelination virtually eliminates this effect.
3. **Reduced conduction failure:** In unmyelinated axons, conduction can fail at branch points and regions of diameter change. The robust regeneration at nodes of Ranvier makes myelinated conduction far more reliable.

### 6.7.2 Timing Precision

**Temporal coding** — the encoding of information in the precise timing of action potentials — is a fundamental computational strategy in the mammalian cortex (see Chapter 12). Many neural computations depend on the ability to detect coincident inputs arriving within windows as narrow as **1–5 milliseconds**.

Myelination is essential for timing precision because:

- **Conduction delay variability** scales with the absolute conduction time. For a 10 cm pathway at 2 m/s (unmyelinated), the delay is 50 ms with a jitter of ~2–5 ms. At 50 m/s (myelinated), the delay is 2 ms with jitter <0.5 ms.
- **Adaptive myelination** — the tuning of myelin thickness and internode length to equalize conduction delays along pathways of different lengths — is a known feature of adult neural circuits (Seidl, 2014). This allows the brain to synchronize signals that must arrive simultaneously despite traveling different distances.
- **Activity-dependent myelination** allows the brain to dynamically tune conduction velocities in response to learning and experience (Fields, 2015), providing a form of circuit optimization beyond synaptic plasticity.

### 6.7.3 Implications for Organoid Computing

For organoid intelligence systems, the absence of myelination imposes severe computational limitations:

1. **Slow processing speed:** Unmyelinated organoid circuits operate at ~0.5–2 m/s, limiting the rate of information processing
2. **Poor temporal precision:** Without myelination, spike-timing-dependent computations (Chapter 12) are unreliable
3. **High energy cost:** Unmyelinated circuits consume ~100× more energy per signal, limiting circuit density (see Chapter 5 for metabolic constraints)
4. **Noise susceptibility:** Unmyelinated circuits are more vulnerable to ephaptic crosstalk, thermal noise, and conduction failure

> **Key Insight:** An unmyelinated organoid is computationally analogous to a modern CPU running at 1/100th of its design clock speed with a noisy bus. The hardware exists, but the performance is fundamentally limited by the communication infrastructure. Engineering myelination into organoids is not a luxury — it is a prerequisite for achieving the computational performance required for meaningful OI applications (see Chapter 10 for reservoir computing requirements).

Cross-references: See Chapter 10 (reservoir computing in organoids) for computational performance requirements; Chapter 12 (neural coding strategies) for timing precision requirements; Chapter 5 (vascularization) for metabolic constraints on circuit density.

---

## 6.8 Demyelination Diseases as Models

Demyelinating diseases provide natural experiments that illuminate the functional consequences of myelin loss — and organoids derived from patients with these diseases offer powerful platforms for disease modeling and drug discovery.

### 6.8.1 Multiple Sclerosis

**Multiple sclerosis (MS)** is an autoimmune disease in which the immune system attacks myelin sheaths in the CNS, causing patchy demyelination that disrupts neural signaling. Affecting approximately 2.8 million people worldwide, MS produces symptoms ranging from visual disturbances and motor weakness to cognitive impairment and fatigue (Filippi et al., 2018).

The pathology of MS illustrates the functional importance of myelin with devastating clarity:

- **Conduction block:** Complete demyelination exposes juxtaparanodal K⁺ channels, causing potassium leakage and conduction failure
- **Conduction slowing:** Partial demyelination reduces conduction velocity, disrupting the precise timing of neural signals
- **Temporal dispersion:** Different axons in a demyelinated tract conduct at different velocities, causing temporal smearing of signals that should be synchronous
- **Fatigue:** Partially demyelinated axons are prone to **activity-dependent conduction block** — they can conduct one or a few impulses but fail during sustained firing due to accumulation of extracellular K⁺ and inactivation of Na⁺ channels

Patient-derived iPSC organoids offer a unique platform for studying MS pathology. By generating oligocortical organoids from iPSCs of MS patients, researchers can study:

1. Whether oligodendrocytes from MS patients have intrinsic defects in myelination capacity
2. How exposure to inflammatory cytokines (TNF-α, IFN-γ) affects myelination in organoids
3. Whether remyelination-promoting drugs (e.g., clemastine, benztropine) can enhance myelin repair

### 6.8.2 Leukodystrophies

The **leukodystrophies** are a group of inherited disorders that primarily affect CNS white matter. Several are particularly relevant for organoid modeling:

- **Pelizaeus-Merzbacher Disease (PMD):** Caused by mutations in the *PLP1* gene encoding proteolipid protein. PLP is the most abundant protein in CNS myelin, and its dysfunction causes dysmyelination — abnormal myelin formation from the outset. PMD ranges from severe (connatal form, no myelin) to mild (classical form, some myelin). PMD organoids generated from patient iPSCs have been used to study the mechanism of PLP1 mutations and test potential therapies (Nevin et al., 2017).
- **Krabbe Disease:** Caused by deficiency of **galactosylceramidase** (GALC), leading to accumulation of the toxic metabolite psychosine, which kills oligodendrocytes. Organoid models can recapitulate the progressive oligodendrocyte death seen in Krabbe patients.
- **Alexander Disease:** Caused by dominant gain-of-function mutations in **GFAP** (glial fibrillary acidic protein), primarily an astrocyte disease. Mutant GFAP aggregates (Rosenthal fibers) form in astrocytes, causing secondary demyelination. Organoid models with Alexander disease astrocytes have demonstrated non-cell-autonomous effects on oligodendrocyte survival and myelination.

### 6.8.3 Organoids as Disease Models

Patient-derived iPSC organoids offer several advantages over traditional disease models:

1. **Human relevance:** Unlike mouse models, human organoids express human myelin genes and are susceptible to human-specific disease mechanisms
2. **Genetic authenticity:** Patient-derived organoids carry the exact genetic variants associated with the disease
3. **Controlled comparison:** CRISPR-corrected isogenic controls allow isolation of the effect of a single disease mutation
4. **Drug screening:** Organoids can be produced in sufficient numbers for medium-throughput drug screening
5. **Developmental context:** Organoids recapitulate developmental myelination, allowing study of diseases that manifest during development

| Disease | Gene/Cause | Myelin Pathology | Organoid Model Status |
|---------|-----------|-----------------|----------------------|
| **Multiple Sclerosis** | Autoimmune (polygenic) | Inflammatory demyelination | Proof-of-concept (inflammatory challenge) |
| **Pelizaeus-Merzbacher** | *PLP1* mutations | Dysmyelination | Established (Nevin et al., 2017) |
| **Krabbe Disease** | *GALC* deficiency | Oligodendrocyte death, demyelination | Proof-of-concept |
| **Alexander Disease** | *GFAP* mutations | Secondary demyelination | Established (astrocyte-focused) |
| **Vanishing White Matter** | *EIF2B* mutations | Oligodendrocyte/astrocyte vulnerability | Early development |
| **Metachromatic Leukodystrophy** | *ARSA* deficiency | Sulfatide accumulation, demyelination | Proof-of-concept |
| **Charcot-Marie-Tooth 1A** | *PMP22* duplication | PNS demyelination | Schwann cell models |

*Table 6.7: Demyelinating diseases and their organoid modeling status. Patient-derived iPSC organoids offer unprecedented opportunities for studying these devastating diseases.*

---

## Worked Example 6.1: Calculating Conduction Velocity — Myelinated vs. Unmyelinated

### Problem Statement

A motor neuron has an axon diameter of $d = 10$ μm. Calculate the conduction velocity for this axon in the unmyelinated and myelinated states using:
(a) Empirical scaling relationships
(b) Cable theory approximation

Compare the results and discuss the speedup factor.

### Solution

#### Part (a): Empirical Scaling Relationships

**Unmyelinated axon:**

The empirical relationship for unmyelinated fibers (Paintal, 1973) is:

$$v_{\text{unmyel}} = k_1 \sqrt{d}$$

where $k_1 \approx 1.8$ m/s/√μm.

$$v_{\text{unmyel}} = 1.8 \times \sqrt{10} = 1.8 \times 3.162 = 5.69 \text{ m/s}$$

**Myelinated axon:**

The empirical relationship for myelinated fibers (Hursh, 1939; Waxman, 1980) is:

$$v_{\text{myel}} = k_2 \times d$$

where $k_2 \approx 5.7$ m/s/μm (using outer fiber diameter; since $g \approx 0.7$, the outer diameter $D = d/g \approx 14.3$ μm, and $v = 6 \times D/g \approx 5.7 \times d$).

$$v_{\text{myel}} = 5.7 \times 10 = 57.0 \text{ m/s}$$

**Speedup factor:**

$$\frac{v_{\text{myel}}}{v_{\text{unmyel}}} = \frac{57.0}{5.69} \approx 10.0\times$$

#### Part (b): Cable Theory Approximation

For a myelinated axon, the conduction velocity can be estimated using the internode transit time model:

$$v \approx \frac{L}{\tau_{\text{node}} + \tau_{\text{internode}}}$$

where:
- $L$ is the internode length: $L \approx 100d = 100 \times 10$ μm $= 1000$ μm $= 1.0$ mm
- $\tau_{\text{node}}$ is the nodal delay: approximately 20 μs for a mature mammalian node
- $\tau_{\text{internode}}$ is the passive conduction delay through the internode

The internode transit time can be estimated from the cable equation:

$$\tau_{\text{internode}} \approx \frac{L^2}{\lambda^2 / \tau} = \frac{L^2 \tau}{\lambda^2}$$

Using the myelinated cable parameters from Table 6.4:
- $\lambda \approx 14$ mm
- $\tau \approx 200$ ms (for the internode)

Wait — we should be more careful. The relevant time constant for the internode is $\tau_{\text{internode}} = R_m C_m$ where these are the myelinated values. However, for estimating the transit time, we need the time for the voltage signal to propagate passively across the internode. Using the diffusion time:

$$\tau_{\text{transit}} = \frac{L^2}{2D} = \frac{L^2 \tau}{2\lambda^2}$$

$$\tau_{\text{transit}} = \frac{(0.1 \text{ cm})^2 \times 0.2 \text{ s}}{2 \times (1.4 \text{ cm})^2} = \frac{0.01 \times 0.2}{2 \times 1.96} = \frac{0.002}{3.92} \approx 0.00051 \text{ s} = 0.51 \text{ ms}$$

Total delay per internode:

$$\tau_{\text{total}} = \tau_{\text{node}} + \tau_{\text{transit}} = 0.02 + 0.51 = 0.53 \text{ ms}$$

Conduction velocity:

$$v = \frac{L}{\tau_{\text{total}}} = \frac{1.0 \text{ mm}}{0.53 \text{ ms}} = \frac{0.001 \text{ m}}{0.00053 \text{ s}} \approx 1.89 \text{ m/s}$$

Hmm — this is lower than the empirical value. The discrepancy arises because the passive transit time estimate is conservative; in reality, the voltage waveform at the far end of the internode reaches threshold before the full steady-state signal arrives. A more accurate estimate uses the time to reach threshold (approximately $-55$ mV from a peak of $+30$ mV), which occurs much faster than the diffusion time. Using a threshold-crossing model and recognizing that the safety factor (ratio of available current to threshold current) at each node is approximately 5–7:

$$v_{\text{cable}} \approx \frac{L}{\tau_{\text{node}} + \frac{L^2}{4D}} \approx \frac{1.0 \text{ mm}}{0.02 \text{ ms} + 0.13 \text{ ms}} \approx \frac{1.0}{0.15} \approx 6.7 \text{ m/s per internode}$$

The more complete computational models that account for the full Hodgkin-Huxley dynamics at nodes, the distributed nature of the cable, and the actual waveform shapes produce values consistent with the empirical relationship $v \approx 5.7d$ m/s.

### Discussion

The **10-fold speedup** from myelination is one of the most important performance enhancements in neural circuit design. For a 1-meter-long motor axon (such as those innervating leg muscles), the difference is:

- Unmyelinated: $1 \text{ m} / 5.7 \text{ m/s} = 175$ ms delay
- Myelinated: $1 \text{ m} / 57 \text{ m/s} = 17.5$ ms delay

The 158 ms difference is the margin between functional motor control and debilitating ataxia. It is also the margin between a viable organoid computing substrate and one too slow for real-time computation.

---

## Worked Example 6.2: Optimal Internode Distance

### Problem Statement

The ratio of internode length to fiber diameter has been optimized by evolution to maximize conduction velocity. For a range of fiber diameters, calculate:
(a) The optimal internode length
(b) The resulting conduction velocity
(c) The consequences of deviating from the optimal ratio

### Solution

#### Part (a): Optimal Internode Lengths

The empirical relationship established by Huxley & Stämpfli (1949) and confirmed by subsequent measurements is:

$$L_{\text{opt}} \approx 100 \times d$$

where $d$ is the axon diameter (not the total fiber diameter). Calculating for several diameters:

| Axon Diameter $d$ (μm) | Outer Fiber Diameter $D$ (μm) | Optimal Internode Length $L_{\text{opt}}$ (μm) | $L_{\text{opt}}$ (mm) |
|------------------------|------------------------------|----------------------------------------------|----------------------|
| 1 | 1.4 | 100 | 0.10 |
| 5 | 7.1 | 500 | 0.50 |
| 10 | 14.3 | 1000 | 1.00 |
| 20 | 28.6 | 2000 | 2.00 |

*(Using g-ratio = 0.7, so $D = d/g = d/0.7$)*

#### Part (b): Resulting Conduction Velocities

Using $v = 5.7d$ m/s/μm:

| $d$ (μm) | $L_{\text{opt}}$ (mm) | $v$ (m/s) | Nodes per cm |
|-----------|----------------------|-----------|-------------|
| 1 | 0.10 | 5.7 | 100 |
| 5 | 0.50 | 28.5 | 20 |
| 10 | 1.00 | 57.0 | 10 |
| 20 | 2.00 | 114.0 | 5 |

#### Part (c): Consequences of Non-optimal Internode Length

Consider a $d = 10$ μm axon ($L_{\text{opt}} = 1.0$ mm). What happens if the internode is too short or too long?

**Too short ($L = 0.2$ mm = $20d$):**
- More nodes per unit length (50/cm instead of 10/cm)
- Each nodal delay (~20 μs) adds up: total delay per cm ≈ $50 \times 20$ μs $= 1.0$ ms
- But internode transit time is very short: $\tau_{\text{transit}} \propto L^2$, so ~25× shorter
- Net effect: dominated by nodal delays → slower conduction
- Estimated velocity: $v \approx \frac{0.2 \text{ mm}}{0.02 \text{ ms} + 0.005 \text{ ms}} \approx 8$ m/s (vs. 57 m/s optimal)

**Too long ($L = 5.0$ mm = $500d$):**
- Fewer nodes per unit length (2/cm)
- Less nodal delay per unit length
- But signal must travel 5 mm through passive cable: $\tau_{\text{transit}} \propto L^2$, so ~25× *longer*
- Signal may decay below threshold before reaching the next node → **conduction failure**
- Even if it reaches threshold, the long transit time increases total delay
- Estimated velocity: risk of complete conduction block; if signal barely reaches threshold, $v \approx \frac{5 \text{ mm}}{0.02 \text{ ms} + 3.2 \text{ ms}} \approx 1.6$ m/s

The optimal internode length balances these competing effects — minimizing the total of nodal delay plus internode transit time per unit length. This optimization was first analyzed theoretically by Rushton (1951) and confirmed experimentally by Huxley & Stämpfli (1949), who measured internode lengths and conduction velocities in frog peripheral nerve fibers.

> **Key Insight:** The 100:1 ratio of internode length to axon diameter represents an evolutionary optimization of neural wiring. For organoid engineering, reproducing this ratio is important for achieving physiological conduction velocities — but the fact that development naturally produces this ratio suggests that properly stimulated oligodendrocytes will self-organize toward it.

---

## Code Exercise 6.1: Simulate Saltatory vs. Continuous Conduction

```python
"""
Code Exercise 6.1: Saltatory vs. Continuous Conduction Simulation

Simulates action potential propagation along an axon, comparing
myelinated (saltatory) and unmyelinated (continuous) conduction.
Uses simplified Hodgkin-Huxley dynamics at excitable nodes and
passive cable properties for internodal segments.

Chapter 6 — Myelination and Signal Propagation
Organoid Intelligence: Biological Computing In Living Systems
"""

import numpy as np
import matplotlib.pyplot as plt


def alpha_m(V):
    """Rate constant for Na+ activation gate opening (ms^-1)."""
    x = 25.0 - V
    # L'Hôpital limit: lim_{x→0} 0.1*x/(exp(x/10)-1) = 0.1*10 = 1.0
    return np.where(np.abs(x) < 1e-7, 1.0, 0.1 * x / (np.exp(x / 10.0) - 1.0))


def beta_m(V):
    """Rate constant for Na+ activation gate closing (ms^-1)."""
    return 4.0 * np.exp(-V / 18.0)


def alpha_h(V):
    """Rate constant for Na+ inactivation gate opening (ms^-1)."""
    return 0.07 * np.exp(-V / 20.0)


def beta_h(V):
    """Rate constant for Na+ inactivation gate closing (ms^-1)."""
    return 1.0 / (np.exp((30.0 - V) / 10.0) + 1.0)


def alpha_n(V):
    """Rate constant for K+ activation gate opening (ms^-1)."""
    x = 10.0 - V
    # L'Hôpital limit: lim_{x→0} 0.01*x/(exp(x/10)-1) = 0.01*10 = 0.1
    return np.where(np.abs(x) < 1e-7, 0.1, 0.01 * x / (np.exp(x / 10.0) - 1.0))


def beta_n(V):
    """Rate constant for K+ activation gate closing (ms^-1)."""
    return 0.125 * np.exp(-V / 80.0)


def simulate_unmyelinated(axon_length_mm=10.0, duration_ms=15.0, dx_um=100.0,
                          dt_ms=0.002, diameter_um=10.0):
    """
    Simulate continuous conduction along an unmyelinated axon using
    the Hodgkin-Huxley model.

    Parameters
    ----------
    axon_length_mm : float
        Total axon length in millimeters.
    duration_ms : float
        Simulation duration in milliseconds.
    dx_um : float
        Spatial discretization in micrometers.
    dt_ms : float
        Time step in milliseconds.
    diameter_um : float
        Axon diameter in micrometers.

    Returns
    -------
    x_mm : ndarray
        Spatial positions along the axon (mm).
    t_ms : ndarray
        Time points (ms).
    V : ndarray
        Membrane potential at each position and time (mV), shape (Nx, Nt).
    """
    # Spatial and temporal discretization
    Nx = int(axon_length_mm * 1000 / dx_um) + 1
    Nt = int(duration_ms / dt_ms) + 1
    x_mm = np.linspace(0, axon_length_mm, Nx)
    t_ms = np.linspace(0, duration_ms, Nt)

    # Convert units for HH model (CGS-like)
    dx_cm = dx_um * 1e-4
    dt = dt_ms  # ms
    d_cm = diameter_um * 1e-4

    # HH parameters (standard squid axon, adapted)
    g_Na = 120.0   # mS/cm^2
    g_K = 36.0     # mS/cm^2
    g_L = 0.3      # mS/cm^2
    E_Na = 115.0   # mV (relative to rest)
    E_K = -12.0    # mV
    E_L = 10.613   # mV
    Cm = 1.0       # uF/cm^2
    Ra = 100.0     # Ohm*cm (axial resistivity)

    # Cable coupling constant (factor of 1e3 converts Ra from Ohm*cm to
    # kOhm*cm for consistency with mV/ms/uF/mS unit system)
    coupling = (d_cm / (4.0 * Ra * Cm)) / (dx_cm ** 2) * 1e3

    # Initialize state variables
    V = np.zeros((Nx, Nt))
    m = np.zeros(Nx)
    h = np.zeros(Nx)
    n = np.zeros(Nx)

    # Steady-state initial conditions at V=0 (resting)
    m[:] = alpha_m(0) / (alpha_m(0) + beta_m(0))
    h[:] = alpha_h(0) / (alpha_h(0) + beta_h(0))
    n[:] = alpha_n(0) / (alpha_n(0) + beta_n(0))

    # Stimulus: inject current at the left end for the first 1 ms
    I_stim = np.zeros((Nx, Nt))
    stim_duration = int(1.0 / dt_ms)
    stim_region = max(2, int(Nx * 0.02))  # first 2% of axon (min 2 for spatial gradient)
    I_stim[:stim_region, :stim_duration] = 100.0  # uA/cm^2

    # Time-stepping loop
    for j in range(Nt - 1):
        Vj = V[:, j]

        # Ionic currents
        I_Na = g_Na * m**3 * h * (Vj - E_Na)
        I_K = g_K * n**4 * (Vj - E_K)
        I_L = g_L * (Vj - E_L)
        I_ion = I_Na + I_K + I_L

        # Cable equation: axial current (second spatial derivative)
        d2V = np.zeros(Nx)
        d2V[1:-1] = Vj[2:] - 2 * Vj[1:-1] + Vj[:-2]
        d2V[0] = Vj[1] - Vj[0]       # sealed-end BC
        d2V[-1] = Vj[-2] - Vj[-1]    # sealed-end BC

        # Voltage update
        dV = dt * (coupling * d2V - I_ion / Cm + I_stim[:, j] / Cm)
        V[:, j + 1] = Vj + dV

        # Gating variable updates
        Vnew = V[:, j + 1]
        m += dt * (alpha_m(Vnew) * (1 - m) - beta_m(Vnew) * m)
        h += dt * (alpha_h(Vnew) * (1 - h) - beta_h(Vnew) * h)
        n += dt * (alpha_n(Vnew) * (1 - n) - beta_n(Vnew) * n)

    return x_mm, t_ms, V


def simulate_myelinated(axon_length_mm=20.0, duration_ms=5.0, dt_ms=0.005,
                        diameter_um=10.0, n_nodes=20):
    """
    Simulate saltatory conduction along a myelinated axon.
    HH dynamics at nodes; passive cable (high Rm, low Cm) between nodes.

    Parameters
    ----------
    axon_length_mm : float
        Total axon length in millimeters.
    duration_ms : float
        Simulation duration in milliseconds.
    dt_ms : float
        Time step in milliseconds.
    diameter_um : float
        Axon diameter in micrometers.
    n_nodes : int
        Number of nodes of Ranvier.

    Returns
    -------
    node_positions_mm : ndarray
        Positions of the nodes along the axon (mm).
    t_ms : ndarray
        Time points (ms).
    V_nodes : ndarray
        Membrane potential at each node over time (mV), shape (n_nodes, Nt).
    """
    Nt = int(duration_ms / dt_ms) + 1
    t_ms = np.linspace(0, duration_ms, Nt)

    internode_length_mm = axon_length_mm / (n_nodes - 1)
    node_positions_mm = np.linspace(0, axon_length_mm, n_nodes)

    # HH parameters at nodes
    g_Na = 1200.0   # mS/cm^2 (10x higher density at nodes)
    g_K = 360.0     # mS/cm^2
    g_L = 0.3       # mS/cm^2
    E_Na = 115.0
    E_K = -12.0
    E_L = 10.613
    Cm_node = 1.0   # uF/cm^2

    # Internode cable parameters
    d_cm = diameter_um * 1e-4
    Ra = 100.0       # Ohm*cm
    Rm_internode = 1e7   # Ohm*cm^2 (myelinated)
    L_cm = internode_length_mm * 0.1  # convert mm to cm

    # Coupling conductance between adjacent nodes (through internode cable)
    g_couple = (np.pi * d_cm) / (4.0 * Ra * L_cm)  # S/cm (per unit node area)
    # Normalize to node area (assume node width ~ 1 um = 1e-4 cm)
    node_width_cm = 1e-4
    node_area = np.pi * d_cm * node_width_cm  # cm^2
    coupling = g_couple / (Cm_node * node_area) * 1e3  # factor for mV, ms units

    # Initialize
    V_nodes = np.zeros((n_nodes, Nt))
    m = np.full(n_nodes, alpha_m(0) / (alpha_m(0) + beta_m(0)))
    h = np.full(n_nodes, alpha_h(0) / (alpha_h(0) + beta_h(0)))
    n_gate = np.full(n_nodes, alpha_n(0) / (alpha_n(0) + beta_n(0)))

    # Stimulus at first node
    I_stim = np.zeros((n_nodes, Nt))
    stim_end = int(0.3 / dt_ms)
    I_stim[0, :stim_end] = 50.0

    # Time-stepping
    for j in range(Nt - 1):
        Vj = V_nodes[:, j]

        I_Na = g_Na * m**3 * h * (Vj - E_Na)
        I_K = g_K * n_gate**4 * (Vj - E_K)
        I_L = g_L * (Vj - E_L)
        I_ion = I_Na + I_K + I_L

        # Axial coupling between nodes
        d2V = np.zeros(n_nodes)
        d2V[1:-1] = (Vj[2:] - 2 * Vj[1:-1] + Vj[:-2])
        d2V[0] = Vj[1] - Vj[0]
        d2V[-1] = Vj[-2] - Vj[-1]

        dV = dt_ms * (coupling * d2V - I_ion / Cm_node + I_stim[:, j] / Cm_node)
        V_nodes[:, j + 1] = Vj + dV

        Vnew = V_nodes[:, j + 1]
        m += dt_ms * (alpha_m(Vnew) * (1 - m) - beta_m(Vnew) * m)
        h += dt_ms * (alpha_h(Vnew) * (1 - h) - beta_h(Vnew) * h)
        n_gate += dt_ms * (alpha_n(Vnew) * (1 - n_gate) - beta_n(Vnew) * n_gate)

    return node_positions_mm, t_ms, V_nodes


def plot_conduction_comparison(x_unmyel, t_unmyel, V_unmyel,
                               x_myel, t_myel, V_myel):
    """
    Create a two-panel figure comparing continuous and saltatory conduction.

    Parameters
    ----------
    x_unmyel, t_unmyel, V_unmyel : arrays
        Spatial positions, time points, and voltage matrix for unmyelinated axon.
    x_myel, t_myel, V_myel : arrays
        Node positions, time points, and voltage matrix for myelinated axon.
    """
    fig, axes = plt.subplots(1, 2, figsize=(14, 6))

    # Panel A: Unmyelinated (space-time plot)
    ax1 = axes[0]
    # Subsample for clarity
    t_sub = np.arange(0, len(t_unmyel), max(1, len(t_unmyel) // 500))
    x_sub = np.arange(0, len(x_unmyel), max(1, len(x_unmyel) // 200))
    T, X = np.meshgrid(t_unmyel[t_sub], x_unmyel[x_sub])
    ax1.pcolormesh(T, X, V_unmyel[np.ix_(x_sub, t_sub)],
                   cmap='RdBu_r', shading='auto', vmin=-20, vmax=110)
    ax1.set_xlabel('Time (ms)')
    ax1.set_ylabel('Position along axon (mm)')
    ax1.set_title('A) Unmyelinated — Continuous Conduction')

    # Panel B: Myelinated (space-time plot at nodes)
    ax2 = axes[1]
    T2, X2 = np.meshgrid(t_myel, x_myel)
    t_sub2 = np.arange(0, len(t_myel), max(1, len(t_myel) // 500))
    T2, X2 = np.meshgrid(t_myel[t_sub2], x_myel)
    ax2.pcolormesh(T2, X2, V_myel[:, t_sub2],
                   cmap='RdBu_r', shading='auto', vmin=-20, vmax=110)
    ax2.set_xlabel('Time (ms)')
    ax2.set_ylabel('Position along axon (mm)')
    ax2.set_title('B) Myelinated — Saltatory Conduction')

    plt.tight_layout()
    plt.savefig('conduction_comparison.png', dpi=150, bbox_inches='tight')
    plt.show()

    # Calculate and print conduction velocities
    print("\n--- Conduction Velocity Estimates ---")

    v_unmyel = None
    v_myel = None

    # Unmyelinated: find time of peak voltage at two distant positions
    pos1, pos2 = len(x_unmyel) // 4, 3 * len(x_unmyel) // 4
    t_peak1 = t_unmyel[np.argmax(V_unmyel[pos1, :])]
    t_peak2 = t_unmyel[np.argmax(V_unmyel[pos2, :])]
    dist_mm = x_unmyel[pos2] - x_unmyel[pos1]
    dt_peak = t_peak2 - t_peak1
    if dt_peak > 0:
        v_unmyel = dist_mm / dt_peak  # mm/ms = m/s
        print(f"Unmyelinated: v = {dist_mm:.1f} mm / {dt_peak:.2f} ms = {v_unmyel:.1f} m/s")
    else:
        print("Unmyelinated: conduction velocity could not be estimated (no propagation detected)")

    # Myelinated: find time of peak at two distant nodes
    n1, n2 = len(x_myel) // 4, 3 * len(x_myel) // 4
    t_peak1_m = t_myel[np.argmax(V_myel[n1, :])]
    t_peak2_m = t_myel[np.argmax(V_myel[n2, :])]
    dist_mm_m = x_myel[n2] - x_myel[n1]
    dt_peak_m = t_peak2_m - t_peak1_m
    if dt_peak_m > 0:
        v_myel = dist_mm_m / dt_peak_m
        print(f"Myelinated:   v = {dist_mm_m:.1f} mm / {dt_peak_m:.2f} ms = {v_myel:.1f} m/s")
        if v_unmyel is not None and v_unmyel > 0:
            print(f"Speedup factor: {v_myel / v_unmyel:.1f}x")
    else:
        print("Myelinated: conduction velocity could not be estimated (no propagation detected)")


if __name__ == "__main__":
    print("Simulating unmyelinated axon (continuous conduction)...")
    x_u, t_u, V_u = simulate_unmyelinated(
        axon_length_mm=10.0, duration_ms=15.0, dx_um=100.0, dt_ms=0.002
    )
    print(f"  Grid: {V_u.shape[0]} spatial points x {V_u.shape[1]} time steps")

    print("Simulating myelinated axon (saltatory conduction)...")
    x_m, t_m, V_m = simulate_myelinated(
        axon_length_mm=10.0, duration_ms=5.0, dt_ms=0.002, n_nodes=20
    )
    print(f"  Grid: {V_m.shape[0]} nodes x {V_m.shape[1]} time steps")

    plot_conduction_comparison(x_u, t_u, V_u, x_m, t_m, V_m)
```

---

## Code Exercise 6.2: Cable Equation Solver for Myelinated Axon

```python
"""
Code Exercise 6.2: Cable Equation Solver

Solves the cable equation:
    lambda^2 * d2V/dx2 - tau * dV/dt = V

for passive voltage propagation along an axon segment (internode),
comparing unmyelinated, thinly myelinated, and fully myelinated states.

Chapter 6 — Myelination and Signal Propagation
Organoid Intelligence: Biological Computing In Living Systems
"""

import numpy as np
from scipy.special import erfc
import matplotlib.pyplot as plt


def cable_equation_analytical(x_mm, t_ms, lam_mm, tau_ms, V0=50.0):
    """
    Analytical solution of the cable equation for a step current injection
    at x=0 starting at t=0.

    V(x,t) = (V0/2) * [exp(-x/lam)*erfc(x/(2*sqrt(D*t)) - sqrt(t/tau))
                      + exp(x/lam)*erfc(x/(2*sqrt(D*t)) + sqrt(t/tau))]

    Parameters
    ----------
    x_mm : ndarray
        Spatial positions in mm (must be >= 0).
    t_ms : float or ndarray
        Time point(s) in ms (must be > 0).
    lam_mm : float
        Length constant in mm.
    tau_ms : float
        Time constant in ms.
    V0 : float
        Amplitude of injected voltage at x=0 (mV).

    Returns
    -------
    V : ndarray
        Voltage at each spatial position (mV).
    """
    D = lam_mm**2 / tau_ms  # mm^2/ms

    x = np.abs(x_mm)
    t = np.maximum(t_ms, 1e-6)  # avoid division by zero

    sqrt_Dt = np.sqrt(D * t)
    sqrt_t_tau = np.sqrt(t / tau_ms)

    term1 = np.exp(-x / lam_mm) * erfc(x / (2 * sqrt_Dt) - sqrt_t_tau)
    term2 = np.exp(x / lam_mm) * erfc(x / (2 * sqrt_Dt) + sqrt_t_tau)

    V = (V0 / 2.0) * (term1 + term2)
    return V


def cable_equation_numerical(x_mm, t_total_ms, lam_mm, tau_ms, V0=50.0,
                              dx_mm=0.01, dt_ms=0.01):
    """
    Numerical solution of the cable equation using finite differences.

    lambda^2 * d2V/dx2 - tau * dV/dt = V

    Rearranged: dV/dt = (lambda^2/tau) * d2V/dx2 - V/tau

    Parameters
    ----------
    x_mm : ndarray
        Spatial grid points in mm.
    t_total_ms : float
        Total simulation time in ms.
    lam_mm : float
        Length constant in mm.
    tau_ms : float
        Time constant in ms.
    V0 : float
        Injected voltage amplitude at x=0 (mV).
    dx_mm : float
        Spatial step size in mm.
    dt_ms : float
        Time step size in ms.

    Returns
    -------
    x : ndarray
        Spatial positions (mm).
    t_arr : ndarray
        Time points (ms).
    V_history : ndarray
        Voltage over space and time, shape (Nx, Nt_save).
    """
    Nx = len(x_mm)
    Nt = int(t_total_ms / dt_ms) + 1

    D = lam_mm**2 / tau_ms

    # Stability check for explicit scheme
    r = D * dt_ms / (dx_mm**2)
    if r > 0.5:
        dt_ms = 0.4 * dx_mm**2 / D
        Nt = int(t_total_ms / dt_ms) + 1
        r = D * dt_ms / (dx_mm**2)

    V = np.zeros(Nx)
    # Boundary condition: hold x=0 at V0 for stimulus
    stim_duration_ms = 1.0
    save_interval = max(1, Nt // 200)
    V_history = []
    t_arr = []

    for j in range(Nt):
        t_now = j * dt_ms

        # Stimulus
        if t_now < stim_duration_ms:
            V[0] = V0

        d2V = np.zeros(Nx)
        d2V[1:-1] = (V[2:] - 2 * V[1:-1] + V[:-2]) / (dx_mm**2)

        dVdt = D * d2V - V / tau_ms
        V[1:] += dt_ms * dVdt[1:]  # don't update boundary during stim

        if t_now >= stim_duration_ms:
            V[0] += dt_ms * dVdt[0]

        if j % save_interval == 0:
            V_history.append(V.copy())
            t_arr.append(t_now)

    return x_mm, np.array(t_arr), np.array(V_history).T


def plot_myelination_comparison():
    """
    Compare voltage propagation for unmyelinated, thinly myelinated,
    and fully myelinated axon segments using the cable equation.
    Produces two figures: spatial voltage profiles and sensitivity analysis.
    """
    # Define three myelination states
    states = {
        'Unmyelinated':       {'lambda_mm': 0.2,  'tau_ms': 5.0,   'color': '#e74c3c'},
        'Thinly Myelinated':  {'lambda_mm': 1.0,  'tau_ms': 1.0,   'color': '#f39c12'},
        'Fully Myelinated':   {'lambda_mm': 2.0,  'tau_ms': 0.2,   'color': '#2ecc71'},
    }

    x_mm = np.linspace(0, 10, 1000)
    time_points_ms = [0.5, 1.0, 2.0, 5.0, 10.0]

    # --- Figure 1: Voltage vs Distance at Several Time Points ---
    fig1, axes1 = plt.subplots(1, 3, figsize=(16, 5), sharey=True)

    for idx, (state_name, params) in enumerate(states.items()):
        ax = axes1[idx]
        lam = params['lambda_mm']
        tau = params['tau_ms']
        color = params['color']

        for t in time_points_ms:
            V = cable_equation_analytical(x_mm, t, lam, tau, V0=50.0)
            ax.plot(x_mm, V, label=f't = {t} ms',
                    alpha=0.8, linewidth=1.5)

        ax.set_xlabel('Distance from injection (mm)')
        ax.set_title(f'{state_name}\n(λ={lam} mm, τ={tau} ms)')
        ax.legend(fontsize=8)
        ax.set_xlim(0, 10)
        ax.grid(True, alpha=0.3)
        ax.axhline(y=10, color='gray', linestyle='--', alpha=0.5,
                   label='Threshold ~10 mV')

    axes1[0].set_ylabel('Membrane Potential (mV)')
    fig1.suptitle('Cable Equation: Voltage Propagation Under Different Myelination States',
                  fontsize=13, fontweight='bold')
    plt.tight_layout()
    plt.savefig('cable_equation_myelination.png', dpi=150, bbox_inches='tight')
    plt.show()

    # --- Figure 2: Sensitivity Analysis ---
    fig2, (ax2a, ax2b) = plt.subplots(1, 2, figsize=(13, 5))

    # Panel A: Effect of length constant
    lambdas = np.linspace(0.1, 5.0, 50)
    t_test = 2.0  # ms
    x_test = 3.0  # mm from injection
    tau_fixed = 1.0  # ms

    V_vs_lambda = [cable_equation_analytical(
        np.array([x_test]), t_test, lam, tau_fixed, V0=50.0)[0]
        for lam in lambdas]

    ax2a.plot(lambdas, V_vs_lambda, 'b-', linewidth=2)
    ax2a.set_xlabel('Length Constant λ (mm)')
    ax2a.set_ylabel(f'Voltage at x={x_test} mm, t={t_test} ms (mV)')
    ax2a.set_title('Effect of Length Constant on Signal Reach')
    ax2a.axhline(y=10, color='r', linestyle='--', alpha=0.6,
                 label='Threshold (~10 mV)')
    ax2a.legend()
    ax2a.grid(True, alpha=0.3)

    # Panel B: Effect of time constant
    taus = np.linspace(0.1, 10.0, 50)
    lam_fixed = 1.0  # mm

    V_vs_tau = [cable_equation_analytical(
        np.array([x_test]), t_test, lam_fixed, tau, V0=50.0)[0]
        for tau in taus]

    ax2b.plot(taus, V_vs_tau, 'r-', linewidth=2)
    ax2b.set_xlabel('Time Constant τ (ms)')
    ax2b.set_ylabel(f'Voltage at x={x_test} mm, t={t_test} ms (mV)')
    ax2b.set_title('Effect of Time Constant on Signal Reach')
    ax2b.axhline(y=10, color='r', linestyle='--', alpha=0.6,
                 label='Threshold (~10 mV)')
    ax2b.legend()
    ax2b.grid(True, alpha=0.3)

    fig2.suptitle('Cable Parameter Sensitivity Analysis',
                  fontsize=13, fontweight='bold')
    plt.tight_layout()
    plt.savefig('cable_sensitivity_analysis.png', dpi=150, bbox_inches='tight')
    plt.show()


def print_propagation_distances(threshold_mV=10.0, V0=50.0):
    """
    Calculate and display the maximum distance a signal can propagate
    above threshold for each myelination state at various time points.

    Parameters
    ----------
    threshold_mV : float
        Threshold voltage for signal detection (mV).
    V0 : float
        Initial voltage amplitude (mV).
    """
    states = {
        'Unmyelinated':       {'lambda_mm': 0.2, 'tau_ms': 5.0},
        'Thinly Myelinated':  {'lambda_mm': 1.0, 'tau_ms': 1.0},
        'Fully Myelinated':   {'lambda_mm': 2.0, 'tau_ms': 0.2},
    }

    x_fine = np.linspace(0, 20, 5000)
    t_test = 2.0  # ms

    print(f"\nMaximum propagation distance above {threshold_mV} mV at t = {t_test} ms:")
    print("-" * 55)
    print(f"{'State':<22} {'λ (mm)':<10} {'τ (ms)':<10} {'Max dist (mm)':<14}")
    print("-" * 55)

    for name, params in states.items():
        V = cable_equation_analytical(x_fine, t_test,
                                       params['lambda_mm'], params['tau_ms'], V0)
        above_thresh = x_fine[V >= threshold_mV]
        max_dist = above_thresh[-1] if len(above_thresh) > 0 else 0
        print(f"{name:<22} {params['lambda_mm']:<10.1f} {params['tau_ms']:<10.1f} {max_dist:<14.2f}")


if __name__ == "__main__":
    print("=" * 60)
    print("Cable Equation Solver — Myelination Comparison")
    print("=" * 60)

    print_propagation_distances()

    print("\nGenerating plots...")
    plot_myelination_comparison()
    print("Done. Figures saved to cable_equation_myelination.png")
    print("and cable_sensitivity_analysis.png")
```

---

## Discussion Questions

1. **Myelination and OI Reliability:** Given that myelination increases conduction velocity by ~10× and reduces energy consumption by ~100×, discuss why myelination is arguably a *prerequisite* — not merely a desirable feature — for organoid computing systems intended for real-time applications. What specific computational tasks would become feasible with myelinated organoids that are impossible without? Consider the temporal constraints imposed by the applications discussed in Chapter 10 (reservoir computing).

2. **Disease Modeling Ethics:** Patient-derived iPSC organoids for studying demyelinating diseases like multiple sclerosis or Pelizaeus-Merzbacher disease could accelerate drug development. However, these organoids contain patient-specific genetic information and may develop increasingly complex neural activity. Discuss the ethical framework that should govern the creation, use, and disposal of disease-model organoids. How should informed consent for iPSC donation be structured when the ultimate use is creating neural tissue?

3. **Unmyelinated Organoid Computing:** Could a functional OI system operate entirely without myelination? Consider the computational paradigms in which slow, unmyelinated conduction might actually be *advantageous* — for example, reservoir computing (Chapter 10) where temporal dynamics at multiple timescales may enhance computational capacity. Under what conditions might unmyelinated circuits be preferable?

4. **Speed vs. Efficiency Trade-offs:** Myelination dramatically increases both speed and energy efficiency, but at the cost of added complexity (oligodendrocyte generation, maturation time, myelin maintenance). For an engineered OI system, is there an optimal *degree* of myelination that balances these trade-offs? How would you determine this optimal point experimentally?

5. **Silicon Comparison:** Compare signal propagation in myelinated neural circuits to signal propagation in silicon integrated circuits. Consider: propagation speed (myelinated: ~100 m/s vs. silicon: ~2/3 speed of light), energy per bit, noise tolerance, self-repair capability, and adaptability. What are the fundamental advantages of each approach for computation?

6. **Adaptive Myelination in OI:** Activity-dependent myelination allows the brain to tune conduction velocities in response to learning (Fields, 2015). If organoid systems could recapitulate this adaptive myelination, what implications would this have for OI? Could adaptive myelination serve as an additional learning mechanism beyond synaptic plasticity? How might this be experimentally tested?

7. **The Cable Equation in Organoid Design:** Cable theory provides quantitative predictions for how myelination affects signal propagation. How could these predictions be used to *design* organoid neural circuits with specified conduction velocities and timing properties? Propose an experimental protocol for using cable theory to optimize organoid architecture for a specific computational task.

8. **Developmental Recapitulation:** Human myelination takes decades to complete, with the prefrontal cortex myelinating last. If organoid myelination follows a similar developmental program (accelerated by optimized protocols), what are the implications for the computational capabilities of organoids at different maturation stages? Should OI systems be deployed before myelination is complete, or should we wait for full maturation?

---

## Further Reading

### Foundational Papers

- **Huxley, A. F. & Stämpfli, R. (1949).** "Evidence for saltatory conduction in peripheral myelinated nerve fibres." *Journal of Physiology*, 108(3), 315–339.
  *The definitive experimental demonstration of saltatory conduction using extracellular recordings from single myelinated nerve fibers. Essential reading for understanding the biophysics of myelinated axon function.*

- **Hodgkin, A. L. & Huxley, A. F. (1952).** "A quantitative description of membrane current and its application to conduction and excitation in nerve." *Journal of Physiology*, 117(4), 500–544.
  *The landmark paper establishing the mathematical model of action potential generation. The HH model remains the foundation for all computational neuroscience, including the simulations in this chapter's code exercises.*

- **Tasaki, I. (1939).** "The electro-saltatory transmission of the nerve impulse and the effect of narcosis upon the nerve fiber." *American Journal of Physiology*, 127, 211–227.
  *Tasaki's original demonstration that action currents in myelinated fibers are generated exclusively at nodes of Ranvier — the first direct evidence for saltatory conduction.*

- **Rushton, W. A. H. (1951).** "A theory of the effects of fibre size in medullated nerve." *Journal of Physiology*, 115(1), 101–122.
  *Theoretical analysis predicting the optimal g-ratio and the linear relationship between conduction velocity and fiber diameter in myelinated nerves.*

### Myelin Biology Reviews

- **Nave, K.-A. & Werner, H. B. (2014).** "Myelination of the nervous system: mechanisms and functions." *Annual Review of Cell and Developmental Biology*, 30, 503–533.
  *Comprehensive modern review of myelin biology covering oligodendrocyte development, myelination mechanisms, metabolic support functions of myelin, and disease. An excellent entry point for readers seeking deeper biological understanding.*

- **Baumann, N. & Pham-Dinh, D. (2001).** "Biology of oligodendrocyte and myelin in the mammalian central nervous system." *Physiological Reviews*, 81(2), 871–927.
  *Encyclopedic review of oligodendrocyte biology and myelin biochemistry. Particularly useful for its detailed treatment of myelin protein composition and function.*

- **Waxman, S. G. (1980).** "Determinants of conduction velocity in myelinated nerve fibers." *Muscle & Nerve*, 3(2), 141–150.
  *Classic analysis of the biophysical parameters that determine conduction velocity in myelinated nerves, including the internode length/diameter ratio and the g-ratio.*

### Organoid Myelination

- **Marton, R. M. et al. (2019).** "Differentiation and maturation of oligodendrocytes in human three-dimensional neural cultures." *Nature Neuroscience*, 22, 484–491.
  *Demonstrated oligodendrocyte differentiation and myelination in human brain organoids using assembloid approaches. Key reference for Section 6.5.4.*

- **Kim, H. et al. (2019).** "Pluripotent stem cell-derived cerebral organoids reveal human oligodendrogenesis with dorsal and ventral origins." *Stem Cell Reports*, 12(5), 890–905.
  *Generated organoids containing oligodendrocytes through optimized growth factor protocols, demonstrating spontaneous myelination within cerebral organoids.*

### Activity-Dependent Myelination

- **Gibson, E. M. et al. (2014).** "Neuronal activity promotes oligodendrogenesis and adaptive myelination in the mammalian brain." *Science*, 344(6183), 1252304.
  *Seminal paper demonstrating that neuronal activity drives oligodendrocyte precursor proliferation and myelination. Directly relevant to engineering myelination in electrically active organoids.*

- **Fields, R. D. (2015).** "A new mechanism of nervous system plasticity: activity-dependent myelination." *Nature Reviews Neuroscience*, 16(12), 756–767.
  *Review article proposing activity-dependent myelination as a form of neural plasticity complementary to synaptic plasticity. Important implications for OI learning mechanisms.*

### Biophysics and Computational Modeling

- **Hartline, D. K. & Colman, D. R. (2007).** "Rapid conduction and the evolution of giant axons and myelinated fibers." *Current Biology*, 17(1), R29–R35.
  *Comparative analysis of the evolutionary solutions to the problem of rapid nerve conduction — giant axons versus myelination — with quantitative treatment of the energy savings from myelination.*

- **Chomiak, T. & Bhui, B. (2009).** "What is the optimal value of the g-ratio for myelinated fibers in the rat CNS? A theoretical approach." *PLoS ONE*, 4(11), e7754.
  *Computational modeling study deriving the optimal g-ratio from first principles, providing quantitative targets for assessing myelination quality in organoid systems.*

---

## Future Directions

### 🔮 Open Problems

1. **Accelerated Myelination Protocols:** Current organoid myelination requires 4–8 months — far too long for practical OI development. Can we develop protocols that achieve functional compact myelin in weeks rather than months, perhaps through overexpression of myelin transcription factors (MYRF, SOX10), optimized growth factor cocktails, or electrical stimulation regimes? What are the minimum requirements for "functional" myelination in an OI context — does myelin need to be fully compact, or would loose ensheathment providing partial insulation be sufficient?

2. **Adaptive Myelination in Organoids:** If activity-dependent myelination (Fields, 2015; Gibson et al., 2014) can be recapitulated in organoids, this would constitute a novel *learning mechanism* for OI systems — beyond synaptic plasticity. How would adaptive myelination interact with spike-timing-dependent plasticity (STDP)? Could the two mechanisms operate at different timescales to support both rapid learning (STDP, seconds to minutes) and long-term circuit optimization (myelination, weeks to months)?

3. **Spatial Control of Myelination:** In the brain, myelination is patterned — some axons are myelinated while others are not, and internode lengths vary systematically along axonal paths. Can we engineer spatially controlled myelination in organoids, perhaps using optogenetic or chemogenetic tools to direct oligodendrocyte activity to specific axonal populations? What computational advantages would selective myelination provide?

4. **Myelin Maintenance and Longevity:** Myelin must be continuously maintained by oligodendrocytes and supported metabolically. For long-lived OI systems operating for months or years, what are the requirements for myelin maintenance? How do we prevent the gradual demyelination that occurs in aging biological systems? Can we engineer oligodendrocytes with enhanced longevity and maintenance capacity?

5. **Non-biological Alternatives:** Could synthetic myelin-like materials (lipid nanocoatings, polymer insulation) be applied to organoid axons to achieve the insulation benefits of myelin without the biological complexity of oligodendrocyte generation? What would be gained and lost compared to biological myelination?

### 🚧 Contributor Placeholders

> **🚧 Placeholder 6.A:** Section 6.4 would benefit from a comprehensive computational tutorial implementing the full Hodgkin-Huxley model for a myelinated axon with realistic geometry, including parameterization guides for different species and axon types. Contributors with NEURON or Brian2 experience are especially welcome.

> **🚧 Placeholder 6.B:** A detailed protocol appendix for generating myelinating oligocortical organoids — from iPSC thawing through compact myelin verification — with troubleshooting guides, expected timelines, and quality control checkpoints would be invaluable for laboratories entering this field. Contributors with hands-on organoid myelination experience are encouraged to contribute.

> **🚧 Placeholder 6.C:** Section 6.8 could be expanded with detailed case studies of specific patient-derived organoid models of demyelinating diseases, including differentiation protocols, phenotypic characterizations, drug screening results, and comparisons to animal models. Contributors working with disease-model organoids are welcome.

> **🚧 Placeholder 6.D:** An interactive visualization tool (using Plotly, Bokeh, or similar) for the cable equation solver that allows users to dynamically adjust myelination parameters (λ, τ, internode length, g-ratio) and immediately see the effects on signal propagation would greatly enhance the pedagogical value of Sections 6.3–6.4.

> **🚧 Placeholder 6.E:** A systematic comparison of conduction velocity measurements across published organoid studies — correlating culture age, myelination status, organoid type, and electrophysiological recording method — would serve as a valuable benchmarking resource for the OI field. Contributors are encouraged to maintain this as a living database.

---

## Chapter Summary

This chapter has examined **myelination and signal propagation** — two inextricably linked aspects of neural circuit function that are critical for organoid intelligence. We began with the biology of myelin itself: the lipid-rich insulating sheath produced by oligodendrocytes in the CNS and Schwann cells in the PNS, composed of ~70–80% lipid and ~20–30% protein, and organized into a periodic structure of internodal segments (~0.2–2 mm), nodes of Ranvier (~1–2 μm), and transitional paranodal/juxtaparanodal domains.

We established the biophysical principles of **saltatory conduction** — the process by which action potentials jump between nodes of Ranvier, achieving conduction velocities of 5–150 m/s (compared to 0.5–2 m/s for unmyelinated fibers) while using ~100× less ATP per action potential. The **cable equation** — $\lambda^2 \partial^2V/\partial x^2 - \tau \partial V/\partial t = V$ — provides the quantitative framework for understanding how myelination enhances signal propagation by increasing the length constant (×70) and decreasing the effective membrane capacitance (÷50), dramatically extending the distance over which passive signals can spread between regenerative nodes.

We confronted the **myelination challenge** for organoids: standard protocols lack oligodendrocytes, producing neural circuits that are functionally compromised by slow, unreliable, energy-expensive unmyelinated conduction. Emerging solutions — co-culture with OPCs, assembloid approaches (Marton et al., 2019), and integrated oligocortical spheroid protocols (Kim et al., 2019) — are beginning to achieve functional myelination in organoid systems, though maturation timelines of 4–8 months remain a significant practical constraint. We surveyed demyelinating diseases as both cautionary illustrations of myelin's importance and opportunities for patient-derived organoid disease modeling.

**The central message of this chapter is clear:** myelination is not optional infrastructure — it is a fundamental determinant of neural computation speed, timing precision, energy efficiency, and signal reliability. An unmyelinated organoid computing system is analogous to a modern data center connected by telegraph wires: the processing elements may be sophisticated, but the communication bottleneck renders the system fundamentally unable to achieve its computational potential. Engineering functional myelination into organoids is among the highest-priority challenges for the OI field, requiring integration of developmental biology, materials science, and electrical engineering approaches.

**In the next chapter**, we cross from the biological substrate to the biocomputer interface, examining how **electrophysiological interfaces** — the tools we use to read from and write to neural circuits — enable bidirectional communication between organoid neural networks and external computing systems (Chapter 7).

---

*Chapter 6 of 24 · Part II — Biological Substrate*
*Previous: [Chapter 5: The Vascularization Challenge ←](chapter-05-vascularization-challenge.md)*
*Next: [Chapter 7: Electrophysiological Interfaces →](../part-03-biocomputer-interface/chapter-07-electrophysiological-interfaces.md)*

---

**Copyright © 2026 DaScient, LLC. All rights reserved.**
Licensed under the [Apache License 2.0](../../../LICENSE).
