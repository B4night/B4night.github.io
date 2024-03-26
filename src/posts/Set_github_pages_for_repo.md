---
author: B4night
title: Set github pages for repo
tags: []
categories:
  - Useful Skills
  - Set github pages for repo.md
date: 2024-02-14
---

# Set github pages for repo

Recently I uploaded my portfolio to github repo [portfolio](https://github.com/B4night/portfolio) and deployed github pages for it. So today I am gonna talk about what to be done to deploy github pages for a github repo.

# 1. Create a repo and upload resource file

First of all, create a repo or fork a repo and edit the file you want to show.

For example, edit `index.html` to present what you want to show.

# 2. Config github action and create branch `gh-pages`

The common practice is that create a branch `gh-pages` to store static resources which are necessary for a website.

In order to automatically copy files from branch `main` to branch `gh-pages`, we have to config github action.

For example, my github action file is `.github/workflows/deploy-gh-pages.yml`.

The content is below:

```yml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main # 确保这里是你使用的默认分支名称

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
          # if your docs needs submodules, uncomment the following line
          # submodules: true

      - name: Deploy Docs
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # This is the branch where the docs are deployed to
          branch: gh-pages
          folder: src/
```

Every time I push changes to `main`, this file will automatically execute  and copy all the files in the `src` directory to `gh-pages`. The files in `src` directory are necessary to build a website.

# 3. Change Setting to turn on github pages

Cursor to `Settings` in the repo main page and click on `pages` on the sidebar. Choose to deploy from branch `gh-pages`. Congratulations, you just deploy a website.

# Conclusion

Deploying a website with the help of github is easy and straightforward. By the way, if you like my [portfolio](https://b4night.github.io/portfolio/), don't hesitate to `star` it XD.

Thank you for watching\~
