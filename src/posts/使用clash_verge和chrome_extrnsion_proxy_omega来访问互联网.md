---
author: B4night
title: 使用clash verge和chrome extrnsion proxy omega来访问互联网
tags: []
categories:
  - Useful Skills
  - 使用clash verge和chrome extrnsion proxy omega来访问互联网.md
date: 2024-02-09
---

# 使用clash verge和chrome extrnsion proxy omega来访问互联网

这半年来, 我已经帮助好几个朋友配置clash verge和chrome, 以便快捷的访问互联网. 本篇博客记录一下所需步骤, 以后可以直接转发给有需要的朋友.

## 1. 下载clash verge

clash verge的github链接是: <https://github.com/zzzgydi/clash-verge>

由于某些原因, 现在这个repo已经archive了, 可以从`Releases`里面下载所需要的版本.

![Release List](https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240209_1707466514.png)

简单介绍一下这些版本:

如果你是小白, 而且电脑系统是windows, 那就下载`Clash.Verge_1.3.8_x64-setup.exe`

如果是macos, 则下载`Clash.Verge_1.3.8_aarch64.dmg`

如果是linux, 下载`clash.verge_1.3.8_amd64.AppImage`

下载完成后就是安装, 这一部分省略

## 2. 配置clash

首先确保你拥有`URL`, 这里就不详细说怎么获得了.

然后打开clash, 在`Profiles`这个界面输入`URL`, 然后点击`import`, 就可以获得你的订阅.

在`Proxies`这部分点击global, 然后选个稳定的节点.

![Main page](https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240209_1707466826.png)

`Settings`部分小白可以按照我的配置, 专业人士可以忽略

![Setting section](https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240209_1707466885.png)

## 3. Chrome安装Proxy SwichyOmega实现无感代理

`Proxy SwichyOmega`是chrome的一个插件, 安装地址: <https://chromewebstore.google.com/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif>

其他浏览器, 比如edge也有对应的插件

安装完成插件后进入选项, 可以看到如下界面
![Option page](https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240209_1707467081.png)

### LocalProxy配置

在左侧栏中, `LocalProxy`处是如下配置的, 注意port部分不要写错

![LocalProxy config](https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240209_1707467186.png)

### auto switch配置

![auto switch config](https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240209_1707467240.png)

如果有的网站你想通过节点访问, 但是默认识别的是不使用节点访问, 那样的话就需要配置这个界面

比如说你想访问`www.abc.com`, 你需要点击`Add condition`, 然后输入`*abc*`, 那么下次就会使用节点访问

### 手动控制访问策略

添加在auto switch里面的网站会自动识别, 然后通过节点访问.

右上角的插件的icon是这样, 则说明没有使用节点访问

![not using proxy](https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240209_1707467404.png)

则点击, 切换成这样, 那么所有的网站都会通过节点访问

![using proxy](https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240209_1707467435.png)

### Proxy SwichyOmega的配置

如果有需要导入我的配置的, 请联系油箱`superchaovacation@gmail.com`
