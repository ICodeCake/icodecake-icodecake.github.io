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
    sidebarDepth: 2,
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
    sidebar: {
      "/code/web/": [
        {
          text: "Html",
          children: [],
        },
        {
          text: "Css",
          children: [
            {
              text: "Translate vs Position",
              link: "/code/web/css/TransformVsPosition",
              children: [],
            },
          ],
        },
        {
          text: "TypeScript or JavaScript",
          children: [
            {
              text: "Null vs Undefined",
              link: "/code/web/ts/NullVsUndefined",
              children: [],
            },
            {
              text: "TsNote",
              link: "/code/web/ts/TsNote",
              children: [],
            },
            {
              text: "UrlToFile",
              link: "/code/web/js/UrlToFile",
              children: [],
            },
            {
              text: "In the Loop",
              link: "/code/web/js/InTheLoop",
              children: [],
            },
          ],
        },
      ],
      "/code/dotnet/": [
        {
          text: "WPF",
          children: [
            {
              text: "WPF UI Layout",
              link: "/code/dotnet/WpfUILayout",
              children: [],
            },
            {
              text: "XAML Binding",
              link: "/code/dotnet/XAMLBinding",
              children: [],
            },
            {
              text: "中英文切换",
              link: "/code/dotnet/Language",
              children: [],
            },
          ],
        },
        {
          text: "C#",
          children: [
            {
              text: "新特性",
              children: [
                {
                  text: "7.0",
                  link: "/code/dotnet/CSharpNewFeatures/7.0/",
                  children: [],
                },
                {
                  text: "8.0",
                  link: "/code/dotnet/CSharpNewFeatures/8.0/",
                  children: [],
                },
                {
                  text: "9.0",
                  link: "/code/dotnet/CSharpNewFeatures/9.0/",
                  children: [],
                },
                {
                  text: "10.0",
                  link: "/code/dotnet/CSharpNewFeatures/10.0/",
                  children: [],
                },
                {
                  text: "11.0",
                  link: "/code/dotnet/CSharpNewFeatures/11.0/",
                  children: [],
                },
              ],
            },
            {
              text: "多线程",
              children: [
                {
                  text: "BackgroundWorker",
                  link: "/code/dotnet/Multithreading/BackgroundWorker/",
                  children: [],
                },
                {
                  text: "Thread Or Task",
                  link: "/code/dotnet/Multithreading/ThreadOrTask/",
                  children: [],
                },
                {
                  text: "Parallel",
                  link: "/code/dotnet/Multithreading/Parallel/",
                  children: [],
                },
                {
                  text: "Async Await",
                  link: "/code/dotnet/Multithreading/AsyncAndAwait/",
                  children: [],
                },
              ],
            },
            {
              text: "Log4Net",
              link: "/code/dotnet/Log4Net/",
              children: [],
            },
          ],
        },
        {
          text: "Other",
          children: [
            {
              text: "Win10 aux,com1~com9,prn,con,nul文件命名无效",
              link: "/code/dotnet/InvalidFileName",
              children: [],
            },
            {
              text: "C#调用Matlab函数",
              link: "/code/dotnet/matlab",
              children: [],
            },
          ],
        },
      ],
    },
  }),
});
