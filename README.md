[![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/coliff/light-mode-switch/master/LICENSE)
[![GitHub Super-Linter](https://github.com/coliff/light-mode-switch/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Best of JS](https://img.shields.io/endpoint?url=https://bestofjs-serverless.now.sh/api/project-badge?fullName=coliff%2Flight-mode-switch%26since=monthly)](https://bestofjs.org/projects/light-mode-switch)
[![GitHub Stars](https://img.shields.io/github/stars/coliff/light-mode-switch.svg?label=github%20stars)](https://github.com/coliff/light-mode-switch)
[![NPM Downloads](https://img.shields.io/npm/dt/light-mode-switch.svg)](https://www.npmjs.com/package/light-mode-switch)


# 🌓 Light Mode Switch

Add a light-mode theme toggle with a Bootstrap Custom Switch.

- Uses local storage to save preference
- Only 383 Bytes minified and gzipped!

## Quick start

Several quick start options are available:

- [Download the latest release](https://github.com/coliff/light-mode-switch/archive/v1.0.0.zip)
- Clone the repo `git clone https://github.com/coliff/light-mode-switch.git`
- Install with [npm](https://www.npmjs.com/package/light-mode-switch) `npm install light-mode-switch`
- Install with [yarn](https://yarnpkg.com/en/package/light-mode-switch) `yarn add light-mode-switch`

## Usage

1. Add your custom switch for the Light Mode toggle followed by the `Light-mode-switch.min.js` script:

Bootstrap 4.x

```html
<div class="custom-control custom-switch">
  <input type="checkbox" class="custom-control-input" id="lightSwitch" />
  <label class="custom-control-label" for="lightSwitch">Light Mode</label>
</div>
<script src="light-mode-switch.min.js"></script>
```

Bootstrap 5.x

```html
<div class="form-check form-switch">
  <input type="checkbox" class="form-check-input" id="lightSwitch" />
  <label class="custom-control-label" for="lightSwitch">Light Mode</label>
</div>
<script src="light-mode-switch.min.js"></script>
```

2. Edit the `light-mode.css` to suit your site - the one included here is a basic example.

## How it works

Turning light mode on will add `data-theme="light"` to the `body` tag. You can use CSS to target the elements on the page like so:

```css
[data-theme="light"] {
  background-color: #eee !important;
  color: #111;
}
```






## Demo

[Bootstrap 5 Demo page](https://coliff.github.io/light-mode-switch/index.html)

## Browser Support

Works well with all the browsers supported by [Bootstrap 4](https://getbootstrap.com/docs/4.5/getting-started/browsers-devices/#supported-browsers) and [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/browsers-devices/#supported-browsers)

## To Enable lightMode in Android Webview

- You need DOM Storage API in order to [make this work with WebView](https://github.com/mcnaveen/Android-Webview-lightmode-with-JavaScript).
- Inside OnCreate under WebView paste this line.

`WebSettings.setDomStorageEnabled(true)`

## Credits

Created thanks to the excellent [light-theme](https://codyhouse.co/blog/post/light-light-switch-css-javascript) and [local storage](https://codyhouse.co/blog/post/store-theme-color-preferences-with-localstorage) tutorials over at [codyhouse.co](https://codyhouse.co).
