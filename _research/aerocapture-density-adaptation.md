---
name: "aerocapture-density-adaptation"
layout: single
title: "Deep Learning-Based Online Density Adaptation for Aerocapture Guidance"
date: 2026-01-01 10:00:00 -0600
collection: research
tags: aerocapture, guidance, deep learning, LSTM, atmospheric density

header:
  teaser: assets/aerocapture.png
---

## Abstract

Aerocapture is an entry maneuver used to insert a spacecraft into orbit by dissipating energy through the atmosphere. Guidance accuracy is highly sensitive to the onboard atmospheric density model. Due to variability and uncertainty in density, an accurate onboard density model is critical for improving targeting accuracy.

The state-of-the-art Fully Numerical Predictor-corrector Aerocapture Guidance (FNPAG) relies on an exponential density model. Current online update methods like first-order fading-memory filters fail to fully capture density variations. In this study, an alternative onboard density model is proposed using a Long Short-Term Memory (LSTM) neural network.

The LSTM learns to map trajectory measurements to the density profile it is flying through. It is trained offline on 5000 FNPAG trajectories with perturbed density profiles. The real atmospheric density is modeled using perturbed density data generated through NASA's Mars Global Reference Atmosphere Model (GRAM) software. The LSTM predicts the density profile in real time after each guidance iteration.

To improve robustness toward unpredictable atmospheric behavior, an online adaptation method is proposed. This updates the LSTM output through a linear layer based on the discrepancy between predicted and measured acceleration.

A Mars aerocapture scenario is simulated to showcase the method. Two levels of density uncertainty are considered (±1.5σ and ±3σ), with corresponding LSTM models trained. Results show that for the highest uncertainty level, the LSTM-augmented FNPAG reduces mean apoapsis error by up to **41.54%** compared to baseline FNPAG. The online-adaptive approach further improves accuracy by **64.70%** over FNPAG. It also outperforms an FNPAG with a first-order fading-memory filter. In addition, the LSTM remains effective under noisy inputs.

This study demonstrates improved aerocapture guidance accuracy by better predicting atmospheric density with an online-adaptive LSTM.

---

## 📝 Related Publication

- **Deep Learning-Based Online Density Adaptation for Aerocapture Guidance (Master's Thesis)**  
  *Claudia Muñoz Martos* (Student ID: 03723390), University of Colorado Boulder  
  **Supervision:** Prof. Markus Ryll (Associate Professorship of Autonomous Aerial Systems), Prof. Jay McMahon (Associate Professor, University of Colorado Boulder)  
  **Advisors:** Giovanni Fereoli, M.Sc.; Grace E. Calkins, M.Sc.  
  *Completed*
