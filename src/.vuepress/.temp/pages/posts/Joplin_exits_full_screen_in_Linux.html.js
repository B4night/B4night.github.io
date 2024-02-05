export const data = JSON.parse("{\"key\":\"v-329fbe4e\",\"path\":\"/posts/Joplin_exits_full_screen_in_Linux.html\",\"title\":\"Joplin exits full screen in Linux\",\"lang\":\"en-US\",\"frontmatter\":{\"author\":\"B4night\",\"date\":\"2024-02-05T00:00:00.000Z\",\"title\":\"Joplin exits full screen in Linux\",\"tags\":[],\"categories\":[\"Useful Skills\"],\"description\":\"Joplin exits full screen in Linux Today I maximized joplin when I was using it. But when I wanted to change the options, I used f11 to exit full screen. However, f11 is bonded t...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://b4night.github.io/posts/Joplin_exits_full_screen_in_Linux.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"B4night\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Joplin exits full screen in Linux\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Joplin exits full screen in Linux Today I maximized joplin when I was using it. But when I wanted to change the options, I used f11 to exit full screen. However, f11 is bonded t...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-02-05T06:53:58.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"B4night\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2024-02-05T00:00:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-02-05T06:53:58.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Joplin exits full screen in Linux\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2024-02-05T00:00:00.000Z\\\",\\\"dateModified\\\":\\\"2024-02-05T06:53:58.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"B4night\\\"}]}\"]]},\"headers\":[],\"git\":{\"createdTime\":1707116038000,\"updatedTime\":1707116038000,\"contributors\":[{\"name\":\"B4night\",\"email\":\"superchaovaction@163.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":0.31,\"words\":93},\"filePathRelative\":\"posts/Joplin_exits_full_screen_in_Linux.md\",\"localizedDate\":\"February 5, 2024\",\"excerpt\":\"\\n<p>Today I maximized joplin when I was using it. But when I wanted to change the options, I used <code>f11</code> to exit full screen. However, <code>f11</code> is bonded to another feature, so that I can’t use it to exit.</p>\\n<p>Here is the solution.</p>\\n<ol>\\n<li>Find the file <code>window-state-prod.json </code>Use the command <code>find / -name \\\"window-state-prod.json</code></li>\\n<li>Edit the json file and set <code>isFullScreen</code> to <code>false</code></li>\\n</ol>\",\"autoDesc\":true}")