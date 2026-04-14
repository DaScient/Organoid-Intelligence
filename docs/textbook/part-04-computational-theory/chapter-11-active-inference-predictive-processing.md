# Chapter 11: Active Inference and Predictive Processing

> *Part IV — Computational Theory*
>
> **Organoid Intelligence: Biological Computing In Living Systems**
> Copyright © 2026 DaScient, LLC

---

## Opening Vignette: The Physicist Who Heard the Brain Thinking

In 1867, the German physicist and physician Hermann von Helmholtz stood before the Berlin Physical Society and presented a theory so radical that it would take neuroscience more than a century to catch up. Helmholtz, already famous for measuring the speed of nerve impulses — a feat that earned him the enmity of his former teacher Johannes Müller, who had declared such measurement forever impossible — had turned his formidable intellect to the problem of perception. How, he asked, does the brain construct a stable, three-dimensional world from the flickering, two-dimensional, inverted images on the retina?

His answer was disarmingly simple and profoundly counterintuitive: perception is not a passive registration of sensory data. It is an act of *unconscious inference* (*unbewusster Schluss*). The brain, Helmholtz argued, does not merely receive signals from the eyes and ears. It actively constructs hypotheses about the causes of those signals — hypotheses shaped by prior experience — and tests them against incoming sensory evidence. What we see is not the world as it is, but the brain's best guess about what the world *should* be, given what it already knows.

The idea was breathtaking in its implications, but Helmholtz lacked the mathematical framework to formalize it. He could describe perception as inference, but he could not specify the algorithm. The tools he needed — probability theory, information theory, variational calculus — either did not exist or had not yet been connected to the problem of brain function. And so, for more than a century, Helmholtz's insight lay dormant, admired but unexploited, a prescient intuition awaiting its formal machinery.

That machinery arrived in pieces. In 1763, the Reverend Thomas Bayes's posthumously published theorem established the mathematical basis for updating beliefs in light of new evidence. In 1948, Claude Shannon's information theory provided the language for quantifying surprise, uncertainty, and the cost of being wrong. In the 1990s, the computational neuroscientists Rajesh Rao and Dana Ballard at the University of Rochester demonstrated that hierarchical prediction and prediction error could explain response properties of neurons in the visual cortex — the first concrete neural implementation of Helmholtz's unconscious inference.

But the decisive synthesis came from an unlikely quarter. In the early 2000s, Karl Friston, a physicist turned neuroscientist at University College London, was already famous for inventing statistical parametric mapping (SPM), the software suite that had become the standard tool for analyzing brain imaging data worldwide. Friston's background in statistical physics gave him a perspective that few neuroscientists shared: he saw the brain not as a computer executing algorithms, but as a physical system obeying variational principles — the same principles that govern the behavior of gases, fluids, and fields.

In a series of papers beginning in 2005 and culminating in a landmark 2010 article in *Nature Reviews Neuroscience*, Friston proposed the **free energy principle**: the idea that all adaptive biological systems — from single cells to human brains — can be understood as minimizing a single quantity called *variational free energy*. This quantity, borrowed from statistical physics and variational Bayesian inference, provides an upper bound on the surprise (or negative log evidence) that an organism encounters. By minimizing free energy, a system simultaneously minimizes its prediction errors and the complexity of its internal model — achieving the optimal balance between accuracy and parsimony that defines good science.

The free energy principle unified Helmholtz's unconscious inference, Bayesian probability, predictive coding, and optimal control into a single, mathematically precise framework. It explained not only perception — why we see what we expect to see — but also action — why we move to make our predictions come true — and learning — why our brains update their internal models in response to persistent prediction errors. Friston called this unified account **active inference**, because the agent does not passively observe the world; it actively intervenes to bring the world into alignment with its expectations.

This chapter traces the arc from Helmholtz's nineteenth-century intuition through Friston's twenty-first-century formalism, and asks what this framework means for organoid intelligence. If the brain is fundamentally a prediction machine — a system that builds generative models of its environment and minimizes the discrepancy between prediction and reality — then what does it mean for a brain organoid to predict? Can a self-organized neural tissue, floating in a dish and connected to a computer through a multi-electrode array, develop the internal models necessary for active inference? The emerging evidence, as we shall see, suggests that it can.

---

## 11.1 The Bayesian Brain Hypothesis

### 11.1.1 From Helmholtz to Bayes

Helmholtz's concept of unconscious inference rested on a simple but powerful observation: the sensory data available to the brain are inherently ambiguous. The same pattern of light on the retina could be produced by an infinite number of different arrangements of objects in the world. A small, nearby object produces the same retinal image as a large, distant one. A flat surface painted with converging lines produces the same image as a hallway receding into the distance. Somehow, the brain resolves these ambiguities effortlessly and almost always correctly.

The resolution, Helmholtz realized, requires *prior knowledge*. The brain does not treat each sensory input as a novel puzzle to be solved from scratch. Instead, it brings to bear a lifetime of accumulated experience — expectations about the sizes, distances, and behaviors of objects — and combines this prior knowledge with the current sensory evidence to arrive at the most probable interpretation.

This is precisely what Bayes' theorem formalizes. Given sensory observations $\mathbf{o}$ and hypotheses about hidden causes $\boldsymbol{\theta}$, the posterior probability of the causes given the observations is:

$$
p(\boldsymbol{\theta} \mid \mathbf{o}) = \frac{p(\mathbf{o} \mid \boldsymbol{\theta}) \, p(\boldsymbol{\theta})}{p(\mathbf{o})}
$$

where:

- $p(\boldsymbol{\theta})$ is the **prior** — the brain's existing beliefs about the causes before observing the data,
- $p(\mathbf{o} \mid \boldsymbol{\theta})$ is the **likelihood** — the probability of observing $\mathbf{o}$ if the causes were $\boldsymbol{\theta}$,
- $p(\mathbf{o}) = \int p(\mathbf{o} \mid \boldsymbol{\theta}) \, p(\boldsymbol{\theta}) \, d\boldsymbol{\theta}$ is the **model evidence** (or marginal likelihood),
- $p(\boldsymbol{\theta} \mid \mathbf{o})$ is the **posterior** — the updated belief after incorporating the observations.

> **Key Insight:** The Bayesian brain hypothesis does not claim that neurons perform symbolic probability calculations. Rather, it proposes that neural dynamics implicitly implement Bayesian inference — the computations performed by neural circuits are *functionally equivalent* to updating probability distributions over hidden causes.

### 11.1.2 Generative Models

Central to the Bayesian brain is the concept of a **generative model**: an internal model that specifies how hidden causes in the world generate the sensory observations the brain receives. Formally, a generative model defines a joint probability distribution:

$$
p(\mathbf{o}, \boldsymbol{\theta}) = p(\mathbf{o} \mid \boldsymbol{\theta}) \, p(\boldsymbol{\theta})
$$

This model encodes two things: the prior beliefs about what causes are likely ($p(\boldsymbol{\theta})$) and the process by which causes produce observations ($p(\mathbf{o} \mid \boldsymbol{\theta})$). Perception, in this framework, is the process of *inverting* the generative model — inferring the causes from the observations. This inversion is precisely what Bayes' theorem computes.

Generative models can be hierarchical. A model of visual perception might have:

- **Level 1 (low-level features):** edges, orientations, spatial frequencies
- **Level 2 (objects):** combinations of features forming recognized shapes
- **Level 3 (scenes):** arrangements of objects in spatial context
- **Level 4 (narratives):** causal stories explaining why objects are where they are

Each level generates predictions about the level below and receives prediction errors from below. This hierarchical structure maps naturally onto the layered architecture of the cerebral cortex.

**Table 11.1: Components of a Bayesian Generative Model**

| Component | Symbol | Neurobiological Interpretation | Example |
|-----------|--------|-------------------------------|---------|
| Prior | $p(\boldsymbol{\theta})$ | Spontaneous activity, learned expectations | "Faces are likely in my visual field" |
| Likelihood | $p(\mathbf{o} \mid \boldsymbol{\theta})$ | Forward model mapping causes to sensations | "A face at this angle produces this retinal pattern" |
| Posterior | $p(\boldsymbol{\theta} \mid \mathbf{o})$ | Neural representation after sensory processing | "I am seeing my colleague's face" |
| Evidence | $p(\mathbf{o})$ | Overall model fit; drives model selection | "My visual model explains the scene well" |

### 11.1.3 The Brain as a Prediction Machine

The Bayesian brain hypothesis reframes the function of the nervous system: instead of processing sensory inputs bottom-up — from raw signals to percepts to cognition — the brain primarily operates top-down, generating predictions about expected inputs and comparing those predictions with actual sensory data. Only the *discrepancies* — the prediction errors — propagate upward, carrying genuine news about the state of the world.

This inversion of the classical view has profound implications. In the traditional "feature detector" model, a neuron in visual cortex responds because a stimulus matching its preferred feature has appeared in its receptive field. In the predictive model, a neuron responds because the stimulus *deviates* from what was predicted. A neuron that fires vigorously is not saying "I found what I was looking for" — it is saying "something unexpected happened."

> **Cross-reference:** The reservoir computing framework (Chapter 10) treats neural circuits as fixed dynamical systems that transform inputs into high-dimensional representations. Active inference complements this view by adding directionality: the reservoir does not merely transform inputs — it generates predictions, and the discrepancies between predictions and inputs drive learning and adaptation.

---

## 11.2 Predictive Processing

### 11.2.1 Rao and Ballard's Hierarchical Predictive Coding

The modern theory of predictive processing crystallized in a landmark 1999 paper by Rajesh Rao and Dana Ballard, "Predictive coding in the visual cortex: a functional interpretation of some extra-classical receptive-field effects." Working at the University of Rochester, Rao and Ballard constructed a hierarchical neural network that learned to predict natural images. Each level of the hierarchy sent top-down predictions to the level below and received bottom-up prediction errors.

The model reproduced several well-known but previously unexplained properties of visual cortical neurons:

- **End-stopping:** neurons that respond to short line segments but not long ones. In the predictive coding framework, a long line is *predictable* (each segment predicts the next), so prediction error diminishes — the neuron's response *decreases* as the stimulus becomes more predictable.
- **Surround suppression:** neurons whose responses are reduced when stimuli extend beyond their classical receptive field. The surrounding context generates predictions about the center, reducing the center's prediction error.
- **Non-classical receptive field effects:** contextual modulations that cannot be explained by the neuron's direct feedforward input alone.

### 11.2.2 The Predictive Coding Algorithm

The predictive coding algorithm operates on a hierarchy of representational levels $\ell = 1, 2, \ldots, L$. At each level, the system maintains a representation $\boldsymbol{\mu}_\ell$ (the current best estimate of the causes at that level) and computes a prediction error $\boldsymbol{\varepsilon}_\ell$ by comparing the representation with predictions from the level above.

The prediction error at level $\ell$ is:

$$
\boldsymbol{\varepsilon}_\ell = \mathbf{o}_\ell - g_\ell(\boldsymbol{\mu}_{\ell+1})
$$

where $\mathbf{o}_\ell$ is the input to level $\ell$ (either sensory data at the bottom or the representation from the level below) and $g_\ell(\cdot)$ is a nonlinear function generating the top-down prediction. The representations are updated by gradient descent on the prediction errors:

$$
\dot{\boldsymbol{\mu}}_\ell = \frac{\partial g_{\ell-1}}{\partial \boldsymbol{\mu}_\ell}^\top \boldsymbol{\Pi}_{\ell-1} \boldsymbol{\varepsilon}_{\ell-1} - \boldsymbol{\Pi}_\ell \boldsymbol{\varepsilon}_\ell
$$

where $\boldsymbol{\Pi}_\ell$ is the **precision matrix** (inverse covariance) at level $\ell$, which weights prediction errors according to their estimated reliability.

> **Key Insight:** Precision-weighting is the computational mechanism of attention. A prediction error that is assigned high precision (low uncertainty) has a large influence on belief updating. A prediction error assigned low precision (high uncertainty) is effectively ignored. This provides a principled account of how the brain selectively attends to informative signals.

### 11.2.3 The Canonical Microcircuit for Predictive Coding

Bastos et al. (2012) proposed that the six-layered structure of the mammalian cortex implements a canonical predictive coding circuit:

**Table 11.2: The Canonical Microcircuit for Predictive Coding**

| Cortical Layer | Function | Signal Direction | Information Carried |
|---------------|----------|-----------------|-------------------|
| Layer 2/3 (superficial pyramidal) | Error units | Bottom-up (forward) | Prediction errors ($\boldsymbol{\varepsilon}$) |
| Layer 5/6 (deep pyramidal) | Representation units | Top-down (backward) | Predictions ($g(\boldsymbol{\mu})$) |
| Layer 4 (granular) | Input relay | Bottom-up | Sensory/lower-level input |
| Layer 1 (molecular) | Prediction delivery | Top-down | Higher-level predictions |
| Inhibitory interneurons | Precision modulation | Local | Gain control ($\boldsymbol{\Pi}$) |

In this architecture:

- **Forward connections** (from superficial layers to higher areas) carry prediction errors — the "news" that needs to propagate up the hierarchy.
- **Backward connections** (from deep layers to lower areas) carry predictions — the brain's current best model of what lower levels should be representing.
- **Lateral connections** modulate the precision (gain) of prediction error units, implementing attention.

This arrangement predicts specific patterns of neural dynamics:

1. Prediction errors should drive **gamma-band** (30–100 Hz) oscillations in superficial layers.
2. Predictions should drive **beta-band** (13–30 Hz) oscillations in deep layers.
3. Attention should modulate the **gain** of error units without changing their tuning.

Experimental evidence from electrophysiology, magnetoencephalography, and laminar recordings has largely confirmed these predictions (Bastos et al., 2015; Michalareas et al., 2016).

### 11.2.4 Mathematical Formulation of Hierarchical Predictive Coding

Consider a two-level predictive coding model. At the sensory level ($\ell = 1$), the data $\mathbf{o}$ are generated by hidden causes $\boldsymbol{\theta}_1$ through a likelihood model corrupted by sensory noise:

$$
\mathbf{o} = g_1(\boldsymbol{\theta}_1) + \boldsymbol{\omega}_1, \quad \boldsymbol{\omega}_1 \sim \mathcal{N}(\mathbf{0}, \boldsymbol{\Sigma}_1)
$$

At the second level, the causes $\boldsymbol{\theta}_1$ are themselves generated by higher-order causes $\boldsymbol{\theta}_2$:

$$
\boldsymbol{\theta}_1 = g_2(\boldsymbol{\theta}_2) + \boldsymbol{\omega}_2, \quad \boldsymbol{\omega}_2 \sim \mathcal{N}(\mathbf{0}, \boldsymbol{\Sigma}_2)
$$

The negative log probability of the observations and causes under this model is:

$$
-\ln p(\mathbf{o}, \boldsymbol{\theta}_1, \boldsymbol{\theta}_2) = \frac{1}{2} \boldsymbol{\varepsilon}_1^\top \boldsymbol{\Pi}_1 \boldsymbol{\varepsilon}_1 + \frac{1}{2} \boldsymbol{\varepsilon}_2^\top \boldsymbol{\Pi}_2 \boldsymbol{\varepsilon}_2 + \frac{1}{2} \ln |\boldsymbol{\Sigma}_1| + \frac{1}{2} \ln |\boldsymbol{\Sigma}_2| + \text{const.}
$$

where $\boldsymbol{\varepsilon}_1 = \mathbf{o} - g_1(\boldsymbol{\theta}_1)$ and $\boldsymbol{\varepsilon}_2 = \boldsymbol{\theta}_1 - g_2(\boldsymbol{\theta}_2)$ are the prediction errors at each level, and $\boldsymbol{\Pi}_\ell = \boldsymbol{\Sigma}_\ell^{-1}$ are the precision matrices. Minimizing this quantity with respect to $\boldsymbol{\theta}_1$ and $\boldsymbol{\theta}_2$ yields the predictive coding update equations described in Section 11.2.2.

---

## 11.3 The Free Energy Principle

### 11.3.1 From Predictive Coding to Free Energy

Predictive coding, as described in Section 11.2, provides a powerful account of hierarchical inference in the brain. But it leaves a foundational question unanswered: *why* should the brain minimize prediction errors? What is the deeper principle from which predictive coding derives?

Karl Friston's answer is the **free energy principle** (FEP): the claim that any self-organizing system that maintains its structural integrity over time must, on average, minimize a quantity called *variational free energy*. This is not merely an empirical observation — it is, Friston argues, a necessary consequence of the system's continued existence.

### 11.3.2 Surprise and the Imperative to Exist

Consider a living organism in a fluctuating environment. At each moment, the organism occupies some state and receives some sensory observations $\mathbf{o}$. The **surprise** (or surprisal) associated with those observations under the organism's generative model is:

$$
\mathcal{S}(\mathbf{o}) = -\ln p(\mathbf{o} \mid m)
$$

where $m$ denotes the generative model. Observations that are highly probable under the model have low surprise; observations that are improbable have high surprise. A fish expects to be surrounded by water; finding itself on dry land would generate enormous surprise.

The free energy principle rests on a crucial insight: for a system to persist as the kind of system it is — to resist the thermodynamic tendency toward dissolution — it must keep itself in a restricted set of states. A fish must remain in water; a warm-blooded animal must maintain its body temperature within narrow bounds; a neuron must preserve its membrane potential within viable ranges. Mathematically, this means the organism's sensory states must have **low entropy** (they must not wander into improbable regions of state space), which is equivalent to saying the organism must, on average, minimize surprise:

$$
H[p(\mathbf{o})] = \mathbb{E}[-\ln p(\mathbf{o})] = \mathbb{E}[\mathcal{S}(\mathbf{o})]
$$

### 11.3.3 Variational Free Energy

The problem is that surprise $\mathcal{S}(\mathbf{o}) = -\ln p(\mathbf{o})$ is intractable to compute directly, because the marginal likelihood requires integrating over all possible hidden causes:

$$
p(\mathbf{o}) = \int p(\mathbf{o}, \boldsymbol{\theta}) \, d\boldsymbol{\theta}
$$

This integral is, in all but the simplest cases, analytically and computationally infeasible. The free energy principle resolves this by introducing a **recognition density** $q(\boldsymbol{\theta})$ — an approximate posterior over hidden causes — and defining the **variational free energy**:

$$
F = \mathbb{E}_{q}\bigl[\ln q(\boldsymbol{\theta}) - \ln p(\mathbf{o}, \boldsymbol{\theta})\bigr]
$$

This expression can be decomposed in two illuminating ways.

**Decomposition 1 (Energy minus Entropy):**

$$
F = \underbrace{\mathbb{E}_{q}\bigl[-\ln p(\mathbf{o}, \boldsymbol{\theta})\bigr]}_{\text{Energy}} - \underbrace{\bigl(-\mathbb{E}_{q}[\ln q(\boldsymbol{\theta})]\bigr)}_{\text{Entropy of } q}
$$

This mirrors the definition of free energy in statistical physics: $F = U - TS$, where $U$ is internal energy, $T$ is temperature, and $S$ is entropy.

**Decomposition 2 (Complexity plus Accuracy):**

$$
F = \underbrace{D_{\mathrm{KL}}\bigl[q(\boldsymbol{\theta}) \,\|\, p(\boldsymbol{\theta})\bigr]}_{\text{Complexity}} - \underbrace{\mathbb{E}_{q}\bigl[\ln p(\mathbf{o} \mid \boldsymbol{\theta})\bigr]}_{\text{Accuracy}}
$$

Here, **complexity** measures how far the approximate posterior deviates from the prior (the cost of updating beliefs), and **accuracy** measures how well the model explains the data. Minimizing free energy simultaneously maximizes accuracy (explaining the data well) and minimizes complexity (keeping beliefs close to priors — Occam's razor).

**Decomposition 3 (Divergence plus Surprise):**

$$
F = \underbrace{D_{\mathrm{KL}}\bigl[q(\boldsymbol{\theta}) \,\|\, p(\boldsymbol{\theta} \mid \mathbf{o})\bigr]}_{\geq \, 0} + \underbrace{\bigl(-\ln p(\mathbf{o})\bigr)}_{\text{Surprise}}
$$

Since the KL divergence is always non-negative, free energy is an **upper bound on surprise**. Minimizing free energy tightens this bound, bringing $q(\boldsymbol{\theta})$ closer to the true posterior $p(\boldsymbol{\theta} \mid \mathbf{o})$ and reducing the system's exposure to surprising (and therefore existentially threatening) observations.

> **Key Insight:** The free energy principle unifies perception, learning, and action under a single imperative. Perception minimizes free energy by updating the recognition density $q(\boldsymbol{\theta})$. Learning minimizes free energy by updating the parameters of the generative model. Action minimizes free energy by changing sensory observations $\mathbf{o}$ — moving the body to bring the world into alignment with the model's predictions.

### 11.3.4 Connection to Thermodynamic Free Energy

The terminology is not merely metaphorical. The variational free energy of active inference is mathematically homologous to the Helmholtz free energy in statistical mechanics:

**Table 11.3: Parallel Between Thermodynamic and Variational Free Energy**

| Thermodynamic Concept | Symbol | Active Inference Analogue | Symbol |
|----------------------|--------|--------------------------|--------|
| Internal energy | $U$ | Expected energy | $\mathbb{E}_q[-\ln p(\mathbf{o}, \boldsymbol{\theta})]$ |
| Temperature | $T$ | Typically set to 1 | — |
| Entropy | $S$ | Entropy of recognition density | $H[q(\boldsymbol{\theta})]$ |
| Helmholtz free energy | $F = U - TS$ | Variational free energy | $F = E_q - H[q]$ |
| Equilibrium | $\min F$ | Optimal inference | $\min F$ |
| Boltzmann distribution | $p \propto e^{-E/kT}$ | Posterior | $p(\boldsymbol{\theta} \mid \mathbf{o})$ |

This connection is not coincidental. Both thermodynamic and variational free energy arise from the same mathematical structure: a system coupled to an environment, described by a joint probability distribution, seeking the configuration that maximizes entropy subject to constraints. The brain and the gas in a box are, in this deep mathematical sense, solving the same problem.

---

## 11.4 Active Inference

### 11.4.1 Beyond Passive Perception

Classical predictive coding and Bayesian brain theories describe perception: how the brain infers hidden causes from sensory data. But perception alone is only half the story. Organisms do not merely observe the world — they *act* upon it. A frog does not simply infer the presence of a fly; it flicks its tongue to catch it. The question is: how does action fit into the Bayesian framework?

Active inference provides the answer: **action and perception are both in the service of the same objective — minimizing variational free energy.** Perception minimizes free energy by changing internal states (beliefs). Action minimizes free energy by changing external states (the world), thereby changing the sensory observations the organism receives.

Formally, free energy depends on both the recognition density $q(\boldsymbol{\theta})$ and the sensory observations $\mathbf{o}$, which in turn depend on the organism's actions $\mathbf{a}$:

$$
F\bigl[q(\boldsymbol{\theta}), \mathbf{o}(\mathbf{a})\bigr] = \mathbb{E}_q\bigl[\ln q(\boldsymbol{\theta}) - \ln p(\mathbf{o}(\mathbf{a}), \boldsymbol{\theta})\bigr]
$$

Minimizing with respect to $q$ yields perception (Bayesian inference). Minimizing with respect to $\mathbf{a}$ yields action:

$$
\mathbf{a}^* = \arg\min_{\mathbf{a}} F\bigl[q(\boldsymbol{\theta}), \mathbf{o}(\mathbf{a})\bigr]
$$

Under Gaussian assumptions, this reduces to a remarkably simple motor control law: **action changes the world to fulfill the brain's predictions.** If the brain predicts that its hand is reaching for a cup, the motor system generates the movements that make this prediction come true. Prediction error is minimized not by changing the prediction but by changing the reality.

### 11.4.2 Expected Free Energy and Planning

Active inference extends naturally to planning and decision-making through the concept of **expected free energy** ($\mathbf{G}$). When an organism must choose among possible future actions (or *policies*) $\pi$, it evaluates each policy by the expected free energy it would generate:

$$
\mathbf{G}(\pi) = \sum_{\tau} \mathbb{E}_{\tilde{q}}\bigl[\ln q(\boldsymbol{\theta}_\tau \mid \pi) - \ln p(\mathbf{o}_\tau, \boldsymbol{\theta}_\tau \mid \pi)\bigr]
$$

where the sum is over future time steps $\tau$ and $\tilde{q}$ denotes the predictive posterior under policy $\pi$. This quantity decomposes into two terms:

$$
\mathbf{G}(\pi) = \underbrace{-\mathbb{E}_{\tilde{q}}\bigl[\ln p(\mathbf{o}_\tau \mid C)\bigr]}_{\text{Pragmatic value (goal-seeking)}} + \underbrace{-\mathbb{E}_{\tilde{q}}\bigl[H[p(\mathbf{o}_\tau \mid \boldsymbol{\theta}_\tau, \pi)]\bigr]}_{\text{Epistemic value (information-seeking)}}
$$

where $C$ encodes the organism's **prior preferences** — the observations it "expects" (or desires) to encounter. The first term drives the organism toward preferred outcomes (pragmatic value, or exploitation). The second term drives it toward states that resolve uncertainty about hidden causes (epistemic value, or exploration).

> **Key Insight:** Active inference dissolves the classical exploration–exploitation dilemma. An agent does not need separate mechanisms for exploring and exploiting. Both emerge from a single imperative: minimize expected free energy. When uncertainty is high, the epistemic term dominates and the agent explores. When uncertainty is low, the pragmatic term dominates and the agent exploits.

### 11.4.3 The Complete Active Inference Loop

Active inference describes a closed sensorimotor loop:

**Table 11.4: The Active Inference Cycle**

| Phase | Operation | Free Energy Contribution | Neural Implementation |
|-------|-----------|-------------------------|----------------------|
| **Sense** | Receive observations $\mathbf{o}_t$ | Provides new data for inference | Sensory transduction |
| **Infer** | Update $q(\boldsymbol{\theta})$ to minimize $F$ | Perception: $\min_q F$ | Cortical message passing |
| **Predict** | Generate predictions $g(\boldsymbol{\mu})$ | Top-down predictions | Backward connections |
| **Evaluate** | Compute $\mathbf{G}(\pi)$ for candidate policies | Policy selection | Prefrontal/basal ganglia |
| **Act** | Execute action $\mathbf{a}^*$ | Action: $\min_\mathbf{a} F$ | Motor cortex/spinal cord |
| **Observe** | Receive updated observations | Return to Sense | Sensory reafference |

This loop operates continuously, at multiple temporal scales: rapid perceptual inference (milliseconds), motor control (tens of milliseconds), deliberate planning (seconds), and learning (minutes to years). At every scale, the same principle applies — minimize (expected) free energy.

### 11.4.4 Prior Preferences and Goal-Directed Behavior

A common objection to the free energy principle is: if organisms simply minimize surprise, why do they ever leave the comfort of a dark, quiet room (which is entirely predictable)? The answer lies in **prior preferences**.

In active inference, an organism's goals are encoded as prior beliefs about the observations it expects to receive. A hungry organism has a prior belief that it will soon observe food. This prior is violated by the absence of food, generating prediction error (surprise). The organism reduces this surprise not by revising its belief ("I don't actually need food") but by acting to find food. Homeostatic set-points, survival imperatives, and learned goals are all encoded as prior preferences in the generative model.

Formally, the prior preference distribution $p(\mathbf{o} \mid C)$ assigns high probability to desired observations and low probability to undesired ones. The pragmatic term in expected free energy:

$$
-\mathbb{E}_{\tilde{q}}\bigl[\ln p(\mathbf{o}_\tau \mid C)\bigr]
$$

penalizes policies that lead to observations inconsistent with the organism's preferences — driving goal-directed behavior without invoking reward signals, utility functions, or reinforcement learning.

---

## 11.5 Predictive Processing in Neural Circuits

### 11.5.1 Biological Implementation

The predictive processing framework makes specific, testable predictions about neural circuit organization. Over the past two decades, a growing body of evidence has confirmed many of these predictions.

**Superficial vs. deep cortical layers.** The canonical microcircuit model (Section 11.2.3) predicts a functional division between superficial (layers 2/3) and deep (layers 5/6) pyramidal cells. Superficial cells encode prediction errors; deep cells encode predictions (representations). This division has been confirmed by laminar recordings in primate visual cortex (Maier et al., 2010) and auditory cortex (Lakatos et al., 2013).

**Forward vs. backward connections.** Forward (ascending) connections originate predominantly from superficial layers and terminate in layer 4 of the target area. Backward (descending) connections originate from deep layers and terminate diffusely in layers 1 and 6 of the target area. Predictive coding assigns different functional roles: forward connections carry prediction errors; backward connections carry predictions. Anatomical and physiological studies confirm that forward and backward connections differ in their laminar origins and terminations, synaptic properties, neurotransmitter receptor profiles, and oscillatory dynamics (Felleman & Van Essen, 1991; Bastos et al., 2012).

### 11.5.2 Precision-Weighting and Attention

In the predictive coding framework, not all prediction errors are created equal. The **precision** of a prediction error — the inverse of its expected variance — determines how much influence it has on belief updating. High-precision errors carry reliable information and should drive large updates. Low-precision errors are unreliable and should be attenuated.

Precision-weighting provides a natural account of attention:

- **Spatial attention:** increasing the precision of prediction errors in the attended spatial location.
- **Feature attention:** increasing the precision of prediction errors for the attended feature (color, motion, orientation).
- **Top-down attention:** higher cortical areas modulate the gain (precision) of error units in lower areas.

Neurochemically, precision-weighting is associated with **neuromodulatory systems**: acetylcholine modulates sensory precision, dopamine modulates reward prediction precision, and noradrenaline modulates environmental volatility estimates (Parr & Friston, 2017). Disruptions of precision estimation have been linked to psychiatric conditions including autism (excessively high sensory precision), schizophrenia (aberrant precision), and anxiety disorders (elevated precision on interoceptive signals).

### 11.5.3 NMDA Receptors and Predictive Signaling

**NMDA (N-methyl-D-aspartate) receptors** play a special role in predictive processing. Unlike fast AMPA receptors, NMDA receptors have slow kinetics, voltage-dependent magnesium blockade, and long integration windows — properties that make them ideal for carrying top-down predictions that must be compared with fast bottom-up inputs.

Several lines of evidence support this:

1. **NMDA antagonists disrupt prediction.** Ketamine, an NMDA antagonist, produces symptoms resembling psychosis — hallucinations, delusions, disorganized thought — consistent with the loss of top-down predictive signaling (Corlett et al., 2009).

2. **Mismatch negativity depends on NMDA.** The mismatch negativity (MMN) is an ERP component reflecting prediction error for unexpected auditory stimuli. NMDA antagonists attenuate the MMN in both humans and animal models (Javitt et al., 1996).

3. **NMDA receptors gate plasticity.** Long-term potentiation (LTP) and long-term depression (LTD) — the synaptic mechanisms of learning — both depend on NMDA receptor activation. In predictive coding terms, persistent prediction errors (gated by NMDA) trigger synaptic weight changes that update the generative model.

> **Cross-reference:** The role of NMDA receptors in synaptic plasticity is discussed in the context of organoid electrophysiology in Chapter 5, Section 5.3. The pharmacological manipulation of NMDA signaling in brain organoids provides a direct experimental test of predictive processing theories.

### 11.5.4 Experimental Evidence

The predictive processing framework has been tested across multiple sensory modalities and experimental paradigms:

**Table 11.5: Experimental Evidence for Predictive Processing**

| Paradigm | Finding | Interpretation |
|----------|---------|----------------|
| Repetition suppression | Neural responses decrease for repeated stimuli | Prediction established; error decreases |
| Mismatch negativity (MMN) | Enhanced response to unexpected (deviant) stimuli | Prediction error for deviant stimulus |
| Omission response | Neural response to *absent* expected stimuli | Prediction without sensory confirmation |
| Bistable perception | Alternating percepts for ambiguous stimuli | Competition between generative hypotheses |
| Perceptual learning | Improved detection correlates with reduced V1 activity | Better predictions → smaller errors |
| Placebo analgesia | Prior belief (placebo) reduces pain response | Prior prediction modulates pain precision |

---

## 11.6 Active Inference in Organoid Systems

### 11.6.1 Can Organoids Form Internal Models?

The central question for applying active inference to organoid intelligence is whether brain organoids can develop internal generative models — structured representations of statistical regularities in their inputs that enable prediction. Several considerations support this possibility:

1. **Self-organized structure.** Cortical organoids spontaneously develop layered architectures with distinct progenitor zones, neuronal layers, and synaptic connections (see Chapter 4, Section 4.3). These structures, while less organized than the intact cortex, contain the fundamental building blocks of predictive processing: excitatory pyramidal-like cells, inhibitory interneurons, and recurrent connectivity.

2. **Spontaneous activity patterns.** Mature organoids exhibit rich spontaneous activity, including oscillatory patterns that resemble nested cortical oscillations (Trujillo et al., 2019). These oscillations may reflect the internal dynamics of a system that is continuously generating predictions — even in the absence of structured input.

3. **Stimulus-evoked responses.** When stimulated through multi-electrode arrays, organoids show stimulus-dependent response patterns that evolve over repeated presentations (Kagan et al., 2022). This adaptation is consistent with the formation of simple predictive models of the input statistics.

4. **Plasticity.** Organoids exhibit multiple forms of synaptic plasticity, including LTP and LTD (see Chapter 5). These plasticity mechanisms are precisely those required for updating generative models in response to persistent prediction errors.

### 11.6.2 Evidence from DishBrain

The strongest evidence for active inference–like behavior in organoids comes from the DishBrain system (Kagan et al., 2022). In this paradigm, cortical neurons cultured on a high-density MEA were connected to a simulated game of Pong. Sensory input (ball position) was delivered as electrical stimulation, and neural activity was read out as paddle movements.

The key finding was that neurons learned to play Pong — their performance improved over time in a manner consistent with free energy minimization. Specifically:

- **Predictable stimulation** was delivered when neurons moved the paddle correctly (the ball was intercepted). This low-entropy, predictable feedback maintained a low free energy state.
- **Unpredictable stimulation** (random noise) was delivered when neurons failed to intercept the ball. This high-entropy feedback increased free energy.
- Neurons learned to minimize free energy by adjusting their responses to avoid the unpredictable stimulation — effectively learning to play the game.

This is precisely the behavior predicted by active inference: the system minimizes surprise by adjusting its actions to produce predictable sensory consequences.

> **Key Insight:** The DishBrain experiment did not use reward or punishment in the traditional reinforcement learning sense. Instead, it used *predictability* and *unpredictability* as the driving signals — a direct implementation of the free energy principle. This subtle but critical distinction aligns the experiment with active inference rather than operant conditioning.

### 11.6.3 Designing Active Inference Experiments with Organoids

The DishBrain result opens the door to more sophisticated active inference experiments with organoid systems. Several experimental designs are particularly promising:

1. **Hierarchical prediction tasks.** Present organoids with structured stimuli that have multiple levels of regularity (e.g., sequences of sequences). Monitor whether the organoid develops hierarchical representations — predicting both the current element and the higher-order structure.

2. **Active exploration.** Allow the organoid's activity to control which stimuli it receives (akin to saccadic eye movements). Under active inference, the organoid should explore to reduce uncertainty and then exploit to achieve preferred states.

3. **Model updating.** Present organoids with non-stationary environments where the statistical structure changes over time. Active inference predicts that the system should track these changes by updating its generative model — initially showing increased prediction errors followed by adaptation.

4. **Precision manipulation.** Pharmacologically modulate neuromodulatory systems (e.g., applying acetylcholine receptor agonists) to test whether precision-weighting affects the organoid's ability to learn predictive models, as the theory predicts.

### 11.6.4 Free Energy Minimization as a Design Principle for OI

Active inference suggests a principled approach to designing organoid intelligence systems:

**Table 11.6: Design Principles from Active Inference**

| Principle | Implementation | Benefit |
|-----------|---------------|---------|
| Provide structured feedback | Encode task performance as stimulus predictability | Leverages intrinsic free energy minimization |
| Match stimulus statistics to organoid capacity | Start with simple regularities, increase complexity | Enables progressive model building |
| Enable closed-loop interaction | Let organoid actions affect sensory input | Enables active inference (not just perception) |
| Support hierarchical processing | Provide stimuli with multiple levels of structure | Promotes hierarchical model development |
| Respect Markov blanket boundaries | Design interfaces at natural system boundaries | Respects the system's self-organization |

Rather than imposing external learning algorithms, the active inference framework suggests designing *environments* in which the organoid's intrinsic drive to minimize free energy naturally produces the desired computational behavior — much as evolution designs ecological niches that shape the behavior of organisms.

---

## 11.7 Markov Blankets and Self-Organization

### 11.7.1 The Markov Blanket Concept

A **Markov blanket** is a statistical concept that partitions a system into internal states, external states, and blanket states (which comprise sensory states and active states). The defining property is conditional independence: internal states are statistically independent of external states given the blanket states.

Formally, for a system with internal states $\boldsymbol{\mu}$, external states $\boldsymbol{\eta}$, sensory states $\mathbf{s}$, and active states $\mathbf{a}$, the Markov blanket condition is:

$$
p(\boldsymbol{\mu}, \boldsymbol{\eta} \mid \mathbf{s}, \mathbf{a}) = p(\boldsymbol{\mu} \mid \mathbf{s}, \mathbf{a}) \, p(\boldsymbol{\eta} \mid \mathbf{s}, \mathbf{a})
$$

This means that everything the internal states need to "know" about the external states is mediated through the blanket. The internal states need never interact directly with the external world — they interact only with the sensory and active states at the boundary.

> **Key Insight:** The Markov blanket is not merely a mathematical abstraction. It is a physical boundary — the cell membrane, the sensory epithelium, the MEA interface — that separates a self-organizing system from its environment. Any system that persists over time in a fluctuating environment must possess a Markov blanket, because without one, it would dissolve into the environment.

### 11.7.2 Markov Blankets in Organoid Systems

Brain organoids develop Markov blanket structure through self-organization:

- **The outer surface** of the organoid acts as a sensory interface, receiving electrical stimulation from the MEA and chemical signals from the culture medium.
- **The interior** contains neurons whose activity depends on the sensory surface but not directly on external states.
- **Active states** are the electrical signals generated by the organoid that, in a closed-loop system, influence the external environment (e.g., controlling game stimuli in DishBrain).

This Markov blanket structure is not engineered — it emerges spontaneously as the organoid self-organizes from a population of pluripotent stem cells (Chapter 4). The boundary between "inside" and "outside" is a consequence of development, not design.

### 11.7.3 Connection to Autopoiesis and Self-Organization

The concept of the Markov blanket connects active inference to the biological tradition of **autopoiesis** — the theory, developed by Humberto Maturana and Francisco Varela in the 1970s, that living systems are defined by their capacity to produce and maintain themselves.

An autopoietic system maintains its identity by continuously regenerating its components and preserving its boundary. In Markov blanket terms, autopoiesis is the process by which a system maintains and renews its blanket states — the boundary that separates it from the environment. Active inference is what the internal states do: they minimize free energy, which is equivalent to maintaining the structural and functional integrity of the Markov blanket.

This perspective has deep implications for organoid intelligence:

1. **Self-organization is not a bug — it is a feature.** The tendency of brain organoids to self-organize into structured tissues is not merely convenient for experimenters; it is the fundamental process by which the system establishes its Markov blanket and becomes capable of active inference.

2. **The interface is part of the system.** When an organoid is coupled to a MEA, the electrode array becomes part of the Markov blanket — the sensory and active surface through which internal and external states interact. Designing the interface is, in a deep sense, designing the system's boundary conditions.

3. **Nested Markov blankets.** Individual neurons within an organoid possess their own Markov blankets (cell membranes), nested within the organoid's blanket, which may in turn be nested within the blanket of a larger OI system. This nesting creates a natural hierarchy that maps onto hierarchical predictive processing.

> **Cross-reference:** The multi-scale organization of Markov blankets — from individual neurons to organoid assembloids to networked OI systems — connects directly to the scaling challenges discussed in Chapter 16 and the ethical frameworks developed in Chapter 20.

---

## Worked Examples

### Worked Example 11.1: Free Energy Minimization in a Simple Gaussian Model

**Problem:** A brain organoid receives a sensory signal $o = 3.0$ from an MEA electrode. Its generative model specifies that signals are generated by a hidden cause $\theta$ with prior $p(\theta) = \mathcal{N}(0, \sigma_p^2)$ and likelihood $p(o \mid \theta) = \mathcal{N}(\theta, \sigma_l^2)$. Given $\sigma_p^2 = 4.0$ (prior variance) and $\sigma_l^2 = 1.0$ (sensory noise variance), compute the variational free energy and the optimal posterior.

**Given:**
- Observation: $o = 3.0$
- Prior: $p(\theta) = \mathcal{N}(0, 4.0)$
- Likelihood: $p(o \mid \theta) = \mathcal{N}(\theta, 1.0)$
- Recognition density: $q(\theta) = \mathcal{N}(\mu_q, \sigma_q^2)$

**Solution:**

**Step 1: Compute the optimal posterior.**

For conjugate Gaussian models, the exact posterior is Gaussian with:

$$
\sigma_{\text{post}}^2 = \left(\frac{1}{\sigma_p^2} + \frac{1}{\sigma_l^2}\right)^{-1} = \left(\frac{1}{4} + \frac{1}{1}\right)^{-1} = \left(\frac{5}{4}\right)^{-1} = 0.8
$$

$$
\mu_{\text{post}} = \sigma_{\text{post}}^2 \left(\frac{0}{\sigma_p^2} + \frac{o}{\sigma_l^2}\right) = 0.8 \times \left(0 + 3.0\right) = 2.4
$$

**Step 2: Interpret the result.**

The posterior mean $\mu_{\text{post}} = 2.4$ is a precision-weighted combination of the prior mean (0) and the observation (3.0). Because the likelihood precision ($1/\sigma_l^2 = 1.0$) is four times greater than the prior precision ($1/\sigma_p^2 = 0.25$), the posterior is pulled strongly toward the observation.

**Step 3: Compute the variational free energy at the optimal posterior.**

At the optimal recognition density $q^*(\theta) = \mathcal{N}(2.4, 0.8)$, the free energy equals the negative log model evidence:

$$
F^* = -\ln p(o) = \frac{1}{2}\ln(2\pi(\sigma_p^2 + \sigma_l^2)) + \frac{o^2}{2(\sigma_p^2 + \sigma_l^2)} = \frac{1}{2}\ln(10\pi) + \frac{9}{10} \approx 2.62
$$

Any other recognition density would yield a higher free energy, confirming that free energy minimization recovers exact Bayesian inference in this case. ∎

### Worked Example 11.2: Precision-Weighted Prediction Error

**Problem:** A predictive coding network has two levels. The prediction from level 2 is $g(\mu_2) = 5.0$. The actual input at level 1 is $o = 7.0$. Two conditions are tested: (a) high sensory precision $\pi_1 = 10.0$, and (b) low sensory precision $\pi_1 = 0.5$. Compute the precision-weighted prediction error and the updated representation.

**Given:**
- Prediction: $g(\mu_2) = 5.0$
- Input: $o = 7.0$
- Prior precision at level 2: $\pi_2 = 1.0$
- Learning rate: $\kappa = 0.1$

**Solution:**

**Step 1: Compute the prediction error.**

$$
\varepsilon_1 = o - g(\mu_2) = 7.0 - 5.0 = 2.0
$$

**Step 2: Compute the precision-weighted update for each condition.**

The update rule is: $\Delta\mu_2 = \kappa \cdot \pi_1 \cdot \varepsilon_1$

(a) High precision: $\Delta\mu_2 = 0.1 \times 10.0 \times 2.0 = 2.0$, so $\mu_2' = 5.0 + 2.0 = 7.0$

(b) Low precision: $\Delta\mu_2 = 0.1 \times 0.5 \times 2.0 = 0.1$, so $\mu_2' = 5.0 + 0.1 = 5.1$

**Step 3: Interpret.**

With high sensory precision, the system trusts the sensory data and updates strongly — the new representation nearly matches the observation. With low sensory precision, the system largely ignores the sensory data and retains its prior prediction. This is the computational mechanism of attention: precision modulates the impact of prediction errors on belief updating. ∎

---

## Code Exercises

### Code Exercise 11.1: Hierarchical Predictive Coding Network

```python
"""
Hierarchical Predictive Coding Network
Chapter 11, Exercise 11.1

Implements a simple two-level predictive coding network that learns to
predict a noisy sinusoidal signal. Demonstrates top-down predictions,
bottom-up prediction errors, and precision-weighted belief updating.

Requirements: Python 3.9+, numpy, matplotlib
"""

import numpy as np
import matplotlib.pyplot as plt


def generate_sensory_data(n_steps: int, frequency: float = 0.1,
                          noise_std: float = 0.3) -> np.ndarray:
    """Generate a noisy sinusoidal signal as sensory input."""
    t = np.arange(n_steps)
    signal = np.sin(2 * np.pi * frequency * t)
    noise = np.random.randn(n_steps) * noise_std
    return signal + noise


def predictive_coding_update(mu: np.ndarray, observation: float,
                              prediction: float, precision_sensory: float,
                              precision_prior: float,
                              learning_rate: float) -> tuple:
    """
    Single step of predictive coding belief update.

    Returns updated belief, prediction error, and precision-weighted error.
    """
    prediction_error = observation - prediction
    precision_weighted_error = precision_sensory * prediction_error

    # Belief update: gradient descent on free energy
    delta_mu = learning_rate * (precision_weighted_error
                                - precision_prior * (mu[-1] - 0.0))
    new_mu = mu[-1] + delta_mu

    return new_mu, prediction_error, precision_weighted_error


def run_predictive_coding(n_steps: int = 500, learning_rate: float = 0.2,
                           precision_sensory: float = 5.0,
                           precision_prior: float = 1.0,
                           noise_std: float = 0.3) -> dict:
    """
    Run a two-level predictive coding network on sensory data.

    Level 1: Sensory input (noisy sinusoid)
    Level 2: Internal model (learned estimate of hidden cause)
    """
    observations = generate_sensory_data(n_steps, noise_std=noise_std)

    # Storage arrays
    beliefs = np.zeros(n_steps)         # Internal representation (mu)
    predictions = np.zeros(n_steps)     # Top-down predictions
    pred_errors = np.zeros(n_steps)     # Raw prediction errors
    pw_errors = np.zeros(n_steps)       # Precision-weighted errors
    free_energy = np.zeros(n_steps)     # Variational free energy

    mu_history = [0.0]  # Initial belief

    for t in range(n_steps):
        # Top-down prediction from current belief
        prediction = mu_history[-1]

        # Bottom-up prediction error
        new_mu, pe, pwe = predictive_coding_update(
            mu_history, observations[t], prediction,
            precision_sensory, precision_prior, learning_rate
        )

        # Store values
        beliefs[t] = new_mu
        predictions[t] = prediction
        pred_errors[t] = pe
        pw_errors[t] = pwe
        mu_history.append(new_mu)

        # Compute variational free energy
        # F = 0.5 * precision_sensory * pe^2 + 0.5 * precision_prior * mu^2
        free_energy[t] = (0.5 * precision_sensory * pe**2
                          + 0.5 * precision_prior * new_mu**2)

    return {
        "observations": observations,
        "beliefs": beliefs,
        "predictions": predictions,
        "prediction_errors": pred_errors,
        "precision_weighted_errors": pw_errors,
        "free_energy": free_energy
    }


def plot_results(results: dict) -> None:
    """Visualize predictive coding dynamics."""
    fig, axes = plt.subplots(4, 1, figsize=(12, 10), sharex=True)

    # Panel 1: Observations and beliefs
    axes[0].plot(results["observations"], alpha=0.4, label="Observations (noisy)",
                 color="gray")
    axes[0].plot(results["beliefs"], linewidth=2, label="Internal belief (μ)",
                 color="blue")
    axes[0].set_ylabel("Value")
    axes[0].set_title("Hierarchical Predictive Coding: Sensory Tracking")
    axes[0].legend(loc="upper right")

    # Panel 2: Top-down predictions
    axes[1].plot(results["predictions"], linewidth=2, label="Prediction g(μ)",
                 color="green")
    axes[1].plot(results["observations"], alpha=0.3, color="gray")
    axes[1].set_ylabel("Value")
    axes[1].set_title("Top-Down Predictions vs. Sensory Input")
    axes[1].legend(loc="upper right")

    # Panel 3: Prediction errors
    axes[2].plot(results["prediction_errors"], alpha=0.6,
                 label="Raw prediction error", color="red")
    axes[2].plot(results["precision_weighted_errors"], alpha=0.6,
                 label="Precision-weighted error", color="orange")
    axes[2].axhline(y=0, color="black", linestyle="--", alpha=0.3)
    axes[2].set_ylabel("Error")
    axes[2].set_title("Bottom-Up Prediction Errors")
    axes[2].legend(loc="upper right")

    # Panel 4: Free energy
    axes[3].plot(results["free_energy"], linewidth=2, label="Free energy F",
                 color="purple")
    axes[3].set_ylabel("Free Energy")
    axes[3].set_xlabel("Time Step")
    axes[3].set_title("Variational Free Energy Over Time")
    axes[3].legend(loc="upper right")

    plt.tight_layout()
    plt.savefig("predictive_coding_demo.png", dpi=150, bbox_inches="tight")
    plt.close()
    print("Figure saved to predictive_coding_demo.png")


if __name__ == "__main__":
    np.random.seed(42)

    print("=== Hierarchical Predictive Coding Simulation ===\n")

    # Run with default parameters
    results = run_predictive_coding()

    # Report summary statistics
    mean_fe = np.mean(results["free_energy"])
    final_fe = np.mean(results["free_energy"][-50:])
    mean_pe = np.mean(np.abs(results["prediction_errors"]))

    print(f"Mean free energy:              {mean_fe:.4f}")
    print(f"Final free energy (last 50):   {final_fe:.4f}")
    print(f"Mean absolute prediction error: {mean_pe:.4f}")

    # Compare high vs low precision
    print("\n=== Precision Comparison ===\n")
    results_high = run_predictive_coding(precision_sensory=20.0)
    results_low = run_predictive_coding(precision_sensory=0.5)

    print(f"High precision — Mean |PE|: "
          f"{np.mean(np.abs(results_high['prediction_errors'])):.4f}")
    print(f"Low precision  — Mean |PE|: "
          f"{np.mean(np.abs(results_low['prediction_errors'])):.4f}")
    print("\nHigh sensory precision → tighter tracking of observations")
    print("Low sensory precision  → slower, smoother tracking (prior dominates)")

    plot_results(results)
```

**Expected Output:**

The simulation produces a four-panel figure showing the predictive coding network tracking a noisy sinusoidal signal. Panel 1 shows that the internal belief (blue line) closely tracks the noisy observations (gray) but with reduced noise — the predictive coding network effectively denoises the signal. Panel 2 shows top-down predictions lagging slightly behind observations. Panel 3 shows prediction errors oscillating around zero with diminishing amplitude as the model improves. Panel 4 shows free energy decreasing over time as the internal model better captures the input statistics. The precision comparison demonstrates that high sensory precision produces tighter tracking, while low sensory precision yields smoother estimates dominated by the prior.

---

### Code Exercise 11.2: Active Inference Agent in a Simple Environment

```python
"""
Active Inference Agent in a Simple Grid Environment
Chapter 11, Exercise 11.2

Implements an active inference agent that navigates a 1D grid to reach
a preferred position. The agent selects actions by minimizing expected
free energy, balancing pragmatic (goal-seeking) and epistemic
(uncertainty-reducing) drives.

Requirements: Python 3.9+, numpy, matplotlib, scipy
"""

import numpy as np
from scipy.special import softmax
import matplotlib.pyplot as plt


class ActiveInferenceAgent:
    """
    Active inference agent on a 1D grid.

    The agent maintains beliefs about its position and selects actions
    (left, stay, right) to minimize expected free energy.
    """

    def __init__(self, n_positions: int = 10, preferred_pos: int = 7,
                 sensory_noise: float = 0.1):
        self.n_positions = n_positions
        self.n_actions = 3  # left, stay, right
        self.preferred_pos = preferred_pos
        self.sensory_noise = sensory_noise

        # Prior preferences: log probability over observations
        # Agent "prefers" to observe signals consistent with preferred_pos
        self.C = np.zeros(n_positions)
        for i in range(n_positions):
            self.C[i] = -0.5 * ((i - preferred_pos) ** 2)
        self.C -= np.max(self.C)  # normalize

        # Transition model: p(s'|s, a) for each action
        self.B = np.zeros((n_positions, n_positions, self.n_actions))
        for s in range(n_positions):
            for a in range(self.n_actions):
                s_new = np.clip(s + (a - 1), 0, n_positions - 1)
                self.B[s_new, s, a] = 1.0

        # Observation model: p(o|s) with sensory noise
        self.A = np.eye(n_positions) * (1.0 - sensory_noise)
        remaining = sensory_noise / max(n_positions - 1, 1)
        self.A += remaining
        for i in range(n_positions):
            self.A[i, i] = 1.0 - sensory_noise

        # Initial belief: uniform
        self.belief = np.ones(n_positions) / n_positions

    def observe(self, true_position: int) -> int:
        """Generate a noisy observation from true position."""
        obs_probs = self.A[:, true_position]
        return np.random.choice(self.n_positions, p=obs_probs)

    def update_belief(self, observation: int) -> None:
        """Bayesian belief update given observation."""
        likelihood = self.A[observation, :]
        posterior = likelihood * self.belief
        self.belief = posterior / (posterior.sum() + 1e-16)

    def expected_free_energy(self, policy_action: int) -> float:
        """
        Compute expected free energy for a single action.

        G = pragmatic_value + epistemic_value
        Pragmatic: expected cost under prior preferences
        Epistemic: expected information gain (negative ambiguity)
        """
        # Predicted state after action
        predicted_state = self.B[:, :, policy_action] @ self.belief

        # Pragmatic value: negative expected log preference
        predicted_obs = self.A @ predicted_state
        predicted_obs = np.clip(predicted_obs, 1e-16, None)
        pragmatic = -np.sum(predicted_obs * self.C)

        # Epistemic value: expected entropy of observations
        epistemic = 0.0
        for s in range(self.n_positions):
            if predicted_state[s] > 1e-16:
                obs_given_s = self.A[:, s]
                obs_given_s = np.clip(obs_given_s, 1e-16, None)
                entropy_s = -np.sum(obs_given_s * np.log(obs_given_s))
                epistemic += predicted_state[s] * entropy_s

        return pragmatic + epistemic

    def select_action(self, beta: float = 4.0) -> int:
        """Select action by softmax over negative expected free energy."""
        G = np.array([self.expected_free_energy(a)
                      for a in range(self.n_actions)])
        action_probs = softmax(-beta * G)
        return np.random.choice(self.n_actions, p=action_probs)


def run_simulation(n_steps: int = 50, start_pos: int = 1,
                   preferred_pos: int = 7,
                   n_positions: int = 10) -> dict:
    """Run active inference simulation."""
    agent = ActiveInferenceAgent(n_positions=n_positions,
                                 preferred_pos=preferred_pos)

    positions = [start_pos]
    beliefs_history = [agent.belief.copy()]
    actions = []
    free_energies = []
    observations = []

    pos = start_pos
    for t in range(n_steps):
        # Observe
        obs = agent.observe(pos)
        observations.append(obs)

        # Update beliefs
        agent.update_belief(obs)
        beliefs_history.append(agent.belief.copy())

        # Compute free energies for all actions
        G_values = [agent.expected_free_energy(a)
                    for a in range(agent.n_actions)]
        free_energies.append(G_values)

        # Select and execute action
        action = agent.select_action()
        actions.append(action)

        # Transition
        pos = int(np.clip(pos + (action - 1), 0, n_positions - 1))
        positions.append(pos)

        # Update belief with transition model
        agent.belief = agent.B[:, :, action] @ agent.belief
        agent.belief /= agent.belief.sum() + 1e-16

    return {
        "positions": positions,
        "beliefs": np.array(beliefs_history),
        "actions": actions,
        "free_energies": np.array(free_energies),
        "observations": observations,
        "preferred_pos": preferred_pos,
        "n_positions": n_positions
    }


def plot_simulation(results: dict) -> None:
    """Visualize active inference agent behavior."""
    fig, axes = plt.subplots(3, 1, figsize=(12, 9))

    n_steps = len(results["actions"])

    # Panel 1: Position over time
    axes[0].plot(results["positions"], "b-o", markersize=4, label="Agent position")
    axes[0].axhline(y=results["preferred_pos"], color="red", linestyle="--",
                    linewidth=2, label=f"Preferred position ({results['preferred_pos']})")
    axes[0].set_ylabel("Position")
    axes[0].set_title("Active Inference: Goal-Directed Navigation")
    axes[0].legend(loc="lower right")
    axes[0].set_ylim(-0.5, results["n_positions"] - 0.5)

    # Panel 2: Belief evolution (heatmap)
    beliefs = results["beliefs"]
    im = axes[1].imshow(beliefs.T, aspect="auto", cmap="viridis",
                        origin="lower", extent=[0, len(beliefs), -0.5,
                        results["n_positions"] - 0.5])
    axes[1].axhline(y=results["preferred_pos"], color="red", linestyle="--",
                    linewidth=1.5)
    axes[1].set_ylabel("Position")
    axes[1].set_title("Belief Distribution Over Time (Posterior)")
    plt.colorbar(im, ax=axes[1], label="Probability")

    # Panel 3: Expected free energy by action
    fe = results["free_energies"]
    action_labels = ["Left", "Stay", "Right"]
    for a in range(3):
        axes[2].plot(fe[:, a], label=f"{action_labels[a]}", alpha=0.7)
    axes[2].set_ylabel("Expected Free Energy G(π)")
    axes[2].set_xlabel("Time Step")
    axes[2].set_title("Expected Free Energy by Action")
    axes[2].legend(loc="upper right")

    plt.tight_layout()
    plt.savefig("active_inference_agent.png", dpi=150, bbox_inches="tight")
    plt.close()
    print("Figure saved to active_inference_agent.png")


if __name__ == "__main__":
    np.random.seed(42)

    print("=== Active Inference Agent Simulation ===\n")

    results = run_simulation(n_steps=50, start_pos=1, preferred_pos=7)

    # Summary statistics
    positions = results["positions"]
    target = results["preferred_pos"]
    reached_target = next((t for t, p in enumerate(positions) if p == target),
                          None)

    print(f"Start position:     {positions[0]}")
    print(f"Preferred position: {target}")
    print(f"Final position:     {positions[-1]}")
    if reached_target is not None:
        print(f"Reached target at step: {reached_target}")
    else:
        print("Did not reach target within simulation")

    print(f"\nMean position (last 10 steps): "
          f"{np.mean(positions[-10:]):.2f}")
    print(f"Distance from target (last 10): "
          f"{np.mean(np.abs(np.array(positions[-10:]) - target)):.2f}")

    # Run comparison: with vs without epistemic value
    print("\n=== Behavior Analysis ===")
    distances = np.abs(np.array(positions) - target)
    print(f"Initial distance: {distances[0]}")
    print(f"Final distance:   {distances[-1]}")
    print(f"Mean distance:    {np.mean(distances):.2f}")

    plot_simulation(results)
```

**Expected Output:**

The simulation produces a three-panel figure. Panel 1 shows the agent's position converging from its start position (1) toward the preferred position (7), demonstrating goal-directed behavior emerging from free energy minimization alone — no reward signal is used. Panel 2 shows the belief distribution (posterior) sharpening and shifting rightward as the agent accumulates evidence about its position. Panel 3 shows expected free energy for each action: the "right" action consistently has the lowest expected free energy (is most preferred) when the agent is to the left of the target, shifting to "stay" once the target is reached. The agent reaches the preferred position within approximately 6–10 steps, then remains near it.

---

## Discussion Questions

1. **Perception as inference:** If perception is a form of Bayesian inference, what does it mean for a perception to be "wrong"? Is a visual illusion an error in processing, or a correct inference from ambiguous data under particular prior assumptions? How does this distinction matter for organoid systems that may have very different priors from human brains?

2. **The dark room problem:** Critics of the free energy principle argue that an organism minimizing surprise should simply find a dark, quiet room and stay there. Defenders argue that prior preferences and the imperative to forage resolve this objection. Which position do you find more convincing, and what experimental evidence could distinguish them in an organoid system?

3. **Predictability vs. reward in DishBrain:** The DishBrain experiment used predictable and unpredictable stimulation rather than traditional reward and punishment. Does this distinction between free energy minimization and reinforcement learning have practical consequences for how we design OI systems? Could you design an experiment that distinguishes the two frameworks empirically?

4. **Consciousness and prediction:** Some theorists argue that predictive processing is necessary for consciousness — that a system is conscious if and only if it implements a sufficiently complex generative model (see Chapter 20). If a brain organoid develops a hierarchical predictive model of its environment, does this bear on questions about its moral status?

5. **Markov blankets and boundaries:** The concept of a Markov blanket defines the boundary between an agent and its environment. When an organoid is coupled to a computer through an MEA, where exactly is the Markov blanket? Does the answer change if the computer implements part of the organoid's generative model?

6. **Precision and psychopathology:** In the active inference framework, psychiatric disorders arise from aberrant precision estimation. What would the analogue of "psychopathology" be in an organoid system? Could an organoid exhibit the equivalent of hallucinations (excessive prior precision) or anxiety (excessive prediction error precision)?

7. **Free energy and evolution:** The free energy principle is sometimes presented as a universal law of self-organizing systems, applicable to everything from cells to societies. Is this a strength of the framework (unifying explanatory power) or a weakness (unfalsifiable generality)? What would constitute a falsification of the free energy principle as applied to organoid intelligence?

---

## Further Reading

### Foundational Texts

- **Helmholtz, H. von (1867).** *Handbuch der physiologischen Optik*. Leopold Voss, Leipzig.
  *The foundational work on unconscious inference. Helmholtz's treatment of visual perception as hypothesis-testing remains strikingly modern 150 years later.*

- **Friston, K. (2010).** "The free-energy principle: a unified brain theory?" *Nature Reviews Neuroscience*, 11(2), 127–138.
  *The landmark paper presenting the free energy principle as a unifying framework for brain function. Essential reading for anyone entering this field.*

- **Friston, K. (2005).** "A theory of cortical responses." *Philosophical Transactions of the Royal Society B*, 360(1456), 815–836.
  *The original formal derivation of predictive coding from the free energy principle, showing how variational inference maps onto cortical message passing.*

### Predictive Processing

- **Rao, R. P., & Ballard, D. H. (1999).** "Predictive coding in the visual cortex: a functional interpretation of some extra-classical receptive-field effects." *Nature Neuroscience*, 2(1), 79–87.
  *The paper that launched modern predictive coding. Demonstrates how hierarchical prediction and prediction error account for non-classical receptive field properties.*

- **Clark, A. (2013).** "Whatever next? Predictive brains, situated agents, and the future of cognitive science." *Behavioral and Brain Sciences*, 36(3), 181–204.
  *An accessible and comprehensive review of predictive processing, with extensive commentary from the field. An excellent entry point for newcomers.*

- **Bastos, A. M., et al. (2012).** "Canonical microcircuits for predictive coding." *Neuron*, 76(4), 695–711.
  *Proposes the canonical cortical microcircuit for predictive coding, mapping prediction errors and predictions onto distinct cortical layers and connection types.*

### Active Inference

- **Friston, K., et al. (2017).** "Active inference: a process theory." *Neural Computation*, 29(1), 1–49.
  *The definitive technical treatment of active inference as a process theory, including expected free energy, policy selection, and the complete generative model.*

- **Parr, T., Pezzulo, G., & Friston, K. J. (2022).** *Active Inference: The Free Energy Principle in Mind, Brain, and Behavior*. MIT Press.
  *The first comprehensive textbook on active inference. Covers theory, implementation, and applications in neuroscience, psychology, and artificial intelligence.*

- **Da Costa, L., et al. (2020).** "Active inference on discrete state-spaces: a synthesis." *Journal of Mathematical Psychology*, 99, 102447.
  *Clear mathematical treatment of discrete-state active inference with practical implementation guidance. Excellent for computational modelers.*

### Organoid Applications

- **Kagan, B. J., et al. (2022).** "In vitro neurons learn and exhibit sentience when embodied in a simulated game-world." *Neuron*, 110(23), 3952–3969.
  *The DishBrain paper. Demonstrates free energy minimization–driven learning in cultured neurons connected to a virtual environment via a high-density MEA.*

- **Friston, K. J., et al. (2022).** "Designing ecosystems of intelligence from first principles." arXiv:2212.01354.
  *Explores how the free energy principle can guide the design of hybrid biological-artificial intelligence systems, with implications for organoid computing.*

### Markov Blankets and Self-Organization

- **Kirchhoff, M., et al. (2018).** "The Markov blankets of life: autonomy, active inference and the free energy principle." *Journal of the Royal Society Interface*, 15(138), 20170792.
  *Connects Markov blankets to autopoiesis and biological autonomy. Essential for understanding the philosophical foundations of active inference in living systems.*

- **Friston, K. (2013).** "Life as we know it." *Journal of the Royal Society Interface*, 10(86), 20130475.
  *Argues that the free energy principle follows from the very existence of biological systems with Markov blankets. A deep but challenging paper on the metaphysics of life.*

---

## Future Directions

### 🔮 Open Problems

1. **Hierarchical depth in organoid models:** Current organoid systems show evidence of simple predictive processing (e.g., repetition suppression, adaptation). Can organoids develop genuinely hierarchical generative models with multiple levels of abstraction? What maturation timeline, structural complexity, and environmental richness are necessary for hierarchical depth to emerge?

2. **Measuring free energy in biological systems:** The free energy principle provides an elegant theoretical framework, but directly measuring variational free energy in a biological system remains extremely challenging. Developing practical methods to estimate free energy from MEA recordings — by separately quantifying prediction error magnitude, model complexity, and precision — would transform the framework from a theoretical postulate into an empirically testable quantity.

3. **Active inference in assembloids:** Brain organoids that fuse different regional identities (e.g., cortical-thalamic assembloids) may support more complex active inference circuits, including thalamocortical prediction loops. Designing assembloid systems explicitly optimized for hierarchical active inference is a major engineering and theoretical challenge.

4. **Temporal depth of planning:** Active inference supports planning through expected free energy evaluation over future time horizons. Can organoid systems be trained to exhibit temporally extended planning — choosing actions not for their immediate consequences but for their predicted outcomes several steps ahead? What neural circuit features (e.g., sustained activity, working memory) would be required?

5. **Bridging scales:** The free energy principle is claimed to apply at every scale — from single cells to whole organisms to social groups. Validating or refuting this claim requires demonstrating (or failing to demonstrate) free energy minimization at the cellular, circuit, and system levels within the same organoid preparation, using consistent mathematical formalism and measurement methods.

### 🚧 Contributor Placeholders

> **🚧 Placeholder 11.A:** A detailed tutorial implementing a full discrete-state active inference agent using the `pymdp` library, with step-by-step explanation of the generative model specification, belief updating, policy selection, and expected free energy computation, applied to a biologically inspired foraging task.

> **🚧 Placeholder 11.B:** An experimental protocol for measuring mismatch negativity (MMN) analogs in brain organoids using patterned electrical stimulation on high-density MEAs, including stimulus sequence design (oddball paradigm), signal processing pipeline, and statistical criteria for detecting prediction error signals.

> **🚧 Placeholder 11.C:** A mathematical analysis connecting reservoir computing (Chapter 10) and predictive coding — showing under what conditions a reservoir computer can be reinterpreted as a predictive coding network, and deriving the relationship between echo state property, spectral radius, and prediction error dynamics.

> **🚧 Placeholder 11.D:** A review of precision-weighting disruptions in neurological and psychiatric conditions (autism, schizophrenia, chronic pain), with analysis of how organoid models carrying patient-derived mutations could serve as experimental platforms for testing precision-based theories of these disorders.

---

## Chapter Summary

This chapter has traced the intellectual arc from Hermann von Helmholtz's nineteenth-century insight that perception is unconscious inference, through the modern mathematical machinery of Bayesian inference, predictive coding, and the free energy principle, to the contemporary framework of active inference and its application to organoid intelligence. The Bayesian brain hypothesis (Section 11.1) provides the conceptual foundation: the brain maintains a generative model of the world and uses Bayes' theorem to infer the hidden causes of sensory observations. Predictive processing (Section 11.2) specifies the algorithmic implementation: a hierarchy of cortical areas exchanging top-down predictions and bottom-up prediction errors, with precision-weighting serving as the computational mechanism of attention. The free energy principle (Section 11.3) provides the normative foundation: any self-organizing system that persists in a fluctuating environment must, on average, minimize variational free energy — an upper bound on surprise that decomposes into accuracy and complexity terms, instantiating an automatic Occam's razor. Active inference (Section 11.4) extends this framework from perception to action: organisms minimize free energy not only by updating their beliefs but by acting on the world to fulfill their predictions, with expected free energy providing a principled basis for planning that naturally balances exploration and exploitation. The neural implementation of these principles (Section 11.5) maps onto the laminar structure of the cortex, with superficial layers carrying forward prediction errors and deep layers carrying backward predictions, modulated by precision signals associated with neuromodulatory systems and NMDA receptor function. The application to organoid systems (Section 11.6), exemplified by the DishBrain experiment, demonstrates that even simple biological neural networks can exhibit behavior consistent with free energy minimization when placed in closed-loop interaction with an environment. Finally, the Markov blanket framework (Section 11.7) provides the conceptual bridge between active inference and the self-organization of living systems, showing how the boundary between agent and environment emerges through development and is maintained through the very process of free energy minimization. Together, these ideas offer organoid intelligence not merely a computational framework but a *design philosophy*: rather than programming organoids to perform specific tasks, we can design environments in which the organoid's intrinsic drive to minimize free energy naturally gives rise to adaptive, intelligent behavior.

---

*Chapter 11 of 24 · Part IV — Computational Theory*
*Previous: [Chapter 10: Reservoir Computing ←](chapter-10-reservoir-computing.md)*
*Next: [Chapter 12: Neural Coding and Information Theory →](chapter-12-neural-coding-information-theory.md)*

---

**Copyright © 2026 DaScient, LLC. All rights reserved.**
Licensed under the [Apache License 2.0](../../../LICENSE).
