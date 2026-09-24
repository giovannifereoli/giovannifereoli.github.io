---
name: "mcmc-od"
title: "Bayesian Orbit Determination with MCMC and State Transition Tensors"
date: 2026-08-01 10:00:00 -0600
collection: research
tags: [orbit determination, small bodies, MCMC, nonlinear estimation, uncertainty quantification]
excerpt: "Ensemble MCMC sped up with high-order flow expansions. It samples full non-Gaussian OD posteriors and shows when a linearized solution is biased."
header:
  teaser: assets/img/mcmc.jpg
---

<img src="/assets/img/mcmc.jpg" alt="Posterior corner plot from the MCMC-STT sampler" loading="lazy">

<p class="pillar-label"><span class="tag tag--c">Contribution 3 · Estimation framework</span></p>

**Research question.** How can orbit determination use a tractable nonlinear framework that fully characterizes non-Gaussian posteriors, instead of relying on linearization and covariance alone?

Batch least squares and Kalman filters linearize the dynamics and keep only the first two moments. Near small bodies, observations are weak, arcs are short, and the dynamics are nonlinear. In that setting these methods can converge to **biased, statistically inconsistent** solutions whose post-fit residuals still look fine. **Markov Chain Monte Carlo** samples the posterior itself, but each likelihood evaluation normally requires a full propagation.

### MCMC–STT

- **Affine-invariant ensemble sampler** (Goodman & Weare, via `emcee`) with only a few interpretable hyperparameters.
- **High-order State Transition Tensors** replace repeated numerical integration with tensor contractions. The cost is paid once on the reference trajectory, and each later evaluation is independent of the force model's fidelity.
- **Practical setup:** initialization at the MAP estimate, sampling in whitened coordinates, and convergence checks based on integrated autocorrelation time.
- **General likelihoods:** heavy-tailed (Student-t), non-Gaussian, or even discontinuous measurement models.

### Results: particle tracking at (101955) Bennu

- **Optical-only arc:** linearized OD converges with clean residuals, but the answer is biased along a one-dimensional null space. MCMC walkers move away from it to the correct posterior basin, which residuals alone would not reveal.
- **Doppler-only arc:** the least-squares solution is consistent, but the posterior is clearly **non-Gaussian** (skewed in position and velocity), which a covariance cannot capture.
- **Speed:** STM-based evaluations are about **1000× faster** than full propagation. A converged 5×10⁵-step run takes 3.6 h instead of an estimated ~100 days.

### Next: Hera gravity science

The framework will serve as a complementary check on Hera OD from the Detailed Characterization Phase onward, compared against the baseline estimator of the University of Bologna radio science team.

---

### Related publications

- **Efficient Posterior Sampling for Small-Body Orbit Determination**. *G. Fereoli, J. McMahon.* AAS/AIAA Astrodynamics Specialist Conference, Whistler, BC, 2026.
- **Bayesian Orbit Determination via Markov Chain Monte Carlo with High-Order Flow Expansions**. *G. Fereoli, J. McMahon.* *Acta Astronautica*, in preparation.

[Code on GitHub](https://github.com/giovannifereoli/MCMC-STT-OD){: .btn .btn--primary } [All publications](/publications/){: .btn .btn--inverse }
