import comp from "I:/CSEL/docs/.vuepress/.temp/pages/posts/archive2.html.vue"
const data = JSON.parse("{\"path\":\"/posts/archive2.html\",\"title\":\"Archive Article2\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"1998-01-02T00:00:00.000Z\",\"category\":[\"History\"],\"tag\":[\"WWII\"],\"archive\":true},\"git\":{\"updatedTime\":1772280619000,\"contributors\":[{\"name\":\"MEMZ-CHROER\",\"username\":\"MEMZ-CHROER\",\"email\":\"lxy130523@outlook.com\",\"commits\":1,\"url\":\"https://github.com/MEMZ-CHROER\"}],\"changelog\":[{\"hash\":\"d4f3b15f0b70b076eb336a4da9be1f02cead6ad9\",\"time\":1772280619000,\"email\":\"lxy130523@outlook.com\",\"author\":\"MEMZ-CHROER\",\"message\":\"提交网站\"}]},\"filePathRelative\":\"posts/archive2.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\"}")
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
