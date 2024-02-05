import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="typora-upgit-tcyun-upload-img-to-imgbed" tabindex="-1"><a class="header-anchor" href="#typora-upgit-tcyun-upload-img-to-imgbed"><span>Typora+upgit+tcyun: upload img to imgbed</span></a></h1><p>The image we insert to typora can be uploaded to tcyun(or other server) via upgit. All we need to do is several operations.</p><ol><li>Set typora options</li></ol><figure><img src="https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240205_1707110655.png" alt="image-20240205132414965" tabindex="0" loading="lazy"><figcaption>image-20240205132414965</figcaption></figure><ol start="2"><li>download upgit</li></ol><p>Download link: <a href="https://github.com/pluveto/upgit/releases" target="_blank" rel="noopener noreferrer">https://github.com/pluveto/upgit/releases`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><ol start="3"><li>edit upgit config</li></ol><p>Edit <code>~/.upgit.config.toml</code></p><p>config template: <a href="https://github.com/pluveto/upgit/blob/main/config.sample.toml" target="_blank" rel="noopener noreferrer">https://github.com/pluveto/upgit/blob/main/config.sample.toml`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>My config is below:</p><pre><code># UPGIT Config

default_uploader = &quot;qcloudcos&quot;

rename = &quot;{year}/{month}/upgit_{year}{month}{day}_{unix_ts}{ext}&quot;

# Qcloudcos Uploader
[uploaders.qcloudcos]
host = &quot;xxx.cos.ap-nanjing.myqcloud.com&quot;
secret_id = &quot;xxx&quot;
secret_key = &quot;xxx&quot;
</code></pre><p>4. Enter upgit path in typora and test</p><figure><img src="https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240205_1707110679.png" alt="image-20240205132439704" tabindex="0" loading="lazy"><figcaption>image-20240205132439704</figcaption></figure><figure><img src="https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240205_1707110689.png" alt="image-20240205132449714" tabindex="0" loading="lazy"><figcaption>image-20240205132449714</figcaption></figure></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/Typora_upgit_tcyun__upload_img_to_imgbed.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Typora_upgit_tcyun__upload_img_to_imgbed_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Typora_upgit_tcyun__upload_img_to_imgbed.html.vue"]]);
export {
  Typora_upgit_tcyun__upload_img_to_imgbed_html as default
};
