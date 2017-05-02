
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  sass: {
      options: {
        sourceMap: true //pokaże źródło pliku w sassie
      },
      dist: {
        files: {
          'newstyle.css': 'newstyle.sass' // po prawej stronie pokazuje gdzie szukać pliku sass, i po lewej gdzie zapisać CSS - u nas te pliki są w głównym katalogu - zmieniamy nazwy na takie jak mamy w pliku
        }
      }
    },
  imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'images/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'images/build/'
        }]
    }
  },
  watch: {
    scripts: {
        files: ['*.sass'],
        tasks: ['sass'],
        options: {
            spawn: false,
        },
    } 
  },
  browserSync: {
    bsFiles: {
        src : ["index.html", "newstyle.css"]
    },
    options: {
        server: {
            baseDir: "./"
        }
    }
  }
  });
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-sass'); //musimy zainstalować ten plugin -z kodilla  npm install --save-dev grunt-sass
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  // Default task(s).
  grunt.registerTask('default', ['sass', 'imagemin', 'browserSync', 'watch']);  //w nawiasie kwadratowym wpisujemy nazwę taska, tą którą wpisaliśmy w 6-tej linijce
};