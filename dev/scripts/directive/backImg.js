'use strict';

//Add class on scroll
angular.module('linkfireWebappApp')
	.directive('backImg', function(){
		return function(scope, element, attrs){
			var url = attrs.backImg;
			element.css({
				'background-image': 'url(' + url +')',
				'background-size' : 'cover'
			});
		};
	});