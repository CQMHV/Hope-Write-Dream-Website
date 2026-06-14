# Hope Write Dream Website

这是一个使用 Astro + Beer CSS 构建的单页团队网站。页面包含团队项目、成员展示、联系渠道、社交链接、多语言 i18n，以及自动/浅色/深色主题切换。

项目按静态网站部署设计，字体、Beer CSS 相关资源已本地打包，减少访问外部 CDN 的依赖。`npm run dev` 和 `npm run build` 会先执行 `scripts/generate-beer-theme.mjs`，生成 Beer CSS 主题、Material Symbols 和 Noto 字体资源。

## 本地运行

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

默认访问 Astro 输出的本地地址，常见为：

```text
http://localhost:4321/
```

## 构建与预览

构建静态产物：

```bash
npm run build
```

本地预览构建结果：

```bash
npm run preview
```

构建后的文件会输出到：

```text
dist/
```

## 上线方式

将 `npm run build` 生成的 `dist/` 目录部署到任意静态托管服务即可，例如 GitHub Pages、Cloudflare Pages、Netlify、Vercel 或自有服务器。

常规配置：

```text
Build command: npm run build
Publish directory: dist
```

上线后建议检查：

- `/zh-cn/`、`/en-us/`、`/ja-jp/`、`/zh-tw/` 四个语言路径是否可访问。
- `/` 是否正确跳转或引导到默认语言。
- 主题切换刷新后是否保留。
- 构建产物中是否没有外部字体或 Beer CSS CDN 依赖。
