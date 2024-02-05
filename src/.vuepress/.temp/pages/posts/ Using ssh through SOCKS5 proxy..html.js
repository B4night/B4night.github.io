export const data = JSON.parse("{\"key\":\"v-519070c2\",\"path\":\"/posts/%20Using%20ssh%20through%20SOCKS5%20proxy..html\",\"title\":\"Using ssh through SOCKS5 proxy.\",\"lang\":\"en-US\",\"frontmatter\":{\"author\":\"B4night\",\"date\":\"2024-02-05T00:00:00.000Z\",\"title\":\"Using ssh through SOCKS5 proxy.\",\"tags\":[],\"categories\":[\"Useful Skills\",\"Using ssh through SOCKS5 proxy.md\"],\"description\":\"Using ssh through SOCKS5 proxy. Below are operations on Fedora39. Download netcat . In Ubuntu-like system, nc is needed. Edit ~/.ssh/config Add lines like: In essence, this conf...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://b4night.github.io/posts/%20Using%20ssh%20through%20SOCKS5%20proxy..html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"B4night\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Using ssh through SOCKS5 proxy.\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Using ssh through SOCKS5 proxy. Below are operations on Fedora39. Download netcat . In Ubuntu-like system, nc is needed. Edit ~/.ssh/config Add lines like: In essence, this conf...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"B4night\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2024-02-05T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Using ssh through SOCKS5 proxy.\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2024-02-05T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"B4night\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.58,\"words\":174},\"filePathRelative\":\"posts/ Using ssh through SOCKS5 proxy..md\",\"localizedDate\":\"February 5, 2024\",\"excerpt\":\"\\n<p>Below are operations on Fedora39.</p>\\n<ol>\\n<li>Download <code>netcat</code> . In Ubuntu-like system, <code>nc</code> is needed.</li>\\n<li>Edit <code>~/.ssh/config</code></li>\\n<li>Add lines like:</li>\\n</ol>\\n<!---->\\n<pre><code>Host github.com\\n   ProxyCommand netcat -X 5 -x 127.0.0.1:7890 %h %p\\n</code></pre>\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
