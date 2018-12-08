var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function() {

    browserSync.init({
        notify: false,
        port: 8080,
    		proxy: 'http://php-user-authentication.com/', // MAMP vhost
    		reloadOnRestart: true,
    });

    watch(['./src/**/*.php','./config/**/*.php'], function() {
        browserSync.reload();
    })

    watch('./src/assets/styles/**/*.css', function() {
        gulp.start('cssInject');
    });

    watch('./src/assets/scripts/**/*.js', function() {
        gulp.start('scriptsRefresh');
    });
});

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./public/assets/styles/styles.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
    browserSync.reload();
})
