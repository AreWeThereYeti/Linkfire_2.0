// Authorization interceptor - checks local storage for token before requests
angular.module('linkfireWebappApp')
	.factory('authInterceptor', function ($rootScope, $q, $window, $log) {
		$log.debug('intercepting request... ');
		return {
			request: function (config) {
				config.headers = config.headers || {};
				if ($window.localStorage['token']) {
					config.headers.Authorization = 'Bearer ' + $window.localStorage['token'];
				}
				return config;
			},
			responseError: function (rejection) {
				if (rejection.status === 401) {
					$log.debug('Error... ');
					// handle the case where the user is not authenticated
				}
				return $q.reject(rejection);
			}
		};
	});