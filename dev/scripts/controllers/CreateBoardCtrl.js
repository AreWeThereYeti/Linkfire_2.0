'use strict';
linkfireWebappApp.controller('CreateBoardCtrl', function ($scope, $http) {
    $scope.tags = [];

    $scope.autos = function(){

        return [
            { "text": "nr@linkfire.com" },
            { "text": "le@linkfire.com" },
            { "text": "mm@linkfire.com" },
            { "text": "jj@linkfire.com" },
            { "text": "ja@linkfire.com" }
        ];

    };

    $scope.loadTags = function(query) {
        return $http.get('tags.json');
    };
});

