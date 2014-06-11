'use strict';

angular.module('linkfireWebappApp')
  .service('loginService', ['$rootScope', '$http', '$q', '$window', function LoginService($rootScope, $http, $q, $window) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    // defines the api url could be moved to config for consistency
    var API_ENDPOINT =  'http://linkfire.test.dev.rocketlabs.dk';
    var urlLogin= API_ENDPOINT + '/api/1.0/auth/login';
    var urlSignup = API_ENDPOINT + '/api/1.0/auth/login';

  /*    storageCheckService.getAuth(function(status){

        if(status.user){
            $location.path("/home");
            $scope.$apply();
        }
    });*/


    this.Login = function (params) {

      var defered = $q.defer();

//      Encrypt password
      var pass = CryptoJS.SHA1(params.password);
      $http({
        method	: 'POST',
        url		  : urlLogin,
        headers : {
          'Content-type' : 'application/json'
        },
        data    : {
          email:    params.email,
          password: pass.toString(CryptoJS.enc.Hex)}
      })
      .success(function (data, status, headers, config) {
        $window.localStorage.token = data.token;
        defered.resolve();
      })
      .error(function (data, status, headers, config) {
        // Erase the token if the user fails to log in
        delete $window.localStorage.token;

        // Handle login errors here
        var message = 'Error: Invalid user or password';
      });
      return defered.promise;
    };

    this.Signup = function (params) {

      $http({
        method	: 'POST',
        url		  : urlSignup,
        headers : {
            'Content-type' : 'application/json'
        },
        data    : {
            email:    params.email,
            password: pass.toString(CryptoJS.enc.Hex)
        }
      })
        .success(function (data, status, headers, config) {

        })
        .error(function (data, status, headers, config) {

          // Handle login errors here
          var message = 'Error: Invalid user or password';
        });
    };
  }]);

/*
myApp.controller("LoginController", function ($location, loginService, storageCheckService, $scope, $timeout){
  // checking auth status. will redirect to /home if user is logged in
  storageCheckService.getAuth(function(status){

    if(status.user){
      $location.path("/home");
      $scope.$apply();
    }
  });

  $scope.login = function(user){

    var post = {
      email: user.email,
      password: user.pass
    };

    loginService.login(post)
      .then(function(data){
        //sets userdata in storage
        storageCheckService.setId(data);
        $location.path("/home");
      },function(error){
        $scope.login_in = false;
        var timer = $timeout(
          function() {
            $scope.login_in = true;
          },
          4000
        );

        //handle Error
        if(error==400){
          console.log("Error: "+error+". Missing or invalid parameters.");
        } else if(error==401){
          console.log("Error: "+error+". Incorrect e-mail or password.");
        } else if(error==500){
          console.log("Error: "+error+". Internal error. Contact support@linkfire.com.");
        } else{
          console.log("Error: "+error);
        }
      });
  }

  $scope.goToLinkfire = function(){
    var newURL = "http://linkfire.com?mode=signup";
    chrome.tabs.create({ url: newURL });
  }
});
*/
