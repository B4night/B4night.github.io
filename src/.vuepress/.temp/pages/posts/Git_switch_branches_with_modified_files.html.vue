<template><div><h1 id="git-switch-branches-with-modified-files" tabindex="-1"><a class="header-anchor" href="#git-switch-branches-with-modified-files"><span>Git switch branches with modified files</span></a></h1>
<p>I have to switch between different branches to develop, so that there is a problem that some times I don’t want to use <code v-pre>git add</code> to track modified too early and I have to switch another branch.</p>
<p>So the error comes out: another branch would have the same modified files.</p>
<p>E.g.: Currently I am at branch A, with modified files that are not added yet. I have to switch to branch B.</p>
<p>Solution:</p>
<ol>
<li><code v-pre>git stash .</code></li>
<li><code v-pre>git checkout branch-B</code></li>
<li>Edit and push</li>
<li><code v-pre>git checkout branch-A</code></li>
<li><code v-pre>git stash apply</code></li>
</ol>
<p>With the help of <code v-pre>git stash</code> and <code v-pre>git stash apply</code> , I can solve the problem above.</p>
</div></template>


