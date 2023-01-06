# petalmd.font

This is a scss-powered icon font for our beloved [PetalMD](https://petalmd.com) application, it has been designed to reduce the pain of rendering vector-based icons by using simple html classes, scss functions and mixins.

## Installation

```
npm install petalmd.font
```

### scss

1. Import the font styles into your scss tree:

```scss
@import 'petalmd.font';
```

2. Include the font-face in your application stylesheet:

```scss
@font-face {
  font-family: '#{$pf-font-name}';
  src: url('#{$pf-font-path}/#{$pf-font-name}.eot');
  src: url('#{$pf-font-path}/#{$pf-font-name}.eot?#iefix') format('embedded-opentype'),
    url('#{$pf-font-path}/#{$pf-font-name}.woff2') format('woff2'),
    url('#{$pf-font-path}/#{$pf-font-name}.woff') format('woff'),
    url('#{$pf-font-path}/#{$pf-font-name}.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
```

By default the scss file is providing the entire toolkit, If you want a granular control on the imports, no problem, you can still include them on a per-feature basis:

```scss
@import 'petalmd.font/core';
@import 'petalmd.font/mixins';
@import 'petalmd.font/larger';
@import 'petalmd.font/stacked';
@import 'petalmd.font/flipped';
@import 'petalmd.font/rotated';
```

Note: if you're using `libsass` you may want to include the font scss using the `includePaths` option:

```javascript
includePaths: ['node_modules/petalmd.font/scss/']
```

### .eot, .ttf, .woff and .woff2 fonts

The font files are availables into the [`node_modules/petalmd.font/fonts/`](https://github.com/petaldevelopment/petalmd.font/tree/master/fonts) directory, you just need to refer them into your favorite asset pipeline.

## Configuration

Please look at [`scss/petalmd.font/_settings.scss`](https://github.com/petaldevelopment/petalmd.font/blob/master/scss/petalmd.font/_settings.scss) file.

## Usage

### Mixins & functions

The same goal can be achieved by using the `icon-element` mixin:

```scss
a.download + i {
  @include icon-element;

  &:before {
    content: icon('download');
  }
}
```

## Hacking on the font

### I want to add a new icon to the font

Adding a file to the `icons` folder will do the job, the icon file must be a `.svg` file.
Please note that your file name will be used as a reference for the generated class name.

If you're using Adobe Illustrator, please save your file as SVG with the following settings:

- SVG Profiles: SVG 1.1
- Fonts Type: SVG
- Fonts Subsetting: None
- Options Image Location: Embed
- Advanced Options
  - CSS Properties: Presentation Attributes
  - Decimal Places: 2
  - Encoding: UTF-8
  - Output fewer <tspan> elements: check

Leave the rest unchecked.

### I want to build the font on my computer

First, clone this repository then install dependencies:

```sh
npm install
```

You must also install `ttfautohint@1.5`:

```sh
brew install ttfautohint
```

Then download version 1.5 from [here](https://s3.amazonaws.com/petalmd.jenkins-ios/ttfautohint.zip). Place the `1.5` folder in your ttfautohint folder and run :

```sh
brew switch ttfautohint 1.5
```

This project is extensively using `gulp` for generating the font, let's install & run it:

```sh
npm install -g gulp
```

```sh
gulp
```

### I want to add a new icon to Petalweb

- First of all, you have to read the previous paragraph and install `gulp` before going further
- Then, go in `petalmd.font/icons` folder and copy/paste your new icons
- Add your new icons in `/scss/petalmd-font/_glyphs.scss`
- Upgrade the version of the `package.json` file (example: ~~1.0.6~~ -> 1.0.7)
- Run the svgo task to optimize your new icons
```sh
gulp svgo
```
- Run the font task
```sh
gulp font
```
- Commit and push your new files
- Run npm login
```sh
npm login
```
(Visit the Petal documentation repo to find identification information)

- Run npm publish
```sh
npm publish
```
- Last thing, open the petalmd web app and update the petalmd-font version in `package.json` with the new one. (example: 1.0.7)


That's it, have fun!

## License

Apache 2 license for code and assets, please see [LICENSE](https://github.com/petalmd/petalmd.font/blob/master/LICENSE) file.

