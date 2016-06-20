module.exports = function(grunt) {


var mozjpeg = require('imagemin-mozjpeg');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

     uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/perfmatters.min.js': ['js/perfmatters.js']

        }
      }
    },

     critical: {
    dist: {
        options: {
            minify: true,
            inline: true,
            base: './',
            css: 'css/style.css',
            width: 1200,
            height: 800
        },
        src: 'index.html',
        dest: 'dist/index.html'
    },


      imagemin: {                          // Task
          static: {                          // Target
          options: {                       // Target options
            optimizationLevel: 3,
            svgoPlugins: [{ removeViewBox: false }],
            use: [mozjpeg()]
        },
          files: {                         // Dictionary of files
          'dist/img/2048.png': ['img/2048.png'], // 'destination': 'source'
          'dist/img/profilepic.jpg': ['img/profilepic.jpg'],
          'dist/img/cam_be_like.jpg': ['img/cam_be_like.jpg'],
          'dist/img/mobilewebdev.jpg': ['img/mobilewebdev.jpg'],
          'dist/img/pizzeria.jpg': ['views/img/pizzeria.jpg']

         },
        }
      },

      jshint: {
      files: ['Gruntfile.js', 'src/js/perfmatters.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
      }
     }

     });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-critical');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['critical', 'uglify', 'jshint', 'imagemin']);

  };