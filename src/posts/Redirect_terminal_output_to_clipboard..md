---
author: B4night
title: Redirect terminal output to clipboard.
tags: []
categories:
  - Useful Skills
  - Redirect terminal output to clipboard.md
date: 2024-02-05
---

# Redirect terminal output to clipboard.

This post is about using `xclip` command to redirect the output of a command to clipboard.

1.  install `xclip`
2.  use command `cat output | xclip -selection clipboard` to redirect the flow
3.  (Optional) Set an alias.\
    e.g. `alias clip=”xclip -selection clipboard”`
4.  Remember that the alias needs to be added to `~/.bashrc` to take effect permanently.
