---
author: B4night
date: 2024-02-05
title: Fedora set display scale 150%(gnome)
tags: []
categories:
  - Useful Skills
  - Fedora set display scale 150%(gnome).md
---

# Fedora set display scale 150%(gnome)

The default display options are `100%, 200%, 300%`. It’s awkward because some people might want to customize the display scale.

There’s an easy way to customize the display scale: with the help of `gnome-tweaks` .

1.  `dnf search gnome-tweaks`
2.  find the right version and `sudo dnf install`
3.  open `tweaks`
4.  At the `font` section, there is a `Scaling Factor` button. Set `1.5` to set the display scale to `150%`.
5.  (Caution), set the display scale `100%` before changing the `Scaling Factor` in step 4.

 

![image-20240205133002541](https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240205_1707111002.png)
