<template><div><h1 id="typora-upgit-tcyun-upload-img-to-imgbed" tabindex="-1"><a class="header-anchor" href="#typora-upgit-tcyun-upload-img-to-imgbed"><span>Typora+upgit+tcyun: upload img to imgbed</span></a></h1>
<p>The image we insert to typora can be uploaded to tcyun(or other server) via upgit. All we need to do is several operations.</p>
<ol>
<li>Set typora options</li>
</ol>
<figure><img src="https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240205_1707110655.png" alt="image-20240205132414965" tabindex="0" loading="lazy"><figcaption>image-20240205132414965</figcaption></figure>
<ol start="2">
<li>download upgit</li>
</ol>
<p>Download link: <a href="https://github.com/pluveto/upgit/releases" target="_blank" rel="noopener noreferrer">https://github.com/pluveto/upgit/releases<ExternalLinkIcon/></a></p>
<ol start="3">
<li>edit upgit config</li>
</ol>
<p>Edit <code v-pre>~/.upgit.config.toml</code></p>
<p>config template: <a href="https://github.com/pluveto/upgit/blob/main/config.sample.toml" target="_blank" rel="noopener noreferrer">https://github.com/pluveto/upgit/blob/main/config.sample.toml<ExternalLinkIcon/></a></p>
<p>My config is below:</p>
<pre><code># UPGIT Config

default_uploader = &quot;qcloudcos&quot;

rename = &quot;{year}/{month}/upgit_{year}{month}{day}_{unix_ts}{ext}&quot;

# Qcloudcos Uploader
[uploaders.qcloudcos]
host = &quot;xxx.cos.ap-nanjing.myqcloud.com&quot;
secret_id = &quot;xxx&quot;
secret_key = &quot;xxx&quot;
</code></pre>
<p>4.  Enter upgit path in typora and test</p>
<figure><img src="https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240205_1707110679.png" alt="image-20240205132439704" tabindex="0" loading="lazy"><figcaption>image-20240205132439704</figcaption></figure>
<figure><img src="https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240205_1707110689.png" alt="image-20240205132449714" tabindex="0" loading="lazy"><figcaption>image-20240205132449714</figcaption></figure>
</div></template>


