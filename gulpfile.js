var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-cssmin');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var minifyJs = require('gulp-uglify');

var paths = {
  img: './dev/img/**/*',
  js: './dev/js/**/*.js',
  html: './dev/**/*.html',
  sass: './dev/sass/**/*'
};

var dests = {
  img: './dist/img/',
  html: './dist/'
};

gulp.task('default', ['server', 'watch']);

gulp.task('sass-compile', function() {
  return gulp.src('./dev/sass/main.scss')
    .pipe(sass()).on('error', sass.logError)
    .pipe(minifyCss())
    .pipe(gulp.dest('./dev/'));
});

gulp.task('js-concat', function() {
  return gulp.src([
    'dev/js/vendors/jquery.js',
    'dev/js/vendors/angular.js',
    'dev/js/vendors/angular-route.js',
    'dev/js/app.js',
    'dev/js/controllers/home-controller.js',
    'dev/js/directives/menu-simulados.js',
//    'dev/js/components/altera-tamanho-fonte.js'
  ])
    .pipe(concat('main.js'))
//    .pipe(minifyJs({ mangle: false }))
    .pipe(gulp.dest('dev/'));
});

gulp.task('server', ['sass-compile', 'js-concat'], function() {
  browserSync.init({
    server: {
      baseDir: 'dev'
    }
  });
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass-compile']).on('change', browserSync.reload);
  gulp.watch(paths.js, ['js-concat']).on('change', browserSync.reload);
  gulp.watch(paths.html).on('change', browserSync.reload);
});
