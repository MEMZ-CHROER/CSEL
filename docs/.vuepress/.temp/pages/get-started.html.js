import comp from "I:/CSEL/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"Get Started\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1772280619000,\"contributors\":[{\"name\":\"MEMZ-CHROER\",\"username\":\"MEMZ-CHROER\",\"email\":\"lxy130523@outlook.com\",\"commits\":1,\"url\":\"https://github.com/MEMZ-CHROER\"}],\"changelog\":[{\"hash\":\"d4f3b15f0b70b076eb336a4da9be1f02cead6ad9\",\"time\":1772280619000,\"email\":\"lxy130523@outlook.com\",\"author\":\"MEMZ-CHROER\",\"message\":\"提交网站\"}]},\"filePathRelative\":\"get-started.md\",\"excerpt\":\"\\n<p>This is a normal page, which contains VuePress basics.</p>\\n<h2>Pages</h2>\\n<p>You can add markdown files in your vuepress directory, every markdown file will be converted to a page in your site.</p>\\n<p>See <a href=\\\"https://vuejs.press/guide/page.html#routing\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">routing</a> for more details.</p>\"}")
export { comp, data }

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
