import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c,f as e,a as t,b as o}from"./app-8NblJuaA.js";const r={},i=t('<h1 id="using-ssh-through-socks5-proxy" tabindex="-1"><a class="header-anchor" href="#using-ssh-through-socks5-proxy"><span>Using ssh through SOCKS5 proxy.</span></a></h1><p>Below are operations on Fedora39.</p><ol><li>Download <code>netcat</code> . In Ubuntu-like system, <code>nc</code> is needed.</li><li>Edit <code>~/.ssh/config</code></li><li>Add lines like:</li></ol>',3),a=t(`<pre><code>Host github.com
   ProxyCommand netcat -X 5 -x 127.0.0.1:7890 %h %p
</code></pre><p>In essence, this configuration tells SSH that whenever you attempt to connect to <code>github.com</code>, it should use <code>netcat</code> to route the connection through a SOCKS5 proxy server running on your local machine at port 7890. This setup is commonly used when direct connections are not possible or when you need to route traffic through a specific network path, such as for privacy reasons or to bypass network restrictions.</p><p>Now, the ssh uses proxy to connect with <code>github.com</code> .</p><p>Below are operations on win system.</p><ol><li>Download Nmap</li><li>open <code>.ssh/config</code></li><li>Add lines like</li></ol>`,5),h=o("pre",null,[o("code",null,`Host github.com
  ProxyCommand "C:\\\\Program Files (x86)\\\\Nmap\\\\ncat.exe" --proxy 127.0.0.1:7890 --proxy-type socks5 %h %p
`)],-1),l=o("p",null,"4. Done!",-1);function d(p,u){return n(),c("div",null,[i,e(""),a,e(""),h,l])}const g=s(r,[["render",d],["__file","Using_ssh_through_SOCKS5_proxy..html.vue"]]);export{g as default};
