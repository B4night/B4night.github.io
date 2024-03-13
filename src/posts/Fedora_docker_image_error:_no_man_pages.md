---
author: B4night
date: 2024-02-23
title: "Fedora docker image error: no man pages"
tags: []
categories:
  - Useful Skills
---

# Fedora docker image error: no man pages

Recently I installed fedora39 as WSL2. But today I found out that no man pages for every command.

This is the reference: <https://github.com/fedora-cloud/docker-brew-fedora/issues/9>

# Tl;DR

1.  Comment `tsflags=nodocs` in `/etc/dnf/dnf.conf`
2.  Reinstall everything: `sudo dnf reinstall $(sudo dnf list --installed | awk '{print $1}')`.

# Reasons

The default configuration: `tsflags=nodocs` will refuse to install man-pages of the commands or softwares we install. So if we remove this configuration and reinstall all of the packages, their man-pages will be installed correctly.
