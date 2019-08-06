var gulp = require('gulp'),
    minCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    minify = require('gulp-minify'),
    browserSync = require('browser-sync').create();

gulp.task('move', function(){
    gulp.src('app/css/main.css')
    .pipe(gulp.dest('demo/css'));
});

gulp.task('minCSS', function(){
    gulp.src('app/css/main.css')
    .pipe(minCSS())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
});

gulp.task('minJS', function(){
    gulp.src('app/js/main.js')
    .pipe(minify())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['minCSS', 'minJS'], function() {

    browserSync.init({
        server: "app/"
    });

    gulp.watch("app/css/*.css", ['minCSS']);
    gulp.watch("app/js/*.js", ['minJS']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);

