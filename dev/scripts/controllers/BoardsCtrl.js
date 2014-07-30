'use strict';
angular.module('linkfireWebappApp')
	.controller('BoardsCtrl', ['$scope','$modal', function ($scope, $modal) {

	//  Needs comments
  $scope.pageLoaded = true;

  $scope.loadScreen = function(){
    $scope.pageLoaded = !$scope.pageLoaded;
  };

//  Needs comments
  $scope.items = [];
    $scope.save = function() {
      var found = $scope.items.reduce(function(previous, i){
          if ($scope.item === i) return true;
          return previous;
        }, false);
      if (found){
        alert('duplicate value');
      }
      else{
        $scope.items.push({tag:$scope.item});
      }
    };
//  Needs comments
		$scope.openBoardModal = function () {
			var modalInstance = $modal.open({
				templateUrl: '/scripts/templates/createBoard.html',
				controller: 'CreateBoardModalInstanceCtrl',
        size: 'lg'
			});
			modalInstance.result.then(function () {
			}, function () {

			});
		};

	//  Needs comments
	$scope.filters = [];
  $scope.show = true;
  $scope.boards = [{ 
        name:'John',
        album: 'John',
        url: "/lf2/images/test.jpg",
        members: [
          {name: "Jerry", url: "/lf2/images/members/1.jpg"},
          {name: "Jerry", url: "/lf2/images/members/2.jpg"},
          {name: "Jerry", url: "/lf2/images/members/3.jpg"},
          {name: "Jerry", url: "/lf2/images/members/4.jpg"},
          {name: "John", url: "/lf2/images/members/5.jpg"},
          {name: "Elaine", url: "/lf2/images/members/6.jpg"}
        ]},
      {name:'Jessie'},
      {name:'Johanna'},
      {name:'Joy'},
      {name:'Mary'},
      {name:'Peter'},
      {name:'Sebastian'},
      {name:'Erika'},
      {name:'Mary'},
      {name:'Peter'},
      {name:'Sebastian'},
      {name:'Erika'},
      {name:'Patrick'},
      {name:'Samantha'}
    ];
	}]);

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.
var CreateBoardModalInstanceCtrl = function ($scope, $modalInstance) {

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
};