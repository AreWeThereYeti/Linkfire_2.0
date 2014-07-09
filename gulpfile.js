var gulp = require('gulp'),
		uglify = require('gulp-uglify'),
		connect = require('gulp-connect'),
		cssmin = require('gulp-cssmin'),
		sass = require('gulp-ruby-sass'),
		compass = require('gulp-compass'),
		gutil = require('gulp-util'),
		concat = require('gulp-concat'),
		rename    = require('gulp-rename'); // to rename any file


gulp.task('minify', function () {
	gulp.src('dev/scripts/**/*.js')
			.pipe(uglify())
			.pipe(gulp.dest('.tmp/'))
});


gulp.task('concat', function() {
	gulp.src('.tmp/**/*.js')
			.pipe(concat('all.js'))
			.pipe(gulp.dest('./dist/scripts'))
});

gulp.task('css', function () {
	gulp.src('dev/stylesheets/**/*.css')
			.pipe(cssmin())
			.pipe(rename({suffix: '.min'}))
			.pipe(gulp.dest('dist/stylesheets'));
});


//Start webserver on localhost /localhost:3000
gulp.task('webserver', function() {
	connect.server({
//		Start project from "dev" folder
		root : ['dev'],
		port: process.env.PORT || 3000,
		livereload: true,
		open: {
			file: 'dev/index.html',
			browser: 'Google Chrome'
		}
	});
});

gulp.task('default', ['webserver']);
gulp.task('build', ['minify', 'concat', 'css' ]);