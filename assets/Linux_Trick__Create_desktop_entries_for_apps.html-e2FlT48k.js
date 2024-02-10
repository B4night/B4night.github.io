import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o,c as t,a as r}from"./app-d547B8JH.js";const a={},n=r(`<h1 id="linux-trick-create-desktop-entries-for-apps" tabindex="-1"><a class="header-anchor" href="#linux-trick-create-desktop-entries-for-apps"><span>Linux Trick: Create desktop entries for apps</span></a></h1><p>System: Fedora 39 workstation</p><p>It’s always a problem for me that some apps I downloaded can not be recognized by <code>control</code> and extension <code>search light</code> . So it’s necessary to create separate entries for those unrecognized apps.</p><p>The procedures are as follows:</p><ol><li>Cursor to directory <code>~/.local/share/applicaions</code></li><li>Create <code>&lt;app name&gt;.desktop</code></li><li>Edit the content</li><li>run command <code>desktop-file-validate &lt;app name&gt;.desktop</code></li></ol><p>The content is shown below:</p><pre><code>[Desktop Entry]
Version=1.0
Encoding=UTF-8
Type=Application
Name=typora
NoDisplay=true
Exec=typora
</code></pre>`,7),s=[n];function c(p,i){return o(),t("div",null,s)}const _=e(a,[["render",c],["__file","Linux_Trick__Create_desktop_entries_for_apps.html.vue"]]);export{_ as default};
