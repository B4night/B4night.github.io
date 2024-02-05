---
author: B4night
date: 2024-02-05
title: Git switch branches with modified files
tags: []
categories:
  - Useful Skills
  - Git switch branches with modified files.md
---

# Git switch branches with modified files

I have to switch between different branches to develop, so that there is a problem that some times I don’t want to use `git add` to track modified too early and I have to switch another branch.

So the error comes out: another branch would have the same modified files.

E.g.: Currently I am at branch A, with modified files that are not added yet. I have to switch to branch B.

Solution:

1.  `git stash .`
2.  `git checkout branch-B`
3.  Edit and push
4.  `git checkout branch-A`
5.  `git stash apply`

With the help of `git stash` and `git stash apply` , I can solve the problem above.
