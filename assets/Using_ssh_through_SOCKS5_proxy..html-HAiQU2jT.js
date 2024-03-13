const e=JSON.parse('{"key":"v-45f803a1","path":"/posts/Using_ssh_through_SOCKS5_proxy..html","title":"Using ssh through SOCKS5 proxy.","lang":"en-US","frontmatter":{"author":"B4night","date":"2024-02-05T00:00:00.000Z","title":"Using ssh through SOCKS5 proxy.","tags":[],"categories":["Useful Skills"],"description":"Using ssh through SOCKS5 proxy. Below are operations on Fedora39. Download netcat . In Ubuntu-like system, nc is needed. Edit ~/.ssh/config Add lines like: In essence, this conf...","head":[["meta",{"property":"og:url","content":"https://b4night.github.io/posts/Using_ssh_through_SOCKS5_proxy..html"}],["meta",{"property":"og:site_name","content":"B4night"}],["meta",{"property":"og:title","content":"Using ssh through SOCKS5 proxy."}],["meta",{"property":"og:description","content":"Using ssh through SOCKS5 proxy. Below are operations on Fedora39. Download netcat . In Ubuntu-like system, nc is needed. Edit ~/.ssh/config Add lines like: In essence, this conf..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-13T12:08:55.000Z"}],["meta",{"property":"article:author","content":"B4night"}],["meta",{"property":"article:published_time","content":"2024-02-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-13T12:08:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Using ssh through SOCKS5 proxy.\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-13T12:08:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"B4night\\"}]}"]]},"headers":[],"git":{"createdTime":1707116038000,"updatedTime":1710331735000,"contributors":[{"name":"B4night","email":"superchaovaction@163.com","commits":3},{"name":"b4night","email":"superchaovacation@gmail.com","commits":2}]},"readingTime":{"minutes":0.56,"words":169},"filePathRelative":"posts/Using_ssh_through_SOCKS5_proxy..md","localizedDate":"February 5, 2024","excerpt":"\\n<p>Below are operations on Fedora39.</p>\\n<ol>\\n<li>Download <code>netcat</code> . In Ubuntu-like system, <code>nc</code> is needed.</li>\\n<li>Edit <code>~/.ssh/config</code></li>\\n<li>Add lines like:</li>\\n</ol>\\n<!---->\\n<pre><code>Host github.com\\n   ProxyCommand netcat -X 5 -x 127.0.0.1:7890 %h %p\\n</code></pre>","autoDesc":true}');export{e as data};
