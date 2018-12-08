var gulp = require('gulp'),
    webpack = require('webpack'),
    uglify = require('gulp-uglify');

    gulp.task('scripts', ['compileScripts'], function() {
        return gulp.src(['./src/temp/assets/scripts/App.js', './src/temp/assets/scripts/Vendor.js'])
            .pipe(uglify())
            .pipe(gulp.dest('./public/assets/scripts/'));
    });


  gulp.task('compileScripts',['modernizr'], function(callback) {
      webpack(require('../../webpack.config.js'),function(error, stats) {
          if (error) {
              console.log(error.toString());
          }
          console.log(stats.toString());
          callback();
      });
  });
