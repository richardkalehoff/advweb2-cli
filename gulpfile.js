'use strict';
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('mocha');
var excludeGitignore = require('gulp-exclude-gitignore');

gulp.task('lint', function () {
    return gulp.src('**/*.js')
        .pipe(excludeGitignore())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('test', function (cb) {
    var mochaErr;

    gulp.src('tests/**/*.js')
        .pipe(mocha({reporter: 'spec'}))
        .on('error', function (err) {
            mochaErr = err;
        })
        .on('end', function () {
            cb(mochaErr);
        });
});

gulp.task('default', ['lint']);
