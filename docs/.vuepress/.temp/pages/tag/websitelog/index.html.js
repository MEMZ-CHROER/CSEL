import comp from "I:/CSEL/docs/.vuepress/.temp/pages/tag/websitelog/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/websitelog/\",\"title\":\"标签 WebsiteLog\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"标签 WebsiteLog\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"WebsiteLog\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
