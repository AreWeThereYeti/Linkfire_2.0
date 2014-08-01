'use strict';


linkfireWebappApp.controller('CreateBoardCtrl', function ($scope, $http, $q, $filter) {
    $scope.tags = [];

    $scope.sources = [];

    $scope.supported_services = [
        { "service": "itunes", "name":"iTunes", "exUrl":"lorem.ipzum/1234" },
        { "service": "deezer", "name":"Deezer", "exUrl":"lorem.ipzum/1234" },
        { "service": "wimp", "name":"Wimp", "exUrl":"lorem.ipzum/1234" },
        { "service": "beats", "name":"Beats Music", "exUrl":"lorem.ipzum/1234" },
        { "service": "spotify", "name":"Spotify", "exUrl":"lorem.ipzum/1234" },
        { "service": "soundcloud", "name":"SoundCloud", "exUrl":"lorem.ipzum/1234" }
    ];

    $scope.autocomplete_options = [
        { "text": "nr@linkfire.com" },
        { "text": "le@linkfire.com" },
        { "text": "mm@linkfire.com" },
        { "text": "jj@linkfire.com" },
        { "text": "ja@linkfire.com" }
    ];


    $scope.addSrc = function () {

        $scope.sources.push({
            service: $scope.src,
            name: $scope.srcDest
        });

        // Clear input fields after push
        $scope.srcService = "";
        $scope.srcName = "";

    };



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



linkfireWebappApp.filter('reverse', function() {
    return function(items) {
        return items.slice().reverse();
    };
});