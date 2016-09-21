var gulp = require('gulp');
var plumber = require('gulp-plumber');
var gmjml = require('gulp-mjml');
var mjml = require('mjml');

gulp.task('build', function(){
	return gulp.src('source/*.mjml')
		.pipe(plumber())
		.pipe(gmjml(mjml))
		.pipe(gulp.dest('build'));
});

gulp.task('default', ['build']);