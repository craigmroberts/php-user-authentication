var gulp = require('gulp'),
    postCss = require('gulp-postcss'),
    autoPrefixer = require('autoprefixer'),
    cssnano = require('gulp-cssnano'),
    sass = require('gulp-sass');

gulp.task('styles', function() {
    return gulp.src('./src/assets/styles/styles.scss')
      .pipe(sass())
      .pipe(postCss([autoPrefixer]))
      .on('error', function(errorInfo) {
          console.log(errorInfo.toString());
          this.emit('end');
      })
      .pipe(cssnano())
      .pipe(gulp.dest('./public/assets/styles/'));
});
