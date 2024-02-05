import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="git-switch-branches-with-modified-files" tabindex="-1"><a class="header-anchor" href="#git-switch-branches-with-modified-files"><span>Git switch branches with modified files</span></a></h1><p>I have to switch between different branches to develop, so that there is a problem that some times I don’t want to use <code>git add</code> to track modified too early and I have to switch another branch.</p><p>So the error comes out: another branch would have the same modified files.</p><p>E.g.: Currently I am at branch A, with modified files that are not added yet. I have to switch to branch B.</p><p>Solution:</p><ol><li><code>git stash .</code></li><li><code>git checkout branch-B</code></li><li>Edit and push</li><li><code>git checkout branch-A</code></li><li><code>git stash apply</code></li></ol><p>With the help of <code>git stash</code> and <code>git stash apply</code> , I can solve the problem above.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/ Git switch branches with modified files.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _Git_switch_branches_with_modified_files_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", " Git switch branches with modified files.html.vue"]]);
export {
  _Git_switch_branches_with_modified_files_html as default
};
