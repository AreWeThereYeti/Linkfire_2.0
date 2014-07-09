'use strict';

angular.module('linkfireWebappApp')
	.controller('CarouselCtrl', ['$scope', '$interval', function ($scope,$interval) {
			$scope.stop;
			$scope.hover = 0;

			//start timer. Used when mouse enter shufflebox
			$scope.startTimer = function(){
					$scope.stop;
					$scope.stop = $interval(function() {
						console.log('interval' + $scope.hover);
						$scope.hover = $scope.hover +1;
						if($scope.hover > 2){
							$scope.hover = 0;
						}
					}, 3000);
				};

			//Stop timer. Used when mouse leaves shufflebox
			$scope.stopTimer = function(){
					$interval.cancel($scope.stop);
					$scope.stop;
			};

			//Destroys counter. Avoid memoryleaks
			$scope.$on('$destroy', function() {
				// Make sure that the interval is destroyed too
				$scope.stop;
				$scope.hover;
			});

			$scope.startTimer();
}]);