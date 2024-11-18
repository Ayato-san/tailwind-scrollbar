<p align="center">
</p>

## Features

- Custom scrollbar variants for different parts of the scrollbar.
- Utilities for setting `scrollbar-gutter` with various values.
- Utilities for setting `scrollbar-width` with different options.
- Custom scrollbar colors using `scrollbar-fg` and `scrollbar-bg` utilities.

### Install

- with NPM

  ```bash
  npm install -D tailwindcss @ayato-san/tailwind-scrollbar
  ```

- with pnpm

  ```bash
  pnpm add -D tailwindcss @ayato-san/tailwind-scrollbar
  ```

- with yarn
  ```bash
  yarn add -D tailwindcss @ayato-san/tailwind-scrollbar
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
