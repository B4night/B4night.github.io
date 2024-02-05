import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="git-push-fatal-the-remote-end-hung-up-unexpectedly" tabindex="-1"><a class="header-anchor" href="#git-push-fatal-the-remote-end-hung-up-unexpectedly"><span>git push fatal: The remote end hung up unexpectedly</span></a></h1><p>stackoverflow link: <a href="https://stackoverflow.com/questions/15240815/git-fatal-the-remote-end-hung-up-unexpectedly" target="_blank" rel="noopener noreferrer">https://stackoverflow.com/questions/15240815/git-fatal-the-remote-end-hung-up-unexpectedly`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>This usually happens when the files we push exceeds buffer size. So we can manually change postBuffer size.</p><pre><code>git config http.postBuffer 524288000
git config ssh.postBuffer 524288000
</code></pre></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/ git push fatal_ The remote end hung up unexpectedly.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _git_push_fatal__The_remote_end_hung_up_unexpectedly_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", " git push fatal_ The remote end hung up unexpectedly.html.vue"]]);
export {
  _git_push_fatal__The_remote_end_hung_up_unexpectedly_html as default
};
