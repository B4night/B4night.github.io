import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="useful-script-sharing-easy-git-push" tabindex="-1"><a class="header-anchor" href="#useful-script-sharing-easy-git-push"><span>Useful script sharing: easy git push</span></a></h1><p>When dealing with github repositories, it’s often the case that we should use <code>git add .; git commit -s -m &quot;&quot;; git push</code> to push our changes.</p><p>So that I am gonna share a simple shell script that could do some simple git operations.</p><pre><code>acp() {
    if [ ! $# -eq 1 ]; then
        echo &quot;Invalid number of arguments. Usage: acp \\&quot;commit message\\&quot;&quot;
        return 1
    fi
    git add .
    git commit -s -m &quot;$1&quot;
    git push
}
</code></pre><p>Just add it to <code>~/.bashrc</code> and source it.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/ Useful script sharing_ easy git push.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _Useful_script_sharing__easy_git_push_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", " Useful script sharing_ easy git push.html.vue"]]);
export {
  _Useful_script_sharing__easy_git_push_html as default
};
