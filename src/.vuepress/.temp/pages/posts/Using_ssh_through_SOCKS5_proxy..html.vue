<template><div><h1 id="using-ssh-through-socks5-proxy" tabindex="-1"><a class="header-anchor" href="#using-ssh-through-socks5-proxy"><span>Using ssh through SOCKS5 proxy.</span></a></h1>
<p>Below are operations on Fedora39.</p>
<ol>
<li>Download <code v-pre>netcat</code> . In Ubuntu-like system, <code v-pre>nc</code> is needed.</li>
<li>Edit <code v-pre>~/.ssh/config</code></li>
<li>Add lines like:</li>
</ol>
<!---->
<pre><code>Host github.com
   ProxyCommand netcat -X 5 -x 127.0.0.1:7890 %h %p
</code></pre>
<p>In essence, this configuration tells SSH that whenever you attempt to connect to <code v-pre>github.com</code>, it should use <code v-pre>netcat</code> to route the connection through a SOCKS5 proxy server running on your local machine at port 7890. This setup is commonly used when direct connections are not possible or when you need to route traffic through a specific network path, such as for privacy reasons or to bypass network restrictions.</p>
<p>Now, the ssh uses proxy to connect with <code v-pre>github.com</code> .</p>
<p>Below are operations on win system.</p>
<ol>
<li>Download Nmap</li>
<li>open <code v-pre>.ssh/config</code></li>
<li>Add lines like</li>
</ol>
<!---->
<pre><code>Host github.com
  ProxyCommand &quot;C:\\Program Files (x86)\\Nmap\\ncat.exe&quot; --proxy 127.0.0.1:7890 --proxy-type socks5 %h %p
</code></pre>
<p>4. Done!</p>
</div></template>


