---
author: B4night
title: Set customizable proxy for different applications
tags: []
categories:
  - Useful Skills
  - Set customizable proxy for different applications.md
date: 2024-03-26
---

# Problem

Sometimes we want application A to access internet through proxy P1, and we want application B to access via proxy P2. In order to implement this requirement, we have to use `proxifier`, which can set different proxies for different applications.

# Download

Download this tool at this website: <https://www.proxifier.com/>

# Configuration

## Set proxy server information

![image-20240326232639171](https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/image-20240326232639171.png)

Then click `add` to add proxy server information

![image-20240326232702129](https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/image-20240326232702129.png)

Enter server information

![image-20240326232721588](https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/image-20240326232721588.png)

Now we can see the server we added.

![image-20240326232750177](https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/image-20240326232750177.png)

## Set proxy rules

![image-20240326232419994](https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/image-20240326232419994.png)

Click `add` to add rules.

![image-20240326232442638](https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/image-20240326232442638.png)

Then click `browse` to choose application which we want it to access internet via customized proxy.

![image-20240326232552332](https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/image-20240326232552332.png)

Finally we can config this page like below

![image-20240326232928248](https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/image-20240326232928248.png)

Then we can find this rule in `Proxification Rules`

![image-20240326233001746](https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/image-20240326233001746.png)

If we enable this rule, then `steam.exe` will access internet via the proxy server we set before.
