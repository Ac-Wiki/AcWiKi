// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";

import Footer from "../components/Footer.vue";
import Comment from "../components/Comment.vue";
import layoutComponent from "../components/Layout.vue";

export default {
  extends: DefaultTheme,
  Layout: layoutComponent,
  enhanceApp({ app, router, siteData }) {
    app.component("Footer", Footer);
    app.component("Comment", Comment);
  },
} satisfies Theme;
