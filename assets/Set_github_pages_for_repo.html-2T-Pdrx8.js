import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as i,c,b as n,d as e,e as s,a as p}from"./app-yx1WRGhx.js";const l={},r=n("h1",{id:"set-github-pages-for-repo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#set-github-pages-for-repo"},[n("span",null,"Set github pages for repo")])],-1),u={href:"https://github.com/B4night/portfolio",target:"_blank",rel:"noopener noreferrer"},d=p(`<h1 id="_1-create-a-repo-and-upload-resource-file" tabindex="-1"><a class="header-anchor" href="#_1-create-a-repo-and-upload-resource-file"><span>1. Create a repo and upload resource file</span></a></h1><p>First of all, create a repo or fork a repo and edit the file you want to show.</p><p>For example, edit <code>index.html</code> to present what you want to show.</p><h1 id="_2-config-github-action-and-create-branch-gh-pages" tabindex="-1"><a class="header-anchor" href="#_2-config-github-action-and-create-branch-gh-pages"><span>2. Config github action and create branch <code>gh-pages</code></span></a></h1><p>The common practice is that create a branch <code>gh-pages</code> to store static resources which are necessary for a website.</p><p>In order to automatically copy files from branch <code>main</code> to branch <code>gh-pages</code>, we have to config github action.</p><p>For example, my github action file is <code>.github/workflows/deploy-gh-pages.yml</code>.</p><p>The content is below:</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main <span class="token comment"># 确保这里是你使用的默认分支名称</span>

<span class="token key atrule">permissions</span><span class="token punctuation">:</span>
  <span class="token key atrule">contents</span><span class="token punctuation">:</span> write

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>
          <span class="token comment"># if your docs needs submodules, uncomment the following line</span>
          <span class="token comment"># submodules: true</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy Docs
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># This is the branch where the docs are deployed to</span>
          <span class="token key atrule">branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token key atrule">folder</span><span class="token punctuation">:</span> src/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Every time I push changes to <code>main</code>, this file will automatically execute and copy all the files in the <code>src</code> directory to <code>gh-pages</code>. The files in <code>src</code> directory are necessary to build a website.</p><h1 id="_3-change-setting-to-turn-on-github-pages" tabindex="-1"><a class="header-anchor" href="#_3-change-setting-to-turn-on-github-pages"><span>3. Change Setting to turn on github pages</span></a></h1><p>Cursor to <code>Settings</code> in the repo main page and click on <code>pages</code> on the sidebar. Choose to deploy from branch <code>gh-pages</code>. Congratulations, you just deploy a website.</p><h1 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion"><span>Conclusion</span></a></h1>`,13),h={href:"https://b4night.github.io/portfolio/",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"star",-1),k=n("p",null,"Thank you for watching~",-1);function m(g,v){const a=o("ExternalLinkIcon");return i(),c("div",null,[r,n("p",null,[e("Recently I uploaded my portfolio to github repo "),n("a",u,[e("portfolio"),s(a)]),e(" and deployed github pages for it. So today I am gonna talk about what to be done to deploy github pages for a github repo.")]),d,n("p",null,[e("Deploying a website with the help of github is easy and straightforward. By the way, if you like my "),n("a",h,[e("portfolio"),s(a)]),e(", don't hesitate to "),b,e(" it XD.")]),k])}const _=t(l,[["render",m],["__file","Set_github_pages_for_repo.html.vue"]]);export{_ as default};
