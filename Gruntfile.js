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

            },


            imagemin: {
                dynamic: {
                    files: [{
                        expand: true,
                        cwd: 'img/',
                        src: ['**/*.{png,jpg,gif}'],
                        dest: 'dist/img/'
                    }]
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

    );

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-critical');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['critical', 'uglify', 'jshint', 'imagemin']);

};