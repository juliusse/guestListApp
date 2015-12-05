module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      options: {},
      app: {
        files: {
          'public/dist/app.min.js': [
            'public/src/js/modules/**/*.js',
            'public/src/js/app.js'
          ]
        }
      },
      libs: {
        files: {
          'public/dist/libs.min.js': [
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/angular/angular.min.js'
          ]
        }
      }
    },

    clean: {
      app: ['public/dist/app*'],
      all: ['public/dist']
    },

    sass: {
      options: {},
      app: {
        files: {
         'public/dist/app.min.css': [
            'public/src/sass/*.scss'
          ]
        }
      },
      libs: {
        files: {
          'public/dist/libs.min.css': [
            'bower_components/bootstrap/dist/css/bootstrap.min.css'
          ]
        }
      }
    },

    copy: {
      fonts: {
        files: [{
          expand: true,
          flatten: true,
          src: 'bower_components/bootstrap/dist/fonts/*',
          dest: 'public/dist/fonts'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('up', ['clean:app', 'uglify:app', 'sass:app']);
  grunt.registerTask('build', ['clean:all', 'uglify', 'sass', 'copy']);
};