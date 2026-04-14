# Chapter 3: Neuroscience Foundations for Biocomputing

> *Part I — Foundations*
>
> **Organoid Intelligence: Biological Computing In Living Systems**
> Copyright © 2026 DaScient, LLC

---

## The Squid and the Equation

In the summer of 1939, Alan **Hodgkin** and Andrew **Huxley** traveled to the Marine Biological Laboratory in Plymouth, England, to study the nervous system of the Atlantic squid, *Loligo forbesi*. The squid's giant axon — up to 1 mm in diameter, roughly 1,000 times thicker than a typical mammalian axon — offered an extraordinary experimental opportunity: for the first time, it was possible to insert an electrode *inside* a nerve fiber and measure the voltage changes that accompanied a nerve impulse.

What they found was both beautiful and strange. The nerve impulse — the **action potential** — was not merely a passive electrical discharge, like current flowing through a wire. It was an active, self-regenerating wave of voltage change, driven by the sequential opening and closing of ion channels in the nerve membrane. It had a characteristic shape (a sharp spike followed by a brief undershoot), a fixed amplitude (about 100 millivolts, regardless of stimulus strength), and a maximum speed (about 25 meters per second in the giant axon).

World War II interrupted their work. Hodgkin served in radar research; Huxley worked on gunnery problems. But when they returned to the squid axon in 1947, armed with new electronic equipment and mathematical skills honed by wartime physics, they produced one of the greatest achievements in the history of biology: a complete mathematical model of the action potential (Hodgkin & Huxley, 1952).

The **Hodgkin-Huxley model** — a system of four coupled nonlinear differential equations — described how voltage-dependent sodium and potassium channels generate the action potential. It predicted the shape, speed, threshold, and refractory period of the nerve impulse with quantitative accuracy. It earned Hodgkin and Huxley the 1963 Nobel Prize in Physiology or Medicine. And it remains, more than 70 years later, the foundation of computational neuroscience.

For organoid intelligence, the Hodgkin-Huxley model and the neuroscience it spawned are not merely background knowledge — they are the engineering specifications. To use neural tissue as a computing substrate, we must understand how individual neurons process information, how synapses transmit and modify signals, how networks form and learn, and how these processes can be measured, modeled, and controlled.

This chapter provides that understanding.

---

## 3.1 Neuron Anatomy and Cell Types

### 3.1.1 The Neuron Doctrine

The modern understanding of the nervous system rests on the **neuron doctrine**, established by Santiago Ramón y **Cajal** in the late 19th century. Using Camillo Golgi's silver staining technique, Cajal demonstrated that the nervous system is composed of discrete cellular units — **neurons** — rather than a continuous network (reticular theory).

Each neuron is a distinct cell with four functionally specialized regions:

1. **Dendrites**: Branching extensions that receive input from other neurons. A single cortical neuron may have thousands of dendritic spines, each hosting one or more synapses.

2. **Soma (cell body)**: Contains the nucleus and most of the cell's metabolic machinery. Integrates dendritic inputs and generates signals.

3. **Axon**: A single, often long projection that carries the output signal (action potential) to other neurons. Axons can extend from micrometers to over a meter in length.

4. **Axon terminals (synaptic boutons)**: Specialized endings where the axon forms synapses with target cells, releasing neurotransmitters.

### 3.1.2 Major Neuron Types

The brain contains a tremendous diversity of neuron types, classified by morphology, connectivity, neurotransmitter, and electrophysiological properties:

**Table 3.1: Major Neuron Types Relevant to Organoid Intelligence**

| Neuron Type | Morphology | Neurotransmitter | Function | Found in Organoids? |
|------------|-----------|------------------|----------|-------------------|
| **Pyramidal neurons** | Triangular soma, apical dendrite | Glutamate (excitatory) | Principal excitatory neurons of cortex | Yes (abundant) |
| **Interneurons** | Diverse (basket, chandelier, bipolar) | GABA (inhibitory) | Regulate and synchronize network activity | Yes (limited) |
| **Granule cells** | Small, compact | Glutamate | Cerebellar/hippocampal computation | In directed protocols |
| **Purkinje cells** | Large, elaborate dendrites | GABA | Cerebellar output | In cerebellar organoids |
| **Dopaminergic neurons** | Medium, multipolar | Dopamine | Reward, motivation, motor control | In midbrain organoids |
| **Motor neurons** | Large, long axon | Acetylcholine | Muscle activation | In spinal organoids |

### 3.1.3 Glial Cells

Neurons are outnumbered by **glial cells** — non-neuronal support cells that play essential roles in brain function:

- **Astrocytes**: Star-shaped cells that regulate the chemical environment around neurons, recycle neurotransmitters, modulate synaptic transmission, and provide metabolic support. Astrocytes appear in organoids after ~100 days in culture and may play important roles in organoid computation.

- **Oligodendrocytes**: Produce **myelin** — the insulating sheath that wraps axons and enables rapid signal conduction (saltatory conduction). Myelination is rare in current organoid protocols and is a major limitation for long-range signal propagation (see Chapter 6).

- **Microglia**: The brain's immune cells, derived from mesodermal precursors. Microglia prune unnecessary synapses during development and respond to injury. They are typically absent from standard brain organoid protocols (which derive from ectoderm) unless specifically co-cultured.

> **Cross-reference:** For a detailed treatment of myelination in organoids and its implications for signal propagation, see Chapter 6.

---

## 3.2 The Resting Membrane Potential

### 3.2.1 Ionic Basis

All neurons maintain a **resting membrane potential** — a voltage difference across the cell membrane, with the interior negative relative to the exterior. This potential, typically around **−70 mV** in cortical neurons, arises from the unequal distribution of ions across the membrane and the selective permeability of the membrane to different ion species.

**Table 3.2: Typical Ion Concentrations in Mammalian Neurons**

| Ion | Intracellular [mM] | Extracellular [mM] | Equilibrium Potential (mV) |
|-----|--------------------|--------------------|---------------------------|
| K⁺ | 140 | 5 | −89 |
| Na⁺ | 15 | 145 | +61 |
| Cl⁻ | 10 | 110 | −63 |
| Ca²⁺ | 0.0001 | 2 | +123 |

The resting membrane potential is maintained by three mechanisms:

1. **Ion channels**: The membrane is selectively permeable to different ions through protein channels. At rest, the membrane is most permeable to K⁺ (through leak channels), which drives the resting potential toward the K⁺ equilibrium potential.

2. **The Na⁺/K⁺-ATPase pump**: An active transport protein that pumps 3 Na⁺ ions out and 2 K⁺ ions in per ATP molecule hydrolyzed, maintaining the concentration gradients that drive the resting potential. This pump consumes approximately **50–70% of the brain's total energy budget**.

3. **The Gibbs-Donnan equilibrium**: Large, negatively charged proteins trapped inside the cell contribute to the negative intracellular potential.

### 3.2.2 The Nernst Equation

The equilibrium potential for a single ion species — the voltage at which the electrical driving force exactly balances the concentration gradient — is given by the **Nernst equation**:

$$
E_{\text{ion}} = \frac{RT}{zF} \ln \frac{[\text{ion}]_{\text{out}}}{[\text{ion}]_{\text{in}}}
$$

where:
- $R$ = universal gas constant (8.314 J·mol⁻¹·K⁻¹)
- $T$ = absolute temperature (K)
- $z$ = valence of the ion (+1 for K⁺, +1 for Na⁺, −1 for Cl⁻, +2 for Ca²⁺)
- $F$ = Faraday's constant (96,485 C·mol⁻¹)
- $[\text{ion}]_{\text{out}}$ and $[\text{ion}]_{\text{in}}$ = extracellular and intracellular ion concentrations

At body temperature (37°C = 310 K), the Nernst equation simplifies to:

$$
E_{\text{ion}} = \frac{26.7 \text{ mV}}{z} \ln \frac{[\text{ion}]_{\text{out}}}{[\text{ion}]_{\text{in}}} = \frac{61.5 \text{ mV}}{z} \log_{10} \frac{[\text{ion}]_{\text{out}}}{[\text{ion}]_{\text{in}}}
$$

### 3.2.3 The Goldman-Hodgkin-Katz Equation

When the membrane is permeable to multiple ion species, the resting potential is determined by the **Goldman-Hodgkin-Katz (GHK) voltage equation**:

$$
V_m = \frac{RT}{F} \ln \frac{P_{\text{K}}[\text{K}^+]_o + P_{\text{Na}}[\text{Na}^+]_o + P_{\text{Cl}}[\text{Cl}^-]_i}{P_{\text{K}}[\text{K}^+]_i + P_{\text{Na}}[\text{Na}^+]_i + P_{\text{Cl}}[\text{Cl}^-]_o}
$$

where $P_{\text{K}}$, $P_{\text{Na}}$, and $P_{\text{Cl}}$ are the membrane permeabilities to potassium, sodium, and chloride, respectively. Note that the chloride terms are inverted because Cl⁻ carries negative charge.

At rest, the permeability ratio is approximately $P_{\text{K}} : P_{\text{Na}} : P_{\text{Cl}} = 1 : 0.04 : 0.45$, which yields $V_m \approx -70$ mV — consistent with experimental measurements.

---

## 3.3 The Action Potential

### 3.3.1 Overview

The **action potential** is a brief (~1–2 ms), all-or-none reversal of the membrane potential that propagates along the axon. It is the fundamental unit of neural signaling — the "bit" (loosely speaking) of neural communication.

The action potential has several characteristic properties:

1. **Threshold**: The membrane must be depolarized to a critical voltage (~−55 mV) to trigger an action potential. Below threshold, the membrane responds passively.
2. **All-or-none**: Once triggered, the action potential always reaches the same peak amplitude (~+40 mV), regardless of stimulus strength. Information is encoded not in spike amplitude but in spike timing and rate.
3. **Self-regenerating**: The action potential propagates without decrement because it is actively regenerated at each point along the axon.
4. **Refractory period**: After firing, the neuron enters a **refractory period** during which it cannot fire again (absolute refractory period, ~1 ms) or requires a stronger-than-normal stimulus (relative refractory period, ~2–4 ms). This limits maximum firing rate to ~500–1,000 Hz.

### 3.3.2 The Hodgkin-Huxley Model (1952)

The **Hodgkin-Huxley (HH) model** describes the action potential as the result of voltage-dependent changes in membrane conductance to Na⁺ and K⁺. The model treats the membrane as an electrical circuit:

$$
C_m \frac{dV}{dt} = -g_{\text{Na}} m^3 h (V - E_{\text{Na}}) - g_{\text{K}} n^4 (V - E_{\text{K}}) - g_L (V - E_L) + I_{\text{ext}}
$$

where:
- $C_m$ = membrane capacitance (~1 μF/cm²)
- $V$ = membrane potential
- $g_{\text{Na}}$ = maximum Na⁺ conductance (~120 mS/cm²)
- $g_{\text{K}}$ = maximum K⁺ conductance (~36 mS/cm²)
- $g_L$ = leak conductance (~0.3 mS/cm²)
- $E_{\text{Na}}$, $E_{\text{K}}$, $E_L$ = reversal potentials for Na⁺, K⁺, and leak (~+50, −77, −54.4 mV)
- $m$, $h$, $n$ = gating variables (dimensionless, between 0 and 1)
- $I_{\text{ext}}$ = externally applied current

The gating variables $m$ (Na⁺ activation), $h$ (Na⁺ inactivation), and $n$ (K⁺ activation) follow first-order kinetics:

$$
\frac{dm}{dt} = \alpha_m(V)(1 - m) - \beta_m(V) m
$$

$$
\frac{dh}{dt} = \alpha_h(V)(1 - h) - \beta_h(V) h
$$

$$
\frac{dn}{dt} = \alpha_n(V)(1 - n) - \beta_n(V) n
$$

The rate constants $\alpha$ and $\beta$ are empirical functions of voltage, determined by Hodgkin and Huxley from their voltage-clamp experiments on the squid giant axon:

$$
\alpha_n(V) = \frac{0.01(V + 55)}{1 - \exp(-(V + 55)/10)}
$$

$$
\beta_n(V) = 0.125 \exp\left(\frac{-(V + 65)}{80}\right)
$$

$$
\alpha_m(V) = \frac{0.1(V + 40)}{1 - \exp(-(V + 40)/10)}
$$

$$
\beta_m(V) = 4 \exp\left(\frac{-(V + 65)}{18}\right)
$$

$$
\alpha_h(V) = 0.07 \exp\left(\frac{-(V + 65)}{20}\right)
$$

$$
\beta_h(V) = \frac{1}{1 + \exp(-(V + 35)/10)}
$$

**Table 3.3: Hodgkin-Huxley Model Parameters (Squid Giant Axon, 6.3°C)**

| Parameter | Symbol | Value | Unit |
|-----------|--------|-------|------|
| Membrane capacitance | $C_m$ | 1.0 | μF/cm² |
| Max Na⁺ conductance | $\bar{g}_{\text{Na}}$ | 120 | mS/cm² |
| Max K⁺ conductance | $\bar{g}_{\text{K}}$ | 36 | mS/cm² |
| Leak conductance | $g_L$ | 0.3 | mS/cm² |
| Na⁺ reversal potential | $E_{\text{Na}}$ | +50 | mV |
| K⁺ reversal potential | $E_{\text{K}}$ | −77 | mV |
| Leak reversal potential | $E_L$ | −54.4 | mV |
| Resting potential | $V_{\text{rest}}$ | −65 | mV |

### 3.3.3 Phases of the Action Potential

The action potential can be divided into five phases, each explained by the Hodgkin-Huxley model:

1. **Resting state** ($V \approx -65$ mV): Na⁺ channels closed ($m$ low), K⁺ channels partially open ($n$ moderate). Membrane conductance dominated by K⁺ leak.

2. **Depolarization** (rising phase): A stimulus depolarizes the membrane to threshold (~−55 mV). Na⁺ channels begin to open ($m$ increases rapidly). The resulting Na⁺ influx further depolarizes the membrane, opening more Na⁺ channels — a positive feedback loop. The membrane potential swings toward $E_{\text{Na}}$ (+50 mV).

3. **Peak** ($V \approx +40$ mV): Na⁺ channels reach maximum opening. K⁺ channel activation ($n$) is beginning to increase (with slower kinetics than $m$).

4. **Repolarization** (falling phase): Na⁺ channels inactivate ($h$ decreases). K⁺ channels fully open ($n$ at maximum). The combined effect — reduced Na⁺ influx and increased K⁺ efflux — drives the membrane back toward $E_{\text{K}}$.

5. **Hyperpolarization** (undershoot): K⁺ channels remain open after $V$ returns to rest, briefly driving the membrane below the resting potential (to ~−80 mV). K⁺ channels then close, and the membrane returns to rest.

The entire sequence takes approximately **1–2 ms** in the squid giant axon (faster in mammalian neurons at 37°C).

### 3.3.4 Action Potential Propagation

Action potentials propagate along the axon through a process of local current spread: the depolarization at one point along the axon passively depolarizes adjacent regions to threshold, triggering new action potentials.

Two mechanisms enhance propagation speed:

1. **Axon diameter**: Larger axons have lower internal resistance and conduct faster. The squid giant axon (~1 mm diameter) achieves ~25 m/s. This is the strategy used by invertebrates.

2. **Myelination**: Vertebrate axons are wrapped in **myelin** — an insulating sheath produced by oligodendrocytes (CNS) or Schwann cells (PNS). Myelin restricts ion flow to small gaps called **nodes of Ranvier**, where voltage-gated channels are concentrated. The action potential "jumps" from node to node (**saltatory conduction**), achieving speeds of ~100 m/s in a much thinner axon (~10 μm).

> **Cross-reference:** Myelination in organoids is addressed in Chapter 6. The absence of myelination in most current organoid protocols limits signal propagation speed and reliability.

---

## 3.4 Synaptic Transmission

### 3.4.1 Chemical Synapses

Most synapses in the mammalian brain are **chemical synapses**, which convert an electrical signal (action potential) into a chemical signal (neurotransmitter release) and back to an electrical signal (postsynaptic potential).

The sequence of events at a chemical synapse:

1. **Action potential arrives** at the presynaptic terminal.
2. **Voltage-gated Ca²⁺ channels open**, allowing Ca²⁺ influx.
3. **Ca²⁺ triggers vesicle fusion**: Synaptic vesicles, loaded with neurotransmitter, fuse with the presynaptic membrane and release their contents into the synaptic cleft (~20 nm wide).
4. **Neurotransmitter diffuses** across the cleft and binds to receptors on the postsynaptic membrane.
5. **Postsynaptic receptors activate**: Ionotropic receptors (ligand-gated ion channels) open directly; metabotropic receptors activate intracellular signaling cascades via G-proteins.
6. **Postsynaptic potential generated**: Ion flow through open channels produces a voltage change in the postsynaptic neuron — either depolarizing (excitatory, EPSP) or hyperpolarizing (inhibitory, IPSP).
7. **Neurotransmitter cleared**: Enzymes (e.g., acetylcholinesterase) degrade the neurotransmitter, or transporters recycle it back into the presynaptic terminal.

**Table 3.4: Properties of Excitatory and Inhibitory Postsynaptic Potentials**

| Property | EPSP | IPSP |
|----------|------|------|
| **Effect on $V_m$** | Depolarization (toward threshold) | Hyperpolarization (away from threshold) |
| **Primary ion(s)** | Na⁺ (and K⁺) influx | Cl⁻ influx or K⁺ efflux |
| **Primary neurotransmitter** | Glutamate | GABA |
| **Reversal potential** | ~0 mV (AMPA/NMDA) | ~−70 to −80 mV |
| **Amplitude** | ~0.5–1 mV (single synapse) | ~0.5–1 mV (single synapse) |
| **Duration** | ~10–20 ms | ~20–50 ms |

### 3.4.2 Electrical Synapses (Gap Junctions)

**Electrical synapses** (gap junctions) are direct physical connections between neurons, formed by pairs of hemichannels (connexons) that create a pore allowing ions and small molecules to flow between cells.

Properties of electrical synapses:
- **Speed**: Near-instantaneous transmission (no synaptic delay).
- **Bidirectional**: Current can flow in both directions (though some gap junctions show rectification).
- **Synchronization**: Ideal for synchronizing activity across groups of neurons.
- **Development**: Gap junctions are particularly abundant in developing neural tissue and are likely important in organoid self-organization.

Gap junctions play a significant role in organoid electrophysiology, particularly during early development when chemical synapses are immature. Electrical coupling through gap junctions may contribute to the synchronized calcium waves observed in young organoids.

### 3.4.3 Synaptic Integration

Individual EPSPs and IPSPs are small (~0.5–1 mV) compared to the ~15 mV depolarization needed to reach threshold. Neurons must therefore integrate inputs from many synapses to determine whether to fire.

Two forms of integration:

1. **Spatial summation**: EPSPs and IPSPs from different synapses, active at the same time, sum algebraically at the axon hillock (the site of action potential initiation).

2. **Temporal summation**: EPSPs and IPSPs from the same synapse, arriving in rapid succession, sum if they overlap in time (i.e., if the interval between inputs is shorter than the membrane time constant $\tau_m$).

The membrane time constant is:

$$
\tau_m = R_m \cdot C_m
$$

where $R_m$ is the membrane resistance and $C_m$ is the membrane capacitance. For a typical cortical neuron, $\tau_m \approx 20$ ms, meaning that inputs arriving within ~20 ms of each other can summate effectively.

---

## 3.5 Neurotransmitter Systems

### 3.5.1 Glutamate: The Principal Excitatory Neurotransmitter

**Glutamate** is the most abundant excitatory neurotransmitter in the brain, used by ~80% of cortical neurons (primarily pyramidal cells). Glutamate receptors include:

- **AMPA receptors**: Fast ionotropic receptors permeable to Na⁺ and K⁺. Mediate the fast component of the EPSP. Rapid opening (~1 ms) and deactivation (~5 ms).

- **NMDA receptors**: Slower ionotropic receptors permeable to Na⁺, K⁺, and Ca²⁺. The NMDA receptor has a unique voltage-dependent property: at resting potential, the channel pore is blocked by a Mg²⁺ ion. This block is relieved by depolarization, making the NMDA receptor a **coincidence detector** — it opens only when the postsynaptic membrane is already depolarized (by AMPA receptor activation) while glutamate is present. This property is central to synaptic plasticity and the **Hebbian learning rule** (see Section 3.6).

- **Metabotropic glutamate receptors (mGluRs)**: G-protein-coupled receptors that modulate neuronal excitability and synaptic transmission through intracellular signaling cascades.

### 3.5.2 GABA: The Principal Inhibitory Neurotransmitter

**Gamma-aminobutyric acid (GABA)** is the principal inhibitory neurotransmitter, used by interneurons to regulate and balance excitatory activity. GABA receptors include:

- **GABA_A receptors**: Fast ionotropic receptors permeable to Cl⁻. Produce fast IPSPs. Target of benzodiazepines, barbiturates, and anesthetics.

- **GABA_B receptors**: Metabotropic receptors that activate K⁺ channels (producing slow IPSPs) and inhibit Ca²⁺ channels (reducing neurotransmitter release).

**The excitation-inhibition (E/I) balance** — the ratio of excitatory to inhibitory synaptic input — is critical for proper neural function. Disruptions in E/I balance are associated with epilepsy (excess excitation) and cognitive impairment (excess inhibition). Maintaining appropriate E/I balance in organoids is important for stable computation.

> **Note for organoid computing:** In the developing brain, GABA is initially excitatory (because the Cl⁻ reversal potential is more positive than the resting potential in immature neurons, due to high intracellular Cl⁻). The "GABA switch" — the transition from excitatory to inhibitory GABA signaling — occurs during postnatal development and may or may not occur in organoid cultures, depending on maturation state. This is a potential complication for organoid computing systems.

### 3.5.3 Dopamine

**Dopamine** is a modulatory neurotransmitter involved in reward, motivation, motor control, and learning. Dopaminergic neurons in the ventral tegmental area (VTA) and substantia nigra project widely throughout the brain, modulating synaptic plasticity and network dynamics.

Dopamine's role in **reinforcement learning** — strengthening synapses associated with rewarding outcomes — may be relevant to training organoid computing systems. Dopamine can be exogenously applied to organoid cultures or produced endogenously in midbrain organoids.

### 3.5.4 Acetylcholine

**Acetylcholine (ACh)** was the first neurotransmitter discovered (by Otto Loewi in 1921). In the brain, ACh modulates attention, arousal, and memory formation. In the periphery, ACh is the neurotransmitter at neuromuscular junctions.

Cholinergic signaling may play a role in organoid computation through its effects on network excitability and synaptic plasticity. The nicotinic ACh receptor, an ionotropic receptor, provides fast excitatory modulation, while muscarinic receptors provide slower, modulatory effects.

**Table 3.5: Major Neurotransmitter Systems**

| Neurotransmitter | Type | Primary Receptors | Function | Relevance to OI |
|-----------------|------|-------------------|----------|-----------------|
| **Glutamate** | Excitatory amino acid | AMPA, NMDA, mGluR | Fast excitation, plasticity | Primary excitatory signaling |
| **GABA** | Inhibitory amino acid | GABA_A, GABA_B | Fast/slow inhibition | E/I balance, oscillations |
| **Dopamine** | Monoamine | D1–D5 | Reward, modulation | Reinforcement learning |
| **Acetylcholine** | Amine | nAChR, mAChR | Attention, plasticity | Network modulation |
| **Serotonin** | Monoamine | 5-HT₁–5-HT₇ | Mood, cognition | Neurogenesis, development |
| **Norepinephrine** | Monoamine | α₁, α₂, β₁–β₃ | Arousal, attention | Signal-to-noise modulation |

---

## 3.6 Neural Plasticity: The Basis of Biological Learning

### 3.6.1 Hebb's Rule (1949)

In 1949, Donald **Hebb** proposed a learning rule that would become one of the most influential ideas in neuroscience:

> *"When an axon of cell A is near enough to excite cell B and repeatedly or persistently takes part in firing it, some growth process or metabolic change takes place in one or both cells such that A's efficiency, as one of the cells firing B, is increased."*
> — Donald Hebb, *The Organization of Behavior* (1949)

The **Hebbian learning rule** is often summarized as "cells that fire together, wire together." In mathematical form:

$$
\Delta w_{ij} = \eta \cdot x_i \cdot x_j
$$

where $\Delta w_{ij}$ is the change in synaptic weight from neuron $i$ to neuron $j$, $\eta$ is the learning rate, and $x_i$ and $x_j$ are the activities of the pre- and postsynaptic neurons.

Hebb's rule has a crucial property: it is **local** — each synapse can be updated using only information available at that synapse (the activities of its pre- and postsynaptic neurons). This locality makes Hebbian learning biologically plausible and directly relevant to organoid computing, where global error signals (as in backpropagation) are difficult to implement.

### 3.6.2 Long-Term Potentiation (LTP)

**Long-term potentiation (LTP)** is the experimentally observed phenomenon underlying Hebbian learning. First described by Terje Lømo in 1966 and formally characterized by Tim Bliss and Lømo in 1973, LTP is a long-lasting increase in synaptic strength following high-frequency stimulation (Bliss & Lømo, 1973).

**NMDA receptor-dependent LTP** (the most studied form) requires:

1. **Presynaptic glutamate release**: Glutamate binds to both AMPA and NMDA receptors.
2. **Postsynaptic depolarization**: AMPA receptor activation depolarizes the postsynaptic membrane.
3. **NMDA receptor activation**: The Mg²⁺ block is relieved by depolarization, and the NMDA channel opens — but only if glutamate is also present (coincidence detection).
4. **Ca²⁺ influx**: Ca²⁺ enters through the NMDA receptor channel, activating intracellular signaling cascades (CaMKII, PKC).
5. **Synaptic strengthening**: More AMPA receptors are inserted into the postsynaptic membrane, and existing receptors are phosphorylated to increase conductance.

LTP can last hours, days, or even longer, and is widely regarded as a cellular mechanism for learning and memory.

### 3.6.3 Long-Term Depression (LTD)

**Long-term depression (LTD)** is the complementary process: a long-lasting decrease in synaptic strength following low-frequency stimulation or specific patterns of activity.

LTD involves:
- Lower levels of Ca²⁺ influx (compared to LTP)
- Activation of phosphatases (calcineurin, PP1) rather than kinases
- Removal of AMPA receptors from the postsynaptic membrane

The balance between LTP and LTD allows neural circuits to both strengthen important connections and weaken irrelevant ones — a process essential for learning, memory, and maintaining network stability.

### 3.6.4 Spike-Timing-Dependent Plasticity (STDP)

**Spike-timing-dependent plasticity (STDP)** refines the Hebbian rule by adding temporal specificity: the precise timing of pre- and postsynaptic spikes determines whether a synapse is strengthened or weakened (Bi & Poo, 1998; Markram et al., 1997).

The STDP rule:

$$
\Delta w = \begin{cases} A_+ \exp\left(\frac{-\Delta t}{\tau_+}\right) & \text{if } \Delta t > 0 \text{ (pre before post → LTP)} \\ -A_- \exp\left(\frac{\Delta t}{\tau_-}\right) & \text{if } \Delta t < 0 \text{ (post before pre → LTD)} \end{cases}
$$

where:
- $\Delta t = t_{\text{post}} - t_{\text{pre}}$ is the time difference between post- and presynaptic spikes
- $A_+$ and $A_-$ are the maximum amplitudes of potentiation and depression
- $\tau_+$ and $\tau_-$ are the time constants (~20 ms for potentiation, ~20–40 ms for depression)

**Key insight for organoid computing:** STDP provides a mechanism for organoid circuits to learn temporal relationships in their inputs — the order in which events occur. This is directly relevant to the DishBrain experiment (Chapter 1, Section 1.5.1), where neurons learned to associate paddle movements with ball position through the temporal structure of feedback stimulation.

**Table 3.6: Comparison of Plasticity Mechanisms**

| Property | Hebbian/LTP | Anti-Hebbian/LTD | STDP |
|----------|------------|-------------------|------|
| **Direction** | Strengthening | Weakening | Both, timing-dependent |
| **Trigger** | Correlated pre/post activity | Uncorrelated or low-frequency | Precise spike timing |
| **Time scale** | Milliseconds to induce, hours–days to maintain | Milliseconds to induce, hours–days to maintain | Millisecond-precision window |
| **Key molecule** | Ca²⁺ (high) / CaMKII | Ca²⁺ (low) / calcineurin | Ca²⁺ (amplitude and temporal profile) |
| **NMDA dependent?** | Yes (for most forms) | Yes (for some forms) | Yes |

---

## 3.7 Neural Circuits and Network Motifs

### 3.7.1 Basic Circuit Motifs

Neural computation arises not from individual neurons but from their organization into **circuits** — recurring patterns of connectivity called **network motifs**. Several motifs are particularly important:

1. **Feedforward excitation**: Neuron A excites Neuron B, which excites Neuron C. Implements a relay or signal amplification chain.

2. **Feedforward inhibition**: Neuron A excites both Neuron B (excitatory target) and an inhibitory interneuron that also inhibits B. The inhibition arrives slightly after the excitation, sharpening the temporal window for signal transmission and improving temporal precision.

3. **Feedback inhibition (recurrent inhibition)**: An excitatory neuron activates an inhibitory interneuron that inhibits the original excitatory neuron. Creates a self-limiting circuit that prevents runaway excitation. Critical for maintaining E/I balance.

4. **Lateral inhibition**: An excitatory neuron activates inhibitory interneurons that suppress neighboring excitatory neurons. Sharpens spatial contrast and creates "winner-take-all" competition between neural populations.

5. **Recurrent excitation**: Excitatory neurons form positive feedback loops, creating persistent activity that can maintain information in the absence of ongoing input — a potential mechanism for **working memory**.

6. **Oscillatory circuits**: Reciprocal connections between excitatory and inhibitory populations create rhythmic oscillations, with the period determined by synaptic time constants and connection strengths.

### 3.7.2 Cortical Microcircuitry

The cerebral cortex — the brain region most commonly modeled in organoids — has a stereotyped **laminar** (layered) organization with six layers, each containing characteristic cell types and connection patterns:

**Table 3.7: Cortical Layers and Their Functions**

| Layer | Name | Primary Cell Types | Primary Connections |
|-------|------|-------------------|-------------------|
| I | Molecular | Few neurons; dendrites, axons | Feedback from higher areas |
| II/III | External granular/pyramidal | Small pyramidal neurons | Corticocortical (lateral) |
| IV | Internal granular | Spiny stellate cells | Thalamocortical input |
| V | Internal pyramidal | Large pyramidal neurons | Subcortical output (brainstem, spinal cord) |
| VI | Polymorphic | Diverse | Corticothalamic feedback |

In organoids, this laminar organization is partially recapitulated — organoids often show distinct progenitor and neuronal zones, with some evidence of layer-specific marker expression (TBR1 for deep layers, SATB2 for upper layers) — but the precise six-layer architecture of the mature cortex is not fully reproduced.

### 3.7.3 The Canonical Cortical Microcircuit

Douglas and Martin (1991) proposed a **canonical microcircuit** — a basic computational module that is repeated across cortical areas and may underlie diverse cortical functions:

```
Thalamic input
     ↓
  Layer IV (input layer)
     ↓
  Layer II/III (processing, lateral connections)
     ↓        ↗ ↘
  Layer V   Layer VI
  (output)  (thalamic feedback)
```

Each stage involves both excitatory and inhibitory neurons in stereotyped arrangements. This canonical circuit may serve as a design template for organoid computing systems: if organoids can be engineered to reproduce this motif, they may gain the computational capabilities associated with cortical processing.

---

## 3.8 Neural Oscillations and Rhythms

### 3.8.1 Types of Brain Oscillations

Neural populations generate rhythmic electrical activity at characteristic frequencies, detectable by electroencephalography (EEG), local field potential (LFP) recordings, and MEA recordings from organoids. These **neural oscillations** are classified by frequency band:

**Table 3.8: Neural Oscillation Frequency Bands**

| Band | Frequency (Hz) | Waveform | Associated Brain State | Observed in Organoids? |
|------|----------------|----------|----------------------|----------------------|
| **Delta** (δ) | 0.5–4 | Slow, large amplitude | Deep sleep | Yes (slow waves) |
| **Theta** (θ) | 4–8 | Regular, rhythmic | Memory encoding, navigation | Partial |
| **Alpha** (α) | 8–13 | Sinusoidal, posterior | Relaxed wakefulness, idle | Not typically |
| **Beta** (β) | 13–30 | Fast, lower amplitude | Active thinking, motor planning | Partial |
| **Gamma** (γ) | 30–100+ | Fast, low amplitude | Attention, perception, binding | Yes (in mature organoids) |

### 3.8.2 Mechanisms of Oscillation

Neural oscillations arise from the interplay of excitatory and inhibitory neurons:

1. **Excitatory neurons** fire, exciting local inhibitory interneurons.
2. **Inhibitory interneurons** fire, suppressing excitatory neurons.
3. **Inhibition wanes** (due to GABA receptor desensitization and synaptic depression), allowing excitatory neurons to fire again.
4. The cycle repeats, with the **oscillation frequency** determined by the time constants of excitation, inhibition, and their synaptic interactions.

**Gamma oscillations** (30–100 Hz) are driven primarily by **parvalbumin-expressing (PV+) basket cells** — fast-spiking interneurons that provide powerful, precisely timed inhibition to the soma and proximal dendrites of pyramidal neurons. The gamma cycle creates brief windows of opportunity for pyramidal cell firing, implementing a temporal gating mechanism that may underlie selective attention and feature binding.

### 3.8.3 Oscillations and Computation

Neural oscillations are not merely epiphenomena — they play active roles in computation:

1. **Temporal binding**: Neurons representing different features of the same object fire synchronously within gamma cycles, "binding" them into a unified percept (Gray & Singer, 1989).

2. **Communication through coherence**: Two brain areas can selectively communicate by synchronizing their oscillations at the same phase, creating a temporal window for information transfer (Fries, 2005).

3. **Phase coding**: Information can be encoded in the phase of a spike relative to an ongoing oscillation, providing much higher information capacity than rate coding alone (O'Keefe & Recce, 1993).

4. **Memory consolidation**: Slow oscillations during sleep coordinate the replay and consolidation of memories formed during waking (Buzsáki, 2015).

For organoid intelligence, the presence of oscillatory activity is both a marker of network maturity and a potential computational resource. Mature organoids displaying gamma-band oscillations may have more sophisticated computational capabilities than younger organoids with only slow-wave activity.

> **Cross-reference:** For detailed treatment of how oscillatory activity can be harnessed for computation, see Chapter 10 (reservoir computing) and Chapter 12 (neural coding).

---

## 3.9 The Neural Basis of Learning and Memory

### 3.9.1 Types of Memory

Learning and memory — the central requirements for organoid computing — are mediated by different neural circuits and molecular mechanisms:

**Table 3.9: Types of Memory and Their Neural Substrates**

| Memory Type | Duration | Brain Region | Molecular Mechanism | Relevant to OI? |
|------------|----------|-------------|---------------------|-----------------|
| **Sensory memory** | <1 s | Primary sensory cortex | Persistent neural activity | Yes (immediate responses) |
| **Working memory** | Seconds–minutes | Prefrontal cortex | Recurrent excitation, sustained firing | Yes (short-term computation) |
| **Short-term synaptic** | Seconds–minutes | Various | Residual Ca²⁺, vesicle depletion | Yes (short-term plasticity) |
| **Long-term (explicit)** | Hours–lifetime | Hippocampus → cortex | LTP, structural change, gene expression | Yes (long-term learning) |
| **Long-term (implicit)** | Hours–lifetime | Cerebellum, basal ganglia | LTD, procedural learning | Partially |

### 3.9.2 From Short-Term to Long-Term Memory

The transition from short-term to long-term memory involves a cascade of molecular events:

1. **Early LTP** (minutes–hours): Post-translational modification of existing proteins (phosphorylation of AMPA receptors, insertion of new AMPA receptors).
2. **Late LTP** (hours–days): Requires gene transcription and protein synthesis. New dendritic spines grow, existing spines enlarge, and the structural reorganization of synaptic connections makes the change more permanent.
3. **Systems consolidation** (days–weeks): Hippocampal memories are gradually transferred to cortical networks through coordinated replay during sleep.

For organoid computing, the critical question is whether organoid cultures can support these molecular cascades. Recent evidence suggests that organoids can exhibit both short-term plasticity (synaptic facilitation and depression) and early LTP-like phenomena, but the formation of stable, long-lasting memories in organoids remains an active area of investigation.

### 3.9.3 Synaptic Tagging and Capture

The **synaptic tagging and capture** hypothesis (Frey & Morris, 1997) addresses how input-specific synaptic changes (which are local) can be stabilized by cell-wide protein synthesis. According to this model:

1. A synapse that undergoes activity-dependent modification sets a local "**tag**."
2. Proteins synthesized in the soma in response to strong stimulation are captured by tagged synapses.
3. Only tagged synapses are stabilized; untagged synapses return to baseline.

This mechanism allows neurons to selectively consolidate relevant memories while discarding irrelevant ones — a form of biological memory management that has no exact analog in digital computers.

---

## Worked Examples

### Worked Example 3.1: Solving the Nernst Equation

**Problem:** Calculate the equilibrium potential for K⁺, Na⁺, Cl⁻, and Ca²⁺ ions at 37°C using the concentrations in Table 3.2.

**Solution:**

The Nernst equation at 37°C (310 K):

$$
E_{\text{ion}} = \frac{61.5 \text{ mV}}{z} \log_{10} \frac{[\text{ion}]_{\text{out}}}{[\text{ion}]_{\text{in}}}
$$

**Potassium (K⁺):** $z = +1$

$$
E_{\text{K}} = \frac{61.5}{+1} \log_{10} \frac{5}{140} = 61.5 \times \log_{10}(0.0357) = 61.5 \times (-1.447) = \boxed{-89.0 \text{ mV}}
$$

**Sodium (Na⁺):** $z = +1$

$$
E_{\text{Na}} = \frac{61.5}{+1} \log_{10} \frac{145}{15} = 61.5 \times \log_{10}(9.667) = 61.5 \times 0.985 = \boxed{+60.6 \text{ mV}}
$$

**Chloride (Cl⁻):** $z = -1$

$$
E_{\text{Cl}} = \frac{61.5}{-1} \log_{10} \frac{110}{10} = -61.5 \times \log_{10}(11) = -61.5 \times 1.041 = \boxed{-64.0 \text{ mV}}
$$

**Calcium (Ca²⁺):** $z = +2$

$$
E_{\text{Ca}} = \frac{61.5}{+2} \log_{10} \frac{2}{0.0001} = 30.75 \times \log_{10}(20{,}000) = 30.75 \times 4.301 = \boxed{+132.3 \text{ mV}}
$$

**Interpretation:** K⁺ has the most negative equilibrium potential (−89 mV), which is close to the resting potential (−70 mV), reflecting the high resting permeability to K⁺. Na⁺ and Ca²⁺ have strongly positive equilibrium potentials, meaning that opening Na⁺ or Ca²⁺ channels will depolarize the neuron — driving the action potential and triggering synaptic transmission, respectively. ∎

---

### Worked Example 3.2: EPSP/IPSP Summation

**Problem:** A cortical pyramidal neuron at rest (−70 mV) receives 12 simultaneous EPSPs (each +0.8 mV) and 5 simultaneous IPSPs (each −1.0 mV) within a single membrane time constant. Does the neuron reach threshold (−55 mV)?

**Solution:**

**Step 1: Sum all postsynaptic potentials**

Assuming linear summation (valid for small potentials far from reversal):

$$
\Delta V_{\text{total}} = \sum \text{EPSPs} + \sum \text{IPSPs} = (12 \times 0.8) + (5 \times (-1.0)) = 9.6 - 5.0 = +4.6 \text{ mV}
$$

**Step 2: Calculate resulting membrane potential**

$$
V_m = V_{\text{rest}} + \Delta V_{\text{total}} = -70 + 4.6 = -65.4 \text{ mV}
$$

**Step 3: Compare to threshold**

$V_m = -65.4$ mV < threshold = $-55$ mV

**The neuron does not fire.** It would need an additional $-55 - (-65.4) = 9.6$ mV of depolarization, equivalent to approximately 12 more simultaneous EPSPs (at 0.8 mV each) without additional inhibition.

**Step 4: How many EPSPs are needed to reach threshold?**

$$
N_{\text{EPSP}} \geq \frac{V_{\text{threshold}} - V_{\text{rest}} - \sum \text{IPSPs}}{\text{EPSP amplitude}} = \frac{(-55) - (-70) - (-5.0)}{0.8} = \frac{20}{0.8} = 25 \text{ EPSPs}
$$

**Key Takeaway:** A single synapse contributes only ~0.8 mV — a tiny fraction of the ~15 mV needed to reach threshold. Firing requires the coordinated activation of many excitatory synapses, illustrating why neural computation is fundamentally a *population* phenomenon. ∎

---

## Code Exercises

### Code Exercise 3.1: Full Hodgkin-Huxley Neuron Simulation

```python
"""
Hodgkin-Huxley Neuron Model Simulation
Chapter 3, Exercise 3.1

Complete implementation of the Hodgkin-Huxley model with
visualization of action potential generation, gating variables,
ionic currents, and phase plane analysis.

Requirements: Python 3.9+, numpy, scipy, matplotlib
"""

import numpy as np
from scipy.integrate import odeint
import matplotlib.pyplot as plt


class HodgkinHuxley:
    """
    Full Hodgkin-Huxley model of the squid giant axon.

    Parameters match the original 1952 paper (temperature 6.3°C).
    """

    # Maximum conductances (mS/cm²)
    g_Na = 120.0
    g_K = 36.0
    g_L = 0.3

    # Reversal potentials (mV)
    E_Na = 50.0
    E_K = -77.0
    E_L = -54.4

    # Membrane capacitance (μF/cm²)
    C_m = 1.0

    @staticmethod
    def alpha_n(V):
        """K⁺ activation rate constant."""
        if isinstance(V, np.ndarray):
            result = np.zeros_like(V)
            mask = np.abs(V + 55) > 1e-7
            result[mask] = 0.01 * (V[mask] + 55) / (1 - np.exp(-(V[mask] + 55) / 10))
            result[~mask] = 0.1
            return result
        return 0.01 * (V + 55) / (1 - np.exp(-(V + 55) / 10)) if abs(V + 55) > 1e-7 else 0.1

    @staticmethod
    def beta_n(V):
        """K⁺ deactivation rate constant."""
        return 0.125 * np.exp(-(V + 65) / 80)

    @staticmethod
    def alpha_m(V):
        """Na⁺ activation rate constant."""
        if isinstance(V, np.ndarray):
            result = np.zeros_like(V)
            mask = np.abs(V + 40) > 1e-7
            result[mask] = 0.1 * (V[mask] + 40) / (1 - np.exp(-(V[mask] + 40) / 10))
            result[~mask] = 1.0
            return result
        return 0.1 * (V + 40) / (1 - np.exp(-(V + 40) / 10)) if abs(V + 40) > 1e-7 else 1.0

    @staticmethod
    def beta_m(V):
        """Na⁺ deactivation rate constant."""
        return 4.0 * np.exp(-(V + 65) / 18)

    @staticmethod
    def alpha_h(V):
        """Na⁺ inactivation rate constant."""
        return 0.07 * np.exp(-(V + 65) / 20)

    @staticmethod
    def beta_h(V):
        """Na⁺ de-inactivation rate constant."""
        return 1.0 / (1 + np.exp(-(V + 35) / 10))

    def derivatives(self, state, t, I_ext_func):
        """
        Compute derivatives of the state variables.

        State: [V, m, h, n]
        """
        V, m, h, n = state
        I_ext = I_ext_func(t)

        # Ionic currents
        I_Na = self.g_Na * m**3 * h * (V - self.E_Na)
        I_K = self.g_K * n**4 * (V - self.E_K)
        I_L = self.g_L * (V - self.E_L)

        # Membrane equation
        dVdt = (I_ext - I_Na - I_K - I_L) / self.C_m

        # Gating variable kinetics
        dmdt = self.alpha_m(V) * (1 - m) - self.beta_m(V) * m
        dhdt = self.alpha_h(V) * (1 - h) - self.beta_h(V) * h
        dndt = self.alpha_n(V) * (1 - n) - self.beta_n(V) * n

        return [dVdt, dmdt, dhdt, dndt]

    def simulate(self, t, I_ext_func, V0=-65.0):
        """
        Run the simulation.

        Parameters:
            t:          Time array (ms)
            I_ext_func: Function that returns external current at time t (μA/cm²)
            V0:         Initial membrane potential (mV)

        Returns:
            Dictionary with voltage, gating variables, and currents.
        """
        # Initial conditions: steady state at resting potential
        m0 = self.alpha_m(V0) / (self.alpha_m(V0) + self.beta_m(V0))
        h0 = self.alpha_h(V0) / (self.alpha_h(V0) + self.beta_h(V0))
        n0 = self.alpha_n(V0) / (self.alpha_n(V0) + self.beta_n(V0))

        state0 = [V0, m0, h0, n0]

        # Integrate
        solution = odeint(self.derivatives, state0, t, args=(I_ext_func,))

        V = solution[:, 0]
        m = solution[:, 1]
        h = solution[:, 2]
        n = solution[:, 3]

        # Calculate currents
        I_Na = self.g_Na * m**3 * h * (V - self.E_Na)
        I_K = self.g_K * n**4 * (V - self.E_K)
        I_L = self.g_L * (V - self.E_L)

        return {
            "t": t, "V": V, "m": m, "h": h, "n": n,
            "I_Na": I_Na, "I_K": I_K, "I_L": I_L,
            "g_Na_eff": self.g_Na * m**3 * h,
            "g_K_eff": self.g_K * n**4,
        }


def run_simulation():
    """Run complete HH simulation with multiple stimulus conditions."""

    hh = HodgkinHuxley()

    # --- Simulation 1: Single action potential ---
    t1 = np.arange(0, 50, 0.01)  # 50 ms, 0.01 ms steps
    I_pulse = lambda t: 10.0 if 5 <= t <= 6 else 0.0  # 1 ms pulse, 10 μA/cm²
    result1 = hh.simulate(t1, I_pulse)

    # --- Simulation 2: Multiple stimuli at different amplitudes ---
    t2 = np.arange(0, 100, 0.01)
    amplitudes = [3, 5, 7, 10, 15]

    # --- Simulation 3: Sustained current (tonic firing) ---
    t3 = np.arange(0, 200, 0.01)
    I_tonic = lambda t: 10.0 if 10 <= t <= 180 else 0.0
    result3 = hh.simulate(t3, I_tonic)

    # --- Plotting ---
    fig = plt.figure(figsize=(18, 20))

    # Panel A: Single action potential - Voltage
    ax1 = fig.add_subplot(4, 2, 1)
    ax1.plot(result1["t"], result1["V"], "b-", linewidth=2)
    ax1.set_ylabel("Membrane\nPotential (mV)", fontsize=10)
    ax1.set_title("A. Single Action Potential", fontsize=12, fontweight="bold")
    ax1.axhline(y=-55, color="red", linestyle="--", alpha=0.5, label="Threshold")
    ax1.legend(fontsize=8)
    ax1.grid(True, alpha=0.3)

    # Panel B: Gating variables
    ax2 = fig.add_subplot(4, 2, 2)
    ax2.plot(result1["t"], result1["m"], "r-", linewidth=2, label="m (Na⁺ activation)")
    ax2.plot(result1["t"], result1["h"], "b-", linewidth=2, label="h (Na⁺ inactivation)")
    ax2.plot(result1["t"], result1["n"], "g-", linewidth=2, label="n (K⁺ activation)")
    ax2.set_ylabel("Gating Variable", fontsize=10)
    ax2.set_title("B. Gating Variables", fontsize=12, fontweight="bold")
    ax2.legend(fontsize=8, loc="center right")
    ax2.grid(True, alpha=0.3)
    ax2.set_ylim(-0.05, 1.05)

    # Panel C: Ionic currents
    ax3 = fig.add_subplot(4, 2, 3)
    ax3.plot(result1["t"], -result1["I_Na"], "r-", linewidth=2, label="−I_Na")
    ax3.plot(result1["t"], -result1["I_K"], "b-", linewidth=2, label="−I_K")
    ax3.plot(result1["t"], -result1["I_L"], "g-", linewidth=1, label="−I_L")
    ax3.set_ylabel("Current (μA/cm²)", fontsize=10)
    ax3.set_xlabel("Time (ms)", fontsize=10)
    ax3.set_title("C. Ionic Currents", fontsize=12, fontweight="bold")
    ax3.legend(fontsize=8)
    ax3.grid(True, alpha=0.3)

    # Panel D: Effective conductances
    ax4 = fig.add_subplot(4, 2, 4)
    ax4.plot(result1["t"], result1["g_Na_eff"], "r-", linewidth=2,
             label="g_Na·m³h")
    ax4.plot(result1["t"], result1["g_K_eff"], "b-", linewidth=2,
             label="g_K·n⁴")
    ax4.set_ylabel("Conductance (mS/cm²)", fontsize=10)
    ax4.set_xlabel("Time (ms)", fontsize=10)
    ax4.set_title("D. Effective Conductances", fontsize=12, fontweight="bold")
    ax4.legend(fontsize=8)
    ax4.grid(True, alpha=0.3)

    # Panel E: Threshold behavior
    ax5 = fig.add_subplot(4, 2, 5)
    colors = plt.cm.viridis(np.linspace(0, 1, len(amplitudes)))
    for amp, color in zip(amplitudes, colors):
        I_test = lambda t, a=amp: a if 5 <= t <= 6 else 0.0
        res = hh.simulate(t1, I_test)
        ax5.plot(res["t"], res["V"], color=color, linewidth=1.5,
                 label=f"I = {amp} μA/cm²")
    ax5.set_ylabel("Membrane\nPotential (mV)", fontsize=10)
    ax5.set_xlabel("Time (ms)", fontsize=10)
    ax5.set_title("E. Threshold Behavior (All-or-None)", fontsize=12,
                  fontweight="bold")
    ax5.legend(fontsize=7, loc="upper right")
    ax5.grid(True, alpha=0.3)

    # Panel F: Tonic firing
    ax6 = fig.add_subplot(4, 2, 6)
    ax6.plot(result3["t"], result3["V"], "b-", linewidth=1)
    ax6.set_ylabel("Membrane\nPotential (mV)", fontsize=10)
    ax6.set_xlabel("Time (ms)", fontsize=10)
    ax6.set_title("F. Tonic Firing (Sustained Current)", fontsize=12,
                  fontweight="bold")
    ax6.grid(True, alpha=0.3)

    # Panel G: Phase plane (V vs m)
    ax7 = fig.add_subplot(4, 2, 7)
    ax7.plot(result1["V"], result1["m"], "b-", linewidth=1.5, alpha=0.8)
    ax7.scatter(result1["V"][0], result1["m"][0], c="green", s=100,
                zorder=5, label="Start")
    ax7.set_xlabel("V (mV)", fontsize=10)
    ax7.set_ylabel("m (Na⁺ activation)", fontsize=10)
    ax7.set_title("G. Phase Plane: V vs. m", fontsize=12, fontweight="bold")
    ax7.legend(fontsize=8)
    ax7.grid(True, alpha=0.3)

    # Panel H: Firing rate vs. current (F-I curve)
    ax8 = fig.add_subplot(4, 2, 8)
    currents = np.arange(0, 30, 0.5)
    firing_rates = []
    t_fi = np.arange(0, 500, 0.01)
    for I_amp in currents:
        I_fi = lambda t, a=I_amp: a if 50 <= t <= 450 else 0.0
        res = hh.simulate(t_fi, I_fi)
        # Count spikes (threshold crossings from below)
        V_trace = res["V"][5000:45000]  # Only during stimulus
        crossings = np.where((V_trace[:-1] < 0) & (V_trace[1:] >= 0))[0]
        rate = len(crossings) / 0.4  # spikes per second (400 ms window)
        firing_rates.append(rate)

    ax8.plot(currents, firing_rates, "ko-", markersize=3, linewidth=1.5)
    ax8.set_xlabel("Injected Current (μA/cm²)", fontsize=10)
    ax8.set_ylabel("Firing Rate (Hz)", fontsize=10)
    ax8.set_title("H. F-I Curve (Firing Rate vs. Current)", fontsize=12,
                  fontweight="bold")
    ax8.grid(True, alpha=0.3)

    plt.suptitle("Hodgkin-Huxley Neuron Model: Complete Analysis",
                 fontsize=15, fontweight="bold", y=1.01)
    plt.tight_layout()
    plt.savefig("hodgkin_huxley_simulation.png", dpi=150, bbox_inches="tight")
    plt.show()
    print("Figure saved as 'hodgkin_huxley_simulation.png'")

    # Print key measurements
    V = result1["V"]
    spike_idx = np.argmax(V)
    print(f"\nAction Potential Properties:")
    print(f"  Peak voltage: {V[spike_idx]:.1f} mV")
    print(f"  Peak time: {result1['t'][spike_idx]:.2f} ms")
    print(f"  Minimum (undershoot): {np.min(V[spike_idx:]):.1f} mV")
    print(f"  Spike width at 0 mV: ~{np.sum(V > 0) * 0.01:.2f} ms")


# --- Main execution ---
if __name__ == "__main__":
    print("Running Hodgkin-Huxley neuron simulation...")
    run_simulation()
    print("\nSimulation complete.")
```

**Expected Output:**
An eight-panel figure showing: (A) A single action potential with characteristic spike shape (~+40 mV peak, ~−80 mV undershoot); (B) Gating variables showing fast m activation, slower h inactivation, and slowest n activation; (C) Ionic currents with large transient Na⁺ inward current followed by sustained K⁺ outward current; (D) Effective conductances (g_Na·m³h and g_K·n⁴) showing sequential activation; (E) Threshold behavior demonstrating the all-or-none property; (F) Tonic firing during sustained current injection; (G) Phase plane trajectory showing the action potential cycle; (H) F-I curve showing monotonically increasing firing rate with injected current.

---

### Code Exercise 3.2: Spike-Timing-Dependent Plasticity (STDP) Simulation

```python
"""
Spike-Timing-Dependent Plasticity (STDP) Simulation
Chapter 3, Exercise 3.2

Simulates the STDP learning rule, demonstrating how the relative
timing of pre- and postsynaptic spikes determines the direction
and magnitude of synaptic weight change.

Requirements: Python 3.9+, numpy, matplotlib
"""

import numpy as np
import matplotlib.pyplot as plt


class STDPSynapse:
    """
    Synapse with spike-timing-dependent plasticity.

    Implements the classic asymmetric STDP window
    (Bi & Poo, 1998).
    """

    def __init__(self, w_init=0.5, w_max=1.0, w_min=0.0,
                 A_plus=0.01, A_minus=0.012,
                 tau_plus=20.0, tau_minus=20.0):
        """
        Parameters:
            w_init:    Initial synaptic weight
            w_max:     Maximum weight (hard bound)
            w_min:     Minimum weight (hard bound)
            A_plus:    Maximum LTP amplitude
            A_minus:   Maximum LTD amplitude
            tau_plus:  LTP time constant (ms)
            tau_minus: LTD time constant (ms)
        """
        self.w = w_init
        self.w_max = w_max
        self.w_min = w_min
        self.A_plus = A_plus
        self.A_minus = A_minus
        self.tau_plus = tau_plus
        self.tau_minus = tau_minus
        self.history = [w_init]

    def compute_dw(self, delta_t):
        """
        Compute weight change for a given spike timing difference.

        Parameters:
            delta_t: t_post - t_pre (ms)
                     Positive → pre before post → LTP
                     Negative → post before pre → LTD
        """
        if delta_t > 0:
            return self.A_plus * np.exp(-delta_t / self.tau_plus)
        elif delta_t < 0:
            return -self.A_minus * np.exp(delta_t / self.tau_minus)
        else:
            return 0.0

    def update(self, delta_t):
        """Apply STDP update and record weight."""
        dw = self.compute_dw(delta_t)
        self.w = np.clip(self.w + dw, self.w_min, self.w_max)
        self.history.append(self.w)
        return dw

    def reset(self, w_init=0.5):
        """Reset the synapse."""
        self.w = w_init
        self.history = [w_init]


def plot_stdp_window():
    """Visualize the STDP learning window."""

    synapse = STDPSynapse()
    delta_t = np.linspace(-100, 100, 1000)
    dw = np.array([synapse.compute_dw(dt) for dt in delta_t])

    fig, ax = plt.subplots(figsize=(10, 6))

    # Plot STDP window
    ax.fill_between(delta_t[delta_t > 0],
                    np.array([synapse.compute_dw(dt) for dt in delta_t[delta_t > 0]]),
                    alpha=0.3, color="green", label="LTP (potentiation)")
    ax.fill_between(delta_t[delta_t < 0],
                    np.array([synapse.compute_dw(dt) for dt in delta_t[delta_t < 0]]),
                    alpha=0.3, color="red", label="LTD (depression)")
    ax.plot(delta_t, dw, "k-", linewidth=2)
    ax.axhline(y=0, color="gray", linestyle="-", linewidth=0.5)
    ax.axvline(x=0, color="gray", linestyle="-", linewidth=0.5)

    ax.set_xlabel("Δt = t_post − t_pre (ms)", fontsize=12)
    ax.set_ylabel("Δw (weight change)", fontsize=12)
    ax.set_title("STDP Learning Window", fontsize=14, fontweight="bold")
    ax.legend(fontsize=10)
    ax.grid(True, alpha=0.3)

    # Annotate
    ax.annotate("Pre → Post\n(causal → LTP)", xy=(20, 0.005),
                fontsize=10, color="green", fontweight="bold")
    ax.annotate("Post → Pre\n(anti-causal → LTD)", xy=(-80, -0.005),
                fontsize=10, color="red", fontweight="bold")
    ax.annotate(f"τ₊ = {synapse.tau_plus} ms", xy=(40, 0.003), fontsize=9)
    ax.annotate(f"τ₋ = {synapse.tau_minus} ms", xy=(-60, -0.003), fontsize=9)

    plt.tight_layout()
    plt.savefig("stdp_window.png", dpi=150, bbox_inches="tight")
    plt.show()
    print("Figure saved as 'stdp_window.png'")


def simulate_stdp_learning():
    """Simulate STDP-driven learning in a simple scenario."""

    np.random.seed(42)

    # --- Scenario 1: Causal pre-post pairing ---
    synapse_causal = STDPSynapse(w_init=0.3)
    n_pairings = 60
    delta_t_causal = 10.0  # pre 10 ms before post (LTP)

    for _ in range(n_pairings):
        jitter = np.random.normal(0, 2)  # Add timing noise
        synapse_causal.update(delta_t_causal + jitter)

    # --- Scenario 2: Anti-causal post-pre pairing ---
    synapse_anti = STDPSynapse(w_init=0.7)
    delta_t_anti = -10.0  # post 10 ms before pre (LTD)

    for _ in range(n_pairings):
        jitter = np.random.normal(0, 2)
        synapse_anti.update(delta_t_anti + jitter)

    # --- Scenario 3: Random timing ---
    synapse_random = STDPSynapse(w_init=0.5)
    for _ in range(n_pairings):
        dt = np.random.uniform(-50, 50)
        synapse_random.update(dt)

    # --- Scenario 4: Rate-dependent (Poisson spikes) ---
    synapse_rate = STDPSynapse(w_init=0.5)
    pre_rate = 40  # Hz
    post_rate = 40  # Hz
    duration = 1000  # ms

    pre_spikes = np.sort(np.random.uniform(0, duration,
                         size=int(pre_rate * duration / 1000)))
    post_spikes = np.sort(np.random.uniform(0, duration,
                          size=int(post_rate * duration / 1000)))

    # Find all pre-post spike pairs within ±50 ms
    for t_pre in pre_spikes:
        nearest_post_idx = np.argmin(np.abs(post_spikes - t_pre))
        dt = post_spikes[nearest_post_idx] - t_pre
        if abs(dt) < 50:
            synapse_rate.update(dt)

    # --- Plotting ---
    fig, axes = plt.subplots(2, 2, figsize=(14, 10))

    # Panel A: Causal pairing → LTP
    ax1 = axes[0, 0]
    ax1.plot(synapse_causal.history, "g-", linewidth=2)
    ax1.set_xlabel("Pairing Number", fontsize=11)
    ax1.set_ylabel("Synaptic Weight", fontsize=11)
    ax1.set_title(f"A. Causal Pairing (Δt = +{delta_t_causal:.0f} ms → LTP)",
                  fontsize=12, fontweight="bold")
    ax1.axhline(y=synapse_causal.w_max, color="gray", linestyle="--",
                alpha=0.5, label="w_max")
    ax1.legend(fontsize=9)
    ax1.grid(True, alpha=0.3)
    ax1.set_ylim(0, 1.05)

    # Panel B: Anti-causal pairing → LTD
    ax2 = axes[0, 1]
    ax2.plot(synapse_anti.history, "r-", linewidth=2)
    ax2.set_xlabel("Pairing Number", fontsize=11)
    ax2.set_ylabel("Synaptic Weight", fontsize=11)
    ax2.set_title(f"B. Anti-Causal Pairing (Δt = {delta_t_anti:.0f} ms → LTD)",
                  fontsize=12, fontweight="bold")
    ax2.axhline(y=synapse_anti.w_min, color="gray", linestyle="--",
                alpha=0.5, label="w_min")
    ax2.legend(fontsize=9)
    ax2.grid(True, alpha=0.3)
    ax2.set_ylim(0, 1.05)

    # Panel C: Random timing → drift
    ax3 = axes[1, 0]
    ax3.plot(synapse_random.history, "b-", linewidth=2)
    ax3.set_xlabel("Pairing Number", fontsize=11)
    ax3.set_ylabel("Synaptic Weight", fontsize=11)
    ax3.set_title("C. Random Timing → Weak Net Depression",
                  fontsize=12, fontweight="bold")
    ax3.grid(True, alpha=0.3)
    ax3.set_ylim(0, 1.05)

    # Panel D: Rate-dependent STDP
    ax4 = axes[1, 1]
    ax4.plot(synapse_rate.history, "m-", linewidth=2)
    ax4.set_xlabel("Spike Pair Number", fontsize=11)
    ax4.set_ylabel("Synaptic Weight", fontsize=11)
    ax4.set_title(f"D. Poisson Spikes ({pre_rate} Hz pre, {post_rate} Hz post)",
                  fontsize=12, fontweight="bold")
    ax4.grid(True, alpha=0.3)
    ax4.set_ylim(0, 1.05)

    plt.suptitle("Spike-Timing-Dependent Plasticity: Learning Dynamics",
                 fontsize=15, fontweight="bold", y=1.01)
    plt.tight_layout()
    plt.savefig("stdp_learning.png", dpi=150, bbox_inches="tight")
    plt.show()
    print("Figure saved as 'stdp_learning.png'")

    # Summary
    print("\n" + "=" * 50)
    print("STDP Learning Summary")
    print("=" * 50)
    print(f"Causal pairing:     {synapse_causal.history[0]:.3f} → "
          f"{synapse_causal.w:.3f} (Δ = {synapse_causal.w - synapse_causal.history[0]:+.3f})")
    print(f"Anti-causal pairing: {synapse_anti.history[0]:.3f} → "
          f"{synapse_anti.w:.3f} (Δ = {synapse_anti.w - synapse_anti.history[0]:+.3f})")
    print(f"Random timing:      {synapse_random.history[0]:.3f} → "
          f"{synapse_random.w:.3f} (Δ = {synapse_random.w - synapse_random.history[0]:+.3f})")
    print(f"Poisson spikes:     {synapse_rate.history[0]:.3f} → "
          f"{synapse_rate.w:.3f} (Δ = {synapse_rate.w - synapse_rate.history[0]:+.3f})")


# --- Main execution ---
if __name__ == "__main__":
    print("Generating STDP learning window...")
    plot_stdp_window()

    print("\nSimulating STDP learning dynamics...")
    simulate_stdp_learning()

    print("\nAll simulations complete.")
```

**Expected Output:**
Two sets of figures. The first shows the classic asymmetric STDP window: positive weight changes (LTP) for pre-before-post timing, decaying exponentially with a time constant of ~20 ms; negative weight changes (LTD) for post-before-pre timing. The second shows four learning scenarios: (A) Causal pairing drives the weight from 0.3 to near 1.0 over 60 pairings; (B) Anti-causal pairing drives the weight from 0.7 toward 0 over 60 pairings; (C) Random timing produces a weak net depression (because A₋ > A₊); (D) Poisson spike trains produce variable weight trajectories dependent on random timing correlations.

---

### Code Exercise 3.3: Neural Oscillation Patterns

```python
"""
Neural Oscillation Patterns Visualization
Chapter 3, Exercise 3.3

Simulates and visualizes the major neural oscillation frequency
bands (delta, theta, alpha, beta, gamma) and demonstrates
cross-frequency coupling.

Requirements: Python 3.9+, numpy, scipy, matplotlib
"""

import numpy as np
from scipy import signal
import matplotlib.pyplot as plt


def generate_oscillation(frequency, duration, sample_rate, amplitude=1.0,
                          noise_level=0.2, phase=0):
    """Generate a neural oscillation with additive noise."""
    t = np.arange(0, duration, 1.0 / sample_rate)
    osc = amplitude * np.sin(2 * np.pi * frequency * t + phase)
    noise = noise_level * np.random.randn(len(t))
    return t, osc + noise


def create_composite_signal(duration=2.0, sample_rate=1000):
    """Create a composite neural signal with multiple frequency bands."""
    t = np.arange(0, duration, 1.0 / sample_rate)

    # Individual oscillation components
    delta = 3.0 * np.sin(2 * np.pi * 2 * t)      # 2 Hz, large amplitude
    theta = 1.5 * np.sin(2 * np.pi * 6 * t)      # 6 Hz
    alpha = 2.0 * np.sin(2 * np.pi * 10 * t)     # 10 Hz
    beta = 0.8 * np.sin(2 * np.pi * 20 * t)      # 20 Hz
    gamma = 0.3 * np.sin(2 * np.pi * 40 * t)     # 40 Hz
    noise = 0.5 * np.random.randn(len(t))          # Background noise

    composite = delta + theta + alpha + beta + gamma + noise
    components = {"delta": delta, "theta": theta, "alpha": alpha,
                  "beta": beta, "gamma": gamma}

    return t, composite, components


def compute_power_spectrum(signal_data, sample_rate):
    """Compute the power spectral density using Welch's method."""
    freqs, psd = signal.welch(signal_data, fs=sample_rate, nperseg=1024)
    return freqs, psd


def simulate_eir_oscillation(duration=0.5, dt=0.0001):
    """
    Simulate oscillatory dynamics in an excitatory-inhibitory (E-I) network
    using the Wilson-Cowan model.

    The Wilson-Cowan equations describe the mean-field dynamics of
    interacting excitatory and inhibitory populations.
    """
    t = np.arange(0, duration, dt)
    n_steps = len(t)

    # Wilson-Cowan parameters
    tau_E = 0.010  # Excitatory time constant (s)
    tau_I = 0.020  # Inhibitory time constant (s)
    w_EE = 12.0    # E → E weight
    w_EI = 4.0     # E → I weight
    w_IE = 13.0    # I → E weight
    w_II = 11.0    # I → I weight
    I_E = 1.5      # External input to E
    I_I = 0.0      # External input to I
    theta_E = 4.0  # E threshold
    theta_I = 3.7  # I threshold
    sigma = 1.0    # Sigmoid slope

    def sigmoid(x, theta, sigma_val):
        return 1.0 / (1.0 + np.exp(-(x - theta) / sigma_val))

    # State variables
    E = np.zeros(n_steps)
    I = np.zeros(n_steps)
    E[0] = 0.1
    I[0] = 0.1

    # Euler integration
    for k in range(n_steps - 1):
        input_E = w_EE * E[k] - w_IE * I[k] + I_E
        input_I = w_EI * E[k] - w_II * I[k] + I_I

        dEdt = (-E[k] + sigmoid(input_E, theta_E, sigma)) / tau_E
        dIdt = (-I[k] + sigmoid(input_I, theta_I, sigma)) / tau_I

        E[k + 1] = E[k] + dt * dEdt
        I[k + 1] = I[k] + dt * dIdt

    return t, E, I


def visualize_oscillations():
    """Create comprehensive visualization of neural oscillations."""

    fig = plt.figure(figsize=(18, 22))

    # --- Panel A: Individual oscillation bands ---
    bands = [
        ("Delta (δ)", 2, 3.0, "#e74c3c"),
        ("Theta (θ)", 6, 1.5, "#e67e22"),
        ("Alpha (α)", 10, 2.0, "#27ae60"),
        ("Beta (β)", 20, 0.8, "#3498db"),
        ("Gamma (γ)", 40, 0.3, "#9b59b6"),
    ]

    for i, (name, freq, amp, color) in enumerate(bands):
        ax = fig.add_subplot(7, 2, i + 1)
        t, osc = generate_oscillation(freq, 1.0, 1000, amp, noise_level=0.1)
        ax.plot(t, osc, color=color, linewidth=1.5)
        ax.set_ylabel(f"{name}\n({freq} Hz)", fontsize=9, fontweight="bold")
        ax.set_xlim(0, 0.5)
        ax.set_ylim(-amp * 1.5, amp * 1.5)
        ax.grid(True, alpha=0.2)
        if i == 0:
            ax.set_title("Individual Oscillation Bands", fontsize=12,
                         fontweight="bold")
        if i < 4:
            ax.set_xticklabels([])
        else:
            ax.set_xlabel("Time (s)", fontsize=10)

    # --- Panel B: Composite signal and decomposition ---
    t, composite, components = create_composite_signal(duration=2.0)

    ax_comp = fig.add_subplot(7, 2, 6)
    ax_comp.plot(t, composite, "k-", linewidth=0.8, alpha=0.8)
    ax_comp.set_ylabel("Amplitude\n(a.u.)", fontsize=9)
    ax_comp.set_xlabel("Time (s)", fontsize=10)
    ax_comp.set_title("Composite Neural Signal", fontsize=12, fontweight="bold")
    ax_comp.set_xlim(0, 0.5)
    ax_comp.grid(True, alpha=0.2)

    # --- Panel C: Power spectrum ---
    ax_psd = fig.add_subplot(7, 2, (7, 8))
    freqs, psd = compute_power_spectrum(composite, 1000)

    ax_psd.semilogy(freqs, psd, "k-", linewidth=1.5)

    # Shade frequency bands
    band_ranges = [
        ("Delta", 0.5, 4, "#e74c3c"),
        ("Theta", 4, 8, "#e67e22"),
        ("Alpha", 8, 13, "#27ae60"),
        ("Beta", 13, 30, "#3498db"),
        ("Gamma", 30, 100, "#9b59b6"),
    ]
    for name, f_low, f_high, color in band_ranges:
        mask = (freqs >= f_low) & (freqs <= f_high)
        ax_psd.fill_between(freqs[mask], psd[mask], alpha=0.3, color=color,
                            label=f"{name} ({f_low}–{f_high} Hz)")

    ax_psd.set_xlabel("Frequency (Hz)", fontsize=11)
    ax_psd.set_ylabel("Power Spectral Density", fontsize=11)
    ax_psd.set_title("Power Spectrum of Composite Signal", fontsize=12,
                     fontweight="bold")
    ax_psd.set_xlim(0, 80)
    ax_psd.legend(fontsize=8, ncol=3)
    ax_psd.grid(True, alpha=0.3)

    # --- Panel D: Wilson-Cowan E-I oscillation ---
    t_wc, E, I = simulate_eir_oscillation()

    ax_wc = fig.add_subplot(7, 2, (9, 10))
    ax_wc.plot(t_wc * 1000, E, "r-", linewidth=2, label="Excitatory (E)")
    ax_wc.plot(t_wc * 1000, I, "b-", linewidth=2, label="Inhibitory (I)")
    ax_wc.set_xlabel("Time (ms)", fontsize=11)
    ax_wc.set_ylabel("Population Activity", fontsize=11)
    ax_wc.set_title("E-I Network Oscillation (Wilson-Cowan Model)",
                    fontsize=12, fontweight="bold")
    ax_wc.legend(fontsize=9)
    ax_wc.grid(True, alpha=0.3)

    # --- Panel E: Phase plane of E-I oscillation ---
    ax_pp = fig.add_subplot(7, 2, 11)
    # Discard transient
    skip = int(len(t_wc) * 0.3)
    ax_pp.plot(E[skip:], I[skip:], "k-", linewidth=1.5, alpha=0.7)
    ax_pp.scatter(E[skip], I[skip], c="green", s=100, zorder=5, label="Start")
    ax_pp.set_xlabel("Excitatory Activity (E)", fontsize=10)
    ax_pp.set_ylabel("Inhibitory Activity (I)", fontsize=10)
    ax_pp.set_title("Phase Plane: E-I Limit Cycle", fontsize=12,
                    fontweight="bold")
    ax_pp.legend(fontsize=9)
    ax_pp.grid(True, alpha=0.3)

    # --- Panel F: Spectrogram showing time-frequency decomposition ---
    ax_spec = fig.add_subplot(7, 2, 12)
    # Create a signal with changing frequency content
    t_spec = np.arange(0, 3.0, 1.0 / 1000)
    sig_spec = np.zeros_like(t_spec)
    # Delta dominant first second, alpha second, gamma third
    sig_spec[t_spec < 1.0] += 3.0 * np.sin(2 * np.pi * 2 * t_spec[t_spec < 1.0])
    sig_spec[(t_spec >= 1.0) & (t_spec < 2.0)] += 2.0 * np.sin(
        2 * np.pi * 10 * t_spec[(t_spec >= 1.0) & (t_spec < 2.0)])
    sig_spec[t_spec >= 2.0] += 0.5 * np.sin(
        2 * np.pi * 40 * t_spec[t_spec >= 2.0])
    sig_spec += 0.3 * np.random.randn(len(t_spec))

    f_spec, t_bins, Sxx = signal.spectrogram(sig_spec, fs=1000, nperseg=256,
                                              noverlap=200)
    ax_spec.pcolormesh(t_bins, f_spec, 10 * np.log10(Sxx + 1e-10),
                       shading="gouraud", cmap="viridis")
    ax_spec.set_xlabel("Time (s)", fontsize=10)
    ax_spec.set_ylabel("Frequency (Hz)", fontsize=10)
    ax_spec.set_title("Spectrogram: Evolving Oscillation Patterns",
                      fontsize=12, fontweight="bold")
    ax_spec.set_ylim(0, 60)

    # --- Panel G: Organoid oscillation comparison ---
    ax_org = fig.add_subplot(7, 2, (13, 14))

    # Simulated organoid recording: immature (mostly slow waves) vs mature (gamma)
    t_org = np.arange(0, 2.0, 1.0 / 1000)
    # Immature organoid (Day 30): mostly delta/theta
    immature = (2.0 * np.sin(2 * np.pi * 1.5 * t_org)
                + 0.5 * np.sin(2 * np.pi * 5 * t_org)
                + 0.3 * np.random.randn(len(t_org)))
    # Mature organoid (Day 150): delta + theta + emerging gamma
    mature = (1.5 * np.sin(2 * np.pi * 2 * t_org)
              + 1.0 * np.sin(2 * np.pi * 6 * t_org)
              + 0.5 * np.sin(2 * np.pi * 35 * t_org)
              + 0.3 * np.random.randn(len(t_org)))

    ax_org.plot(t_org, immature + 5, "b-", linewidth=0.8, alpha=0.8,
                label="Immature organoid (Day 30)")
    ax_org.plot(t_org, mature - 5, "r-", linewidth=0.8, alpha=0.8,
                label="Mature organoid (Day 150)")
    ax_org.set_xlabel("Time (s)", fontsize=11)
    ax_org.set_ylabel("Voltage (a.u.)", fontsize=11)
    ax_org.set_title("Simulated Organoid Electrophysiology: Immature vs. Mature",
                     fontsize=12, fontweight="bold")
    ax_org.legend(fontsize=9, loc="upper right")
    ax_org.set_xlim(0, 1.0)
    ax_org.grid(True, alpha=0.3)

    plt.suptitle("Neural Oscillation Patterns and Analysis",
                 fontsize=16, fontweight="bold", y=1.01)
    plt.tight_layout()
    plt.savefig("neural_oscillations.png", dpi=150, bbox_inches="tight")
    plt.show()
    print("Figure saved as 'neural_oscillations.png'")


# --- Main execution ---
if __name__ == "__main__":
    print("Generating neural oscillation visualizations...")
    visualize_oscillations()
    print("\nVisualization complete.")
```

**Expected Output:**
A comprehensive multi-panel figure showing: (A) Individual oscillation bands (delta through gamma) with characteristic frequencies and amplitudes; (B) A composite neural signal combining all bands; (C) Power spectral density showing peaks at each component frequency with color-coded band shading; (D) Wilson-Cowan E-I network oscillation showing the phase relationship between excitatory and inhibitory population activity; (E) Phase plane portrait showing the E-I limit cycle; (F) Spectrogram showing time-varying oscillation content; (G) Comparison of simulated immature vs. mature organoid recordings, showing the emergence of faster oscillation components with maturation.

---

## Discussion Questions

1. **The Hodgkin-Huxley model and abstraction:** The HH model accurately predicts action potential behavior but contains only two types of voltage-gated channels. Real cortical neurons express dozens of channel types with distinct kinetics. For organoid computing, how much biophysical detail matters? Could a simplified model (like integrate-and-fire) serve as the basis for a biological computing framework, or is the full molecular complexity essential?

2. **STDP and biological programming:** STDP provides a local learning rule that can modify synaptic strengths based on temporal correlations in input. Could STDP be exploited as a "programming mechanism" for organoid computing systems? What types of computations could be learned through STDP, and what types would require alternative plasticity mechanisms?

3. **Excitation-inhibition balance:** The E/I balance is critical for stable neural computation. In organoids, this balance may be abnormal due to immature inhibitory circuits. How might E/I imbalance affect the computational properties of organoid computing systems? Could pharmacological manipulation (e.g., GABAergic drugs) be used to tune the E/I balance for specific computational tasks?

4. **Neural oscillations as computational clocks:** In digital computers, a global clock synchronizes all operations. Neural oscillations might serve a similar synchronizing function. Could oscillatory activity in organoids be used as a "biological clock" for temporally organized computation? What frequency would be optimal?

5. **The gap junction question:** Gap junctions are abundant in developing neural tissue and may play a significant role in organoid computation. How might electrical synapses complement or compete with chemical synapses in organoid computing? Could gap junctions enable computational capabilities not available through chemical synapses alone?

6. **Memory in organoids:** This chapter described the molecular cascade from short-term to long-term memory. Which stages of this cascade are likely to function in current organoid cultures? What limitations might organoids face in forming stable, long-term memories?

7. **Neurotransmitter pharmacology as tuning:** Could exogenous application of neurotransmitters (glutamate, GABA, dopamine, acetylcholine) be used to "tune" the computational properties of organoid systems? What effects would each neurotransmitter be expected to have on network dynamics and learning?

---

## Further Reading

### Foundational Electrophysiology

- **Hodgkin, A. L., & Huxley, A. F. (1952).** "A quantitative description of membrane current and its application to conduction and excitation in nerve." *Journal of Physiology*, 117(4), 500–544.
  *The most important paper in computational neuroscience. The mathematical model of the action potential that launched the field. Dense but essential reading. Nobel Prize, 1963.*

- **Hille, B. (2001).** *Ion Channels of Excitable Membranes.* 3rd ed. Sinauer Associates.
  *The definitive textbook on ion channels. Comprehensive, rigorous, and beautifully written. Chapters 2–5 cover the material in Sections 3.2–3.3 of this chapter in much greater depth.*

### Synaptic Transmission and Plasticity

- **Kandel, E. R., Schwartz, J. H., Jessell, T. M., Siegelbaum, S. A., & Hudspeth, A. J. (2021).** *Principles of Neural Science.* 6th ed. McGraw Hill.
  *The standard comprehensive neuroscience textbook. Part III (synaptic transmission) and Part VIII (learning and memory) are particularly relevant to this chapter.*

- **Bi, G. Q., & Poo, M. M. (1998).** "Synaptic modifications in cultured hippocampal neurons: dependence on spike timing, synaptic strength, and postsynaptic cell type." *Journal of Neuroscience*, 18(24), 10464–10472.
  *The landmark paper on STDP in hippocampal cultures. Beautiful experiments demonstrating the timing-dependent asymmetry of synaptic plasticity.*

- **Bliss, T. V. P., & Lømo, T. (1973).** "Long-lasting potentiation of synaptic transmission in the dentate area of the anaesthetized rabbit following stimulation of the perforant path." *Journal of Physiology*, 232(2), 331–356.
  *The discovery of LTP — the experimental basis of Hebbian learning. A must-read classic.*

- **Markram, H., Lübke, J., Frotscher, M., & Sakmann, B. (1997).** "Regulation of synaptic efficacy by coincidence of postsynaptic APs and EPSPs." *Science*, 275(5297), 213–215.
  *The independent co-discovery of STDP, demonstrating timing-dependent plasticity in neocortical neurons.*

### Neural Circuits and Oscillations

- **Buzsáki, G. (2006).** *Rhythms of the Brain.* Oxford University Press.
  *A magisterial treatment of neural oscillations and their role in cognition. Chapters 4–6 on oscillatory mechanisms are directly relevant to Section 3.8.*

- **Koch, C. (1999).** *Biophysics of Computation: Information Processing in Single Neurons.* Oxford University Press.
  *A detailed treatment of how individual neurons process information. Essential for understanding the computational complexity of biological neurons beyond the simple models presented here.*

- **Fries, P. (2005).** "A mechanism for cognitive dynamics: neuronal communication through neuronal coherence." *Trends in Cognitive Sciences*, 9(10), 474–480.
  *The "communication through coherence" hypothesis — how oscillatory synchronization enables selective neural communication. Important for understanding how oscillations might support organoid computation.*

### Computational Neuroscience Textbooks

- **Dayan, P., & Abbott, L. F. (2001).** *Theoretical Neuroscience: Computational and Mathematical Modeling of Neural Systems.* MIT Press.
  *The standard computational neuroscience textbook. Chapters 1–2 cover the HH model and synaptic transmission; Chapters 8–10 cover plasticity and learning. Freely available online.*

- **Gerstner, W., Kistler, W. M., Naud, R., & Paninski, L. (2014).** *Neuronal Dynamics: From Single Neurons to Networks and Models of Cognition.* Cambridge University Press.
  *An excellent modern textbook covering neuronal dynamics at multiple scales. Chapter 19 on STDP is particularly relevant. Available freely at neuronaldynamics.epfl.ch.*

---

## Future Directions

### 🔮 Open Problems

1. **Dendritic computation in organoids:** Individual dendrites can perform sophisticated computations (coincidence detection, direction selectivity, bistable switching) that are not captured by point-neuron models. Do organoid neurons develop sufficiently complex dendritic arbors to support these computations? If so, how do dendritic computations contribute to the organoid's overall computational capacity?

2. **Neuromodulation as a control knob:** Could controlled delivery of neuromodulators (dopamine, serotonin, acetylcholine) be used to dynamically switch an organoid between different computational modes — e.g., between exploration (high noise, broad sensitivity) and exploitation (low noise, sharp selectivity)? This would provide a powerful tool for programming organoid behavior.

3. **Homeostatic plasticity in organoids:** Biological neural networks maintain stable activity levels through homeostatic mechanisms (synaptic scaling, intrinsic plasticity). Do organoids exhibit homeostatic plasticity? If so, how does it interact with Hebbian plasticity and STDP in the context of learning?

4. **Multi-compartment models for organoid neurons:** Current computational models of organoid activity typically use simplified neuron models. Developing multi-compartment models that capture the actual morphology and biophysics of organoid-derived neurons would improve our ability to predict and interpret organoid computation.

5. **The role of glial cells in organoid computation:** Astrocytes modulate synaptic transmission, regulate extracellular ion concentrations, and form their own signaling networks. As organoids mature and develop astrocytes, how do glial cells contribute to (or interfere with) computation? Could "tripartite synapses" (involving pre- and postsynaptic neurons plus an astrocyte) provide computational capabilities beyond what purely neuronal circuits offer?

### 🚧 Contributor Placeholders

> **🚧 Placeholder 3.A:** Section 3.3 presents the original Hodgkin-Huxley model with squid giant axon parameters. A contributor with expertise in computational neuroscience could add a comparison with mammalian cortical neuron models (e.g., Traub et al., 1991; Pospischil et al., 2008) that would be more directly relevant to organoid neurons.

> **🚧 Placeholder 3.B:** Section 3.7 on neural circuits could be expanded with a quantitative treatment of canonical cortical microcircuit models (e.g., Potjans & Diesmann, 2014) and their potential realization in organoid tissue.

> **🚧 Placeholder 3.C:** Code Exercise 3.1 implements the single-compartment HH model. A contributor could extend this to a multi-compartment model with dendritic computation, demonstrating signal propagation along an axon or dendritic integration.

> **🚧 Placeholder 3.D:** A section on **calcium imaging** — the optical technique most commonly used to record neural activity in organoids — would complement the electrophysiology-focused content of this chapter. Contributors with calcium imaging expertise are invited to add a section covering GCaMP indicators, imaging protocols, and analysis methods.

> **🚧 Placeholder 3.E:** The relationship between the neuroscience foundations presented here and the reservoir computing framework (Chapter 10) could be made more explicit. A bridging section showing how HH neurons, STDP, and network motifs combine to create the rich dynamics needed for reservoir computing would strengthen the connection between Parts I and IV.

> **🚧 Placeholder 3.F:** Code Exercise 3.3 simulates oscillations using simple sinusoidal models and the Wilson-Cowan equations. A more biophysically detailed network simulation — using populations of HH neurons or integrate-and-fire neurons — would provide a more realistic demonstration of oscillation emergence.

---

## Chapter Summary

This chapter provided the neuroscience foundations essential for understanding biological computing in organoid systems. We covered:

- **Neuron anatomy and types** (Section 3.1): The structure of neurons (dendrites, soma, axon, synaptic terminals) and the major neuron types found in brain organoids (pyramidal neurons, interneurons, glial cells).

- **Resting membrane potential** (Section 3.2): The ionic basis of the resting potential, the Nernst equation for single-ion equilibrium potentials, and the Goldman-Hodgkin-Katz equation for multi-ion membrane potential.

- **Action potentials** (Section 3.3): The Hodgkin-Huxley model in full mathematical detail, including gating variables, rate constants, and the biophysical mechanisms underlying each phase of the action potential.

- **Synaptic transmission** (Section 3.4): Chemical and electrical synapses, EPSP/IPSP generation, and the integration of synaptic inputs.

- **Neurotransmitter systems** (Section 3.5): The roles of glutamate, GABA, dopamine, and acetylcholine in neural computation, with attention to their relevance for organoid computing.

- **Neural plasticity** (Section 3.6): Hebbian learning, LTP, LTD, and STDP — the mechanisms by which biological neural networks learn and adapt, and the foundation of organoid learning.

- **Neural circuits** (Section 3.7): Network motifs, cortical microcircuitry, and the canonical cortical circuit.

- **Neural oscillations** (Section 3.8): Frequency bands (delta through gamma), mechanisms of oscillation, and the computational roles of rhythmic activity.

- **Learning and memory** (Section 3.9): Types of memory, molecular mechanisms of consolidation, and the synaptic tagging hypothesis.

These foundations — from the biophysics of single neurons to the dynamics of neural populations — provide the engineering specifications for organoid intelligence. Every aspect of organoid computing, from interface design (Part III) to computational frameworks (Part IV) to ethical considerations (Part VII), builds on the neuroscience presented in this chapter.

**In the next chapter**, we move from neuroscience to bioengineering: how to actually grow, maintain, and characterize brain organoids for computing applications.

---

*Chapter 3 of 24 · Part I — Foundations*
*Previous: [← Chapter 2: A History of Brain Organoids](chapter-02-history-brain-organoids.md)*
*Next: [Chapter 4: Organoid Fabrication and Quality Control →](../part-02-biological-substrate/chapter-04-organoid-fabrication.md)*

---

**Copyright © 2026 DaScient, LLC. All rights reserved.**
Licensed under the [Apache License 2.0](../../../LICENSE).
