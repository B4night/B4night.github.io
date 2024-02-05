import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="program-executed-by-linux-terminal-has-the-same-proxy-with-the-terminal" tabindex="-1"><a class="header-anchor" href="#program-executed-by-linux-terminal-has-the-same-proxy-with-the-terminal"><span>Program executed by Linux Terminal has the same proxy with the terminal?</span></a></h1><p>Today I ran into an awkward situation. I am in China right now and I need proxy to access internet. So I set the global proxy of terminal.</p><p>I executed a program and it needs to upload image to image bed, which is an server in China. The procedure is: the program executes uploading commands via terminal, while the terminal has proxy settings. So it’s really awkward that the uploading failed.</p><p>I spent sevel hours for debugging and write this blog for people whom have ran into the same pitfall.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/Program_executed_by_Linux_Terminal_has_the_same_proxy_with_the_terminal_.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Program_executed_by_Linux_Terminal_has_the_same_proxy_with_the_terminal__html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Program_executed_by_Linux_Terminal_has_the_same_proxy_with_the_terminal_.html.vue"]]);
export {
  Program_executed_by_Linux_Terminal_has_the_same_proxy_with_the_terminal__html as default
};
