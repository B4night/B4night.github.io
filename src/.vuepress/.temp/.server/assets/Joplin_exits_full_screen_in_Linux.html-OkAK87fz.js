import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="joplin-exits-full-screen-in-linux" tabindex="-1"><a class="header-anchor" href="#joplin-exits-full-screen-in-linux"><span>Joplin exits full screen in Linux</span></a></h1><p>Today I maximized joplin when I was using it. But when I wanted to change the options, I used <code>f11</code> to exit full screen. However, <code>f11</code> is bonded to another feature, so that I can’t use it to exit.</p><p>Here is the solution.</p><ol><li>Find the file <code>window-state-prod.json </code>Use the command <code>find / -name &quot;window-state-prod.json</code></li><li>Edit the json file and set <code>isFullScreen</code> to <code>false</code></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/Joplin_exits_full_screen_in_Linux.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Joplin_exits_full_screen_in_Linux_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Joplin_exits_full_screen_in_Linux.html.vue"]]);
export {
  Joplin_exits_full_screen_in_Linux_html as default
};
