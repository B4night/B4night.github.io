import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o,c as t,a as n}from"./app-dTsIfBC7.js";const r={},a=n(`<p>System: Fedora 39 workstation</p><p>It’s always a problem for me that some apps I downloaded can not be recognized by <code>control</code> and extension <code>search light</code> . So it’s necessary to create separate entries for those unrecognized apps.</p><p>The procedures are as follows:</p><ol><li>Cursor to directory <code>~/.local/share/applicaions</code></li><li>Create <code>&lt;app name&gt;.desktop</code></li><li>Edit the content</li><li>run command <code>desktop-file-validate &lt;app name&gt;.desktop</code></li></ol><p>The content is shown below:</p><pre><code>[Desktop Entry]
Version=1.0
Encoding=UTF-8
Type=Application
Name=typora
NoDisplay=true
Exec=typora
</code></pre>`,6),s=[a];function c(p,i){return o(),t("div",null,s)}const _=e(r,[["render",c],["__file"," Linux Trick_ Create desktop entries for apps.html.vue"]]);export{_ as default};
