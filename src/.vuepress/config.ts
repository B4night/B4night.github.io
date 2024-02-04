import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Blog Demo",
  description: "A place where I post my thoughts",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
