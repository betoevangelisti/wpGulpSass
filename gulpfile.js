/*
* Tema automatizado con Gulp y Sass.
* Beto Muñoz (humu).
* https://github.com/betoevangelisti/
*/

/*-- Dependencias --*/
var gulp = require('gulp'),						// Automatiza las tareas.
	watch = require('gulp-watch'),				// Vigila cambios en los archivos
	plumber = require('gulp-plumber'),			// Deteccion de errores en consola
	gulpSass = require('gulp-sass'),			// Procesa archivos ".sass" y los deja como  ".css".
	cleanCss = require('gulp-clean-css'),		// Minifica los archivos CSS.
	sourceMaps = require('gulp-sourcemaps'),	// Referencia de linea de codigo para el navegador 
	concat = require('gulp-concat'),			// Toma el contenido de varios archivos y los deja en un único archivo.
	jshint = require('gulp-jshint'),			// Testea calidad del código
	uglify = require('gulp-uglify'),			// Comprime y limpia el código Javasscript.
	livereload 	= require('gulp-livereload'),   // Detecta si hubo cambios en los archivos y refresca el navegador si los hay.
	imagemin 	= require('gulp-imagemin'),     // Comprime imágenes para dejarlas más livianas.
	notify = require('gulp-notify');			// Lanza notificaciones del sistema operativo.

var onError = function(err) {
	console.log('se ha producido un error:', err.message);
	this.emit('end');
}

	// Procesa y comprime los archivos sass
	gulp.task('sass', function(){
		return gulp.src('./src/sass/style.scss')
		.pipe(plumber({errorHandler:onError}))
		.pipe(sourceMaps.init())
		.pipe(gulpSass())
		.pipe(gulp.dest('.'))
		.pipe(cleanCss({keepSpecialComments: 1}))
		.pipe(sourceMaps.write('.'))
		.pipe(gulp.dest('.'))
		.pipe(livereload())
		.pipe(notify({message: 'Sass finalizado!'}))
	});


	gulp.task('lint', function(){
		return gulp.src('./src/js/**/*.js')
		.pipe(jshint())
	});

	// Minifica y deja en un único archivo los Javascript
	gulp.task('js', ['lint'], function(){
		return gulp.src('./src/js/**/*.js')
		.pipe(plumber({errorHandler:onError}))
		.pipe(concat('functions.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./js'))
		.pipe(livereload())
		.pipe(notify({message: 'js finalizado!'}))
	});

	// Comprime las imágenes
	gulp.task('imagemin', function(){
		return gulp.src('./src/images/**/*.*')
		.pipe(plumber({errorHandler:onError}))
		.pipe(imagemin({
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest('./images'))
		.pipe(livereload())
		.pipe(notify({message: 'imagenes optimizadas!'}))
	});

	// Monitorea si hay cambios
	gulp.task('watch', function(){
		livereload.listen()
		gulp.watch('./src/sass/**/*.scss', ['sass'])
		gulp.watch('./js/custom/**/*.js', ['js'])
		gulp.watch('./src/images/**/*.*', ['imagemin'])
	});

/*-- Llamo a las tareas --*/
gulp.task('default', ['sass', 'js', 'imagemin', 'watch'], function(){
	
});