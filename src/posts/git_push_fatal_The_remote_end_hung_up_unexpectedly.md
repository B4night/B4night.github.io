---
author: B4night
title: "git push fatal: The remote end hung up unexpectedly"
tags: []
categories:
  - Useful Skills
  - git push fatal! The remote end hung up unexpectedly.md
date: 2024-02-05
---

# git push fatal: The remote end hung up unexpectedly

stackoverflow link: <https://stackoverflow.com/questions/15240815/git-fatal-the-remote-end-hung-up-unexpectedly>

This usually happens when the files we push exceeds buffer size. So we can manually change postBuffer size.

    git config http.postBuffer 524288000
    git config ssh.postBuffer 524288000
