import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="set-bluetooth-off-as-default-at-rebooting-in-fedora" tabindex="-1"><a class="header-anchor" href="#set-bluetooth-off-as-default-at-rebooting-in-fedora"><span>Set Bluetooth off as default at rebooting in Fedora</span></a></h1><p>We need to edit the file <code>/etc/bluetooth/main.conf</code></p><p>Find the line <code>AutoEnable=true</code> , change it to <code>AutoEnable=false</code> and voila, Bluetooth is off as default when rebooting.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/ Set Bluetooth off as default at rebooting in Fedora.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _Set_Bluetooth_off_as_default_at_rebooting_in_Fedora_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", " Set Bluetooth off as default at rebooting in Fedora.html.vue"]]);
export {
  _Set_Bluetooth_off_as_default_at_rebooting_in_Fedora_html as default
};
