var gulp = require('gulp'),
    seajsCombo = require( 'gulp-seajs-combo'),  //seajs合并
    uglify = require('gulp-uglify'),             //js压缩
    minifycss = require('gulp-minify-css'),     //css压缩
    concat = require('gulp-concat'),            //文件合并
    rename = require('gulp-rename'),            //文件更名
    notify = require('gulp-notify'),            //提示信息
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect');


var alias={
    'jquery':'jquery-1.7.2_sea.min.js',
    'json':'json2.js',
    'nicescroll':'jquery.nicescroll-sea.js',
    'iScroll':'iScroll.js',
    'eCharts':'echarts-all.js',
    'rc_common':'reportCenter_common.js',
    'common':'common_sea.js',
    'respond':'respond.js',
    'slides':'jquery.slides.js',
    'user_common':'user_common.js',
    'user_reg_mod':'user_reg_mod.js',
    'mall_mod':'gene_mall_mod.js'
};
var ignore=['jquery','nicescroll','iScroll','eCharts','config.js','rc_common','common','respond','user_common','user_reg_mod'];



gulp.task('connect', function() {
    connect.server({
        port:8080,
        livereload:true
    });
});

gulp.task('listen',function(){
    watch('./yanAlert/sass/*.scss',function(){
        gulp.src('./yanAlert/sass/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./yanAlert/css'))
            .pipe(minifycss())
            .pipe(gulp.dest('./yanAlert/css'))
            .pipe(notify({ message: 'StyleSheet压缩 ok' }))
            .pipe(connect.reload())
    });
    watch('./yanAlert/js/yanAlert.js',function () {
        gulp.src( './yanAlert/js/yanAlert.js' )
            .pipe( seajsCombo({
                alias:alias,
                ignore:ignore
            }) )
            .pipe(uglify({
                alias: alias,
                mangle: {except: ['require' ,'exports' ,'module' ,'$','define','seajs','use','jquery']}//排除混淆关键字
            }))
            .pipe(gulp.dest('./yanAlert/js/dist'))
            .pipe(notify({ message: 'yanAlert ok' }))
            .pipe(connect.reload());
    })
});

gulp.task('yanAlert', ['connect','listen']);