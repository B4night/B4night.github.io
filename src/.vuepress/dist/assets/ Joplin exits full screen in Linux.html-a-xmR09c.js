import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o,c as n,a as t}from"./app-jSmpe99f.js";const i={},s=t('<h1 id="joplin-exits-full-screen-in-linux" tabindex="-1"><a class="header-anchor" href="#joplin-exits-full-screen-in-linux"><span>Joplin exits full screen in Linux</span></a></h1><p>Today I maximized joplin when I was using it. But when I wanted to change the options, I used <code>f11</code> to exit full screen. However, <code>f11</code> is bonded to another feature, so that I can’t use it to exit.</p><p>Here is the solution.</p><ol><li>Find the file <code>window-state-prod.json </code>Use the command <code>find / -name &quot;window-state-prod.json</code></li><li>Edit the json file and set <code>isFullScreen</code> to <code>false</code></li></ol>',4),l=[s];function c(d,a){return o(),n("div",null,l)}const f=e(i,[["render",c],["__file"," Joplin exits full screen in Linux.html.vue"]]);export{f as default};
