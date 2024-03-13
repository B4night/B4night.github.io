---
author: B4night
date: 2024-02-20
title: Create WSL2 with distro fedora
tags: []
categories:
  - Useful Skills
---

# Create WSL2 with distro fedora

Reference: <https://www.linuxfordevices.com/tutorials/linux/install-fedora-on-windows>

# Enable wsl2 on windows

Search `Turn Windows Features on or off` and turn on `Windows Subsystem for Linux`

Then, use command `wsl --set-default-version 2` to set WSL version to 2

# Download fedora tarball and get rootfs

You can find different kind of tarball here: <https://kojipkgs.fedoraproject.org/packages/Fedora-Container-Base>

Download the right tar file and extract it. Then you can find a file `layer.tar`. This is the rootfs file we need.

Then, rename the file to something like `fedora-39-rootfs.tar`

# Install Fedora

1.  Create a directory to store this distro: Execute command `mkdir $HOME\wsl\fedora`
2.  Execute command `wsl --import fedora $HOME\wsl\fedora path\to\fedora-39-rootfs.tar` to install Fedora

You can use `wsl -l -v` to see all of the distros.

# Some configuration

1.  Upgrade all of the packages: `sudo` `dnf update`
2.  Fedora is automatically logged in as fedora, we need to create a user

```shell
# Download necessary packages
$ sudo dnf install -y util-linux passwd cracklib-dicts

# add user
useradd -G wheel <username>

# config password
passwd <username>
```

Now you can use `wsl` `-d` `fedora` `-u` <`username>` to login as user. To log in automatically, you can execute this in the wsl
`printf "\n[user]\ndefault = <username>\n" | sudo tee -a /etc/wsl.conf`

# Download  `man`  page

This distro doesn't have `man` command and we need to config it.

Reference: <https://stackoverflow.com/questions/64205680/cant-find-any-man-pages-in-fedora-docker-image>

1.  Check the last line of file `etc/dnf/dnf.conf`
2.  If it's `tsflags=nodocs`, we can use `dnf install -y man-pages --setopt='tsflags='` to download man-pages.
