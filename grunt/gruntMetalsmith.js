module.exports = function(grunt){
  grunt.config('metalsmith', {
    proofOfConcept: {
      options: {
        metadata: {
        },
        plugins: {
          "metalsmith-react-templates": {
            "baseFile": "helloWorld.html",
            "defaultTemplate": null
          }
        }
      },
      src: 'components',
      dest: 'dest/'
    }
  })
  grunt.loadNpmTasks('grunt-metalsmith');
  grunt.registerTask('buildMetalsmith', 'metalsmith');
}
