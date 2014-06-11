'use strict';

angular.module('linkfireWebappApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'duScroll',
    'ngAnimate'
  ])
  .config(function ($routeProvider,$locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../app.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });


    /*Removes hashtag from url in supported browsers*/
    $locationProvider.html5Mode(true);
  });
