---
author: B4night
title: What have I done with my new macbook
tags: []
categories:
  - Config new device
  - What have I done with my new macbook.md
date: 2024-02-12
---

# What have I done with my new macbook

I bought a MacBook to try macOS. It's a UNIX-like system, just like Linux. I mainly use `Fedora38` recently and it's time to try another branch of Operating Systems.

# App installed

I configured this device for the whole day and I downloaded below apps.

*   Chrome: nothing else to say
*   NetEaseMysic: Listen to music
*   WeChat: For communication
*   Clash Verge: People from China can understand. ToT
*   Typora: I downloaded version `0.11.18` . It's the version free of charge.
*   HotKey: I am familiar with using `ctrl+cmd+T` to invoke terminal. But it's complex to set keyboard shortcuts on Mac. So I use this to implement that.
*   Visual Studio Code: To write code.

Below are CLI tools I installed

*   HomeBrew: In order to use `brew` to install software.
*   Upgit: To upload my images to server.
*   gh: Github CLI tool
*   Oh my zsh: To beautify the terminal
    *   Syntax Highlight plugin
    *   Auto suggestion plugin
*   node: Recently I write some typescript and javascript
*   wget: Get resources
*   git: Can't without it.
*   gnu-sed: This pitfall shows when I uploaded this post. So I think I have to open a section for it.

# gnu-sed

**Caution**: Command `sed` is **different** on macOS and Linux.

I write a shell script to automatically upload my posts. It works well on `Fedora38` and fails on macOS.

The solution is simple: install `gnu-sed` and use `gsed` instead of using `sed`.

So I modified my script to work on both platforms.

# What have I configured?

## Clash Verge + Chrome

I configured this two to visit google. I have to complain that English forums' quality is far better than Chinese forums. If I give the specific keywords, the answers are really helpful.

## Terminal

The macbook's system is `Ventura 13.6.4`, so the default shell environment is `zsh`. I installed `On-My-Zsh` to beautify terminal. Also, I downloaded 2 plugins, which are essential.

*   `zsh-syntax-highlighting`: Help a lot when I type some wrong commands.
*   `zsh-autosuggestions`: Remenber the commands I typed. Save numerous time.

## Joplin Typora and Upgit

I use `Joplin` to store all my notes and I synchronize them with the help of `Tencent COS`.

I downloaded `Typora 0.11.18` from GitHub and this version satisfy my needs. I choose uploading all the images inserted to server, and that needs the help of Upgit.

Upgit is a lightweight software used to upload images. I configured it to upload images to my `Tencent COS Bucket`. I used that as a img-bed.

# Ending...

That's pretty almost what I have done with this new laptop. MacOS impressed my a lot. I think I am converting from Linux-User to macOS-User XD.
