<template><div><h1 id="set-default-editor-in-linux" tabindex="-1"><a class="header-anchor" href="#set-default-editor-in-linux"><span>Set default editor in Linux</span></a></h1>
<p>This need to edit the config file of the shell you are using.</p>
<p>For example, I am using zsh right now so that I have to change <code v-pre>~/.zshrc</code> .</p>
<p>All I have to do is add a command at the end of the config file and then source it.</p>
<pre><code>export EDITOR=&quot;/usr/bin/vim&quot;
source ~/.zshrc
</code></pre>
</div></template>


