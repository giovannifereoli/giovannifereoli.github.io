---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: "Software"
layout: single
author_profile: true

permalink: /software/
collection: software

entries_layout: grid
classes: 
    - wide
    - landing

feature_row:
  - image_path: assets/ARPOD.jpg
    # image_caption: "Neat caption"
    alt: "placeholder image 1"
    title: "Meta-RL for spacecraft proximity operations G&C"
    excerpt: "Code from my MS thesis project developed at Professor Hanspeter Schaub's Autonomous Vehicle Systems (AVS) laboratory."
    btn_label: "Read More"
    btn_class: "btn--inverse"
    url: /software/metarl-arpod
    
  - image_path: assets/scarabaeus_logo_dark.png
    alt: "placeholder image 2"
    title: "Scarabaeus: Open-Source Navigation Toolkit"
    excerpt: "An open-source software package for spacecraft orbit determination and navigation, developed at the ORCCA Lab (CU Boulder) in collaboration with the Emirates Mission to the Asteroid Belt."
    btn_label: "Explore"
    btn_class: "btn--inverse"
    url: /software/scarabaeus
---

Please find all open-source software packages built for this research below.

<!-- {% include gallery %} -->
{% include feature_row %}
