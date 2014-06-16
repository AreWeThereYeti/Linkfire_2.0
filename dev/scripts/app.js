'use strict';

angular.module('linkfireWebappApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'duScroll',
    'ngAnimate',
		'ngFacebook'
  ])

  .config(function ($routeProvider,$locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    /*Removes hashtag from url in supported browsers*/
    $locationProvider.html5Mode(true);
  })

	//		Use constants for "global" variables
		.constant('constants', {
			testApi: "http://linkfire.test.dev.rocketlabs.dk'",
			liveApi: "test : System wide api path"
	})

	.run( function( $rootScope ) {
		// Cut and paste the "Load the SDK" code from the facebook javascript sdk page.

		// Load the facebook SDK asynchronously
		(function(){
			var fbLoaded = false;
			window.fbAsyncInit = function() {
				FB.init({
					'appId': FB_APPID,
					'channelUrl': '//channel.php',
					'status': true,
					'cookie': false,
					'xfbml': true
				});
				fbLoaded = true;
				FB.Canvas.setAutoGrow();
				FB.Canvas.scrollTo(0, 0);
			};

			(function(d, s, id){
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) {return;}
				js = d.createElement(s); js.id = id;
				js.src = "//connect.facebook.net/en_US/all.js";
				fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));

		}());
	});