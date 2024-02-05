export const data = JSON.parse("{\"key\":\"v-69b7f471\",\"path\":\"/posts/Useful_script_sharing__easy_git_push.html\",\"title\":\"Useful script sharing: easy git push\",\"lang\":\"en-US\",\"frontmatter\":{\"author\":\"B4night\",\"date\":\"2024-02-05T00:00:00.000Z\",\"title\":\"Useful script sharing: easy git push\",\"tags\":[],\"categories\":[\"Useful Skills\",\"Useful script sharing! easy git push.md\"],\"description\":\"Useful script sharing: easy git push When dealing with github repositories, it’s often the case that we should use git add .; git commit -s -m \\\"\\\"; git push to push our changes. ...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://b4night.github.io/posts/Useful_script_sharing__easy_git_push.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"B4night\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Useful script sharing: easy git push\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Useful script sharing: easy git push When dealing with github repositories, it’s often the case that we should use git add .; git commit -s -m \\\"\\\"; git push to push our changes. ...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-02-05T06:42:30.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"B4night\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2024-02-05T00:00:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-02-05T06:42:30.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Useful script sharing: easy git push\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2024-02-05T00:00:00.000Z\\\",\\\"dateModified\\\":\\\"2024-02-05T06:42:30.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"B4night\\\"}]}\"]]},\"headers\":[],\"git\":{\"createdTime\":1707115350000,\"updatedTime\":1707115350000,\"contributors\":[{\"name\":\"B4night\",\"email\":\"superchaovaction@163.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":0.36,\"words\":108},\"filePathRelative\":\"posts/_Useful_script_sharing:_easy_git_push.md\",\"localizedDate\":\"February 5, 2024\",\"excerpt\":\"\\n<p>When dealing with github repositories, it’s often the case that we should use <code>git add .; git commit -s -m \\\"\\\"; git push</code> to push our changes.</p>\\n<p>So that I am gonna share a simple shell script that could do some simple git operations.</p>\\n<pre><code>acp() {\\n    if [ ! $# -eq 1 ]; then\\n        echo \\\"Invalid number of arguments. Usage: acp \\\\\\\"commit message\\\\\\\"\\\"\\n        return 1\\n    fi\\n    git add .\\n    git commit -s -m \\\"$1\\\"\\n    git push\\n}\\n</code></pre>\",\"autoDesc\":true}")
