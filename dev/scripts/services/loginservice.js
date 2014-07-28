'use strict';

angular.module('linkfireWebappApp')
  .service('loginService', ['$rootScope', '$http', '$q', '$window', 'constants', function LoginService($rootScope, $http, $q, $window, constants) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var urlLogin  = constants.testApi + '/api/1.0/auth/login';
    var urlSignup = constants.testApi + '/api/1.0/auth/signUp';

  /*    storageCheckService.getAuth(function(status){

        if(status.user){
            $location.path("/home");
            $scope.$apply();
        }
    });*/


    this.Login = function (params) {

      var defered = $q.defer();

//      Encrypt password
      //var pass = CryptoJS.SHA1(params.password);
      $http({
        method	: 'POST',
        url		  : urlLogin,
//	      url		  : '/auth/login/',
	      headers : {
		      'Content-type' : 'application/json',
		      'X-Requested-With': 'XMLHttpRequest'
	      },
        data    : {
          email:    params.email,
          password: params.password}
      })
      .success(function (data, status, headers, config) {
        $window.localStorage.token = data.token;
        defered.resolve(data);
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
//	      url		  : '/auth/signup/',
	      headers : {
		      'Content-type' : 'application/json',
		      'X-Requested-With': 'XMLHttpRequest'

	      },
        data    : {
            email:    params.email,
            password: params.password
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
