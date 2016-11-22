var gulp = require('gulp'),
    seajsCombo = require( 'gulp-seajs-combo'),  //seajs合并
    glify = require('gulp-uglify'),             //js压缩
    minifycss = require('gulp-minify-css'),     //css压缩
    concat = require('gulp-concat'),            //文件合并
    rename = require('gulp-rename'),            //文件更名
    notify = require('gulp-notify'),            //提示信息
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        port:8080,
        livereload:true
    });
});

gulp.task('listen',function(){
    watch('./confrim/sass/*.scss',function(){
        gulp.src('./confrim/sass/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./confrim/css'))
            .pipe(minifycss())
            .pipe(gulp.dest('./confrim/css/dist'))
            .pipe(notify({ message: 'StyleSheet压缩 ok' }))
            .pipe(connect.reload())
    });
});

gulp.task('confrim', ['connect','listen']);