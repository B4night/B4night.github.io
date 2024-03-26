import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as i,a as o}from"./app-yx1WRGhx.js";const a={},c=o('<h1 id="git-switch-branches-with-modified-files" tabindex="-1"><a class="header-anchor" href="#git-switch-branches-with-modified-files"><span>Git switch branches with modified files</span></a></h1><p>I have to switch between different branches to develop, so that there is a problem that some times I don’t want to use <code>git add</code> to track modified too early and I have to switch another branch.</p><p>So the error comes out: another branch would have the same modified files.</p><p>E.g.: Currently I am at branch A, with modified files that are not added yet. I have to switch to branch B.</p><p>Solution:</p><ol><li><code>git stash .</code></li><li><code>git checkout branch-B</code></li><li>Edit and push</li><li><code>git checkout branch-A</code></li><li><code>git stash apply</code></li></ol><p>With the help of <code>git stash</code> and <code>git stash apply</code> , I can solve the problem above.</p>',7),h=[c];function s(d,r){return t(),i("div",null,h)}const f=e(a,[["render",s],["__file","Git_switch_branches_with_modified_files.html.vue"]]);export{f as default};
