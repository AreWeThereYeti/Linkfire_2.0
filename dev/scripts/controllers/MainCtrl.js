'use strict';

var linkfireWebappApp = angular.module('linkfireWebappApp');

linkfireWebappApp.controller('MainCtrl', ['$scope', '$modal', 'constants', function ($scope, $modal, constants) {
  $scope.open = function () {
    var modalInstance = $modal.open({
        templateUrl: 'videomodal.html',
        controller: 'VideoModalInstanceCtrl'
    });
    modalInstance.result.then(function () {
    }, function () {

    });
  };
}]);

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.
var VideoModalInstanceCtrl = function ($scope, $modalInstance) {

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};