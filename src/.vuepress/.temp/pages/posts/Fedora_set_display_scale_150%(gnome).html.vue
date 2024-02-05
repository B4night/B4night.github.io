<template><div><h1 id="fedora-set-display-scale-150-gnome" tabindex="-1"><a class="header-anchor" href="#fedora-set-display-scale-150-gnome"><span>Fedora set display scale 150%(gnome)</span></a></h1>
<p>The default display options are <code v-pre>100%, 200%, 300%</code>. It’s awkward because some people might want to customize the display scale.</p>
<p>There’s an easy way to customize the display scale: with the help of <code v-pre>gnome-tweaks</code> .</p>
<ol>
<li><code v-pre>dnf search gnome-tweaks</code></li>
<li>find the right version and <code v-pre>sudo dnf install</code></li>
<li>open <code v-pre>tweaks</code></li>
<li>At the <code v-pre>font</code> section, there is a <code v-pre>Scaling Factor</code> button. Set <code v-pre>1.5</code> to set the display scale to <code v-pre>150%</code>.</li>
<li>(Caution), set the display scale <code v-pre>100%</code> before changing the <code v-pre>Scaling Factor</code> in step 4.</li>
</ol>
<p></p>
<figure><img src="https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240205_1707111002.png" alt="image-20240205133002541" tabindex="0" loading="lazy"><figcaption>image-20240205133002541</figcaption></figure>
</div></template>


