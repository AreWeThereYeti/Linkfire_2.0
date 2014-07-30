'use strict';
linkfireWebappApp.controller('CreateBoardCtrl', function ($scope, $http) {
    $scope.tags = [];
    $scope.loadTags = function(query) {
        return $http.get('tags.json');
    };
});

