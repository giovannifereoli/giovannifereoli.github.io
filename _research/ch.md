---
name: "gravity-modeling"
layout: single
title: "Cylindrical Harmonics for Local Gravity Field Modeling in TAG and Landing Scenarios"
date: 2025-01-01 10:00:00 -0600
collection: research
tags: gravity, small bodies, cylindrical harmonics

header:
  teaser: assets/gravity_teaser.png
---

![Gravity Field Fitting](/assets/gravity_teaser.png)

Accurate gravity modeling is fundamental for proximity operations around small bodies, particularly during critical phases such as touch-and-go (TAG) and landing. Conventional exterior formulations—spherical harmonics, polyhedral models, and mascons—often encounter limitations related to convergence, local fidelity, and computational cost when operating near the surface or within highly localized regions of interest.

This work introduces an **interior cylindrical Bessel expansion** for localized gravity field representation, derived directly from Laplace’s equation in cylindrical coordinates. The resulting formulation leverages **Fourier–Bessel basis functions**, providing guaranteed convergence inside a modeled cylindrical domain and enabling targeted high-fidelity gravity reconstruction. Expansion coefficients are obtained via weighted least-squares fitting to truth-model field samples, and the solution is validated against a high-resolution polyhedral gravity model.

The approach demonstrates:

- Sub-percent errors in potential and acceleration within the cylindrical region, including near-surface regimes.
- Improved local convergence relative to traditional spherical harmonic and mascon models.
- Reduced coefficient count for comparable accuracy, yielding computational efficiency.
- Consistent agreement in trajectory propagation and uncertainty growth through covariance analysis.

This localized modeling framework enables precise gravity representation for **landing, TAG, terminal guidance, and surface-interaction trajectories**, while also supporting future extensions in **orbit determination, close-proximity autonomy, regolith dynamics, and density inference**.

---

### 📝 Related Publications

- **On Cylindrical Harmonics for Local Gravity Field Modeling**  
  *G. Fereoli, J. McMahon*  
  *AAS/AIAA Astrodynamics Specialist Conference*, Boston, August 2025 — **Breakwell Award Winner**

- **Interior Gravity Characterization of Small Celestial Bodies Using Cylindrical Harmonics**  
  *G. Fereoli, J. McMahon*  
  In preparation for *Celestial Mechanics and Dynamical Astronomy*


