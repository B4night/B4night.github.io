---
author: B4night
date: 2024-02-05
title: "Useful script sharing: easy git push"
tags: []
categories:
  - Useful Skills
  - Useful script sharing! easy git push.md
---

# Useful script sharing: easy git push

When dealing with github repositories, it’s often the case that we should use `git add .; git commit -s -m ""; git push` to push our changes.

So that I am gonna share a simple shell script that could do some simple git operations.

    acp() {
        if [ ! $# -eq 1 ]; then
            echo "Invalid number of arguments. Usage: acp \"commit message\""
            return 1
        fi
        git add .
        git commit -s -m "$1"
        git push
    }

Just add it to `~/.bashrc` and source it.
