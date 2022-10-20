import { defineUserConfig } from "vuepress";
import { localTheme } from "./theme";
import { palettePlugin } from "@vuepress/plugin-palette";
import { searchPlugin } from "@vuepress/plugin-search";
// import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  lang: "zh-CN",
  title: "Code Cake",
  head: [["link", { rel: "icon", href: "/images/logo.png" }]],
  description: "代码分享",
  dest: "./docs",
  pagePatterns: ["**/*.md", "!**/README.md", "!.vuepress", "!node_modules"],
  plugins: [
    palettePlugin({
      preset: "sass",
      // userPaletteFile: '.vuepress/styles/palette.scss'
    }),
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    }),
    // docsearchPlugin({
    //   appId: "",
    //   apiKey: "",
    //   indexName: "",
    //   locales: {
    //     '/': {
    //       placeholder: '搜索文档',
    //       translations: {
    //         button: {
    //           buttonText: '搜索文档',
    //         },
    //       },
    //     },
    //   },
    // }),
  ],
  theme: localTheme({
    logo: "/images/logo.png",
    repo: "https://github.com/icodecake/icodecake.github.io",
    repoLabel: "GitHub",
    editLink: false,
    lastUpdatedText: "上次更新",
    contributors: true,
    contributorsText: "贡献者",
    navbar: [
      { text: ".NET", link: "/code/dotnet/" },
      { text: "WEB", link: "/code/web/" },
      { text: "DB", link: "/code/db/" },
      { text: "Test", link: "/code/test/" },
      {
        text: "Sample",
        children: [
          {
            text: "Markdown",
            children: ["/sample/markdown.md"],
          },
        ],
      },
      // // 控制元素何时被激活
      // {
      //   text: "Group 2",
      //   children: [
      //     {
      //       text: "Always active",
      //       link: "/",
      //       activeMatch: "/",
      //     },
      //     {
      //       text: "Active on /foo/",
      //       link: "/not-foo/",
      //       activeMatch: "^/foo/",
      //     },
      //   ],
      // },
    ],
    // sidebar: [
    //   {
    //     text: "Foo",
    //     link: "/foo/",
    //     children: [
    //       {
    //         text: "github",
    //         link: "https://github.com",
    //         children: [],
    //       },
    //       "/foo/bar.md",
    //     ],
    //   },
    //   // 字符串 - 页面文件路径
    //   "/bar/README.md",
    // ],
  }),
});
