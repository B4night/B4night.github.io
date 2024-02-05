import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="download-torrent-file-under-fedora" tabindex="-1"><a class="header-anchor" href="#download-torrent-file-under-fedora"><span>Download <code>.torrent</code> file under Fedora</span></a></h1><p>We need to download <code>trasmission</code> first to download from a <code>.torrent</code> file.</p><p>We use <code>transmission-gtk</code> to invoke the app and then choose <code>.torrent</code> fine. Then the doanload begins.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/ Download _.torrent_ file under Fedora.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _Download___torrent__file_under_Fedora_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", " Download _.torrent_ file under Fedora.html.vue"]]);
export {
  _Download___torrent__file_under_Fedora_html as default
};
