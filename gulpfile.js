var gulp = require('gulp');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var watch = require('gulp-watch');
cordova = require("cordova-lib").cordova;

var config = {
    assetsDir: "assets",
    cssPattern: "css/*.css",
    jsPattern: "js/*.js",
    hbPattern: "templates/*.handlebars"
};

gulp.task('watch', function () {
    gulp.watch(config.assetsDir + '/' + config.hbPattern, ['templates']);
    gulp.watch(config.assetsDir + '/' + config.cssPattern, ['css']);
    gulp.watch(config.assetsDir + '/' + config.jsPattern, ['scripts']);
});

gulp.task("build", function (callback) {
    cordova.build({
        "platforms": ["android", "ios"],
        "options": {
            argv: ["--gradleArg=--no-daemon"]
        }
    }, callback);
});

gulp.task('android', function (callback) {
    cordova.run({
        "platforms": ["android"]
    }, callback);
});

gulp.task('build-android', function (callback) {
    cordova.build({
        "platforms": ["android", "ios"],
        "options": {
            argv: ["--gradleArg=--no-daemon"]
        }
    }, callback);

    cordova.run({
        "platforms": ["android"]
    }, callback);
});

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
        .pipe(concat('09-templates.js'))
        .pipe(gulp.dest('assets/js/'));
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

gulp.task("default", ["templates", "css", "scripts"]);

