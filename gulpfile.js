var gulp = require("gulp");
var jshint = require("gulp-jshint");

gulp.task("default", function(){
  //console.log("Hello Gulp");

  return gulp.src("./*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("default"));
});