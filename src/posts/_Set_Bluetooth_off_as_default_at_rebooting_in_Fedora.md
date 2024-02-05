---
author: B4night
date: 2024-02-05
title: Set Bluetooth off as default at rebooting in Fedora
tags: []
categories:
  - Useful Skills
  - Set Bluetooth off as default at rebooting in Fedora.md
---

# Set Bluetooth off as default at rebooting in Fedora

We need to edit the file `/etc/bluetooth/main.conf`

Find the line `AutoEnable=true` , change it to `AutoEnable=false` and voila, Bluetooth is off as default when rebooting.
