<a name="readme-top"></a>

<div align="center">

<img height="120" src="https://registry.npmmirror.com/@lobehub/assets-logo/1.0.0/files/assets/logo-3d.webp">
<img height="120" src="https://gw.alipayobjects.com/zos/kitchen/qJ3l3EPsdW/split.svg">
<img height="120" src="https://registry.npmmirror.com/@lobehub/assets-emoji/1.3.0/files/assets/lollipop.webp">

<h1>Lobe UI</h1>

Lobe UI is an open-source UI component library for building _AIGC_ web apps

English ・ [简体中文](./README.zh-CN.md) ・ [Changelog](./CHANGELOG.md) · [Report Bug][github-issues-link] · [Request Feature][github-issues-link]

<!-- SHIELD GROUP -->

[![][npm-release-shield]][npm-release-link]
[![][vercel-shield]][vercel-link]
[![][discord-shield]][discord-link]
[![][npm-downloads-shield]][npm-downloads-link]
[![][github-releasedate-shield]][github-releasedate-link]
[![][github-action-test-shield]][github-action-test-link]
[![][github-action-release-shield]][github-action-release-link]<br/>
[![][github-contributors-shield]][github-contributors-link]
[![][github-forks-shield]][github-forks-link]
[![][github-stars-shield]][github-stars-link]
[![][github-issues-shield]][github-issues-link]
[![][github-license-shield]][github-license-link]

[![][banner]][vercel-link]

</div>

<details>
<summary><kbd>Table of contents</kbd></summary>

#### TOC

- [📦 Installation](#-installation)
  - [Compile with NextJS](#compile-with-nextjs)
- [🤯 Usage](#-usage)
- [⌨️ Local Development](#️-local-development)
- [🤝 Contributing](#-contributing)
- [🔗 More Products](#-more-products)

####

</details>

## 📦 Installation

> \[!IMPORTANT]\
> This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

To install Lobe UI, run the following command:

[![][bun-shield]][bun-link]

```bash
$ bun add @lobehub/ui
```

### Compile with NextJS

> \[!NOTE]\
> By work correct with nextjs ssr, add `transpilePackages: ['@lobehub/ui']` to `next.config.js`. For example:

```js
// next.config.js
const nextConfig = {
  // ...other config

  transpilePackages: ['@lobehub/ui'],
};
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤯 Usage

> \[!NOTE]\
> The LobeUI components are developed based on [Antd](https://ant.design/components/overview/), fully compatible with Antd components,
> and it is recommended to use [antd-style](https://ant-design.github.io/antd-style/) as the default css-in-js styling solution.

```tsx
import { ThemeProvider, Button } from '@lobehub/ui'
import { Button } from 'antd'

export default () => (
  <ThemeProvider>
    <Button>Hello AIGC</Button>
  </ThemeProvider>
)
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## ⌨️ Local Development

You can use Github Codespaces for online development:

[![][codespaces-shield]][codespaces-link]

Or clone it for local development:

```bash
$ git clone https://github.com/lobehub/lobe-ui.git
$ cd lobe-ui
$ bun install
$ bun start
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤝 Contributing

Contributions of all types are more than welcome, if you are interested in contributing code, feel free to check out our GitHub [Issues][github-issues-link] to get stuck in to show us what you’re made of.

[![][pr-welcome-shield]][pr-welcome-link]

[![][contributors-contrib]][contributors-link]

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🔗 More Products

- **[🤖 Lobe Chat][lobe-chat] :** An open-source, extensible (Function Calling), high-performance chatbot framework. It supports one-click free deployment of your private ChatGPT/LLM web application.
- **[🤯 Lobe Theme][lobe-theme] :** The modern theme for stable diffusion webui, exquisite interface design, highly customizable UI, and efficiency boosting features.
- **[🌏 Lobe i18n][lobe-i18n] :** Lobe i18n is an automation tool for the i18n (internationalization) translation process, powered by ChatGPT. It supports features such as automatic splitting of large files, incremental updates, and customization options for the OpenAI model, API proxy, and temperature.
- **[💌 Lobe Commit][lobe-commit] :** Lobe Commit is a CLI tool that leverages Langchain/ChatGPT to generate Gitmoji-based commit messages.

<div align="right">

[![][back-to-top]](#readme-top)

</div>

---

<details><summary><h4>📝 License</h4></summary>

[![][fossa-license-shield]][fossa-license-link]

</details>

Copyright © 2023 [LobeHub][profile-link]. <br />
This project is [MIT](./LICENSE) licensed.

<!-- LINK GROUP -->

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square
[banner]: https://github-production-user-asset-6210df.s3.amazonaws.com/17870709/268452017-960ab8a1-e4b7-4648-beb1-77daf4b6034a.png
[bun-link]: https://bun.sh
[bun-shield]: https://img.shields.io/badge/-speedup%20with%20bun-black?logo=bun&style=for-the-badge
[codespaces-link]: https://codespaces.new/lobehub/lobe-ui
[codespaces-shield]: https://github.com/codespaces/badge.svg
[contributors-contrib]: https://contrib.rocks/image?repo=lobehub/lobe-ui
[contributors-link]: https://github.com/lobehub/lobe-ui/graphs/contributors
[discord-link]: https://discord.gg/AYFPHvv2jT
[discord-shield]: https://img.shields.io/discord/1127171173982154893?color=5865F2&label=discord&labelColor=black&logo=discord&logoColor=white&style=flat-square
[fossa-license-link]: https://app.fossa.com/projects/git%2Bgithub.com%2Flobehub%2Flobe-ui
[fossa-license-shield]: https://app.fossa.com/api/projects/git%2Bgithub.com%2Flobehub%2Flobe-ui.svg?type=large
[github-action-release-link]: https://github.com/actions/workflows/lobehub/lobe-ui/release.yml
[github-action-release-shield]: https://img.shields.io/github/actions/workflow/status/lobehub/lobe-ui/release.yml?label=release&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-action-test-link]: https://github.com/actions/workflows/lobehub/lobe-ui/test.yml
[github-action-test-shield]: https://img.shields.io/github/actions/workflow/status/lobehub/lobe-ui/test.yml?label=test&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-contributors-link]: https://github.com/lobehub/lobe-ui/graphs/contributors
[github-contributors-shield]: https://img.shields.io/github/contributors/lobehub/lobe-ui?color=c4f042&labelColor=black&style=flat-square
[github-forks-link]: https://github.com/lobehub/lobe-ui/network/members
[github-forks-shield]: https://img.shields.io/github/forks/lobehub/lobe-ui?color=8ae8ff&labelColor=black&style=flat-square
[github-issues-link]: https://github.com/lobehub/lobe-ui/issues
[github-issues-shield]: https://img.shields.io/github/issues/lobehub/lobe-ui?color=ff80eb&labelColor=black&style=flat-square
[github-license-link]: https://github.com/lobehub/lobe-ui/blob/master/LICENSE
[github-license-shield]: https://img.shields.io/github/license/lobehub/lobe-ui?color=white&labelColor=black&style=flat-square
[github-releasedate-link]: https://github.com/lobehub/lobe-ui/releases
[github-releasedate-shield]: https://img.shields.io/github/release-date/lobehub/lobe-ui?labelColor=black&style=flat-square
[github-stars-link]: https://github.com/lobehub/lobe-ui/network/stargazers
[github-stars-shield]: https://img.shields.io/github/stars/lobehub/lobe-ui?color=ffcb47&labelColor=black&style=flat-square
[lobe-chat]: https://github.com/lobehub/lobe-chat
[lobe-commit]: https://github.com/lobehub/lobe-commit/tree/master/packages/lobe-commit
[lobe-i18n]: https://github.com/lobehub/lobe-commit/tree/master/packages/lobe-i18n
[lobe-theme]: https://github.com/lobehub/sd-webui-lobe-theme
[npm-downloads-link]: https://www.npmjs.com/package/@lobehub/ui
[npm-downloads-shield]: https://img.shields.io/npm/dt/@lobehub/ui?labelColor=black&style=flat-square
[npm-release-link]: https://www.npmjs.com/package/@lobehub/ui
[npm-release-shield]: https://img.shields.io/npm/v/@lobehub/ui?color=369eff&labelColor=black&logo=npm&logoColor=white&style=flat-square
[pr-welcome-link]: https://github.com/lobehub/lobe-chat/pulls
[pr-welcome-shield]: https://img.shields.io/badge/🤯_pr_welcome-%E2%86%92-ffcb47?labelColor=black&style=for-the-badge
[profile-link]: https://github.com/lobehub
[vercel-link]: https://ui.lobehub.com
[vercel-shield]: https://img.shields.io/website?down_message=offline&label=vercel&labelColor=black&logo=vercel&style=flat-square&up_message=online&url=https%3A%2F%2Fui.lobehub.com
