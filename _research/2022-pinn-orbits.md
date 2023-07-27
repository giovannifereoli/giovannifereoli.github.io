---
name: "2022_PINNs_Orbits"
layout: single
title:  "Periodic Orbit Discovery Enhanced by Physics-Informed Neural Networks"
date:   2022-08-17 18:22:51 -0600
collection: research
tags: conference, ongoing

header:
  teaser: assets/UnstableOrbit.jpg

---

<figure style="width: 300px" class="align-right">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/UnstableOrbit_original.jpg" alt=""> 
  <figcaption>Asteroid gravity fields produce highly non-keplerian motion.</figcaption>
</figure> 

Periodic trajectories are hard to find, particularly around celestial bodies with irregular shapes and densities. 

Typically dynamicists will use coarse approximations of the gravitational potential combined with the Lagrange Planetary Equations to find orbits that remain bounded; however, due to the approximation such guarantees can only be made over short time scales. 

This paper proposes the use of the PINN gravity model for the periodic orbit discovery problem. Rather than unnecessarily approximating the gravitational system for analytic convenience, PINNs allow dynamicists to explore the true system without approximation while leveraging the same tools and methods as their analytic counterparts thanks to the model's differentiability via autodiff.

{% include video id="9M3PZGoWVTc" provider="youtube" %}

[Download the paper](https://hanspeterschaub.info/Papers/Martin2022b.pdf){: .btn .btn--primary .btn--large}