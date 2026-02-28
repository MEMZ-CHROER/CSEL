import comp from "I:/CSEL/docs/.vuepress/.temp/pages/posts/article1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article1.html\",\"title\":\"Article 1\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2026-02-28T00:00:00.000Z\",\"category\":[\"Category A\"],\"tag\":[\"WebsiteLog\",\"Admin\"]},\"git\":{\"updatedTime\":1772280619000,\"contributors\":[{\"name\":\"MEMZ-CHROER\",\"username\":\"MEMZ-CHROER\",\"email\":\"lxy130523@outlook.com\",\"commits\":1,\"url\":\"https://github.com/MEMZ-CHROER\"}],\"changelog\":[{\"hash\":\"d4f3b15f0b70b076eb336a4da9be1f02cead6ad9\",\"time\":1772280619000,\"email\":\"lxy130523@outlook.com\",\"author\":\"MEMZ-CHROER\",\"message\":\"提交网站\"}]},\"filePathRelative\":\"posts/article1.md\",\"excerpt\":\"\\n<h2>网站创建</h2>\\n<h3>2026.2.28 我们的组织正式成立</h3>\\n<h3>CSEL将继续下去，forever</h3>\\n\"}")
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
