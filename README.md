# petalmd.font

This is a scss-powered icon font for our beloved [PetalMD](https://petalmd.com) application, it has been designed to reduce the pain of rendering vector-based icons by using simple html classes, scss functions and mixins.

## Installation

```
npm intall petalmd.font
```

### scss

If you're using `libsass` you may want to include the font scss using the `includePaths` option:

```javascript
includePaths: ['node_modules/petalmd.font/scss/']
```

Finally you can load the font styles into your scss tree:

```scss
@import 'petalmd.font';
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

### .eot, .ttf, .woff and .woff2 fonts

The font files are availables into the [`node_modules/petalmd.font/fonts/`](https://github.com/petaldevelopment/petalmd.font/tree/master/fonts) directory, you just need to refer them into your favorite asset pipeline.

## Configuration

Please look at [`scss/petalmd.font/_settings.scss`](https://github.com/petaldevelopment/petalmd.font/blob/master/scss/petalmd.font/_settings.scss) file.

## Usage

Every icon is registed as a mod class, so if the targeted icon is named `download` rendering it will looks like :

```html
<i class="icon -download"></i>
```
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

### Larger icons

Larger version of icons can be rendered using `-large-2x`, `-large-3x`, `-large-4x` and `-large-5x` classes:

```html
<i class="icon -download -large-2x"></i>
<i class="icon -download -large-3x"></i>
<i class="icon -download -large-4x"></i>
<i class="icon -download -large-5x"></i>
```

### Stacked icons

Icons can also be stacked on each other throught the `stack` and `-stack-*` classes:

```html
<span class="stack -lg">
  <i class="icon -first-icon -stack-2x"></i>
  <i class="icon -second-icon -stack-1x"></i>
</span>
```

### Flipped icons

What's an icon font without the flip feature ?

```html
<i class="icon -download -flip-vertical"></i>
<i class="icon -download -flip-horizontal"></i>
```

### Rotated icons

You can easily rotate any icons by using `-rotate-*` classes:

```html
<i class="icon -download -rotate-90"></i>
<i class="icon -download -rotate-180"></i>
<i class="icon -download -rotate-270"></i>
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

You must also install `ttfautohint`:

```sh
brew install ttfautohint
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
- Then, go in `petalmd.font` folder and copy/past your new icons
- Upgrade the version of the `package.json` file (example: ~~1.0.6~~ -> 1.0.7)
- Run gulp
```sh 
gulp
```
- Commit and push your new files
- Tag your commit with the new version number (example: 1.0.7)
- Go on petalmd.font github repo and click on **Draft a new release**
- Then, go back on petalmd.font folder
- Run npm login
```sh
npm login
```
(Go on Petal documentation repo to find identification information)

- Run npm publish
```sh
npm publish
```
- Last thing, open the petalmd web app and update the petalmd-font version in `package.json` with the new one. (example: 1.0.7)

- Run yarn
```sh
yarn
```

That's it, have fun!

## License

Apache 2 license for code and assets, please see [LICENSE](https://github.com/petalmd/petalmd.font/blob/master/LICENSE) file.

