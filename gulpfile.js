var gulp = require('gulp'),
		uglify = require('gulp-uglify'),
		connect = require('gulp-connect'),
		cssmin = require('gulp-cssmin'),
		gutil = require('gulp-util'),
		concat = require('gulp-concat'),
		rename    = require('gulp-rename'),
		watch = require('gulp-watch'),
		livereload = require('gulp-livereload'),
		ngAnnotate = require('gulp-ng-annotate'),
		clean = require('gulp-clean'),
		minifyHTML = require('gulp-minify-html');

//Clean tmp folder after tasks
gulp.task('clean', function () {
	return gulp.src('.tmp/', {read: false})
			.pipe(clean());
});

//Move html and minify
gulp.task('minify-html', function() {
	var opts = {comments:true,spare:true};
	gulp.src('./dev/*.html')
			.pipe(minifyHTML({
				empty:true
			}))
			.pipe(gulp.dest('./dist/'))
});

//Minify js and move to dist
gulp.task('minify', function () {
	gulp.src('dev/scripts/**/*.js')
			.pipe(ngAnnotate())
			.pipe(uglify('app.js', {
				mangle: false,
				output: {
					beautify: true
				}
			}))
			.pipe(gulp.dest('./dist/scripts'))
});

//Move html and minify
gulp.task('minify-template-html', function() {
	var opts = {comments:true,spare:true};
	gulp.src('./dev/html/**/*.html')
			.pipe(minifyHTML({
				empty:true
			}))
			.pipe(gulp.dest('./dist/html'))
});

gulp.task('css', function () {
	gulp.src('dev/stylesheets/**/*.css')
			.pipe(cssmin())
			.pipe(concat('main.css'))
			.pipe(rename({suffix: '.min'}))
			.pipe(gulp.dest('dist/stylesheets'));
});


//Watch folders and livereload on changes
gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('dev/**').on('change', livereload.changed);
});

//Start webserver on localhost /localhost:3000
gulp.task('webserver', function() {
	connect.server({
//		Start project from "dev" folder
		root : ['dev'],
		port: process.env.PORT || 3000
	});
});

gulp.task('default', ['webserver', 'watch']);
gulp.task('build', ['minify', 'css', 'minify-html', 'minify-template-html' ]);