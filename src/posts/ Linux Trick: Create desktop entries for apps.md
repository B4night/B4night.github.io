---
author: B4night
date: 2024-02-05
title: "Linux Trick: Create desktop entries for apps"
tags: []
categories:
  - Useful Skills
---

System: Fedora 39 workstation

It’s always a problem for me that some apps I downloaded can not be recognized by `control` and extension `search light` . So it’s necessary to create separate entries for those unrecognized apps.

The procedures are as follows:

1.  Cursor to directory `~/.local/share/applicaions`
2.  Create `<app name>.desktop`
3.  Edit the content
4.  run command `desktop-file-validate <app name>.desktop`

The content is shown below:

    [Desktop Entry]
    Version=1.0
    Encoding=UTF-8
    Type=Application
    Name=typora
    NoDisplay=true
    Exec=typora
