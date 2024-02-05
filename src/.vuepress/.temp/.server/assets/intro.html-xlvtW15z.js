import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="intro-page" tabindex="-1"><a class="header-anchor" href="#intro-page"><span>Intro Page</span></a></h1><p>This is B4night and that nick name comes from <code>dead poets society</code>. It means before(b4) night which reminds me to cherish time.</p><h1 id="work-experience" tabindex="-1"><a class="header-anchor" href="#work-experience"><span>Work Experience</span></a></h1><p>I am a senior student and I am gonna graduate at June 2024. I have several internships and that covers 3 hardcore fields. I worked as hardware intern, Linux Cpp intern and Linux Kernel Quality Engineer Intern. As a result, I am familiar with Linux and switched my main machine from Win to Fedora38.</p><h1 id="interests" tabindex="-1"><a class="header-anchor" href="#interests"><span>Interests</span></a></h1><p>I am Interested in all kinds of interesting stuff, so feel free to contact me if you have some brillient ideas or discoveries want to share with me.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/intro.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const intro_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "intro.html.vue"]]);
export {
  intro_html as default
};
