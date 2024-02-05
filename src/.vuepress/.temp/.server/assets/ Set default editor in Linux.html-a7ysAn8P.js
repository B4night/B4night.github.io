import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="set-default-editor-in-linux" tabindex="-1"><a class="header-anchor" href="#set-default-editor-in-linux"><span>Set default editor in Linux</span></a></h1><p>This need to edit the config file of the shell you are using.</p><p>For example, I am using zsh right now so that I have to change <code>~/.zshrc</code> .</p><p>All I have to do is add a command at the end of the config file and then source it.</p><pre><code>export EDITOR=&quot;/usr/bin/vim&quot;
source ~/.zshrc
</code></pre></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/ Set default editor in Linux.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _Set_default_editor_in_Linux_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", " Set default editor in Linux.html.vue"]]);
export {
  _Set_default_editor_in_Linux_html as default
};
