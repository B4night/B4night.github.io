export const data = JSON.parse("{\"key\":\"v-1b503f84\",\"path\":\"/posts/%20Set%20default%20editor%20in%20Linux.html\",\"title\":\"Set default editor in Linux\",\"lang\":\"en-US\",\"frontmatter\":{\"author\":\"B4night\",\"date\":\"2024-02-05T00:00:00.000Z\",\"title\":\"Set default editor in Linux\",\"tags\":[],\"categories\":[\"Useful Skills\",\"Set default editor in Linux.md\"],\"description\":\"Set default editor in Linux This need to edit the config file of the shell you are using. For example, I am using zsh right now so that I have to change ~/.zshrc . All I have to...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://b4night.github.io/posts/%20Set%20default%20editor%20in%20Linux.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"B4night\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Set default editor in Linux\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Set default editor in Linux This need to edit the config file of the shell you are using. For example, I am using zsh right now so that I have to change ~/.zshrc . All I have to...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"B4night\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2024-02-05T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Set default editor in Linux\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2024-02-05T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"B4night\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.27,\"words\":80},\"filePathRelative\":\"posts/ Set default editor in Linux.md\",\"localizedDate\":\"February 5, 2024\",\"excerpt\":\"\\n<p>This need to edit the config file of the shell you are using.</p>\\n<p>For example, I am using zsh right now so that I have to change <code>~/.zshrc</code> .</p>\\n<p>All I have to do is add a command at the end of the config file and then source it.</p>\\n<pre><code>export EDITOR=\\\"/usr/bin/vim\\\"\\nsource ~/.zshrc\\n</code></pre>\",\"autoDesc\":true}")

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
