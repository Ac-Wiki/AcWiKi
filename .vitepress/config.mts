import { defineConfig } from "vitepress";

import markdownItAbbr from "markdown-it-abbr";
import markdownItFootnote from "markdown-it-footnote";
import markdownItAttrs from "markdown-it-attrs";
import markdownItAdmonition from "markdown-it-admonition";

export default defineConfig({
  title: "AcWiki 大学生的百科全书",
  description: "属于大学生群体的真·青年大学习",
  base: "/", // 对应 site_url
  lang: "zh-CN",

  head: [
    ["link", { rel: "icon", href: "/docs/assets/logo_clear.png" }],
    ["link", { rel: "stylesheet", href: "/docs/stylesheets/extra.css" }],
    ["script", { src: "/docs/js/feedback.js" }],
    ["script", { src: "https://cn.vercount.one/js" }],
  ],

  themeConfig: {
    logo: "/docs/assets/logo.jpg",

    nav: [
      { text: "Home", link: "/" },
      { text: "关于Wiki", link: "/docs/about-wiki" },
      {
        text: "学生优惠",
        items: [
          {
            text: "主要",
            link: "/docs/01-student-discounts/student-discounts",
          },
          {
            text: "其他",
            items: [
              {
                text: "网易云音乐",
                link: "/docs/01-student-discounts/others/netease",
              },
              {
                text: "国家助学贷款",
                link: "/docs/01-student-discounts/student-assistance/national-student-loan-FAQ",
              },
            ],
          },
        ],
      },
      { text: "搜索引擎", link: "/docs/02-search-platforms/search-platforms" },
      {
        text: "工具",
        items: [
          { text: "效率软件", link: "/docs/03-tools/tools" },
          {
            text: "网络安全",
            items: [
              {
                text: "双重身份验证",
                link: "/docs/03-tools/cyber security/Authenticator",
              },
              {
                text: "密码管理",
                link: "/docs/03-tools/cyber security/password_manage1",
              },
              {
                text: "隐私保护",
                link: "/docs/03-tools/cyber security/privacy",
              },
            ],
          },
          {
            text: "奇技淫巧",
            items: [
              {
                text: "校园跑",
                link: "/docs/03-tools/qi-ji-yin-qiao/campus-running",
              },
              {
                text: "刷课",
                link: "/docs/03-tools/qi-ji-yin-qiao/pointless-courses",
              },
            ],
          },
        ],
      },
      {
        text: "学习",
        items: [{ text: "考试和竞赛", link: "/docs/04-study/study" }],
      },
      {
        text: "生活",
        items: [
          {
            text: "生活实用小技巧",
            link: "/docs/05-common-sense-of-life/common-sense-of-life",
          },
        ],
      },
      {
        text: "就业",
        items: [
          {
            text: "企业文化",
            link: "/docs/06-recruit-exercitation/recruit-exercitation",
          },
        ],
      },
      {
        text: "方法论",
        items: [
          {
            text: "计算机基础技能",
            link: "/docs/07-computer-basic/computer-basic",
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12.003 2c-5.518 0-9.997 4.48-9.997 9.997c0 5.518 4.48 9.997 9.997 9.997c5.518 0 9.997-4.48 9.997-9.997c0-5.518-4.48-9.997-9.997-9.997zm1.523 15.33c-.2.447-.607.75-1.11.75c-.33 0-.65-.11-.91-.31c-.26-.2-.42-.5-.47-.82l-.32-2.2h3.47c.5 0 .92-.42.92-.92s-.42-.92-.92-.92h-2.11l-.18-1.21h2.29c.51 0 .92-.41.92-.92s-.41-.92-.92-.92h-2.47l-.53-3.64c-.07-.47-.47-.82-.95-.82s-.88.35-.95.82l-.53 3.64h-1.54c-.51 0-.92.41-.92.92s.41.92.92.92h1.88l-.18 1.21h-1.7c-.5 0-.92.42-.92.92s.42.92.92.92h1.91l-.32 2.2c-.05.32-.21.62-.47.82c-.26.2-.58.31-.91.31c-.5 0-.91-.3-1.11-.75c-.2-.45-.14-.97.14-1.36l3.29-4.1h.47l3.29 4.1c.28.39.34.91.14 1.36z"/></svg>',
        },
        link: "https://qm.qq.com/q/WJI3hgBcm4",
        ariaLabel: "QQ 群组",
      },
      { icon: "github", link: "https://github.com/Ac-Wiki/AcWiKi" },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0m5.894 17.308a.936.936 0 0 1-.936.936H6.936a.936.936 0 0 1-.936-.936V6.691a.936.936 0 0 1 .936-.935h10.022c.517 0 .936.419.936.935zm-8.47-9.174v5.733h-.922v-5.733zm4.45 2.893v2.84h-.922v-2.84zm0-2.893v1.77h-.922v-1.77z"/></svg>',
        },
        link: "https://t.me/AcWiki",
        ariaLabel: "Telegram 频道",
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0m5.894 17.308a.936.936 0 0 1-.936.936H6.936a.936.936 0 0 1-.936-.936V6.691a.936.936 0 0 1 .936-.935h10.022c.517 0 .936.419.936.935zm-8.47-9.174v5.733h-.922v-5.733zm4.45 2.893v2.84h-.922v-2.84zm0-2.893v1.77h-.922v-1.77z"/></svg>',
        },
        link: "https://t.me/AcFourm",
        ariaLabel: "Telegram 群组",
      },
    ],

    editLink: {
      pattern: "https://github.com/Ac-Wiki/AcWiKi/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页",
    },

    darkModeSwitchLabel: "外观",
    returnToTopLabel: "返回顶部",
  },

  markdown: {
    config: (md) => {
      md.use(markdownItAbbr);
      md.use(markdownItFootnote);
      md.use(markdownItAttrs);
      md.use(markdownItAdmonition);
    },
  },

  vite: {
    plugins: [
      // 添加 Vite 插件
    ],
  },

  lastUpdated: true,

  // 博客插件配置
  async transformPageData(pageData, context) {
    if (pageData.relativePath.startsWith("blog/posts/")) {
      pageData.frontmatter.layout = "blog";
    }
  },
});
