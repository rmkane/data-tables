module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      dist: {
        files: [ {
		  src: 'index.html',
		  dest: 'dist/index.html'
		} ]
      }
    },

    'useminPrepare': {
      options: {
        dest: 'dist'
      },
      html: 'index.html'
    },

    usemin: {
      html: ['dist/index.html']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.registerTask('default', ['useminPrepare', 'copy', 'concat', 'uglify', 'usemin']);
};
