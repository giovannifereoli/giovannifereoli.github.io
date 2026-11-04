---
name: "ch"
title: "Interior Gravity Characterization of Small Celestial Bodies Using Cylindrical Harmonics"
date: 2026-03-01 10:00:00 -0700
collection: research
tags: [gravity, small bodies, cylindrical harmonics, orbit determination]
excerpt: "A practical cylindrical-harmonic gravity model for small celestial bodies, with a focus on interior estimation, local mass-change recovery, and near-surface accuracy."
header:
  teaser: assets/img/gravity_teaser.jpg
---

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
- **Small-Body Interior and Surface-Change Estimation with Cylindrical Harmonics**. *G. Fereoli, J. McMahon.* 37th AAS/AIAA Space Flight Mechanics Meeting, New Orleans, Jan 2027 (upcoming).
- **Small-Body Interior Density Inference and Localized Mass Variation Reconstruction via Cylindrical Harmonic Gravity Modeling**. *G. Fereoli, J. McMahon.* *Icarus*, in preparation.

[Code on GitHub](https://github.com/giovannifereoli/Interior-Gravity-Field-CH){: .btn .btn--primary } [All Publications](/publications/){: .btn .btn--inverse }
