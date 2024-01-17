const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImgs(){
    return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

function comprimeJs(){
    return gulp.src('./src/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
}

function compilaSass(){
    return gulp.src('./src/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist'));
}

exports.default = function(){
    gulp.watch('./src/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./src/*.js', { ignoreInitial: false }, gulp.series(comprimeJs));
    gulp.watch('./src/images/*', { ignoreInitial: false }, gulp.series(comprimeImgs));
}