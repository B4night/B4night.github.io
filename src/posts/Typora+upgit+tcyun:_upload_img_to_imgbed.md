---
author: B4night
date: 2024-02-05
title: "Typora+upgit+tcyun: upload img to imgbed"
tags: []
categories:
  - Useful Skills
---

# Typora+upgit+tcyun: upload img to imgbed

The image we insert to typora can be uploaded to tcyun(or other server) via upgit. All we need to do is several operations.

1.  Set typora options

![image-20240205132414965](https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240205_1707110655.png)

2.  download upgit

Download link: <https://github.com/pluveto/upgit/releases>

3.  edit upgit config

Edit `~/.upgit.config.toml`

config template: <https://github.com/pluveto/upgit/blob/main/config.sample.toml>

My config is below:

    # UPGIT Config

    default_uploader = "qcloudcos"

    rename = "{year}/{month}/upgit_{year}{month}{day}_{unix_ts}{ext}"

    # Qcloudcos Uploader
    [uploaders.qcloudcos]
    host = "xxx.cos.ap-nanjing.myqcloud.com"
    secret_id = "xxx"
    secret_key = "xxx"

4\.  Enter upgit path in typora and test

![image-20240205132439704](https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240205_1707110679.png)

![image-20240205132449714](https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240205_1707110689.png)
