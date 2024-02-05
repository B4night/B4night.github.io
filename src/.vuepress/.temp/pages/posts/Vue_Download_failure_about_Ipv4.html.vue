<template><div><h1 id="vue-download-failure-about-ipv4" tabindex="-1"><a class="header-anchor" href="#vue-download-failure-about-ipv4"><span>Vue Download failure about Ipv4</span></a></h1>
<p>Today I ran into fail when downloading vue using command <code v-pre>npm install -g @vue/cli</code> , after changing several mirror registry, the fail was still there.</p>
<p>So I found out that some mirror websites can only be accessed by ipv4, so that we need to choose ipv4 first when accessing these registries.</p>
<p>using command like below:</p>
<p><code v-pre>node --dns-result-order=ipv4first /usr/bin/npm install -g @vue/cli</code> to download.</p>
</div></template>


