var gulp = require('gulp'),
    postCss = require('gulp-postcss'),
    autoPrefixer = require('autoprefixer'),
    postCssImport = require('postcss-import')
    postCssVars = require('postcss-simple-vars'),
    postCssNested = require('postcss-nested'),
    postCssMixins = require('postcss-mixins'),
    postCssHexRgba = require('postcss-hexrgba'),
    cssnano = require('gulp-cssnano');

gulp.task('styles', function() {
    return gulp.src('./src/assets/styles/styles.css')
        .pipe(postCss([postCssImport, postCssMixins, postCssVars, postCssNested, postCssHexRgba, autoPrefixer]))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(cssnano())
        .pipe(gulp.dest('./public/assets/styles/'));
});
