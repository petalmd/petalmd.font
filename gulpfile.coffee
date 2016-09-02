gulp = require 'gulp'
iconfont = require 'gulp-iconfont'
consolidate = require 'gulp-consolidate'

gulp.task 'font', ->
  gulp
    .src 'icons/*.svg'
    .pipe iconfont
      fontName: 'petalmd'
      prependUnicode: true
      normalize: true
      fontHeight: 500
      formats: ['ttf', 'eot', 'woff', 'woff2']
      autohint: true
      timestamp: Math.round(Date.now() / 1000)
      round: 10e1
    .on 'glyphs', (glyphs) ->
      options =
        glyphs: glyphs.map (glyph) ->
          name: glyph.name, codepoint: glyph.unicode[0].charCodeAt(0)
      gulp
        .src 'skel/*.scss'
        .pipe consolidate 'lodash', options
        .pipe gulp.dest 'scss/petalmd-font'
    .pipe gulp.dest 'fonts'

gulp.task 'default', ['font']
