<template><div><h1 id="redirect-terminal-output-to-clipboard" tabindex="-1"><a class="header-anchor" href="#redirect-terminal-output-to-clipboard"><span>Redirect terminal output to clipboard.</span></a></h1>
<p>This post is about using <code v-pre>xclip</code> command to redirect the output of a command to clipboard.</p>
<ol>
<li>install <code v-pre>xclip</code></li>
<li>use command <code v-pre>cat output | xclip -selection clipboard</code> to redirect the flow</li>
<li>(Optional) Set an alias.<br>
e.g. <code v-pre>alias clip=”xclip -selection clipboard”</code></li>
<li>Remember that the alias needs to be added to <code v-pre>~/.bashrc</code> to take effect permanently.</li>
</ol>
</div></template>


