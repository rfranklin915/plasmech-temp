module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
		dist: {
		  options: {
			style: 'expanded',
			sourcemap: 'none',
			noCache: true,
			loadPath: require('node-bourbon').includePaths
		  },
		  files: {
			'css/styles.css': 'sass/styles.scss'
		  }
		}
	  },
	  watch: {
		  css: {
			files: '**/*.scss',
			tasks: ['sass']
		  }
		}
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};