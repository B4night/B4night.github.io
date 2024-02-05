---
author: B4night
date: 2024-02-05
title: Open folder at terminal. Linux
tags: []
categories:
  - Useful Skills
---

The commend we need to use today is `xdg-open` .

Below is a brief description:

> **DESCRIPTION**\
> xdg-open opens a file or URL in the user’s preferred application. If a URL is provided the URL will be opened in the user’s preferred web browser. If a file is provided the file will be opened in the preferred\
> application for files of that type. xdg-open supports file, ftp, http and https URLs.\ <br/>xdg-open is for use inside a desktop session only. It is not recommended to use xdg-open as root.

This command is used to open files or URLs in default ways. So that we can use it to open folder at the terminal.

e.g.: `xdg-open .` , that'll open the current working directory in folder view.

What’s more, we can set alias for `xdg-open` because it’s too long and hard to type.

e.g.: `alias fld=xdg-open`
