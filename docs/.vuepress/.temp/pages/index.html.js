import comp from "I:/CSEL/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"https://picui.ogmua.cn/s1/2026/02/28/69a2e34dbbeca.webp\",\"actions\":[{\"text\":\"文章\",\"link\":\"/article/\",\"type\":\"primary\"},{\"text\":\"介绍\",\"link\":\"https://vuejs.press/guide/introduction.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"简单优先\",\"details\":\"最小化设置，markdown 为中心的项目结构帮助您集中精力写作。\"},{\"title\":\"Vue 驱动\",\"details\":\"享受 Vue 的开发体验，在 markdown 中使用 Vue 组件，以及开发自定义主题。\"},{\"title\":\"高性能\",\"details\":\"VuePress 为每个页面生成预渲染的静态 HTML，并在页面加载后以单页应用 (SPA) 模式运行。\"},{\"title\":\"主题\",\"details\":\"提供默认主题，您也可以选择社区主题或创建自己的主题。\"},{\"title\":\"插件\",\"details\":\"插件 API 灵活，允许插件为您的站点提供许多可插拔功能。\"},{\"title\":\"打包器\",\"details\":\"默认打包器是 Vite，同时也支持 Webpack。根据您的喜好选择即可！\"}],\"footer\":\"MIT Licensed | Copyright © 2018-present VuePress Community\"},\"git\":{\"updatedTime\":1772282596000,\"contributors\":[{\"name\":\"MEMZ-CHROER\",\"username\":\"MEMZ-CHROER\",\"email\":\"lxy130523@outlook.com\",\"commits\":2,\"url\":\"https://github.com/MEMZ-CHROER\"}],\"changelog\":[{\"hash\":\"8ce86ba4c9a5c14fc4adae562967bc81dfb19828\",\"time\":1772282596000,\"email\":\"lxy130523@outlook.com\",\"author\":\"MEMZ-CHROER\",\"message\":\"更新图标\"},{\"hash\":\"d4f3b15f0b70b076eb336a4da9be1f02cead6ad9\",\"time\":1772280619000,\"email\":\"lxy130523@outlook.com\",\"author\":\"MEMZ-CHROER\",\"message\":\"提交网站\"}]},\"filePathRelative\":\"README.md\"}")
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
