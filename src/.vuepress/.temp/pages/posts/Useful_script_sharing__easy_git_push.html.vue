<template><div><h1 id="useful-script-sharing-easy-git-push" tabindex="-1"><a class="header-anchor" href="#useful-script-sharing-easy-git-push"><span>Useful script sharing: easy git push</span></a></h1>
<p>When dealing with github repositories, it’s often the case that we should use <code v-pre>git add .; git commit -s -m &quot;&quot;; git push</code> to push our changes.</p>
<p>So that I am gonna share a simple shell script that could do some simple git operations.</p>
<pre><code>acp() {
    if [ ! $# -eq 1 ]; then
        echo &quot;Invalid number of arguments. Usage: acp \&quot;commit message\&quot;&quot;
        return 1
    fi
    git add .
    git commit -s -m &quot;$1&quot;
    git push
}
</code></pre>
<p>Just add it to <code v-pre>~/.bashrc</code> and source it.</p>
</div></template>


