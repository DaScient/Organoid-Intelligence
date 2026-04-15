# Appendix C: Mathematical Foundations

> *Appendices*
>
> **Organoid Intelligence: Biological Computing In Living Systems**
> Copyright © 2026 DaScient, LLC

---

## Introduction

This appendix provides a self-contained review of the mathematical tools used throughout this textbook. The goal is not to replace a full course in any one discipline but to give the reader—assumed to have completed one year of college-level calculus—a concise, rigorous, yet accessible reference that can be consulted whenever a chapter introduces a new formalism. Each section includes formal definitions, key theorems, worked examples, and cross-references to the chapters where the mathematics is applied to organoid intelligence.

> **How to use this appendix.** Read it linearly as a refresher before starting the textbook, or look up individual sections as needed while working through the main chapters. Equations are numbered within each section for easy reference.

---

## C.1 Ordinary Differential Equations

Ordinary differential equations (ODEs) are the backbone of computational neuroscience. Every biophysical neuron model—from the integrate-and-fire model to the full Hodgkin–Huxley system—is expressed as one or more ODEs. This section introduces the essential concepts.

### C.1.1 First-Order ODEs and the Exponential Solution

**Definition.** A *first-order ODE* has the general form

$$\frac{dx}{dt} = f(x, t),$$

where $x(t)$ is the unknown function and $f$ specifies the rate of change.

The simplest and most important case is the **linear, constant-coefficient** ODE:

$$\frac{dx}{dt} = -\frac{1}{\tau}\bigl(x - x_\infty\bigr),$$

where $\tau > 0$ is the *time constant* and $x_\infty$ is the *steady-state value*.

**Theorem (Exponential Solution).** Given initial condition $x(0) = x_0$, the unique solution is

$$x(t) = x_\infty + (x_0 - x_\infty)\,e^{-t/\tau}.$$

*Interpretation.* The solution relaxes exponentially toward $x_\infty$ with time constant $\tau$. After one time constant, the deviation from equilibrium has decayed to $e^{-1} \approx 36.8\%$ of its initial value.

**Worked Example.** The membrane potential of a passive (leaky) neuron obeys

$$\tau_m \frac{dV}{dt} = -(V - V_\text{rest}) + R_m I(t),$$

where $\tau_m = R_m C_m$ is the membrane time constant, $V_\text{rest}$ is the resting potential, and $I(t)$ is the injected current. For a constant current step $I(t) = I_0$ turned on at $t = 0$ with $V(0) = V_\text{rest}$:

1. Rewrite: $\frac{dV}{dt} = -\frac{1}{\tau_m}(V - V_\text{rest} - R_m I_0)$.
2. Identify $x_\infty = V_\text{rest} + R_m I_0$.
3. Apply the exponential solution:

$$V(t) = (V_\text{rest} + R_m I_0) + \bigl(V_\text{rest} - V_\text{rest} - R_m I_0\bigr)e^{-t/\tau_m} = V_\text{rest} + R_m I_0\bigl(1 - e^{-t/\tau_m}\bigr).$$

This is the *charging curve* of a passive membrane *(see Chapter 3)*.

### C.1.2 Systems of ODEs and Phase Portraits

Many biological models involve multiple coupled variables. A **system of ODEs** is written in vector form:

$$\frac{d\mathbf{x}}{dt} = \mathbf{F}(\mathbf{x}),$$

where $\mathbf{x} = (x_1, x_2, \dots, x_n)^T$ and $\mathbf{F}: \mathbb{R}^n \to \mathbb{R}^n$.

**Phase portrait.** For a two-dimensional system $\dot{x}_1 = f_1(x_1, x_2)$, $\dot{x}_2 = f_2(x_1, x_2)$, the *phase portrait* is the plot of trajectories in the $(x_1, x_2)$-plane. Key features include:

- **Nullclines:** Curves where $\dot{x}_1 = 0$ or $\dot{x}_2 = 0$. Intersections of nullclines are *fixed points*.
- **Flow arrows:** The direction and magnitude of $\mathbf{F}$ at each point.

**Worked Example (FitzHugh–Nagumo model).** A reduced two-variable neuron model:

$$\dot{v} = v - \frac{v^3}{3} - w + I_\text{ext}, \qquad \dot{w} = \epsilon(v + a - bw),$$

where $0 < \epsilon \ll 1$ makes $w$ a slow recovery variable. The $v$-nullcline is the cubic $w = v - v^3/3 + I_\text{ext}$ and the $w$-nullcline is the line $w = (v + a)/b$. Phase-plane analysis of their intersection determines the firing behavior *(see Chapter 3)*.

### C.1.3 The Hodgkin–Huxley Equations

The Hodgkin–Huxley (HH) model *(Chapter 3)* describes the squid giant axon membrane potential through a system of four coupled ODEs:

$$C_m \frac{dV}{dt} = -\bar{g}_\text{Na}\, m^3 h\,(V - E_\text{Na}) - \bar{g}_\text{K}\, n^4\,(V - E_\text{K}) - g_L\,(V - E_L) + I_\text{ext},$$

$$\frac{dm}{dt} = \alpha_m(V)(1 - m) - \beta_m(V)\,m,$$

$$\frac{dh}{dt} = \alpha_h(V)(1 - h) - \beta_h(V)\,h,$$

$$\frac{dn}{dt} = \alpha_n(V)(1 - n) - \beta_n(V)\,n,$$

where $m$, $h$, $n \in [0, 1]$ are gating variables, $\alpha_x(V)$ and $\beta_x(V)$ are voltage-dependent rate functions, and $\bar{g}_\text{Na}$, $\bar{g}_\text{K}$, $g_L$ are maximal conductances.

Each gating variable satisfies a first-order ODE of the form in §C.1.1 with voltage-dependent time constant $\tau_x(V) = 1/(\alpha_x + \beta_x)$ and steady state $x_\infty(V) = \alpha_x/(\alpha_x + \beta_x)$.

### C.1.4 Numerical Methods

When analytical solutions are unavailable—as is generally the case for nonlinear systems—we resort to numerical integration.

**Euler method.** The simplest scheme. Given $\mathbf{x}(t)$, approximate:

$$\mathbf{x}(t + \Delta t) \approx \mathbf{x}(t) + \Delta t\,\mathbf{F}\bigl(\mathbf{x}(t)\bigr).$$

This is *first-order accurate*: the local truncation error scales as $O(\Delta t^2)$.

**Fourth-order Runge–Kutta (RK4).** A workhorse method with local error $O(\Delta t^5)$:

$$\mathbf{k}_1 = \mathbf{F}(\mathbf{x}_n),$$
$$\mathbf{k}_2 = \mathbf{F}\!\left(\mathbf{x}_n + \frac{\Delta t}{2}\,\mathbf{k}_1\right),$$
$$\mathbf{k}_3 = \mathbf{F}\!\left(\mathbf{x}_n + \frac{\Delta t}{2}\,\mathbf{k}_2\right),$$
$$\mathbf{k}_4 = \mathbf{F}(\mathbf{x}_n + \Delta t\,\mathbf{k}_3),$$
$$\mathbf{x}_{n+1} = \mathbf{x}_n + \frac{\Delta t}{6}\bigl(\mathbf{k}_1 + 2\mathbf{k}_2 + 2\mathbf{k}_3 + \mathbf{k}_4\bigr).$$

**Worked Example.** Integrate $\dot{x} = -x$ with $x(0) = 1$ using Euler with $\Delta t = 0.5$:

| Step | $t$ | $x$ (Euler) | $x$ (exact) |
|------|-----|-------------|-------------|
| 0    | 0.0 | 1.000       | 1.000       |
| 1    | 0.5 | $1 + 0.5(-1) = 0.500$ | 0.607 |
| 2    | 1.0 | $0.5 + 0.5(-0.5) = 0.250$ | 0.368 |

The Euler method undershoots the true exponential decay. RK4 would yield substantially better accuracy at the same step size.

### C.1.5 Stability Analysis and Bifurcations

**Linear stability.** Given a fixed point $\mathbf{x}^*$ where $\mathbf{F}(\mathbf{x}^*) = \mathbf{0}$, linearize about $\mathbf{x}^*$ by setting $\boldsymbol{\delta} = \mathbf{x} - \mathbf{x}^*$:

$$\frac{d\boldsymbol{\delta}}{dt} = J\,\boldsymbol{\delta}, \qquad J_{ij} = \frac{\partial F_i}{\partial x_j}\bigg|_{\mathbf{x}^*}.$$

The matrix $J$ is the *Jacobian*. Stability is determined by its eigenvalues $\lambda_k$:

| Eigenvalues | Classification |
|---|---|
| All $\text{Re}(\lambda_k) < 0$ | Stable (attracting) fixed point |
| Any $\text{Re}(\lambda_k) > 0$ | Unstable fixed point |
| $\text{Re}(\lambda_k) = 0$ for some $k$ | Marginal—requires nonlinear analysis |
| Complex $\lambda$ with $\text{Re} < 0$ | Stable spiral (damped oscillation) |

**Bifurcation.** A *bifurcation* occurs when the qualitative behavior of a system changes as a parameter crosses a critical value. Important types in neuroscience:

- **Saddle-node bifurcation:** Two fixed points collide and annihilate. This governs Type I neural excitability.
- **Hopf bifurcation:** A fixed point loses stability as eigenvalues cross the imaginary axis, giving birth to a limit cycle. This governs Type II excitability and underlies rhythmic neural oscillations *(see Chapters 3 and 10)*.

---

## C.2 Linear Algebra

Linear algebra provides the language for describing high-dimensional neural population activity, performing dimensionality reduction, and analyzing network connectivity.

### C.2.1 Vectors, Matrices, and Matrix Operations

**Vectors.** A vector $\mathbf{v} \in \mathbb{R}^n$ is an ordered $n$-tuple. In neuroscience, a common vector is a *population activity vector* recording the firing rate of $n$ neurons at a given time:

$$\mathbf{r}(t) = \begin{pmatrix} r_1(t) \\ r_2(t) \\ \vdots \\ r_n(t) \end{pmatrix}.$$

**Inner product.** The standard inner product (dot product) of two vectors $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$ is

$$\langle \mathbf{u}, \mathbf{v} \rangle = \mathbf{u}^T \mathbf{v} = \sum_{i=1}^n u_i v_i.$$

**Matrices.** A matrix $A \in \mathbb{R}^{m \times n}$ is a rectangular array of numbers. In neural networks, the *weight matrix* $W \in \mathbb{R}^{n \times n}$ encodes synaptic connection strengths, with $W_{ij}$ representing the strength of the synapse from neuron $j$ to neuron $i$.

**Key operations:**
- *Matrix–vector product:* $\mathbf{y} = A\mathbf{x}$, where $y_i = \sum_j A_{ij} x_j$.
- *Matrix–matrix product:* $(AB)_{ij} = \sum_k A_{ik} B_{kj}$.
- *Transpose:* $(A^T)_{ij} = A_{ji}$.
- *Trace:* $\text{tr}(A) = \sum_i A_{ii}$.

### C.2.2 Eigenvalues and Eigenvectors

**Definition.** A scalar $\lambda$ and nonzero vector $\mathbf{v}$ satisfying

$$A\mathbf{v} = \lambda\mathbf{v}$$

are called an *eigenvalue* and *eigenvector* of $A$, respectively.

**Characteristic polynomial.** Eigenvalues satisfy $\det(A - \lambda I) = 0$.

**Theorem (Spectral Theorem).** If $A$ is a real symmetric matrix ($A = A^T$), then:
1. All eigenvalues are real.
2. Eigenvectors corresponding to distinct eigenvalues are orthogonal.
3. $A$ can be diagonalized as $A = Q\Lambda Q^T$, where $Q$ is orthogonal and $\Lambda = \text{diag}(\lambda_1, \dots, \lambda_n)$.

**Worked Example.** Consider the $2 \times 2$ connectivity matrix:

$$A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}.$$

1. Characteristic polynomial: $(2 - \lambda)^2 - 1 = \lambda^2 - 4\lambda + 3 = (\lambda - 1)(\lambda - 3) = 0$.
2. Eigenvalues: $\lambda_1 = 1$, $\lambda_2 = 3$.
3. Eigenvectors: For $\lambda_1 = 1$: $\mathbf{v}_1 = \frac{1}{\sqrt{2}}(1, -1)^T$. For $\lambda_2 = 3$: $\mathbf{v}_2 = \frac{1}{\sqrt{2}}(1, 1)^T$.

The dominant eigenvector $\mathbf{v}_2$ represents the *common mode* (both neurons co-activate), while $\mathbf{v}_1$ represents the *differential mode*.

### C.2.3 Singular Value Decomposition (SVD)

**Theorem (SVD).** Any matrix $A \in \mathbb{R}^{m \times n}$ can be factored as

$$A = U \Sigma V^T,$$

where $U \in \mathbb{R}^{m \times m}$ and $V \in \mathbb{R}^{n \times n}$ are orthogonal, and $\Sigma \in \mathbb{R}^{m \times n}$ is diagonal with non-negative entries $\sigma_1 \geq \sigma_2 \geq \cdots \geq 0$ (the *singular values*).

**Interpretation.** The SVD reveals the fundamental geometric action of $A$: rotate (by $V^T$), scale along coordinate axes (by $\Sigma$), then rotate again (by $U$).

**Low-rank approximation (Eckart–Young theorem).** The best rank-$k$ approximation to $A$ (in Frobenius or spectral norm) is $A_k = U_k \Sigma_k V_k^T$, obtained by retaining only the $k$ largest singular values. This is the mathematical foundation of dimensionality reduction.

### C.2.4 Principal Component Analysis (PCA)

PCA finds the directions of maximum variance in a dataset.

**Algorithm.**
1. Given data matrix $X \in \mathbb{R}^{n \times T}$ ($n$ neurons, $T$ time points), center the data: $\bar{X} = X - \frac{1}{T}X\mathbf{1}\mathbf{1}^T$.
2. Compute the covariance matrix: $C = \frac{1}{T-1}\bar{X}\bar{X}^T \in \mathbb{R}^{n \times n}$.
3. Eigendecompose $C = Q\Lambda Q^T$ (since $C$ is symmetric positive semidefinite).
4. The columns of $Q$ are the *principal components* (PCs), ordered by decreasing eigenvalue.
5. Project: $\mathbf{z}(t) = Q_k^T \bar{\mathbf{x}}(t)$ gives a $k$-dimensional representation.

**Variance explained.** The fraction of variance captured by the first $k$ PCs is

$$\text{VE}(k) = \frac{\sum_{i=1}^k \lambda_i}{\sum_{i=1}^n \lambda_i}.$$

### C.2.5 Applications to Neural Population Analysis

In organoid electrophysiology *(Chapter 12)*, we record from $n$ electrodes across $T$ time bins. The data matrix $X$ is high-dimensional ($n$ may be 64, 256, or more). PCA and SVD allow us to:

- **Visualize** population dynamics in 2D or 3D by projecting onto the first 2–3 PCs.
- **Identify** low-dimensional manifolds along which neural activity is constrained.
- **Quantify** the effective dimensionality of the organoid's neural code using the *participation ratio*:

$$d_\text{PR} = \frac{\left(\sum_i \lambda_i\right)^2}{\sum_i \lambda_i^2},$$

which equals $n$ for uniform eigenvalues (full-rank activity) and approaches 1 when a single component dominates.

---

## C.3 Probability and Statistics

Statistical methods are essential for analyzing noisy biological signals and for Bayesian models of neural computation.

### C.3.1 Probability Spaces and Random Variables

**Definition.** A *probability space* $(\Omega, \mathcal{F}, P)$ consists of:
- $\Omega$: the sample space (set of all outcomes).
- $\mathcal{F}$: a $\sigma$-algebra of events (subsets of $\Omega$).
- $P$: a probability measure with $P(\Omega) = 1$.

**Random variable.** A *random variable* $X: \Omega \to \mathbb{R}$ assigns a numerical value to each outcome.

**Expectation and variance.** For a continuous random variable with density $p(x)$:

$$\mathbb{E}[X] = \int_{-\infty}^{\infty} x\, p(x)\, dx, \qquad \text{Var}(X) = \mathbb{E}\bigl[(X - \mathbb{E}[X])^2\bigr].$$

**Covariance.** For two random variables $X$ and $Y$:

$$\text{Cov}(X, Y) = \mathbb{E}\bigl[(X - \mathbb{E}[X])(Y - \mathbb{E}[Y])\bigr].$$

### C.3.2 Common Distributions

**Bernoulli distribution.** Models a single binary outcome (e.g., spike/no-spike in a small time bin):

$$P(X = 1) = p, \qquad P(X = 0) = 1 - p.$$

Mean: $p$. Variance: $p(1-p)$.

**Poisson distribution.** Models the count of events in a fixed interval, given a constant average rate $\lambda$:

$$P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}, \quad k = 0, 1, 2, \dots$$

Mean and variance both equal $\lambda$. Widely used for spike count statistics.

**Gaussian (normal) distribution.** The ubiquitous bell curve:

$$p(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\!\left(-\frac{(x - \mu)^2}{2\sigma^2}\right).$$

Mean: $\mu$. Variance: $\sigma^2$. By the *Central Limit Theorem*, sums of many independent random variables converge to a Gaussian regardless of the original distribution—a fact that underlies much of statistical neuroscience.

**Worked Example.** An organoid electrode records an average of $\lambda = 5$ spikes per 100 ms bin. What is the probability of observing exactly 8 spikes?

$$P(X = 8) = \frac{5^8 e^{-5}}{8!} = \frac{390625 \times 0.00674}{40320} \approx 0.0653.$$

### C.3.3 Bayes' Theorem and Bayesian Inference

**Bayes' theorem.** For events $A$ and $B$ with $P(B) > 0$:

$$P(A \mid B) = \frac{P(B \mid A)\, P(A)}{P(B)}.$$

In the context of Bayesian inference, we write:

$$\underbrace{P(\theta \mid \mathcal{D})}_{\text{posterior}} = \frac{\overbrace{P(\mathcal{D} \mid \theta)}^{\text{likelihood}} \cdot \overbrace{P(\theta)}^{\text{prior}}}{\underbrace{P(\mathcal{D})}_{\text{evidence}}},$$

where $\theta$ represents model parameters and $\mathcal{D}$ is observed data.

**Interpretation.** Bayesian inference formalizes how beliefs ($P(\theta)$) are updated by evidence ($\mathcal{D}$) to produce refined beliefs ($P(\theta \mid \mathcal{D})$). This framework is central to the *Bayesian brain hypothesis* *(Chapter 11)*, which posits that biological neural circuits perform approximate Bayesian inference.

**Worked Example.** Suppose we observe organoid activity pattern $\mathcal{D}$ and wish to infer whether stimulus $A$ (prior $P(A) = 0.3$) or stimulus $B$ (prior $P(B) = 0.7$) was presented. The likelihoods are $P(\mathcal{D} \mid A) = 0.8$ and $P(\mathcal{D} \mid B) = 0.2$:

$$P(A \mid \mathcal{D}) = \frac{0.8 \times 0.3}{0.8 \times 0.3 + 0.2 \times 0.7} = \frac{0.24}{0.38} \approx 0.632.$$

Despite the low prior, the strong likelihood of the data under $A$ shifts the posterior firmly toward $A$.

### C.3.4 Maximum Likelihood Estimation

**Definition.** The *maximum likelihood estimate* (MLE) of parameter $\theta$ given data $\mathcal{D} = \{x_1, \dots, x_N\}$ is

$$\hat{\theta}_\text{MLE} = \arg\max_\theta \prod_{i=1}^N p(x_i \mid \theta) = \arg\max_\theta \sum_{i=1}^N \ln p(x_i \mid \theta).$$

**Worked Example (Poisson rate).** Given spike counts $\{x_1, \dots, x_N\}$ from a Poisson distribution with unknown rate $\lambda$:

$$\ln \mathcal{L}(\lambda) = \sum_{i=1}^N \bigl(x_i \ln \lambda - \lambda - \ln(x_i!)\bigr).$$

Setting $\frac{d}{d\lambda}\ln\mathcal{L} = 0$:

$$\frac{\sum_i x_i}{\lambda} - N = 0 \implies \hat{\lambda}_\text{MLE} = \frac{1}{N}\sum_{i=1}^N x_i = \bar{x}.$$

The MLE for the Poisson rate is the sample mean—an intuitive result.

### C.3.5 Hypothesis Testing and Statistical Significance

**Null hypothesis testing.** A standard framework:
1. State null hypothesis $H_0$ (e.g., "the organoid's firing rate does not change after stimulation").
2. Choose a test statistic $T$ and its distribution under $H_0$.
3. Compute the *p-value*: $p = P(T \geq t_\text{obs} \mid H_0)$.
4. Reject $H_0$ if $p < \alpha$ (typically $\alpha = 0.05$).

**Common tests in organoid research:**
- *t-test*: Compare means of two groups (e.g., stimulated vs. control firing rates).
- *ANOVA*: Compare means across multiple conditions.
- *Kolmogorov–Smirnov test*: Compare two empirical distributions (e.g., inter-spike interval distributions).
- *Permutation tests*: Non-parametric alternative when distributional assumptions are doubtful.

**Multiple comparisons.** When testing many hypotheses simultaneously (e.g., across many electrodes), apply corrections:
- **Bonferroni:** Reject if $p < \alpha / m$ (controls family-wise error rate for $m$ tests).
- **Benjamini–Hochberg:** Controls the *false discovery rate* (FDR), often preferred in high-dimensional neuroscience data.

---

## C.4 Information Theory

Information theory, founded by Claude Shannon (1948), provides a rigorous framework for quantifying the amount of information carried by neural signals and the efficiency of neural coding.

### C.4.1 Shannon Entropy

**Definition.** The *Shannon entropy* of a discrete random variable $X$ with probability mass function $p(x)$ is

$$H(X) = -\sum_{x} p(x) \log_2 p(x),$$

measured in *bits* when using base-2 logarithms.

**Properties:**
- $H(X) \geq 0$, with equality iff $X$ is deterministic.
- $H(X) \leq \log_2 |\mathcal{X}|$, with equality iff $X$ is uniformly distributed over its alphabet $\mathcal{X}$.
- Entropy quantifies *uncertainty*: a neural response with high entropy carries more potential information.

**Worked Example.** A neuron responds with one of four patterns $\{A, B, C, D\}$ with probabilities $\{0.5, 0.25, 0.125, 0.125\}$:

$$H = -\bigl(0.5 \log_2 0.5 + 0.25 \log_2 0.25 + 0.125 \log_2 0.125 + 0.125 \log_2 0.125\bigr)$$
$$= -(-0.5 - 0.5 - 0.375 - 0.375) = 1.75 \text{ bits}.$$

The maximum possible entropy for four symbols is $\log_2 4 = 2$ bits (uniform distribution).

### C.4.2 Mutual Information

**Definition.** The *mutual information* between random variables $X$ and $Y$ is

$$I(X; Y) = \sum_{x, y} p(x, y) \log_2 \frac{p(x, y)}{p(x)\, p(y)} = H(X) - H(X \mid Y) = H(Y) - H(Y \mid X),$$

where $H(X \mid Y)$ is the *conditional entropy*.

**Interpretation.** $I(X; Y)$ quantifies how much knowing $Y$ reduces uncertainty about $X$ (and vice versa). In neural coding:
- $X$: stimulus identity.
- $Y$: neural response.
- $I(X; Y)$: the amount of stimulus information encoded in the neural response.

**Properties:**
- $I(X; Y) \geq 0$, with equality iff $X$ and $Y$ are independent.
- $I(X; Y) = I(Y; X)$ (symmetric).
- $I(X; Y) \leq \min\{H(X), H(Y)\}$.

### C.4.3 Kullback–Leibler Divergence

**Definition.** The *Kullback–Leibler (KL) divergence* from distribution $q$ to distribution $p$ is

$$D_\text{KL}(p \,\|\, q) = \sum_x p(x) \log \frac{p(x)}{q(x)}.$$

**Properties:**
- $D_\text{KL}(p \,\|\, q) \geq 0$ (Gibbs' inequality), with equality iff $p = q$.
- **Not** symmetric: $D_\text{KL}(p \,\|\, q) \neq D_\text{KL}(q \,\|\, p)$ in general.
- Mutual information can be written as $I(X; Y) = D_\text{KL}\bigl(p(x, y) \,\|\, p(x) p(y)\bigr)$.

**Application.** In variational inference *(Chapter 11)*, we minimize $D_\text{KL}\bigl(q(\theta) \,\|\, p(\theta \mid \mathcal{D})\bigr)$ over an approximate posterior $q(\theta)$ to find the best tractable approximation to the true posterior.

### C.4.4 Transfer Entropy and Directed Information

While mutual information is symmetric, neural information flow is directional. *Transfer entropy* quantifies directed information transfer.

**Definition.** The transfer entropy from process $Y$ to process $X$ is

$$T_{Y \to X} = \sum p\bigl(x_{t+1}, x_t^{(k)}, y_t^{(l)}\bigr) \log \frac{p\bigl(x_{t+1} \mid x_t^{(k)}, y_t^{(l)}\bigr)}{p\bigl(x_{t+1} \mid x_t^{(k)}\bigr)},$$

where $x_t^{(k)}$ denotes the $k$-length history of $X$ up to time $t$, and similarly for $y_t^{(l)}$.

**Interpretation.** $T_{Y \to X}$ measures how much the past of $Y$ improves prediction of the future of $X$, beyond what $X$'s own past provides. It is a model-free, nonlinear generalization of Granger causality.

### C.4.5 Applications to Neural Coding

In organoid electrophysiology *(Chapter 12)*, information-theoretic measures are used to:

1. **Quantify coding capacity:** Compute $I(\text{stimulus}; \text{response})$ to measure how much stimulus information an organoid network encodes.
2. **Map information flow:** Use transfer entropy to reconstruct directed functional connectivity between electrode sites.
3. **Assess coding efficiency:** Compare the mutual information to the theoretical maximum ($H(\text{stimulus})$) to evaluate how efficiently the organoid uses its neural bandwidth.

---

## C.5 Dynamical Systems

Dynamical systems theory provides the conceptual framework for understanding the collective behavior of neural networks, from stable equilibria to complex oscillations and chaos.

### C.5.1 Fixed Points and Stability

**Definition.** A *fixed point* (equilibrium) of $\dot{\mathbf{x}} = \mathbf{F}(\mathbf{x})$ is a point $\mathbf{x}^*$ with $\mathbf{F}(\mathbf{x}^*) = \mathbf{0}$.

**Classification (2D systems).** From the Jacobian eigenvalues $\lambda_{1,2}$ at $\mathbf{x}^*$:

| Eigenvalues | Type | Behavior |
|---|---|---|
| $\lambda_1, \lambda_2 < 0$ (real) | Stable node | Trajectories converge monotonically |
| $\lambda_1, \lambda_2 > 0$ (real) | Unstable node | Trajectories diverge |
| $\lambda_1 < 0 < \lambda_2$ (real) | Saddle point | Approach along one direction, diverge along another |
| $\text{Re}(\lambda) < 0$, $\text{Im}(\lambda) \neq 0$ | Stable spiral | Damped oscillatory convergence |
| $\text{Re}(\lambda) > 0$, $\text{Im}(\lambda) \neq 0$ | Unstable spiral | Growing oscillations |
| $\text{Re}(\lambda) = 0$, $\text{Im}(\lambda) \neq 0$ | Center | Neutrally stable oscillations |

### C.5.2 Limit Cycles and Oscillations

**Definition.** A *limit cycle* is an isolated closed trajectory in phase space. Nearby trajectories spiral toward (stable limit cycle) or away from (unstable limit cycle) it.

**Significance in neuroscience.** Rhythmic neural oscillations—alpha, beta, gamma rhythms—are modeled as stable limit cycles. The transition from quiescence to oscillation typically occurs via a *Hopf bifurcation* (§C.1.5).

**Poincaré–Bendixson theorem.** In a two-dimensional system, if a trajectory is bounded and does not approach a fixed point, it must approach a limit cycle. This theorem guarantees the existence of periodic orbits in 2D models like FitzHugh–Nagumo.

### C.5.3 Attractors and Basins of Attraction

**Definition.** An *attractor* is a set $\mathcal{A}$ in phase space toward which trajectories converge from nearby initial conditions. The *basin of attraction* $\mathcal{B}(\mathcal{A})$ is the set of all initial conditions whose trajectories approach $\mathcal{A}$.

**Types of attractors:**
- *Fixed-point attractor:* Corresponds to a stable equilibrium (e.g., resting membrane potential).
- *Limit-cycle attractor:* Corresponds to sustained oscillations (e.g., rhythmic bursting).
- *Strange attractor:* A fractal set associated with chaotic dynamics (see §C.5.4).
- *Torus attractor:* Quasi-periodic dynamics on a torus, arising from incommensurate frequencies.

**Attractor networks.** In theoretical neuroscience, memory states are modeled as attractors. A Hopfield network stores patterns as fixed-point attractors of a recurrent dynamical system; the basin of attraction determines the network's error-correction capability.

### C.5.4 Chaos and Lyapunov Exponents

**Definition.** A deterministic system exhibits *chaos* if it displays sensitive dependence on initial conditions: nearby trajectories diverge exponentially.

**Lyapunov exponents.** Quantify the average rate of divergence. For an $n$-dimensional system, there are $n$ Lyapunov exponents $\lambda_1 \geq \lambda_2 \geq \cdots \geq \lambda_n$. The largest, the *maximal Lyapunov exponent* (MLE), is

$$\lambda_1 = \lim_{t \to \infty} \frac{1}{t} \ln \frac{\|\delta\mathbf{x}(t)\|}{\|\delta\mathbf{x}(0)\|},$$

where $\delta\mathbf{x}(t)$ is an infinitesimal perturbation.

**Classification:**
- $\lambda_1 < 0$: Trajectories converge → stable fixed point or limit cycle.
- $\lambda_1 = 0$: Marginal stability (characteristic of a limit cycle in the direction along the cycle).
- $\lambda_1 > 0$: **Chaos**—exponential divergence of nearby trajectories.

### C.5.5 Edge of Chaos and Criticality

The *edge of chaos* *(Chapter 10)* refers to the boundary between ordered (non-chaotic) and chaotic regimes. At this boundary, neural networks exhibit:

- **Maximal dynamic range:** Sensitivity to inputs is maximized.
- **Long transients:** The system takes a long time to settle, enabling complex computation.
- **Power-law correlations:** Temporal and spatial correlations decay as power laws rather than exponentials.

**Criticality hypothesis.** There is growing evidence that biological neural networks—including cortical tissue and, by extension, brain organoids—self-organize to operate near criticality. Quantitative signatures include:

1. **Neuronal avalanche size distribution:** $P(s) \propto s^{-3/2}$ (power law with exponent $-3/2$).
2. **Avalanche duration distribution:** $P(d) \propto d^{-2}$.
3. **Branching ratio:** $\sigma \approx 1$ (each active neuron activates, on average, exactly one other neuron).

A recurrent neural network at the edge of chaos has a spectral radius $\rho(W)$ of the weight matrix $W$ near 1. When $\rho(W) < 1$, activity decays; when $\rho(W) > 1$, activity explodes. At $\rho(W) = 1$, the network is critical *(see Chapter 10, Reservoir Computing)*.

---

## C.6 Stochastic Processes

Neural systems are inherently noisy. Stochastic processes provide the mathematical tools for modeling randomness in spike trains, ion channel dynamics, and synaptic transmission.

### C.6.1 Markov Chains

**Definition.** A *discrete-time Markov chain* is a sequence of random variables $X_0, X_1, X_2, \dots$ satisfying the *Markov property*:

$$P(X_{n+1} = j \mid X_n = i, X_{n-1}, \dots, X_0) = P(X_{n+1} = j \mid X_n = i) \equiv P_{ij}.$$

The matrix $P = [P_{ij}]$ is the *transition matrix*, with $P_{ij} \geq 0$ and $\sum_j P_{ij} = 1$.

**Stationary distribution.** A probability vector $\boldsymbol{\pi}$ is *stationary* if $\boldsymbol{\pi}^T P = \boldsymbol{\pi}^T$. Under mild conditions (irreducibility, aperiodicity), $\boldsymbol{\pi}$ exists, is unique, and the chain converges to it from any initial distribution.

**Worked Example.** An ion channel has two states: Open ($O$) and Closed ($C$). Transition probabilities per time step:

$$P = \begin{pmatrix} P_{OO} & P_{OC} \\ P_{CO} & P_{CC} \end{pmatrix} = \begin{pmatrix} 0.9 & 0.1 \\ 0.3 & 0.7 \end{pmatrix}.$$

Stationary distribution: solve $\pi_O = 0.9\pi_O + 0.3\pi_C$ with $\pi_O + \pi_C = 1$:

$$0.1\pi_O = 0.3\pi_C \implies \pi_O = 3\pi_C \implies \pi_O = 0.75, \quad \pi_C = 0.25.$$

The channel is open 75% of the time at steady state.

### C.6.2 Poisson Processes (Spike Train Statistics)

**Definition.** A *homogeneous Poisson process* with rate $\lambda > 0$ is a counting process $N(t)$ where:
1. $N(0) = 0$.
2. Increments are independent: counts in non-overlapping intervals are independent.
3. $N(t+\Delta t) - N(t) \sim \text{Poisson}(\lambda \Delta t)$.

**Inter-spike intervals.** For a Poisson process, the inter-event (inter-spike) intervals are exponentially distributed:

$$p(\tau) = \lambda e^{-\lambda \tau}, \quad \tau \geq 0.$$

Mean ISI: $1/\lambda$. Coefficient of variation: $\text{CV} = 1$ (a hallmark of a Poisson process).

**Inhomogeneous Poisson process.** The rate varies with time, $\lambda(t)$, modeling time-varying neural firing rates. The expected count in $[t_1, t_2]$ is $\int_{t_1}^{t_2} \lambda(s)\, ds$.

**Fano factor.** The ratio of variance to mean of spike counts in a window of size $T$:

$$F(T) = \frac{\text{Var}[N(T)]}{\mathbb{E}[N(T)]}.$$

For a Poisson process, $F = 1$ for all $T$. Deviations from $F = 1$ indicate non-Poisson statistics: $F < 1$ (sub-Poisson, regular firing) or $F > 1$ (super-Poisson, bursty firing).

### C.6.3 Wiener Process and Stochastic Differential Equations

**Definition.** A *Wiener process* (Brownian motion) $W(t)$ is a continuous-time stochastic process with:
1. $W(0) = 0$.
2. Independent increments: $W(t) - W(s)$ is independent of $\{W(u) : u \leq s\}$ for $s < t$.
3. Gaussian increments: $W(t) - W(s) \sim \mathcal{N}(0, t - s)$.
4. Continuous sample paths (almost surely).

**Stochastic differential equations (SDEs).** A general SDE has the form

$$dX_t = \mu(X_t, t)\, dt + \sigma(X_t, t)\, dW_t,$$

where $\mu$ is the *drift* and $\sigma$ is the *diffusion coefficient*. The term $\sigma\, dW_t$ injects noise.

**Itô's lemma.** For a smooth function $f(X_t, t)$ where $X_t$ satisfies the SDE above:

$$df = \left(\frac{\partial f}{\partial t} + \mu \frac{\partial f}{\partial x} + \frac{\sigma^2}{2}\frac{\partial^2 f}{\partial x^2}\right)dt + \sigma \frac{\partial f}{\partial x}\, dW_t.$$

The extra term $\frac{\sigma^2}{2}\frac{\partial^2 f}{\partial x^2}$ (absent from ordinary calculus) is the *Itô correction* due to the non-differentiability of the Wiener process.

### C.6.4 The Langevin Equation

The *Langevin equation* adds noise to a deterministic ODE:

$$\tau \frac{dV}{dt} = -(V - V_\text{rest}) + R_m I(t) + \sigma\,\xi(t),$$

where $\xi(t)$ is *white noise* (formally, $\xi(t) = dW/dt$) with $\langle \xi(t) \rangle = 0$ and $\langle \xi(t)\xi(t') \rangle = \delta(t - t')$.

**Application.** The noisy leaky integrate-and-fire (LIF) neuron uses the Langevin equation to model synaptic noise. The membrane potential fluctuates randomly; a spike is emitted when $V$ crosses a threshold $V_\text{th}$. This model captures the *stochastic* nature of spike timing observed in organoid recordings.

**Fokker–Planck equation.** The probability density $p(V, t)$ of the Langevin equation evolves according to:

$$\frac{\partial p}{\partial t} = -\frac{\partial}{\partial V}\left[\frac{-(V - V_\text{rest}) + R_m I}{\tau}\, p\right] + \frac{\sigma^2}{2\tau^2}\frac{\partial^2 p}{\partial V^2}.$$

This PDE allows analytical computation of firing rate statistics without simulation.

---

## C.7 Optimization and Learning Rules

Learning in biological and artificial neural networks is formalized as optimization: adjusting parameters (synaptic weights) to minimize (or maximize) an objective function.

### C.7.1 Gradient Descent

**Definition.** Given a differentiable loss function $\mathcal{L}(\boldsymbol{\theta})$, *gradient descent* updates parameters iteratively:

$$\boldsymbol{\theta}_{k+1} = \boldsymbol{\theta}_k - \eta\, \nabla_{\boldsymbol{\theta}} \mathcal{L}(\boldsymbol{\theta}_k),$$

where $\eta > 0$ is the *learning rate*.

**Convergence.** For a convex $\mathcal{L}$ with Lipschitz-continuous gradient (constant $L$), choosing $\eta < 2/L$ guarantees convergence to the global minimum.

**Stochastic gradient descent (SGD).** When $\mathcal{L} = \frac{1}{N}\sum_i \ell_i$, computing the full gradient is expensive. SGD approximates it using a random subset (mini-batch):

$$\boldsymbol{\theta}_{k+1} = \boldsymbol{\theta}_k - \eta\, \nabla_{\boldsymbol{\theta}} \ell_{i_k}(\boldsymbol{\theta}_k).$$

The noise in SGD can help escape shallow local minima.

### C.7.2 Hebbian Learning and BCM Theory

**Hebb's rule (1949).** "Neurons that fire together wire together." The simplest formalization:

$$\Delta w_{ij} = \eta\, x_i\, x_j,$$

where $x_i$ and $x_j$ are the activities of pre- and post-synaptic neurons.

**Problem.** Pure Hebbian learning is unstable: weights grow without bound.

**BCM theory (Bienenstock, Cooper, Munro, 1982).** A stabilized learning rule with a sliding modification threshold *(Chapter 3)*:

$$\Delta w_{ij} = \eta\, x_i\, \phi(x_j, \theta_M),$$

where the nonlinear function $\phi$ changes sign at the *modification threshold* $\theta_M$:

$$\phi(x_j, \theta_M) = x_j(x_j - \theta_M).$$

- If $x_j > \theta_M$: potentiation (weight increase).
- If $x_j < \theta_M$: depression (weight decrease).

The threshold $\theta_M$ slides with the average postsynaptic activity:

$$\theta_M = \mathbb{E}[x_j^2],$$

providing *homeostatic stability* while preserving selectivity.

### C.7.3 Variational Free Energy Minimization

The *free energy principle* *(Chapter 11)* proposes that biological systems minimize *variational free energy*:

$$\mathcal{F}[q] = D_\text{KL}\bigl(q(\theta) \,\|\, p(\theta)\bigr) - \mathbb{E}_{q}\bigl[\ln p(\mathcal{D} \mid \theta)\bigr],$$

where $q(\theta)$ is an approximate posterior over hidden causes $\theta$, $p(\theta)$ is the prior, and $p(\mathcal{D} \mid \theta)$ is the likelihood.

**Equivalently:**

$$\mathcal{F}[q] = -\underbrace{\mathbb{E}_q[\ln p(\mathcal{D}, \theta)]}_{\text{energy}} + \underbrace{\mathbb{E}_q[-\ln q(\theta)]}_{\text{entropy of } q}.$$

**Key result.** Minimizing $\mathcal{F}$ is equivalent to maximizing the *evidence lower bound* (ELBO) on $\ln p(\mathcal{D})$:

$$\ln p(\mathcal{D}) = \mathcal{F}[q] + D_\text{KL}\bigl(q(\theta) \,\|\, p(\theta \mid \mathcal{D})\bigr) \geq -\mathcal{F}[q].$$

Since $D_\text{KL} \geq 0$, minimizing $\mathcal{F}$ tightens the bound and pushes $q(\theta)$ closer to the true posterior.

### C.7.4 Ridge Regression for Readout Training

In *reservoir computing* *(Chapter 10)*, the internal dynamics of a recurrent network (the "reservoir") are fixed. Only the *readout weights* $\mathbf{w}_\text{out}$ are trained, typically via ridge regression (Tikhonov regularization).

**Problem.** Given reservoir state matrix $X \in \mathbb{R}^{N \times T}$ and target output $\mathbf{y} \in \mathbb{R}^{1 \times T}$, find:

$$\mathbf{w}_\text{out}^* = \arg\min_{\mathbf{w}} \|\mathbf{w}^T X - \mathbf{y}\|_2^2 + \beta \|\mathbf{w}\|_2^2,$$

where $\beta > 0$ is the *regularization parameter*.

**Closed-form solution:**

$$\mathbf{w}_\text{out}^* = (XX^T + \beta I)^{-1} X\mathbf{y}^T.$$

**Why ridge regression?**
- The term $\beta I$ ensures the matrix $XX^T + \beta I$ is invertible even when $X$ is rank-deficient (more neurons than time points).
- Regularization prevents overfitting by penalizing large weights.
- The hyperparameter $\beta$ is chosen by cross-validation.

**Worked Example.** With $N = 100$ reservoir neurons, $T = 500$ time points, and target $\mathbf{y}$ being a sinusoidal signal, ridge regression finds weights that linearly combine the reservoir states to reconstruct the sine wave. The regularization strength $\beta$ trades off fitting accuracy against generalization.

---

## C.8 Graph Theory and Network Analysis

The connectivity of neural networks—whether biological or artificial—is naturally described using graph theory.

### C.8.1 Graphs, Adjacency Matrices, and Degree Distributions

**Definition.** A *graph* $G = (V, E)$ consists of a set of *vertices* (nodes) $V$ and a set of *edges* (links) $E \subseteq V \times V$.

- **Undirected graph:** Edges have no direction; $(i, j) \in E \Leftrightarrow (j, i) \in E$.
- **Directed graph (digraph):** Edges have direction; $(i, j) \in E$ does not imply $(j, i) \in E$.
- **Weighted graph:** Each edge carries a weight $w_{ij} \in \mathbb{R}$.

**Adjacency matrix.** For a graph on $n$ nodes, the adjacency matrix $A \in \mathbb{R}^{n \times n}$ has entries:

$$A_{ij} = \begin{cases} w_{ij} & \text{if } (i, j) \in E, \\ 0 & \text{otherwise.} \end{cases}$$

For an unweighted graph, $A_{ij} \in \{0, 1\}$.

**Degree.** The *degree* of node $i$ is $k_i = \sum_j A_{ij}$ (for unweighted, undirected graphs). The *degree distribution* $P(k)$ characterizes the network's connectivity pattern.

### C.8.2 Small-World and Scale-Free Networks

**Small-world networks (Watts–Strogatz, 1998).** Characterized by:
- **High clustering:** Most of a node's neighbors are also neighbors of each other.
- **Short path length:** Any two nodes are connected by a small number of intermediate links.

Constructed by starting with a regular ring lattice and randomly rewiring edges with probability $p$. Even a small $p$ drastically reduces path length while preserving clustering.

**Scale-free networks (Barabási–Albert, 1999).** Characterized by a power-law degree distribution:

$$P(k) \propto k^{-\gamma}, \quad \gamma \approx 2\text{–}3.$$

Generated by *preferential attachment*: new nodes are more likely to connect to highly connected existing nodes ("the rich get richer").

**Relevance.** Brain networks exhibit both small-world and scale-free properties, with highly connected *hub* neurons playing disproportionate roles in information processing.

### C.8.3 Clustering Coefficient and Path Length

**Local clustering coefficient.** For node $i$ with degree $k_i \geq 2$:

$$C_i = \frac{2 |\{(j, l) : j, l \in \mathcal{N}_i, (j, l) \in E\}|}{k_i(k_i - 1)},$$

where $\mathcal{N}_i$ is the set of neighbors of $i$. The global clustering coefficient is $C = \frac{1}{n}\sum_i C_i$.

**Characteristic path length.** The average shortest path between all pairs of nodes:

$$L = \frac{1}{n(n-1)} \sum_{i \neq j} d(i, j),$$

where $d(i, j)$ is the shortest path length from $i$ to $j$.

**Small-world index.** A network is "small-world" if $C \gg C_\text{random}$ and $L \approx L_\text{random}$, where the subscript denotes comparison with a random graph of the same size and density.

### C.8.4 Spectral Graph Theory

The eigenvalues of graph-associated matrices reveal structural properties.

**Graph Laplacian.** For an undirected graph with adjacency matrix $A$ and degree matrix $D = \text{diag}(k_1, \dots, k_n)$:

$$L = D - A.$$

**Properties of $L$:**
- $L$ is symmetric positive semidefinite.
- The smallest eigenvalue is always 0 ($L\mathbf{1} = \mathbf{0}$).
- The multiplicity of eigenvalue 0 equals the number of connected components.
- The second-smallest eigenvalue $\lambda_2$ (the *algebraic connectivity* or *Fiedler value*) measures how well connected the graph is: larger $\lambda_2$ implies more robust connectivity.

**Normalized Laplacian.** $\mathcal{L} = D^{-1/2} L D^{-1/2} = I - D^{-1/2} A D^{-1/2}$, with eigenvalues in $[0, 2]$.

**Spectral clustering.** Use the eigenvectors of $L$ (or $\mathcal{L}$) corresponding to the smallest eigenvalues to partition the graph into clusters—a key technique for identifying functional modules in neural networks.

### C.8.5 Applications to Functional Connectivity

In organoid research *(Chapter 14)*, graph-theoretic analysis is applied to **functional connectivity matrices** derived from multi-electrode array (MEA) recordings:

1. **Construct the graph:** Compute pairwise correlations (or mutual information, transfer entropy) between electrode signals. Threshold to obtain the adjacency matrix $A$.
2. **Network metrics:** Compute clustering coefficient $C$, path length $L$, degree distribution $P(k)$, and modularity $Q$.
3. **Developmental tracking:** Monitor how $C$, $L$, and the small-world index change as organoids mature over weeks to months.
4. **Comparison with in vivo:** Compare organoid functional networks with those of cortical tissue to assess biological fidelity.

**Modularity.** The *Newman–Girvan modularity* quantifies the quality of a partition of the network into communities:

$$Q = \frac{1}{2|E|} \sum_{ij} \left(A_{ij} - \frac{k_i k_j}{2|E|}\right) \delta(c_i, c_j),$$

where $c_i$ is the community assignment of node $i$ and $\delta$ is the Kronecker delta. Higher $Q$ (closer to 1) indicates stronger community structure.

---

*Appendix C · Organoid Intelligence*
*Previous: [Appendix B: Lab Protocols Reference ←](appendix-b-lab-protocols-reference.md)*
*Next: [Appendix D: Regulatory Frameworks →](appendix-d-regulatory-frameworks.md)*

---

**Copyright © 2026 DaScient, LLC. All rights reserved.**
Licensed under the [Apache License 2.0](../../../LICENSE).
