var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var svgo = require('gulp-svgo');

gulp.task('font', function() {
  return gulp
    .src('icons/*.svg')
    .pipe(iconfont({
      fontName: 'petalmd',
      prependUnicode: true,
      normalize: true,
      fontHeight: 1001,
      formats: ['ttf', 'eot', 'woff', 'woff2'],
      autohint: true,
      timestamp: Math.round(Date.now() / 1000),
      round: 10e1
    }))
    .on('glyphs', function(glyphs) {
      var options = {
        glyphs: glyphs.map(function(glyph) {
          return {
            name: glyph.name,
            codepoint: glyph.unicode[0].charCodeAt(0)
          };
        })
      };
      return gulp
        .src('skel/*.scss')
        .pipe(consolidate('lodash', options))
        .pipe(gulp.dest('scss/petalmd-font'));
    })
    .pipe(gulp.dest('fonts'));
});

gulp.task('svgo', function() {
  return gulp.src('icons/*')
      .pipe(svgo())
      .pipe(gulp.dest('icons'));
});

gulp.task('default', ['font']);
