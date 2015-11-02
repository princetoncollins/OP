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
        options: {
            port: 1337,
            'index': {
            tasks: ['public/index.html', 'server.js'],
            output: 'index'
          }
        }
    }
});


  
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-serve');
grunt.registerTask('default', ['concat', 'serve']);

};