var gulp = require('gulp');
var ts = require('gulp-typescript');
var rimraf = require('gulp-rimraf');
var nodemon = require('gulp-nodemon');
var gls = require('gulp-live-server');

gulp.task('cleanFrontEndBuildDir', function(){
  return gulp.src('build/frontend').pipe(rimraf());
}); 
 
gulp.task('cleanBackEndBuildDir', function(){
  return gulp.src('build/backend').pipe(rimraf());
}); 
 
gulp.task('buildBackEnd', ['cleanBackEndBuildDir'],  function () {
  var tsResult = gulp.src('src/backend/**/*.ts')
    .pipe(ts({
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "module": "commonjs",
        "target": "es5",
        "sourceMap": true
      }));
  return tsResult.js.pipe(gulp.dest('build/backend/'));
});

gulp.task('buildFrontEnd', ['cleanFrontEndBuildDir'],  function () {
  // Copy static assets
  gulp.src('src/frontend/public/**')
    .pipe(gulp.dest('build/frontend/'));  
  
  var tsResult = gulp.src('src/frontend/**/*.ts')
    .pipe(ts({
        "emitDecoratorMetadata": true,
          "experimentalDecorators": true,
        "module": "commonjs",
        "target": "es5",
        "sourceMap": true
      }));
  return tsResult.js.pipe(gulp.dest('build/frontend/'));
});

gulp.task('nodemon', ['buildBackEnd'], function(){
    nodemon({
        script: './build/backend/server.js'
    }).on('start', function(){
        console.log('nodemon started server.js');
    })
})

gulp.task('watch', [ 'buildFrontEnd' ], function() {
  gulp.watch('src/backdend/**/*.ts', [ 'buildBackEnd' ]);
  gulp.watch('src/frontend/**/*.ts', [ 'buildFrontEnd' ]);
});

gulp.task('default', ['watch', 'nodemon']);
