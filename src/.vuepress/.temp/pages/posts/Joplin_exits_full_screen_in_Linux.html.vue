<template><div><h1 id="joplin-exits-full-screen-in-linux" tabindex="-1"><a class="header-anchor" href="#joplin-exits-full-screen-in-linux"><span>Joplin exits full screen in Linux</span></a></h1>
<p>Today I maximized joplin when I was using it. But when I wanted to change the options, I used <code v-pre>f11</code> to exit full screen. However, <code v-pre>f11</code> is bonded to another feature, so that I can’t use it to exit.</p>
<p>Here is the solution.</p>
<ol>
<li>Find the file <code v-pre>window-state-prod.json </code>Use the command <code v-pre>find / -name &quot;window-state-prod.json</code></li>
<li>Edit the json file and set <code v-pre>isFullScreen</code> to <code v-pre>false</code></li>
</ol>
</div></template>


