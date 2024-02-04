<template><div><h1 id="tutorial" tabindex="-1"><a class="header-anchor" href="#tutorial"><span>Tutorial</span></a></h1>
<p>Official Tutorial: https://theme-hope.vuejs.press/guide/intro/intro.html#design-goals</p>
<h1 id="structure-description" tabindex="-1"><a class="header-anchor" href="#structure-description"><span>Structure description</span></a></h1>
<p><code v-pre>/.vuepress/*.ts</code> are config files. If you want to costomize your blog, try modifying these files.</p>
<p><code v-pre>/.vuepress/public</code> contains assets like icon and pictures.</p>
<p><code v-pre>/posts</code> contains md files</p>
<h1 id="markdown-file-frontmatter" tabindex="-1"><a class="header-anchor" href="#markdown-file-frontmatter"><span>Markdown file frontmatter</span></a></h1>
<p>At the top of the markdown file should be frontmatter .</p>
<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre v-pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">lang</span><span class="token punctuation">:</span> en<span class="token punctuation">-</span>US
<span class="token key atrule">title</span><span class="token punctuation">:</span> Title of this page
<span class="token key atrule">description</span><span class="token punctuation">:</span> Description of this page
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


