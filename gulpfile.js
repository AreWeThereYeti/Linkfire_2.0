var gulp = require('gulp'),
		uglify = require('gulp-uglify'),
		connect = require('gulp-connect'),
	  compass = require('gulp-compass'),
		sass = require('gulp-ruby-sass'),
		gutil = require('gulp-util');


gulp.task('minify', function () {
	gulp.src('dev/scripts/**/*.js')
			.pipe(uglify())
			.pipe(gulp.dest('dist'))
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