---
author: B4night
title: Using ssh through SOCKS5 proxy.
tags: []
categories:
  - Useful Skills
  - Using ssh through SOCKS5 proxy.md
date: 2024-02-05
---

# Using ssh through SOCKS5 proxy.

Below are operations on Fedora39.

1.  Download `netcat` . In Ubuntu-like system, `nc` is needed.
2.  Edit `~/.ssh/config`
3.  Add lines like:

<!---->

    Host github.com
       ProxyCommand netcat -X 5 -x 127.0.0.1:7890 %h %p

In essence, this configuration tells SSH that whenever you attempt to connect to `github.com`, it should use `netcat` to route the connection through a SOCKS5 proxy server running on your local machine at port 7890. This setup is commonly used when direct connections are not possible or when you need to route traffic through a specific network path, such as for privacy reasons or to bypass network restrictions.

Now, the ssh uses proxy to connect with `github.com` .

Below are operations on win system.

1.  Download Nmap
2.  open `.ssh/config`
3.  Add lines like

<!---->

    Host github.com
      ProxyCommand "C:\\Program Files (x86)\\Nmap\\ncat.exe" --proxy 127.0.0.1:7890 --proxy-type socks5 %h %p

4\. Done!
