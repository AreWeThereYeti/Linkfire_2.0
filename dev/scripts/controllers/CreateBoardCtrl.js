'use strict';
linkfireWebappApp.controller('CreateBoardCtrl', function ($scope, $http, $q) {
    $scope.tags = [];

    $scope.autocomplete_options = [
        { "text": "nr@linkfire.com" },
        { "text": "le@linkfire.com" },
        { "text": "mm@linkfire.com" },
        { "text": "jj@linkfire.com" },
        { "text": "ja@linkfire.com" }
    ];

    $scope.autocomplete_example = function(){
        var deferred = $q.defer();
        deferred.resolve($scope.autocomplete_options);
        return deferred.promise;
    };

    //fetching autocompletes from json
    $scope.loadTags = function(query) {
        return $http.get('tags.json');
    };
});

