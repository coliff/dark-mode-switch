[![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/coliff/dark-mode-switch/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![BestofJS: Hot Project](https://img.shields.io/badge/bestofjs.org-Hot%20Project-orange)](https://bestofjs.org/projects/dark-mode-switch)
[![GitHub Stars](https://img.shields.io/github/stars/coliff/dark-mode-switch.svg?label=github%20stars)](https://github.com/coliff/dark-mode-switch)
[![NPM Downloads](https://img.shields.io/npm/dt/dark-mode-switch.svg)](https://www.npmjs.com/package/dark-mode-switch)

# 🌓 Dark Mode Switch

Add a dark-mode theme toggle with a Bootstrap Custom Switch.

- Uses local storage to save preference
- Only 262 Bytes minified and gzipped!

## Quick start

Several quick start options are available:

- [Download the latest release](https://github.com/coliff/dark-mode-switch/archive/v1.0.0.zip)
- Clone the repo `git clone https://github.com/coliff/dark-mode-switch.git`
- Install with [npm](https://www.npmjs.com/package/dark-mode-switch) `npm install dark-mode-switch`
- Install with [yarn](https://yarnpkg.com/en/package/dark-mode-switch) `yarn add dark-mode-switch`

## Usage

1. Add your custom switch for the Dark Mode toggle followed by the `dark-mode-switch.min.js` script:

```html
<div class="custom-control custom-switch">
  <input type="checkbox" class="custom-control-input" id="darkSwitch" />
  <label class="custom-control-label" for="darkSwitch">Dark Mode</label>
</div>
<script src="dark-mode-switch.min.js"></script>
```

2. Edit the `dark-mode.css` to suit your site - the one included here is a very basic example.

## How it works

Turning dark mode on will add `data-theme="dark"` to the `body` tag. You can use CSS to target the elements on the page like so:

```css
[data-theme="dark"] {
  background-color: #111 !important;
  color: #eee;
}
```

## Demo

[Demo page](https://coliff.github.io/dark-mode-switch/index.html)

## Browser Support

Works well with all the browsers [supported by Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/browsers-devices/#supported-browsers)

## Credits

Created thanks to the excellent [dark-theme](https://codyhouse.co/blog/post/dark-light-switch-css-javascript) and [local storage](https://codyhouse.co/blog/post/store-theme-color-preferences-with-localstorage) tutorials over at [codyhouse.co](https://codyhouse.co).
