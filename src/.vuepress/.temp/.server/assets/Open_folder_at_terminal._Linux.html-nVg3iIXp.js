import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="open-folder-at-terminal-linux" tabindex="-1"><a class="header-anchor" href="#open-folder-at-terminal-linux"><span>Open folder at terminal. Linux</span></a></h1><p>The commend we need to use today is <code>xdg-open</code> .</p><p>Below is a brief description:</p><blockquote><p><strong>DESCRIPTION</strong><br> xdg-open opens a file or URL in the user’s preferred application. If a URL is provided the URL will be opened in the user’s preferred web browser. If a file is provided the file will be opened in the preferred<br> application for files of that type. xdg-open supports file, ftp, http and https URLs.\\ <br>xdg-open is for use inside a desktop session only. It is not recommended to use xdg-open as root.</p></blockquote><p>This command is used to open files or URLs in default ways. So that we can use it to open folder at the terminal.</p><p>e.g.: <code>xdg-open .</code> , that&#39;ll open the current working directory in folder view.</p><p>What’s more, we can set alias for <code>xdg-open</code> because it’s too long and hard to type.</p><p>e.g.: <code>alias fld=xdg-open</code></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/Open_folder_at_terminal._Linux.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Open_folder_at_terminal__Linux_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Open_folder_at_terminal._Linux.html.vue"]]);
export {
  Open_folder_at_terminal__Linux_html as default
};
