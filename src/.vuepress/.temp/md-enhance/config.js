import { defineClientConfig } from "vuepress/client";
import CodeTabs from "/home/b4night/Project/b4night.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/home/b4night/Project/b4night.github.io/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/home/b4night/Project/b4night.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "/home/b4night/Project/b4night.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/home/b4night/Project/b4night.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "/home/b4night/Project/b4night.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import { useHint } from "/home/b4night/Project/b4night.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "/home/b4night/Project/b4night.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import Tabs from "/home/b4night/Project/b4night.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHint();
  }
});
