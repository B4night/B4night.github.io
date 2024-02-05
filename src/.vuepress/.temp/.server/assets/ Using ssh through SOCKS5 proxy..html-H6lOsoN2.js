import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="using-ssh-through-socks5-proxy" tabindex="-1"><a class="header-anchor" href="#using-ssh-through-socks5-proxy"><span>Using ssh through SOCKS5 proxy.</span></a></h1><p>Below are operations on Fedora39.</p><ol><li>Download <code>netcat</code> . In Ubuntu-like system, <code>nc</code> is needed.</li><li>Edit <code>~/.ssh/config</code></li><li>Add lines like:</li></ol><!----><pre><code>Host github.com
   ProxyCommand netcat -X 5 -x 127.0.0.1:7890 %h %p
</code></pre><p>In essence, this configuration tells SSH that whenever you attempt to connect to <code>github.com</code>, it should use <code>netcat</code> to route the connection through a SOCKS5 proxy server running on your local machine at port 7890. This setup is commonly used when direct connections are not possible or when you need to route traffic through a specific network path, such as for privacy reasons or to bypass network restrictions.</p><p>Now, the ssh uses proxy to connect with <code>github.com</code> .</p><p>Below are operations on win system.</p><ol><li>Download Nmap</li><li>open <code>.ssh/config</code></li><li>Add lines like</li></ol><!----><pre><code>Host github.com
  ProxyCommand &quot;C:\\\\Program Files (x86)\\\\Nmap\\\\ncat.exe&quot; --proxy 127.0.0.1:7890 --proxy-type socks5 %h %p
</code></pre><p>4. Done!</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/ Using ssh through SOCKS5 proxy..html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _Using_ssh_through_SOCKS5_proxy__html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", " Using ssh through SOCKS5 proxy..html.vue"]]);
export {
  _Using_ssh_through_SOCKS5_proxy__html as default
};
