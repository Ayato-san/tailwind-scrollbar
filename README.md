<div align="center">
  <img src="https://github.com/user-attachments/assets/8cafb40e-4d62-4c38-babe-82e44449496d">
  <h1>Tailwind Scrollbar</h1>
  <p>A tailwind plugin that provides utilities for styling scrollbars.</p>
  <div>
    <a href="https://github.com/Ayato-san/tailwind-scrollbar/blob/1.x/LICENSE.md"><img alt="GitHub License" src="https://img.shields.io/github/license/Ayato-san/tailwind-scrollbar?style=for-the-badge"></a>
    <a href="https://github.com/Ayato-san/tailwind-scrollbar/releases/latest"><img alt="NPM Version" src="https://img.shields.io/github/package-json/version/Ayato-san/tailwind-scrollbar?style=for-the-badge"></a>
    <a href="https://github.com/Ayato-san/tailwind-scrollbar/stargazers"><img alt="GitHub Stars" src="https://img.shields.io/github/stars/Ayato-san/tailwind-scrollbar?style=for-the-badge"></a>
    <a href="#"><img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/Ayato-san/tailwind-scrollbar?style=for-the-badge"></a>
  </div>
</div>

## Features

- Custom scrollbar variants for different parts of the scrollbar.
- Utilities for setting `scrollbar-gutter` with various values.
- Utilities for setting `scrollbar-width` with different options.
- Custom scrollbar colors using `scrollbar-fg` and `scrollbar-bg` utilities.

### Installation

- with npm
  ```sh
  npm install @ayato-san/tailwind-scrollbar
  ```

- with pnpm
  ```sh
  pnpm install @ayato-san/tailwind-scrollbar
  ```

- with yarn
  ```sh
  yarn add @ayato-san/tailwind-scrollbar
  ```

### Utilities

- Custom scrollbar variants such as `scrollbar`, `scrollbar-horizontal`, `scrollbar-vertical`, `scrollbar-button`, `scrollbar-thumb`, `scrollbar-track`, `scrollbar-track-piece`, `scrollbar-corner`, and `scrollbar-resizer`.
- Utilities to set `scrollbar-gutter` with values like `auto`, `stable`, `stable-both`, `inherit`, and `initial`.
- Utilities to set `scrollbar-width` with values like `auto`, `thin`, and `none`.
- Custom scrollbar foreground and background colors using `scrollbar-fg` and `scrollbar-bg` utilities, supporting all colors from the Tailwind CSS color palette.

### Preconfiguration

- `firefox`: Scrollbar in firefox's like style

inside the `tailwind.config.js`

```js
plugins: [require('@ayato-san/tailwind-scrollbar/preconfigured/<name>')]
```

#### customize preconfiguration

```js
theme: {
  scrollbar: {
    size: '10px', // the width or height of the scrollbar
    padding: '2px', // the padding between the scrollbar and the border
    background: { default: '#f0f0f0', hover: '#f4f4f4' }, // the scrollbar tack color
    foreground: { default: '#bfbfbf', hover: '#a6a6a6' }, // the scrollbar thumb color
  }
}
```
