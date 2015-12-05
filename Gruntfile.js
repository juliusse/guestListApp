module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      options: {
        mangle: false,
        compress: false,
        beautify: true
      },
      app: {
        files: {
          'public/dist/app.min.js': [
            'public/tmp/templates.js',
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
      tmp : ['public/tmp'],
      app: [
        'public/tmp',
        'public/dist/app*'
      ],
      all: ['public/dist']
    },

    sass: {
      options: {},
      app: {
        files: {
         'public/dist/app.min.css': [
            'public/src/sass/**/*.scss'
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
    },

    html2js: {
      app: {
        options: {
            base: 'public/src/views'
          },
          src: ['public/src/views/**/*.tpl.html'],
          dest: 'public/tmp/templates.js',
          module: 'guestListApp.templates'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-html2js');

  grunt.registerTask('up', ['clean:app', 'html2js', 'uglify:app', 'sass:app', 'clean:tmp']);
  grunt.registerTask('build', ['clean:all', 'html2js', 'uglify', 'sass', 'copy', 'clean:tmp']);
};