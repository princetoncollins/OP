module.exports = function(grunt) {

grunt.initConfig({
  concat: {
    js: {
      src: ['public/app.js', 'server.js', 'public/controllers/mainCtrl.js'],
      dest: 'build/js/scripts.js',
    },
    css: {
      src: ['public/style.css', 'public/scripts-plugins/animate.css', 'public/scripts-plugins/hover-min.css'],
      dest: 'build/css/styles.css'
    },
    html: {
      src: ['public/index.html', 'public/views/main.html'],
      dest: 'build/html/index.html'
    }
  },
  watch: {
    js: {
      files: ['js/**/*.js'],
      tasks: ['concat:js'],
    },
     css: {
      files: ['css/**/*.css'],
      tasks: ['concat:css'],
    },
    html: {
      files: ['html/**/*.html'],
      tasks: ['concat:html'],
    }
  },
  serve: {
        // 'path': 'public/index.html',
        options: {
            port: 1337
            // 'index.js': {
            // tasks: ['index.html', 'server.js'],
            // output: 'index.js'
          }
        },
  connect: {
    options: {
      port: 1337,
      // base: 'public'
      hostname: '0.0.0.0'
    }
  }
});



  
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-serve');
grunt.registerTask('default', ['concat', 'serve', 'connect']);
grunt.loadNpmTasks('grunt-connect');

};