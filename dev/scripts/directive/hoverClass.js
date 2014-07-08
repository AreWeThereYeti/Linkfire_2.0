angular.module('linkfireWebappApp')
.directive('hoverClass',['$interval', function ($interval) {
	return {
		restrict: 'A',
		scope: {
			hoverClass: '@'
		},
		link: function (scope, element, attrs) {


			var interval = $interval(function () {

				element.addClass(scope.hoverClass);

			}, 1000);

			element.on('mouseenter', function() {
				element.addClass(scope.hoverClass);
				console.log('sds')

			});
			element.on('mouseleave', function() {
				element.removeClass(scope.hoverClass);
			});

			element.on('$destroy', function() {
				$interval.cancel(interval);
			});

		}
	};
}]);