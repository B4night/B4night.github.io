<template><div><h1 id="git-push-fatal-the-remote-end-hung-up-unexpectedly" tabindex="-1"><a class="header-anchor" href="#git-push-fatal-the-remote-end-hung-up-unexpectedly"><span>git push fatal: The remote end hung up unexpectedly</span></a></h1>
<p>stackoverflow link: <a href="https://stackoverflow.com/questions/15240815/git-fatal-the-remote-end-hung-up-unexpectedly" target="_blank" rel="noopener noreferrer">https://stackoverflow.com/questions/15240815/git-fatal-the-remote-end-hung-up-unexpectedly<ExternalLinkIcon/></a></p>
<p>This usually happens when the files we push exceeds buffer size. So we can manually change postBuffer size.</p>
<pre><code>git config http.postBuffer 524288000
git config ssh.postBuffer 524288000
</code></pre>
</div></template>


