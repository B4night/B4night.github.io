import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vue-download-failure-about-ipv4" tabindex="-1"><a class="header-anchor" href="#vue-download-failure-about-ipv4"><span>Vue Download failure about Ipv4</span></a></h1><p>Today I ran into fail when downloading vue using command <code>npm install -g @vue/cli</code> , after changing several mirror registry, the fail was still there.</p><p>So I found out that some mirror websites can only be accessed by ipv4, so that we need to choose ipv4 first when accessing these registries.</p><p>using command like below:</p><p><code>node --dns-result-order=ipv4first /usr/bin/npm install -g @vue/cli</code> to download.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/ Vue Download failure about Ipv4.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _Vue_Download_failure_about_Ipv4_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", " Vue Download failure about Ipv4.html.vue"]]);
export {
  _Vue_Download_failure_about_Ipv4_html as default
};
