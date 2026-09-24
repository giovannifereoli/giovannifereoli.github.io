---
name: "gravity-modeling"
title: "Cylindrical Harmonics for Near-Surface Gravity & Interior Density Inference"
date: 2026-03-01 10:00:00 -0600
collection: research
tags: [gravity, small bodies, cylindrical harmonics, density inference]
excerpt: "A Fourier–Bessel interior gravity model valid down to the surface, supporting landing, gravity science, and interior density inference."
header:
  teaser: assets/img/gravity.jpg
---

<img src="/assets/img/gravity.jpg" alt="Relative potential error of a cylindrical harmonic fit near the surface of Eros" loading="lazy">

<p class="pillar-label">Contribution 1: Dynamical Model</p>

**Research question.** Existing interior gravity representations have convergence and operational limits. How can a near-surface gravity model be both physically consistent and computationally efficient, and also be more sensitive to interior density variations?

Exterior spherical harmonics converge only outside the Brillouin sphere. Polyhedra assume constant density, are expensive to evaluate, and cannot take in OD data. Interior spherical harmonics are valid only down to a single tangent point, and interior Bessel expansions need very large parameter sets. This work solves **Laplace's equation in cylindrical coordinates**, which gives a localized **Fourier–Bessel expansion**:

$$
\mathcal{U}_{\alpha}(\rho,\varphi,z)=\sum_{m=0}^{M}\sum_{n=1}^{N}
\mathcal{J}_m\!\left(\tfrac{j_{mn}\rho}{\alpha R^*}\right)
e^{-j_{mn}z/(\alpha R^*)}
\left[\mathscr{A}_{mn}\cos m\varphi+\mathscr{B}_{mn}\sin m\varphi\right]
$$

It is valid in any mass-free cylinder, whether inside, across, or beyond the Brillouin sphere. A virtual asymptotic boundary at $\rho=\alpha R^*$ keeps the basis discrete without forcing the potential to vanish on the cylinder wall.

### Key Results on (433) Eros

- **Accuracy:** A 25×25 field has mean relative potential error of 4.2×10⁻⁴ % and maximum below 0.005 %. Existing near-surface models can have errors of order 1–10 %.
- **Dynamics:** Over a 15-hour soft-landing trajectory, position error stays under 2 cm and velocity error under 0.02 mm/s against the polyhedral truth.
- **Uncertainty:** NEES tests against a 10,000-sample Monte Carlo confirm that linear covariance propagation with the fitted Jacobians is consistent.

### Ongoing Work

- **Interior Density Inference:** Least-squares inversion for discrete mascon-like anomalies relative to a constant-density baseline.
- **Local Mass-Change Recovery:** An analytical mapping from coefficient changes before and after an event to surface density $\Delta\sigma(\rho,\varphi)$ and total mass change $\Delta M$, for events such as TAG, plume–surface interaction, or regolith motion.
- **Hera:** Implementation in MONTE to use near-surface Juventas and GRASS gravimeter data at Dimorphos.

---

### Related Publications

- **Interior Gravity Characterization of Small Celestial Bodies Using Cylindrical Harmonics**. *G. Fereoli, J. McMahon.* *Celestial Mechanics and Dynamical Astronomy*, 138, 12 (2026). [doi:10.1007/s10569-026-10281-7](https://doi.org/10.1007/s10569-026-10281-7)
- **On Cylindrical Harmonics for Local Gravity Field Modeling**. *G. Fereoli, J. McMahon.* AAS/AIAA Astrodynamics Specialist Conference, Boston, 2025. **John V. Breakwell Student Award**
- **Interior Cylindrical Harmonics for Small-Body Gravity: Global Interior Estimation and Local Mass-Change Recovery**. *G. Fereoli, J. McMahon.* 37th AAS/AIAA Space Flight Mechanics Meeting, New Orleans, Jan 2027 (upcoming).
- **Small-Body Interior Density Inference and Localized Mass Variation Reconstruction via Cylindrical Harmonic Gravity Modeling**. *G. Fereoli, J. McMahon.* *Icarus*, in preparation.

[Code on GitHub](https://github.com/giovannifereoli/Interior-Gravity-Field-CH){: .btn .btn--primary } [All Publications](/publications/){: .btn .btn--inverse }
