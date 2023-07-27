---
name: "2022_PINNs_Orbits"
layout: single
title:  "Preliminary Analysis of Small-Body Gravity Field Estimation using Physics-Informed Neural Networks and Kalman Filters"
date:   2022-09-17 18:22:51 -0600
collection: research
tags: conference, ongoing

header:
  teaser: assets/PINN_StatOD.jpg

---

<figure style="width: 300px" class="align-right">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/PINN_StatOD_original.jpg" alt="">
  <figcaption>Gravity modeling errors grow quite large near the surface of asteroids if simple models are used.</figcaption>
</figure> 

Shortly after spacecraft enter orbit around a small-body, the mission will transition to its gravity science campaign. In this campaign, the spacecraft collects measurements in orbit and uses those measurements to estimate its own state as well as environmental parameters about the system. Typically these parameters take the form of the Stokes coefficients (or spherical harmonic coefficients) which are then used to parameterize a low-fidelity gravity model of the system. 

As discussed in earlier posts, spherical harmonics suffers from a number of unique disadvantages ranging from computational inefficiency to divergence within the bounding sphere -- making it a suboptimal choice for small body exploration. This paper explores how PINN gravity models might be used within these early mission phases instead to produce more accurate gravity models in-situ. 

Video coming soon!
{: .notice--info}

<!-- <iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/9M3PZGoWVTc?controls=0" frameborder="0" allowfullscreen></iframe> -->

[Download the paper](https://hanspeterschaub.info/Papers/Martin2022c.pdf){: .btn .btn--primary .btn--large} 