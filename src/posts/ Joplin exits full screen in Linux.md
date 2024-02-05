---
author: B4night
date: 2024-02-05
title: Joplin exits full screen in Linux
tags: []
categories:
  - Useful Skills
  - Joplin exits full screen in Linux.md
---

# Joplin exits full screen in Linux

Today I maximized joplin when I was using it. But when I wanted to change the options, I used `f11` to exit full screen. However, `f11` is bonded to another feature, so that I can’t use it to exit.

Here is the solution.

1.  Find the file `window-state-prod.json `Use the command `find / -name "window-state-prod.json`
2.  Edit the json file and set `isFullScreen` to `false`
