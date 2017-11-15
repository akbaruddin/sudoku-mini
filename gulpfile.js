'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function () {
  browserSync.init({
      server: "./"
  });
  gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch' ]);
