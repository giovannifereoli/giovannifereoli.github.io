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
  - image_path: assets/gravnn_logo.png
    # image_caption: "Neat caption"
    alt: "placeholder image 1"
    title: "GravNN"
    excerpt: "Package for training Physics-Informed Neural Network Gravity Models"
    btn_label: "Read More"
    btn_class: "btn--inverse"
    url: /software/gravnn
    
  - image_path: /assets/Custom_Profile.jpeg
    # image_caption: "Neat caption"
    alt: "placeholder image 1"
    title: "StatOD"
    excerpt: "Statistical Orbit Determination"
    btn_label: "Read More"
    btn_class: "btn--inverse"
    url: /software/stat-od
---

Please find all open-source software packages built for this research below.

<!-- {% include gallery %} -->
{% include feature_row %}