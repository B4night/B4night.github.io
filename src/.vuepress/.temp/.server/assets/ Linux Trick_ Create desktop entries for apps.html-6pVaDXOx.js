import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="linux-trick-create-desktop-entries-for-apps" tabindex="-1"><a class="header-anchor" href="#linux-trick-create-desktop-entries-for-apps"><span>Linux Trick: Create desktop entries for apps</span></a></h1><p>System: Fedora 39 workstation</p><p>It’s always a problem for me that some apps I downloaded can not be recognized by <code>control</code> and extension <code>search light</code> . So it’s necessary to create separate entries for those unrecognized apps.</p><p>The procedures are as follows:</p><ol><li>Cursor to directory <code>~/.local/share/applicaions</code></li><li>Create <code>&lt;app name&gt;.desktop</code></li><li>Edit the content</li><li>run command <code>desktop-file-validate &lt;app name&gt;.desktop</code></li></ol><p>The content is shown below:</p><pre><code>[Desktop Entry]
Version=1.0
Encoding=UTF-8
Type=Application
Name=typora
NoDisplay=true
Exec=typora
</code></pre></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/ Linux Trick_ Create desktop entries for apps.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _Linux_Trick__Create_desktop_entries_for_apps_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", " Linux Trick_ Create desktop entries for apps.html.vue"]]);
export {
  _Linux_Trick__Create_desktop_entries_for_apps_html as default
};
