'use strict';

//Controller for the header of the page
angular.module('linkfireWebappApp')
  .controller('HeaderCtrl', ['$scope', 'loginService','$modal', '$facebook', function ($scope, loginService, $modal, $facebook) {

	$scope.show = '';

	$scope.open = function () {
	  $scope.submitted = true;

	    var modalInstance = $modal.open({
	      templateUrl: 'loginmodal.html',
	      controller: 'LoginInstanceCtrl',
	      resolve: {
	        show : function () {
	          return $scope.show;
	        }
	      }
	    });

	    modalInstance.result.then(function () {

	    }, function () {
	//      resets the signup/login view
	      $scope.show = '';
	    });
	  };
	}]);

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.
var LoginInstanceCtrl = function ($scope, $modalInstance, loginService, show, $facebook) {

  $scope.signIn = function(){
    var args={
      email:    $scope.user.email,
      password: $scope.user.password
    };

//		Legacy sign function. Located in the legacy folder. remove when we move to new api
	  loginService.Login(args).then(function(){
	    $window.location.reload();
    });

//    New login function working. Uncomment when new api is ready
//    loginService.Login(args)
//      .then(function(){
//          $modalInstance.close();
//      });
  };

//	SignUp Function
	$scope.signup = function(){
		var args = {
			email:    $scope.user.email,
			password: $scope.user.password
		};

//		Legacy signup function. Located in the legacy folder. remove when we move to new api
		loginService.Signup(args);

//    New login function working. Uncomment when new api is ready
//    loginService.SignUp(args)
//      .then(function(){
//          $modalInstance.close();
//      });
	};

	$scope.facebookLogin = function(){
		console.log('Faceuplogin')
		$facebook.login()
				.then(function() {

			})
		};

	$scope.facebookSignUp = function(){
		signUpSocialFacebook();
	};

  // Pass $scope.show to the modal instance. $scope. $scope.show is used for changing between signin and signup
  $scope.show = show;

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};