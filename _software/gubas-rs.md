---
name: "GUBAS-RS"
layout: single
title: "GUBAS-RS"
date: 2026-05-16 12:00:00 -0000
collection: software
classes: wide

header:
  teaser: assets/gravity_teaser.png
---

**GUBAS-RS** (**G**eneral **U**se **B**inary **A**steroid **S**imulator, Rust) is an open-source Rust port of the original C++ GUBAS integrator.

It models the **coupled translational and rotational dynamics** of binary asteroid systems with the Hou (2016) Full Two-Body Problem (F2BP) formulation, using inertia integrals \(T_{ijk}\) and truncated mutual-gravity series expansions for potential, forces, and torques.

### Core capabilities

- **Exact Jacobians with forward-mode automatic differentiation** (dual numbers), avoiding finite-difference approximations.
- **State Transition Matrix (STM) propagation** together with the trajectory.
- **Augmented parameter sensitivities** with respect to inertia integrals of both bodies, with independent harmonic degree/order settings per body.
- **Stokes conversion support**, mapping \(\partial x/\partial T_{ijk}\) to spherical harmonic coefficient sensitivities \(\partial x/\partial C_{lm}\), \(\partial x/\partial S_{lm}\).
- **Python interface (PyO3/maturin)** so the solver can be called directly from orbit-determination workflows without subprocess overhead.

### Practical use

The repository includes binary and Python workflows, example scripts, and Didymos–Dimorphos-style inputs for simulation and OD-oriented sensitivity studies.

### 🔗 Project Link

[Visit GUBAS-RS on GitHub](https://github.com/giovannifereoli/GUBAS-RS){: .btn .btn--primary .btn--large}

If you are interested in installation, examples, tests, and implementation details, please check the repository documentation.
