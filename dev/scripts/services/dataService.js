angular.module('linkfireWebappApp.services', [])
		.factory('dataService', ['$http', function($http) {
		var sdo = {

			getLinks: function() {
				var promise = $http({ method: 'GET', url: 'http://www.mocky.io/v2/53de99af3a67ab29014b5a05' }).success(function(data, status, headers, config) {
					data = 'data';
					return data;
				});
				return promise;
			}
		};

		return sdo;
	}]);