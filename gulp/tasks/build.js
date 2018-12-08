var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    browserSync = require('browser-sync').create();

gulp.task('build',['deleteDistFolder','optimizeImages','copyGeneralFiles','useminTrigger']);

gulp.task('deleteDistFolder',['icons'], function() {
    return del('./src/temp');
});

gulp.task('optimizeImages',['deleteDistFolder'], function() {
    return gulp.src(['./src/assets/images/**/*','!./src/assets/images/icons','!./src/assets/images/icons/**/*'])
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest('./public/assets/images'))
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {

    var pathsToCopy = [
      './src/temp/**/*',
      '!./src/temp/assets/svg',
      '!./src/temp/assets/svg/*',
      '!./src/temp/assets/svg/**/*'
    ];

    return gulp.src(pathsToCopy)
      .pipe(gulp.dest('./public'));
});


gulp.task('useminTrigger', ['deleteDistFolder'], function(){
    gulp.start('usemin');
});

gulp.task('usemin', ['styles', 'scripts'], function(){

});
