var gulp = require('gulp');
var sass = require('gulp-sass');
var size = require('gulp-size');
var sassGlobbing = require('gulp-sass-glob');
var autoprefixer = require('gulp-autoprefixer');
var cssimport = require('gulp-cssimport');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

gulp.task('sass:compile', function() {
   return gulp.src('./input/sass/**/*.scss')
       .pipe(sassGlobbing())
       .pipe(sass())
       .pipe(autoprefixer())
       .pipe(cssimport())
       .pipe(gulp.dest('./input/css/'));
});

gulp.task('css:minify-concat', function() {
   return gulp.src('./input/css/**/*.css')
       .pipe(concat('all.css'))
       .pipe(cssmin())
       .pipe(gulp.dest('./output/css/'));
});

gulp.task('javascript:minify-concat', function() {
   return gulp.src('./input/js/**/*.js')
       .pipe(uglify())
       .pipe(concat('all.min.js'))
       .pipe(gulp.dest('./output/js/'));
});

gulp.task('size:js', function() {
   return gulp.src('./input/js/**/*.js')
       .pipe(size({showFiles: true}))
});

gulp.task('size:css', function() {
   return gulp.src('./input/css/**/*.css')
       .pipe(size({showFiles: true}))
});

gulp.task('size:minified-js', function() {
   return gulp.src('./output/js/**/*.js')
       .pipe(size({showFiles: true}))
});

gulp.task('size:minified-css', function() {
   return gulp.src('./output/css/**/*.css')
       .pipe(size({showFiles: true}))
});