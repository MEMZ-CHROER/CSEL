import comp from "I:/CSEL/docs/.vuepress/.temp/pages/posts/sticky2.html.vue"
const data = JSON.parse("{\"path\":\"/posts/sticky2.html\",\"title\":\"我们的组织成立了！\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2026-02-28T00:00:00.000Z\",\"category\":[\"Category C\"],\"tag\":[\"WebsiteLog\",\"Admin\"],\"sticky\":10},\"git\":{},\"filePathRelative\":\"posts/sticky2.md\",\"excerpt\":\"\\n<p>2026.2.28 我们的组织正式成立</p>\\n<h3>CSEL将继续下去，forever</h3>\\n\"}")
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
