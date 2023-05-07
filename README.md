<p align="center">
  <img height="160px" src="http://www.vm-design.cn/images/vm-design/VmDesign.svg">
  <h2 align="center" style="font-weight: 600">vm Design</h2>
</p>

<p align="center">
  vm design can quickly build interactive interfaces in vue3 applications, which looks good.
</p>

<p align="center">
  <a href="https://github.com/vm-design-007/vm-design/blob/master/README.zh-CN.md">Chinese</a> | English 
</p>

<p align="center">
  <a href="https://github.com/vm-design-007/vm-design/stargazers"><img src="https://img.shields.io/github/stars/VmDesign/vm-design" /></a>
  <a href="https://www.npmjs.com/package/vm-design"><img src="https://badgen.net/npm/v/vm-design" /></a>
  <a href="https://vm.tianyuhao.cn"><img src="https://img.shields.io/badge/vm%20Design-Docs-blue" /></a>
  <a href="https://github.com/vm-design-007/vm-design/blob/master/CHANGELOG.md"><img src="https://img.shields.io/badge/vm%20Design-CHANGELOG-blue" /></a>
</p>

## ✨ Features

- 🪐 60+ common components
- 💪 Developed with the latest features of Vue.js
- 🐆 Fully based on Vite, fast enough
- 🤟 Ultimate development experience
- 🥇 Ultra detailed JSDoc comments
- 🦩 Zero third party dependency
- 🪐 Different packaging modes which compatible with different projects
- 🏆 Support full import and on-demand import
- ✅ Written with TypeScript & Template
- 🖍️ Strict TypeScript Type
- 🤟 Global no any type
- ✔️ Easy to configure and easy to use
- 🚩 Complete and adequate unit tests
- 👍 Maintained by the community team
- ❤️ Developed according to actual demand
- 📃 High quality detailed documentation
- 📌 Improve RFC
- ☝️ Put forward demands and keep improving
- 🌍 More configuration options & flexible components
- 🛠 More features are under development

## 🔑 Install

Use `pnpm` install

```shell
pnpm add --save-dev vm-design
```

Use `npm` install

```shell
npm install --save-dev vm-design
```

Use `yarn` install

```shell
yarn add --save-dev vm-design
```

## 🎉 Quick Start

Put the following code into `main.ts`

```ts
import { createApp } from 'vue'
import App from './App.vue'

import VmDesign from 'vm-design'
import 'vm-design/dist/index.css'

createApp(App).use(VmDesign).mount('#app')
```

## 🪂 Quick experience

```html
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vm-design/dist/index.css" />
</head>

<body>
  <div id="app">
    <v-space>
      <v-button round type="default">默认按钮</v-button>
      <v-button round type="primary">主要按钮</v-button>
      <v-button round type="success">成功按钮</v-button>
      <v-button round type="danger">危险按钮</v-button>
      <v-button round type="warning">警告按钮</v-button>
    </v-space>

    <v-divider>华丽的分隔线</v-divider>

    <v-button type="primary" @click="visible = true">打开 Dialog</v-button>
    <v-dialog title="Title" v-model:visible="visible"> 欢迎使用 vm Design！ </v-dialog>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.global.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vm-design/dist/index.umd.js"></script>
  <script>
    const { createApp, ref } = Vue

    const app = createApp({
      setup() {
        const visible = ref(false)

        return { visible }
      }
    })

    app.use(VmDesign.default)
    app.mount('#app')
  </script>
</body>
```

## 🐳 Related links

- [Official documents](https://vm.tianyuhao.cn)
- [NPM](https://www.npmjs.com/package/vm-design)
- [CONTRIBUTING](https://github.com/vm-design-007/vm-design/blob/master/CONTRIBUTING.md)
- [CHANGELOG](https://github.com/vm-design-007/vm-design/blob/master/CHANGELOG.md)

## 🌈 Join vm Design

Add WeChat & please note the `Github` username

![WeChat](http://www.vm-design.cn/images/auto/weixin.png)

## 💌 Special Thanks

Thanks to [everyone](https://github.com/vm-design-007/vm-design/graphs/contributors) who has already contributed to `vm Design`!

<a href="https://github.com/vm-design-007/vm-design/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=VmDesign/vm-design" />
</a>

## 💬 LICENSE

[MIT](https://github.com/vm-design-007/vm-design/blob/master/LICENSE)
