<p align="center">
  <img height="30%" width="30%" src="http://i.imgur.com/qwuHMDB.png" alt="scoville"/>
</p>
---

This is a scss-powered icon font for our beloved [Scoville](https://petalmd.com) application, it has been designed to reduce the pain of rendering vector-based icons by using simple html classes, scss functions and mixins.

## Installation

Add this to line to your `package.json` file:

```json
"scoville-font": "https://github.com/petaldevelopment/scoville-font.git#master"
```

### scss

If you're using `libsass` you may want to include the font scss using the `includePaths` option:

```javascript
includePaths: ['node_modules/scoville-font/scss/']
```

Finally you can load the font styles into your scss tree:

```scss
@import 'scoville-font';
```

By default the scss file is providing the entire toolkit, If you want a granular control on the imports, no problem, you can still include them on a per-feature basis:

```scss
@import 'scoville-font/core';
@import 'scoville-font/mixins';
@import 'scoville-font/larger';
@import 'scoville-font/stacked';
@import 'scoville-font/flipped';
@import 'scoville-font/rotated';
```

### .eot, .ttf, .woff and .woff2 fonts

The font files are availables into the [`node_modules/scoville-font/fonts/`](https://github.com/petaldevelopment/scoville-font/tree/master/fonts) directory, you just need to refer them into your favorite asset pipeline.

## Configuration

Please look at [`scss/scoville-font/_settings.scss`](https://github.com/petaldevelopment/scoville-font/blob/master/scss/scoville-font/_settings.scss) file.

## Usage

Every icon is registed as a mod class, so if the targeted icon is named `download` rendering it will looks like :

```html
<i class="icon -download"></i>
```
### Mixins & functions

The same goal can be achieved by using the `icon` mixin:

```scss
a.download {
  i {
    @include icon('download');
  }
}
```

And if you just want to obtain the glyph codepoint, well... there's a function for that:

```scss
span {
  &:before {
    content: glyph('download');
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

That's it, have fun!

## License

This project is UNLICENSED yet.

## Collaboration

Everyone is welcome to collaborate.
