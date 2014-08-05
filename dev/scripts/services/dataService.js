angular.module('linkfireWebappApp.services', [])
		.factory('dataService', ['$http', function($http) {
		var sdo = {

			getLinks: function() {
				var promise = $http({ method: 'GET', url: ' http://www.mocky.io/v2/53e0e6a252a026691912dfdb' }).success(function(data, status, headers, config) {
					var test = 'DATA';
					return test;
				});
				return promise;
			},
			getBoards: function() {
				var promise = $http({ method: 'GET', url: ' http://www.mocky.io/v2/53e0e6a252a026691912dfdb' }).success(function(data, status, headers, config) {
					var test = 'DATA';
					return test;
				});
				return promise;
			}
		};

		return sdo;
	}]);