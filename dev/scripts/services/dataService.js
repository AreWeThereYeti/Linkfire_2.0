angular.module('linkfireWebappApp.services', [])
		.factory('dataService', ['$http', function($http) {
		var sdo = {

			getLinks: function() {
				var promise = $http({ method: 'GET', url: 'http://www.mocky.io/v2/53df3eea3a67abd30e4b5a16' }).success(function(data, status, headers, config) {
					data = 'data';
					return data;
				});
				return promise;
			},
			getBoards: function() {
				var promise = $http({ method: 'GET', url: 'http://www.mocky.io/v2/53df3eea3a67abd30e4b5a16' }).success(function(data, status, headers, config) {
					data = 'data';
					return data;
				});
				return promise;
			}
		};

		return sdo;
	}]);