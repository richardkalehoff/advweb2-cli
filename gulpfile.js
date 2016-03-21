'use strict';
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');
var excludeGitignore = require('gulp-exclude-gitignore');

gulp.task('lint', function () {
    return gulp.src('**/*.js')
        .pipe(excludeGitignore())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('test', function () {
    return gulp.src('tests/**/*.js')
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('default', ['lint', 'test']);
