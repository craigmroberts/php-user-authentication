var gulp = require('gulp'),
    svgSprites = require('gulp-svg-sprite'),
    rename = require('gulp-rename'),
    del = require('del'),
    svg2png = require('gulp-svg2png');

var config = {
    shape: {
        spacing: {
            padding: 1
        }
    },
    mode: {
        css: {
            variables: {
                    replaceSvgWithPng: function() {
                        return function(sprite, render) {
                            return render(sprite).split('.svg').join('.png');
                        }
                    }
            },
            sprite: 'sprite.svg',
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
}

gulp.task('icons',['beginClean','createSprite','createPngCopy','copySpriteGraphic','copySpriteCss', 'endClean']);

gulp.task('beginClean', function() {
    return del(['./src/temp/sprite/']);
});

gulp.task('createSprite', ['beginClean'], function() {
    return gulp.src(['./src/assets/images/svg/**/*.svg', './src/assets/images/illustrations/**/*.svg'])
        .pipe(svgSprites(config))
        .pipe(gulp.dest('./src/temp/sprite/'));
});

gulp.task('createPngCopy', ['createSprite'] ,function() {
    return gulp.src('./src/temp/sprite/css/*.svg')
        .pipe(svg2png())
        .pipe(gulp.dest('./src/temp/sprite/css'))
});

gulp.task('copySpriteGraphic',['createPngCopy'], function() {
     return gulp.src('./src/temp/sprite/css/**/*.{svg,png}')
        .pipe(gulp.dest('./public/assets/images/sprites'));
});

gulp.task('copySpriteCss', ['createSprite'], function() {
    return gulp.src('./src/temp/sprite/css/**/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./src/assets/styles/modules'));
});

gulp.task('endClean', ['copySpriteGraphic','copySpriteCss'], function() {
    return del(['./src/temp/sprite']);
});
