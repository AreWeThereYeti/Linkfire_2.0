'use strict';

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
        templateUrl: 'app.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

//  Facebook app ID changeto facebook login when ready
		$facebookProvider.setAppId('296873817155458');

    /*Removes hashtag from url in supported browsers*/
    $locationProvider.html5Mode(true);
  })

	//		Use constants for "global" variables
		.constant('constants', {
//			Api paths
			testApi: "http://linkfire.test.dev.rocketlabs.dk'",
			liveApi: "http://linkfire.com/api"
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

