---
name: "GPU Paper"
layout: single
title:  "GPGPU Spherical Harmonics Gravity Model"
classes: wide
date:   2020-08-09 18:22:51 -0600
collection: research
tags: conference

header:
  teaser: assets/GPGPU.jpg
---

<figure style="width: 300px" class="align-right">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/GPGPU_original.jpg" alt=""> 
  <figcaption>Parallelizing the spherical harmonic algorithm requires careful though how operations are sequence.</figcaption>
</figure> 

Contrary to every Physics 101 class ever taught, you **cannot** assume that the Earth can be approximated as a point mass. The approximation that the Earth's gravitational potential can be so cleanly captured by a mere $\frac{\mu}{r}$ is, sadly, a gross misrepresentation of the true system. 

The reality is that the Earth is quite deviant from a perfect sphere. Thanks to the forces exerted from it's rotation, the Earth deforms into a oblate ellipsoid, with the equator being a little bit fatter than the poles.

Beyond oblateness, there are also mountain ranges and tectonic plate boundaries which pepper the surface and exert their own gravitational influence on orbiting satellite and spacecraft.  

If left unaccounted for, these perturbations will send a spacecraft considerably off course. To combat this, many astrodynamicists turn to the spherical harmonic gravity model:

$$ U(\mathbf r) = \frac{\mu}{r} \sum_{l=0}^\infty \sum_{m=0}^l \bigg(\frac{R}{r}\bigg)^l P_{l,m}[\sin(\phi)] \big[C'_{l,m} \cos(m \lambda) + S'_{l,m} \sin(m \lambda)\big] $$

The spherical harmonic gravity model attempts to capture the gravity field of a celestial body using, you guessed it, spherical harmonics. Functionally a 3D Fourier transform, this gravity model allows dynamicists to capture an arbitrary level of fidelity assuming enough parameters (Stokes Coefficients -- $C_{l,m}$ and $S_{l,m}$) can be regressed.

In the case of the Earth, these parameters do exist (over 4 million of them). Unfortunately, with so many parameters, the spherical harmonic gravity model comes with a heavy computational cost.

This work investigates if / how the spherical harmonic gravity model can be parallelized on a GPU such that these high-fidelity models can be leveraged without taking exceedingly long amounts of time to compute. 

{% include video id="oFyEA2Sj26Q" provider="youtube" %}

[Download the paper](https://hanspeterschaub.info/Papers/Martin2020a.pdf){: .btn .btn--primary .btn--large}

