import { CodeTabs } from "/vercel/sandbox/primary/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/vercel/sandbox/primary/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/vercel/sandbox/primary/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
