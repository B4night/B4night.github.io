import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="fedora-set-display-scale-150-gnome" tabindex="-1"><a class="header-anchor" href="#fedora-set-display-scale-150-gnome"><span>Fedora set display scale 150%(gnome)</span></a></h1><p>The default display options are <code>100%, 200%, 300%</code>. It’s awkward because some people might want to customize the display scale.</p><p>There’s an easy way to customize the display scale: with the help of <code>gnome-tweaks</code> .</p><ol><li><code>dnf search gnome-tweaks</code></li><li>find the right version and <code>sudo dnf install</code></li><li>open <code>tweaks</code></li><li>At the <code>font</code> section, there is a <code>Scaling Factor</code> button. Set <code>1.5</code> to set the display scale to <code>150%</code>.</li><li>(Caution), set the display scale <code>100%</code> before changing the <code>Scaling Factor</code> in step 4.</li></ol><p></p><figure><img src="https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240205_1707111002.png" alt="image-20240205133002541" tabindex="0" loading="lazy"><figcaption>image-20240205133002541</figcaption></figure></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/Fedora_set_display_scale_150%(gnome).html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Fedora_set_display_scale_150__gnome__html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Fedora_set_display_scale_150%(gnome).html.vue"]]);
export {
  Fedora_set_display_scale_150__gnome__html as default
};
