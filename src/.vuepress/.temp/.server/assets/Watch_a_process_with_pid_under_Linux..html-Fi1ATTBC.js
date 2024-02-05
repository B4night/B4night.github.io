import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="watch-a-process-with-pid-under-linux" tabindex="-1"><a class="header-anchor" href="#watch-a-process-with-pid-under-linux"><span>Watch a process with pid under Linux.</span></a></h1><p>We need <code>pidstat</code> command to monitor processes.</p><p>e.g.: <code>pidstat -p [pid] 1</code> , this can print the status each second.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/Watch_a_process_with_pid_under_Linux..html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Watch_a_process_with_pid_under_Linux__html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Watch_a_process_with_pid_under_Linux..html.vue"]]);
export {
  Watch_a_process_with_pid_under_Linux__html as default
};
