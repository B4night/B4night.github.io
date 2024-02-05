import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="redirect-terminal-output-to-clipboard" tabindex="-1"><a class="header-anchor" href="#redirect-terminal-output-to-clipboard"><span>Redirect terminal output to clipboard.</span></a></h1><p>This post is about using <code>xclip</code> command to redirect the output of a command to clipboard.</p><ol><li>install <code>xclip</code></li><li>use command <code>cat output | xclip -selection clipboard</code> to redirect the flow</li><li>(Optional) Set an alias.<br> e.g. <code>alias clip=”xclip -selection clipboard”</code></li><li>Remember that the alias needs to be added to <code>~/.bashrc</code> to take effect permanently.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/ Redirect terminal output to clipboard..html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _Redirect_terminal_output_to_clipboard__html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", " Redirect terminal output to clipboard..html.vue"]]);
export {
  _Redirect_terminal_output_to_clipboard__html as default
};
