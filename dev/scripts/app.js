'use strict';

//Debugging function. Check if environment is local or testserver/liveserver
var appURL = '/app.html';
console.log("url " + appURL);

if(window.location.href.indexOf("linkfire.com") > -1) {
	appURL = "/lf2" + appURL;
	console.log("running on testserver " + appURL);
}
else{
	console.log("running locally " + appURL);
}


var linkfireWebappApp = angular.module('linkfireWebappApp', [
	'ngResource',
	'ngRoute',
	'ui.bootstrap',
	'duScroll',
	'ngAnimate',
	'ngFacebook',
	'ngTouch',
	'angular-carousel'
  ])

  .config(function ($routeProvider,$locationProvider, $httpProvider, $facebookProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'html/public.html',
        controller: 'MainCtrl'
      })
		  .when('/boards', {
        templateUrl: 'html/boards.html',
        controller: 'BoardsCtrl'
      })

	    //Static pages
	    .when('/about', {
		    templateUrl: 'html/about.html',
		    controller: ''
	    })
	    .when('/blog', {
		    templateUrl: 'html/about.html',
		    controller: ''
	    })
	    .when('/faq', {
		    templateUrl: 'html/faq.html',
		    controller: ''
	    })
	    .when('/qa', {
		    templateUrl: 'html/qa.html',
		    controller: ''
	    })
	    .when('/terms', {
		    templateUrl: 'html/terms.html',
		    controller: ''
	    })
		  .when('/contact-me', {
		    templateUrl: 'html/contact-me.html',
		    controller: ''
	    })
	    .when('/privacy', {
		    templateUrl: 'html/privacy.html',
		    controller: ''
	    })
      .otherwise({
        redirectTo: '/'
      });

//  Facebook app ID changeto facebook login when ready
		$facebookProvider.setAppId('296873817155458');

    /*Removes hashtag from url in supported browsers*/
    //$locationProvider.html5Mode(true);

//		Pushes bearer token into all api requests
		$httpProvider.interceptors.push('authInterceptor');
  })

	//		Use constants for "global" variables
		.constant('constants', {
//			Api paths
			testApi: "http://linkfire.test.dev.rocketlabs.dk'",
			liveApi: "http://api.linkfire.com/"
	})

	.run( function( $rootScope ) {
		// Cut and paste the "Load the SDK" code from the facebook javascript sdk page.

			// Load the facebook SDK asynchronously
			(function(){
				// If we've already installed the SDK, we're done
				if (document.getElementById('facebook-jssdk')) {return;}

				// Get the first script element, which we'll use to find the parent node
				var firstScriptElement = document.getElementsByTagName('script')[0];

				// Create a new script element and set its id
				var facebookJS = document.createElement('script');
				facebookJS.id = 'facebook-jssdk';

				// Set the new script's source to the source of the Facebook JS SDK
				facebookJS.src = '//connect.facebook.net/en_US/all.js';

				// Insert the Facebook JS SDK into the DOM
				firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
			}());
	});
