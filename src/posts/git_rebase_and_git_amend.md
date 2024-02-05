---
author: B4night
date: 2024-02-05
title: git rebase and git amend
tags: []
categories:
  - Useful Skills
---

# git rebase and git amend

The image we insert to typora can be uploaded to tcyun(or other server) via upgit. All we need to do is several operations.

1.  Set typora options

<img alt="" class="bg km ms c" width="700" height="257" loading="lazy" role="presentation" src="https://miro.medium.com/v2/resize:fit:984/1*UuIaQuAngJHnLWTNmOWZFw.png" style="box-sizing: inherit; vertical-align: middle; background-color: #ffffff; width: 680px; max-width: 100%; height: auto;">

2\. download upgit

Download link: <ins><https://github.com/pluveto/upgit/releases></ins>

3\. edit upgit config

Edit `~/.upgit.config.toml`

config template: <ins><https://github.com/pluveto/upgit/blob/main/config.sample.toml></ins>

My config is below:

    # UPGIT Config
    default_uploader = "qcloudcos"
    rename = "{year}/{month}/upgit_{year}{month}{day}_{unix_ts}{ext}"
    # Qcloudcos Uploader
    [uploaders.qcloudcos]
    host = "xxx.cos.ap-nanjing.myqcloud.com"
    secret_id = "xxx"
    secret_key = "xxx"

4\. Enter upgit path in typora and test

<img alt="" class="bg km ms c" width="700" height="257" loading="lazy" role="presentation" src="https://miro.medium.com/v2/resize:fit:984/1*auyE21JS0Thz3TNhKSjPQQ.png" style="box-sizing: inherit; vertical-align: middle; background-color: #ffffff; width: 680px; max-width: 100%; height: auto;">

<img alt="" class="bg km ms c" width="700" height="613" loading="lazy" role="presentation" src="https://miro.medium.com/v2/resize:fit:984/1*W9Z01VIXQDRfKarMNElKyQ.png" style="box-sizing: inherit; vertical-align: middle; background-color: #ffffff; width: 680px; max-width: 100%; height: auto;">

The image we insert to typora can be uploaded to tcyun(or other server) via upgit. All we need to do is several operations.

1.  Set typora options

<img alt="" class="bg km ms c" width="700" height="257" loading="lazy" role="presentation" src="https://miro.medium.com/v2/resize:fit:984/1*UuIaQuAngJHnLWTNmOWZFw.png" style="box-sizing: inherit; vertical-align: middle; background-color: #ffffff; width: 680px; max-width: 100%; height: auto;">

2\. download upgit

Download link: <ins><https://github.com/pluveto/upgit/releases></ins>

3\. edit upgit config

Edit `~/.upgit.config.toml`

config template: <ins><https://github.com/pluveto/upgit/blob/main/config.sample.toml></ins>

My config is below:

    # UPGIT Config
    default_uploader = "qcloudcos"
    rename = "{year}/{month}/upgit_{year}{month}{day}_{unix_ts}{ext}"
    # Qcloudcos Uploader
    [uploaders.qcloudcos]
    host = "xxx.cos.ap-nanjing.myqcloud.com"
    secret_id = "xxx"
    secret_key = "xxx"

4\. Enter upgit path in typora and test

<img alt="" class="bg km ms c" width="700" height="257" loading="lazy" role="presentation" src="https://miro.medium.com/v2/resize:fit:984/1*auyE21JS0Thz3TNhKSjPQQ.png" style="box-sizing: inherit; vertical-align: middle; background-color: #ffffff; width: 680px; max-width: 100%; height: auto;">

<img alt="" class="bg km ms c" width="700" height="613" loading="lazy" role="presentation" src="https://miro.medium.com/v2/resize:fit:984/1*W9Z01VIXQDRfKarMNElKyQ.png" style="box-sizing: inherit; vertical-align: middle; background-color: #ffffff; width: 680px; max-width: 100%; height: auto;">

# Git

Today I ran into a problem:

1.  At the code review, I have to edit file file\_a
2.  I have 2 commits, commit\_a and commit\_b. commit\_b was committed later than commit\_a
3.  Each commit contains edits on one file
4.  file\_a is stores in the commit\_a.

Now I have a easier but complex solution:

    git reset HEAD~2
    ​
    # then I edit the file_a and commit 2 times.

But now I am gonna introduce another solutoin.

# git rebase, git amend

`git checkout` to the target branch and then use follow commands

# git rebase -i HEAD\~2

After executing this command, the output would be:

    pick fafa10141f commit_a
    pick de904ffd3f commit_b
    ​
    # Rebase f5559105a2..de904ffd3f onto f5559105a2 (2 commands)
    # 
    ​
    """ explain
    f5559105a2..72b0844c76:
    ​
    This range identifies the commits involved in the rebase operation.
    The first part, f5559105a2, represents the commit just before the first commit you are rebasing. In other words, it is not included in the rebase itself but serves as a reference point.
    The second part, 72b0844c76, is the last commit you are rebasing.
    So, f5559105a2..72b0844c76 includes all commits from right after f5559105a2 up to and including 72b0844c76.
    onto f5559105a2:
    ​
    The onto part indicates the base commit onto which the selected commits will be applied.
    In this context, f5559105a2 is the base commit. All commits in the range f5559105a2..72b0844c76 are to be reapplied starting from this base commit.
    """
    ​
    # Commands:
    # p, pick <commit> = use commit
    # r, reword <commit> = use commit, but edit the commit message
    # e, edit <commit> = use commit, but stop for amending
    # s, squash <commit> = use commit, but meld into previous commit
    # f, fixup [-C | -c] <commit> = like "squash" but keep only the previous
    #                    commit's log message, unless -C is used, in which case
    #                    keep only this commit's message; -c is same as -C but
    #                    opens the editor
    # x, exec <command> = run command (the rest of the line) using shell
    # b, break = stop here (continue rebase later with 'git rebase --continue')
    # d, drop <commit> = remove commit
    # l, label <label> = label current HEAD with a name
    # t, reset <label> = reset HEAD to a label
    # m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
    #         create a merge commit using the original merge commit's
    #         message (or the oneline, if no original merge commit was
    #         specified); use -c <commit> to reword the commit message
    # u, update-ref <ref> = track a placeholder for the <ref> to be updated
    #                       to this position in the new commits. The <ref> is
    #                       updated at the end of the rebase
    #
    # These lines can be re-ordered; they are executed from top to bottom.
    #
    # If you remove a line here THAT COMMIT WILL BE LOST.
    #
    # However, if you remove everything, the rebase will be aborted.
    #

WE have to edit the first 2 lines into:

    e fafa10141f commit_a
    pick de904ffd3f commit_b
    ​
    # e means edit

Then we store this file and now we are at a temporary branch.

# Edit the file

# `git add .`

# `git commit --amend`

This is used to modify the most recent commit.

Now that I have commits stored in the git repository, I have to apply more edits on it. So that after editing, I have to use `git add .` to add edited files. Then I have to use `git commit --amend` to add my changes to the stored commit.

# `git rebase --continue`

This command means the `rebase` procedure is done and we are switched from a temporary branch to the branch which we want to change.

# `git push --force`

This will push commits to remote and then overwrite the original commits because of `--force`.
