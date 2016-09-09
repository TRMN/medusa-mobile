var gulp = require('gulp');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');


gulp.task('templates', function () {
    gulp.src('assets/templates/*.handlebars')
        .pipe(handlebars({
            handlebars: require('handlebars')
        }))
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        .pipe(declare({
            namespace: 'medusa.templates',
            noRedeclare: true // Avoid duplicate declarations
        }))
        .pipe(concat('template.js'))
        .pipe(gulp.dest('asseets/js/'));
});

gulp.task('css', function () {
    return gulp.src('assets/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(concat('medusa.min.css'))
        .pipe(gulp.dest('www/css/'));
});


gulp.task('scripts', function () {
    return gulp.src('./assets/js/*.js')
        .pipe(concat('medusa.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('www/js/'));
});
