---
name: "mcmc-od"
layout: single
title: "Monte Carlo Orbit Determination for Small-Body Science"
date: 2025-01-01 10:00:00 -0600
collection: research
tags: orbit determination, small bodies, MCMC, nonlinear estimation

header:
  teaser: assets/mcmc_teaser.png
---

<img src="/assets/mcmc_teaser.png" alt="Posterior distribution from ensemble MCMC sampler" loading="lazy">

Classical orbit determination (OD) techniques—such as batch least-squares and Kalman filtering—rely on local linearization and Gaussian uncertainty assumptions. Around small bodies or in weak-dynamics regimes, these assumptions often break down, leading to biased estimates, underestimated uncertainty, or failure to converge.

This work develops a **Monte Carlo–based OD framework** capable of resolving fully nonlinear, non-Gaussian posteriors for astrodynamics problems where traditional estimators struggle. The method employs an **affine-invariant ensemble Markov Chain Monte Carlo (MCMC)** sampler (Goodman & Weare) to efficiently explore highly correlated and multi-modal parameter spaces typical of small-body environments.

Key features include:

- **MAP-based initialization** to reduce burn-in
- **State-space whitening** for enhanced sampling efficiency
- **High-order State Transition Tensors (STTs)** to propagate nonlinear deviations around a reference, drastically reducing integration cost
- **Convergence diagnostics and posterior validation** routines for robustness

A demonstration case involving **optical tracking of a surface particle ejected from asteroid Bennu** highlights the method’s strengths. Even with sparse angular (RA/DEC) data and highly nonlinear dynamics, the framework resolves accurate posteriors and avoids local-minimum lock-in—a common failure mode in Gaussian estimators.

The toolset is being expanded into an **open-source, modular OD library**, supporting hybrid inference architectures and future extensions to small-body gravity science, density inference, and autonomous navigation.

---

### 📝 Related Publications

- **Efficient Posterior Sampling for Small-Body Orbit Determination**  
  *G. Fereoli, J. McMahon*  
  In preparation (target venue TBD) — *In preparation*

---

[View related software and tools](/software){: .btn .btn--primary }
