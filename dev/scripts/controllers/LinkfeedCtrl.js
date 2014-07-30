'use strict';
angular.module('linkfireWebappApp')
	.controller('LinkfeedCtrl', ['$scope', function ($scope) {
			$scope.pageLoaded = true;

			this.clicks = 122.112;
			this.links = 123.443;

			this.members = [
				{
					name: "Jerry", url: "/lf2/images/members/1.jpg"
				},
				{
					name: "John", url: "/lf2/images/members/2.jpg"
				}
			]


	}]);

