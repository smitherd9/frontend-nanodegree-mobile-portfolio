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
          'dist/perfmatters.min.js': ['js/perfmatters.js'],
          'dist/css/style.css' : ['css/style.css']
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
          'dist/2048.png': 'src/img/2048.png', // 'destination': 'source'
          'dist/profilepic.jpg': 'src/img/profilepic.jpg',
          'dist/cam_be_like.jpg': 'src/img/cam_be_like.jpg',
          'dist/mobilewebdev.jpg': 'src/img/mobilewebdev.jpg'

      }
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
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['critical', 'uglify', 'jshint', 'imagemin', 'watch']);

  };