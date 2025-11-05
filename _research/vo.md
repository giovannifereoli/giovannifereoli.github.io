---
name: "vo-od"
layout: single
title: "Tightly-Coupled Visual Odometry for Deep-Space Orbit Determination"
date: 2025-01-01 10:00:00 -0600
collection: research
tags: orbit determination, optical navigation, visual odometry, small bodies

header:
  teaser: assets/vo_teaser.jpg
---

![Optical Navigation Framework](/assets/vo_teaser.jpg)

Autonomous navigation in the proximity of small bodies remains challenging due to weak, highly irregular gravity fields, uncertain shape and albedo properties, and intermittent ground-based tracking. **Optical navigation (OpNav)** provides a path to resilience by using onboard imagery for relative motion estimation, particularly during close-approach and low-altitude operations.

This work develops a **tightly-coupled visual-odometry (VO) state estimation framework** that incorporates **epipolar constraints directly into a sequential square-root information filter (SRIF)**. Unlike loosely-coupled pipelines that recover relative pose externally, this formulation:

- Converts feature correspondences into **direct epipolar residuals**
- Derives **closed-form measurement Jacobians** with respect to the inertial spacecraft state
- Maintains geometric observability and avoids intermediate VO bias
- Enables assimilation of **thousands of optical measurements** together with radiometric data

The pipeline includes realistic camera modeling, learned feature detection and matching, and additional empirical force states to accommodate unmodeled accelerations and modeling discrepancies.

Validation is performed using **flight imagery from NASA’s Dawn mission** at asteroid Vesta during low-altitude operations. Results show that tightly-coupled epipolar residual assimilation significantly enhances localization capability and improves orbit determination performance in conditions with degraded or sparse Doppler coverage. The approach delivers robust, map-independent optical navigation and supports future autonomous small-body missions requiring onboard precision guidance.

---

### 📝 Related Work

- **Tightly-Coupled Rotation-Constrained Visual Odometry for Orbit Determination Around Small Celestial Bodies**  
  *G. Fereoli*  
  In preparation for independent study (ASEN 6849), University of Colorado Boulder
