<template><div><h1 id="open-folder-at-terminal-linux" tabindex="-1"><a class="header-anchor" href="#open-folder-at-terminal-linux"><span>Open folder at terminal. Linux</span></a></h1>
<p>The commend we need to use today is <code v-pre>xdg-open</code> .</p>
<p>Below is a brief description:</p>
<blockquote>
<p><strong>DESCRIPTION</strong><br>
xdg-open opens a file or URL in the user’s preferred application. If a URL is provided the URL will be opened in the user’s preferred web browser. If a file is provided the file will be opened in the preferred<br>
application for files of that type. xdg-open supports file, ftp, http and https URLs.\ <br/>xdg-open is for use inside a desktop session only. It is not recommended to use xdg-open as root.</p>
</blockquote>
<p>This command is used to open files or URLs in default ways. So that we can use it to open folder at the terminal.</p>
<p>e.g.: <code v-pre>xdg-open .</code> , that'll open the current working directory in folder view.</p>
<p>What’s more, we can set alias for <code v-pre>xdg-open</code> because it’s too long and hard to type.</p>
<p>e.g.: <code v-pre>alias fld=xdg-open</code></p>
</div></template>


