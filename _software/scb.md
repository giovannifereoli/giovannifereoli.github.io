---
name: "Scarabaeus - Navigation Tool for Interplanetary Missions"
title: "Scarabaeus: Navigation Tool for Interplanetary Missions"
date: 2025-01-01 12:00:00 -0600
collection: software
excerpt: "Open-source orbit determination and navigation software used for the Emirates Mission to the Asteroid Belt."

header:
  teaser: assets/img/scarabaeus.png
---

**Scarabaeus** is a modular and high-performance open-source tool for orbit determination and navigation, designed for interplanetary spacecraft and small-body proximity operations. It is developed by the Orbital Research Cluster for Celestial Applications (ORCCA) Lab at the University of Colorado Boulder.

The software has a Python front end with C++ and Rust backends for key numerical components. It supports:

- Precise force modeling (polyhedral gravity, SRP, third-body, J2)
- Radiometric and optical measurement modeling (Doppler, sequential ranging, optical navigation) with analytical sensitivities
- Estimation algorithms (batch least squares, SRIF)
- Tooling for trajectory design, residual analysis, and uncertainty quantification

Scarabaeus is used operationally to support the [Emirates Mission to the Asteroid Belt](https://www.mbrsc.ae/emirates-mission-to-the-asteroid-belt). As a Flight Dynamics Affiliate at LASP, Giovanni has contributed more than 1,000 commits: dynamics and variational equations, measurement models, estimation pipelines, V&V and unit testing, and a MongoDB-based mission database.

### Documentation

[View the Scarabaeus Documentation](https://ccar-orcca.github.io/scarabaeus-docs/){: .btn .btn--primary .btn--large}

### Related Publications

- **Design and Preliminary Results of Scarabaeus: A New Open-Source Navigation Tool for Interplanetary Spacecraft Navigation**  
  Jay McMahon, Mattia Pugliatti, Dahlia Baker, Anivid Pedros-Faura, Giovanni Fereoli, Kian Shakerin, Santhosh Pattamudu-Manoharan, Zachary Ellis, Mohamed Almashjari, Mohamed Kuleib, Wendy Frank, Jacopo Villa, Jeremy Knittel  
  *47th Rocky Mountain AAS GN&C Conference*, Breckenridge, CO, February 2025.

- **Operational Maneuver Targeting Framework for the Emirates Mission to the Asteroid Belt**  
  Mohamed Kuleib, Giovanni Fereoli, Jay McMahon, Jeremy Knittel  
  *30th International Symposium on Space Flight Dynamics (ISSFD)*, Toulouse, France, June 2026.

- **The Scarabaeus Open-Source Navigation Tool: Preliminary Results and Real Measurements**  
  Jay McMahon, Mattia Pugliatti, Giovanni Fereoli, Santhosh Pattamudu-Manoharan, Zachary Ellis, Annalise Cabra, Mohamed Almashjari, Mohamed Kuleib, Wendy Frank, Jeremy Knittel  
  *2025 AAS/AIAA Astrodynamics Specialist Conference*, Boston, MA, August 2025.

For questions, early access, or collaboration opportunities, feel free to reach out.

