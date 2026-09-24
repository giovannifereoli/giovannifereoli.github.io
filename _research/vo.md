---
name: "vo-od"
title: "Tightly Coupled Visual Odometry for Small-Body Orbit Determination"
date: 2026-06-01 10:00:00 -0600
collection: research
tags: [orbit determination, optical navigation, visual odometry, small bodies]
excerpt: "Map-free terrain-relative navigation with epipolar residuals processed directly in orbit determination. Validated on Dawn imagery of Vesta."
header:
  teaser: assets/img/vo.jpg
---

<img src="/assets/img/vo.jpg" alt="KAZE feature correspondences on Dawn Framing Camera images of Vesta" loading="lazy">

<p class="pillar-label">Contribution 2: Measurement Model</p>

**Research question.** Can terrain-relative optical observables be built in a tightly coupled way, so that spacecraft and small-body states, including the rotational state, are estimated without pre-built landmark catalogs?

Stereophotoclinometry-based navigation works very well, but building its maps is expensive and slow. Visual odometry (VO) needs only features tracked on a rigid surface. Loosely coupled VO pipelines, however, cause **filter cascades**: the preprocessed pose measurements are correlated in time and biased, which breaks the white-noise assumption of the OD filter. They also usually treat the body's pole as known.

### Approach

- **Feature Pipeline:** KAZE detection and description, mutual nearest-neighbor matching, and MSAC outlier rejection with Sampson scoring.
- **Epipolar Residuals in the Filter:** Each correspondence gives a scalar observed-minus-computed residual, $y=-\mathbf{z}_k^\top\mathbf{E}_{k|k+1}\mathbf{z}_{k+1}$, with **analytical partials**. No intermediate static pose solver is needed.
- **Rotational State:** The body's pole (right ascension and declination) is a solve-for parameter. Per-pair sky-plane biases absorb attitude and calibration errors.
- **OD-Ready Formulation:** The measurement spans two epochs and is mapped to a single epoch through the STM. Sampson-consistent noise weighting and underweighting account for correlations between overlapping image pairs.

### Results: NASA Dawn at (4) Vesta, RC3 Phase (~5000 km)

- 65 real Framing Camera images, averaging about 5000 inliers per pair, processed with a batch SRIF.
- Normalized χ² drops from **41.8 before the fit to 1.11 after**, consistent with 0.1 px noise.
- With VO as the only data type, radial, along-track, and cross-track errors drop from (28, 2.5, −12.2) km to **(1.5, −0.2, −0.6) km**. After scale correction, errors are about 100 m.
- Pole declination is recovered to about 0.09°. Monocular VO cannot observe scale on its own, which motivates fusion with radiometric tracking.

### Next Steps: Hera at Didymos

VO and CloudNav-style measurements will be combined with Doppler and ranging for Hera gravity science and compared with SPC-based solutions from the University of Bologna radio science team.

---

### Related Publications

- **REVO: Rotation Estimation and Visual Odometry for Surface Relative Navigation**. *J. Villa, G. Fereoli, J. McMahon.* *Journal of Guidance, Control, and Dynamics*, in preparation.

[All Publications](/publications/){: .btn .btn--inverse }
