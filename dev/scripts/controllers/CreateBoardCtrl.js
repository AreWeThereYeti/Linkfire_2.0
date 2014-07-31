'use strict';
linkfireWebappApp.controller('CreateBoardCtrl', function ($scope, $http, $q) {
    $scope.tags = [];

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


$scope.publicationData = [

    { pubId:'1' , pubName:'Level 1 A' , pubCat:
        [
        { pubCatId:'1' , pubCatName:'Level 2 A', pubSubCat:
            [
                { pubSubCatId:'1' , pubSubCatName:'Level 3 A' },
                { pubSubCatId:'2' , pubSubCatName:'Level 3 B' }
            ]
        },
        { pubCatId:'2' , pubCatName:'Level 2 B', pubSubCat:[
            { pubSubCatId:'3' , pubSubCatName:'Level 3 C' },
            { pubSubCatId:'4' , pubSubCatName:'Level 3 D' }
        ]
        }
    ]
    }];