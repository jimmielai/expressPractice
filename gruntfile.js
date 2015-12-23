module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ["./*.js"],
      options: {
        unused: true
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");

  grunt.registerInitTask("default", ["jshint"]);
};