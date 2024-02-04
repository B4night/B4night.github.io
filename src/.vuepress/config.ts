import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "B4night",
  description: "A place where I post my thoughts",

  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
