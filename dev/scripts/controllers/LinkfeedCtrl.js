'use strict';
angular.module('linkfireWebappApp')
	.controller('LinkfeedCtrl', ['$scope', function ($scope) {
			$scope.pageLoaded = true;

			this.img = "http://placekitten.com/g/200/200";

			this.clicks = 122.112;
			this.links = 123.443;

			this.members = [
				{
					name: "Jerry", url: "/images/members/1.jpg"
				},
				{
					name: "John", url: "/images/members/2.jpg"
				},
				{
					name: "Per", url: "/images/members/3.jpg"
				}	,
				{
					name: "Rocco", url: "/images/members/4.jpg"
				},
				{
					name: "Enrico", url: "/images/members/5.jpg"
				}
			]

			this.tags = [
				{
					tag : "newsingle"
				},
				{
					tag : "32132"
				},
				{
					tag : "AnotherTag"
				},
			]


	}]);

