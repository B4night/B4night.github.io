---
author: B4night
title: Vue Download failure about Ipv4
tags: []
categories:
  - Useful Skills
  - Vue Download failure about Ipv4 .md
date: 2024-02-05
---

# Vue Download failure about Ipv4

Today I ran into fail when downloading vue using command `npm install -g @vue/cli` , after changing several mirror registry, the fail was still there.

So I found out that some mirror websites can only be accessed by ipv4, so that we need to choose ipv4 first when accessing these registries.

using command like below:

`node --dns-result-order=ipv4first /usr/bin/npm install -g @vue/cli` to download.
