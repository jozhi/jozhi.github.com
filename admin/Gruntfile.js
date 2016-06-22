module.exports = function(grunt) {
    var jsBasicPath="js/basicComponents/";
    var jsMethodPath="js/method/";
	var templuteUrl = "WEB-INF/templates/h5/views/";
    grunt.initConfig({
    	jsVersion: grunt.file.readJSON('package.json'),
    	concat: {
    		options:{
                separator:';\n'
            },
    	    dist: {
    	      files: {
                  'js/basic.all.js':[
                      jsBasicPath+'angular.min.js',
                      jsBasicPath+'angular.cookie.js',
                      jsBasicPath+'angular-carousel.js',
                      jsBasicPath+'angular-date-binder.js',
                      jsBasicPath+'angular-lazy-img.js',
                      jsBasicPath+'angular-sanitize.js',
                      jsBasicPath+'angular-touch.js',
                      jsBasicPath+'angular-ui-router.js',
                      jsBasicPath+'bindonce.js',
                      jsBasicPath+'fastclick.js',
                      jsBasicPath+'qiniu/plupload.full.min.js',
                      jsBasicPath+'qiniu/qiniu.js',
                      jsBasicPath+'LSwiperMaker.js'

                  ],
                  'js/method.all.js':[
                      jsMethodPath+'**.js'
                  ]
              }
    	    }
    	},
    	cssmin: {
            options: {
                banner: '/* minimum */',
                rebase:false
            },
  	        compress: {
  			     files: {
  			          'css/all.min.css': [
    					  'css/reset.css',
    					  'css/angular-carousel.css',
    					  'css/new-base.css'
                      ]
  	             }
            }
  	    },
        uglify: {
            options: {
                compress: {
                    drop_console: true
                }
        },
            build: {
            	files:{
            		'js/app.all.min.js': ["js/basic.all.js","js/method.all.js"]
                }
            }
        },
        ngtemplates:  {
            app:        {
                src:      templuteUrl+'**/**.html',
                dest:     'js/method/template.js',
                options:    {
                    htmlmin:  {
                        collapseWhitespace: true,
                        collapseBooleanAttributes: true
                    }
                    //prefix: '/' //前缀
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', [ 'ngtemplates','concat', 'uglify','cssmin']);
    
};