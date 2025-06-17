---
name: "gravity-modeling"
layout: single
title:  "Cylindrical Harmonics for Local Gravity Field Modeling in TAG and Landing Scenarios"
date:   2025-01-01 10:00:00 -0600
collection: research
tags: gravity, small bodies, cylindrical harmonics

header:
  teaser: assets/gravity_teaser.jpeg
---

![Gravity Field Fitting](/assets/gravity_cylinders.jpg)

Accurate gravity field modeling plays a critical role in small-body missions, especially for tight navigation scenarios such as Touch-And-Go (TAG) maneuvers and landings. Traditional spherical harmonics lose efficiency and accuracy when modeling local gravity fields near non-convex or highly irregular shapes. In this work, we explore the use of **cylindrical harmonics** as an alternative basis for locally fitting the gravity field around an asteroid surface.

By sampling the gravitational acceleration and potential from a polyhedral model, we construct and fit a cylindrical harmonic expansion that retains both accuracy and numerical stability within a defined region of interest. We also investigate the impact of normalization strategies and conditioning of the design matrix to improve estimation performance. This method is validated against polyhedral truth data and demonstrated in descent scenarios relevant to missions like OSIRIS-REx and the upcoming Emirates Mission to the Asteroid Belt.

This work supports real-time guidance applications where fast evaluation and good gradient behavior are required for optimization and estimation tasks.

---

### 📝 Related Publication

- **On Cylindrical Harmonics for Local Gravity Field Modeling**  
  Giovanni Fereoli, Jay McMahon  
  *In preparation for the 2025 AAS/AIAA Astrodynamics Specialist Conference*, Boston, Massachusetts, August 2025.

