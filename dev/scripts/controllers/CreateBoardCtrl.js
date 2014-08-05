'use strict';
linkfireWebappApp.controller('CreateBoardCtrl', function ($scope, $http, $q, $filter) {
    $scope.tags = [];
    $scope.logo = "john";
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

    $scope.$watch('srcDest', function() {
        if($scope.srcDest){
            if($scope.srcDest.indexOf("spotify.com") > -1){
                $scope.logo1 = "spotify";
            }
            else if($scope.srcDest.indexOf("apple.com") > -1){
                $scope.logo1 = "itunes";
            }
            else if($scope.srcDest.indexOf("deezer.com") > -1){
                $scope.logo1 = "deezer";
            }
            else if($scope.srcDest.indexOf("wimp.dk") > -1){
                $scope.logo1 = "wimp";
            }
            else if($scope.srcDest.indexOf("soundcloud.com") > -1){
                $scope.logo1 = "soundcloud";
            }
            else if($scope.srcDest.indexOf("beatsmusic.com") > -1){
                $scope.logo1 = "beats";
            }
            else {
                $scope.logo1 = "linkfire";
            }
        }
    });

    $scope.addSrc = function () {

        $scope.sources.push({
            service: $scope.logo1,
            name: $scope.srcDest
        });

        // Clear input fields after push
        $scope.src = "";
        $scope.srcDest = "";

    };
    $scope.removeSrc = function(index) {
        $scope.sources.splice(index, 1);
    }


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

linkfireWebappApp.filter('contains', function() {
    return function(input) {
        if( input.indexOf('spotify.com') >= 0){
            return "spotify";
        }
        else{
            return input;
        }
    };
});
