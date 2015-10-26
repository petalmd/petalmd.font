<p align="center">
  <img height="30%" width="30%" src="http://i.imgur.com/qwuHMDB.png" alt="scoville"/>
</p>
---

This is a scss-powered icon font for our beloved [Scoville](https://petalmd.com) application, it has been designed to reduce the pain of rendering vector-based icons by using simple html classes, scss functions and mixins.

## Installation

Add this to line to your `package.json` file:

```json
"scoville-font": "https://github.com/gcoguiec/scoville-font.git#master"
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
```

### .eot, .ttf, .woff and .woff2 fonts

The font files are availables into the `node_modules/scoville-font/fonts/` directory, you just need to refer them into your favorite asset pipeline.

## Configuration

The default font class prefix can be changed through the `sf-css-prefix` variable:

```scss
$sf-css-prefix: 'sf';
```
Please note there's more variables available in the `scss/scoville-font/_settings.scss` file.


## Usage

Every icon is registed as a `sf-` prefixed class, so if the targeted icon is named `download` rendering it will look like :

```html
<i class="sf sf-download"></i>
```
### Mixins & functions

The same goal can be achieved by using the `sf-icon` mixin:

```scss
a.download {
  i {
    @include sf-icon('download');
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

Larger version of icons can be rendered using `sf-2x`, `sf-3x`, `sf-4x` and `sf-5x` classes:

```html
<i class="sf sf-download sf-2x"></i>
```

### Stacked icons

Sometimes you may want to render a more complex icon configuration by stacking more than one icon:

```html
<span class="sf-stack sf-lg">
  <i class="sf sf-first-icon sf-stack-2x"></i>
  <i class="sf sf-second-icon sf-stack-1x"></i>
</span>
```

## Hacking on the font

### I want to add a new icon to the font

Adding a font to the `icons` folder will do the job, icon file must be a `.svg` file.
Please note that your file name will be used as a reference for the generated class name.

If you're using Adobe Illustrator, please save your file as SVG with the following settings:

- SVG Profiles: SVG 1.1
- Fonts Type: SVG
- Fonts Subsetting: None
- Options Image Location: Embed
- Advanced Options
  - CSS Properties: Presentation Attributes
  - Decimal Places: 1
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

This project is extensively using `gulp` for generating the font, let's run it:

```sh
npm install -g gulp
```

```sh
gulp
```

That's it, have fun!
