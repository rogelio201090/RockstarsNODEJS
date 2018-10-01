module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: { sourcemap: 'none' },
        files: [{
          expand: true,
          cwd: 'source/sass',
          src: ['**/*.scss'],
          dest: 'public/stylesheets',
          ext: '.css'
      }]
      }
    },
    watch: {
      app: {
        files: [
          'public/stylesheets/*.css',
          'public/javascripts/*.js',
          'views/**/*.pug'
        ],
        options: {livereload: 4201}
      },
      styles: {
        files: ['source/**/*.scss'],
        tasks: ['sass'],
        options: {atBegin: true}
      }
    },
    concurrent: {
      options: {logConcurrentOutput: true},
      dev: ['watch:app', 'watch:styles']
    }
  });
  // grunt.registerTask('default', ['sass']);
  // grunt.registerTask('build', ['sass']);
  grunt.registerTask('watching', ['watch:styles']);
  grunt.registerTask('default', ['concurrent:dev']);
}
