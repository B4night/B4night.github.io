export const data = JSON.parse("{\"key\":\"v-598ffdfd\",\"path\":\"/posts/%20Set%20Bluetooth%20off%20as%20default%20at%20rebooting%20in%20Fedora.html\",\"title\":\"Set Bluetooth off as default at rebooting in Fedora\",\"lang\":\"en-US\",\"frontmatter\":{\"author\":\"B4night\",\"date\":\"2024-02-05T00:00:00.000Z\",\"title\":\"Set Bluetooth off as default at rebooting in Fedora\",\"tags\":[],\"categories\":[\"Useful Skills\",\"Set Bluetooth off as default at rebooting in Fedora.md\"],\"description\":\"Set Bluetooth off as default at rebooting in Fedora We need to edit the file /etc/bluetooth/main.conf Find the line AutoEnable=true , change it to AutoEnable=false and voila, Bl...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://b4night.github.io/posts/%20Set%20Bluetooth%20off%20as%20default%20at%20rebooting%20in%20Fedora.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"B4night\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Set Bluetooth off as default at rebooting in Fedora\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Set Bluetooth off as default at rebooting in Fedora We need to edit the file /etc/bluetooth/main.conf Find the line AutoEnable=true , change it to AutoEnable=false and voila, Bl...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"B4night\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2024-02-05T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Set Bluetooth off as default at rebooting in Fedora\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2024-02-05T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"B4night\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.21,\"words\":64},\"filePathRelative\":\"posts/ Set Bluetooth off as default at rebooting in Fedora.md\",\"localizedDate\":\"February 5, 2024\",\"excerpt\":\"\\n<p>We need to edit the file <code>/etc/bluetooth/main.conf</code></p>\\n<p>Find the line <code>AutoEnable=true</code> , change it to <code>AutoEnable=false</code> and voila, Bluetooth is off as default when rebooting.</p>\\n\",\"autoDesc\":true}")

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
