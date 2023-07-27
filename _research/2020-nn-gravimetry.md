---
name: "Neural Networks for Gravity Modeling"
layout: single
title:  "Artificial Neural Networks for Offline Gravimetry"
date:   2020-08-07 18:22:51 -0600
collection: research
classes: wide
tags: conference
header:
  teaser: assets/EarthPerts.jpg

---

<figure class="align-center">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/EarthPerts_original.jpg" alt=""> 
  <figcaption>Once you account for Earth's oblateness, these are the next most important perturbations to model.</figcaption>
</figure> 

This work is grossly outdated and included only for completeness. If you are interested in the latest updates on this topic, please refer to the more recent Physics-Informed Neural Network Gravity Model pages ([PINN-GM-I](/research/2021-pinn-gm-1), [PINN-GM-II](/research/2022-pinn-gm-2), [PINN-GM-III](/research/2022-pinn-gm-3)). That said, research isn't always smooth sailing -- so if you'd like to see some subpar results where it all started, carry on!
{: .notice--warning}

Spherical harmonics are often used to represent the gravity fields of planets.

While this basis set is particularly efficient at representing the dominant perturbation of planetary oblateness, it is notoriously inefficient at capturing the remaining perturbations (mountain ranges, tectonic plate boundaries, regional hotspots, etc.)

This is because dominant gravitational perturbations typically arise from discontinuous features on the surface of the body, and periodic bases and discontinuity [do not play well together](https://en.wikipedia.org/wiki/Gibbs_phenomenon). 

Despite this, astrodynamicists have grown fond of this representation, and entire missions have been dedicated to observing the high order harmonics needed to represent these important perturbations (see [here](https://en.wikipedia.org/wiki/GRACE_and_GRACE-FO), [here](https://en.wikipedia.org/wiki/GRAIL), and [here](https://en.wikipedia.org/wiki/Gravity_Field_and_Steady-State_Ocean_Circulation_Explorer)). 

This paper argues that it is time to move way from the spherical harmonic gravity model and investigates if more productive basis sets can be discovered through machine learning. 

{% include video id="034WxRlirGc" provider="youtube" %}

[Download the paper](https://hanspeterschaub.info/Papers/Martin2020.pdf){: .btn .btn--primary .btn--large}
