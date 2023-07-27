---
name: "2022_PINNs_RL"
layout: single
title:  "Reinforcement Learning and Orbit-Discovery Enhanced by Small-Body Physics-Informed Neural Network Gravity Models"
date:   2022-01-17 18:22:51 -0600
collection: research
tags: conference, ongoing

header:
  teaser: assets/Agent_Orbits.jpg

---

<figure style="width: 400px" class="align-right">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/Agent_Orbits_original.jpg" alt=""> 
  <figcaption>The fidelity of the agent's environment has considerable impact on the policy learned. The PINN gravity model supplies high-fidelity dynamics which allows for the continued safe operation of an asteroid orbiting spacecraft. </figcaption>
</figure> 

The increasing rise of spacecraft missions sent to small-bodies like asteroids and comets demands that energy be put towards research in reliable spacecraft autonomy. These environments are notorious for their complex dynamics which can quickly send spacecraft off on hyperbolic orbits, or worse, directly into the body. 

To account for these complex gravitational environments, dynamicists must turn to high-fidelity gravity models like the polyhedral gravity model. While the polyhedral model provides an accurate approximation of the field, it is extremely expensive to evaluate -- often requiring millions of operations to evaluate the acceleration at a single field point. 

This becomes an inconvenience for dynamicists who need to propagate an orbit; however, in reinforcement learning, this inconvenience evolves into an entirely insurmountable problem. 

Reinforcement learning requires an agent to iteratively interact with an environment many, __many__ times before the agent is able to learn a policy which produces a desired behavior. If that environment is too expensive to simulate (such as an asteroid gravity field modeled using the polyhedral model), this intrinsically limits the number of those interactions -- and in turn -- the quality of policy learned by the agent. 

This paper proposes the use of the physics-informed neural network gravity model (PINN-GM) as an alternative to the polyhedral gravity model for reinforcement learning applications. By transitioning to this equally high-fidelity, but orders-of-magnitude faster model, we demonstrate that agents can learn considerably more complex and desireable policies.   

{% include video id="99yamP6fMmI" provider="youtube" %}

[Download the paper](https://hanspeterschaub.info/Papers/Martin2022.pdf){: .btn .btn--primary .btn--large}
