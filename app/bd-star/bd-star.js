(function () {
	'use strict';

	var app = angular.module('bd-star', []);

	app.directive('bdStar', function () {
		return {
			//template: 'toto',
			scope: {
				n: '=?note'
			},
			controller: function BdStarCtrl($scope, $element, $compile) {
				'ngInject';
				console.log('BdStarCtrl', arguments);
				$scope.update = function (newNote) {
					console.log('update', arguments);
					$scope.n = newNote;
				}
				$scope.$watch('n', function () {
					let note = $scope.n;
					note = (note > 5) ? 5 : note;
					note = (note < 0) ? 0 : note;
					let html = '';
					for (let i = 0; i < note; i++) {
						html += '<img ng-click="update(' + (i + 1) + ')" src="./bd-star/img/yellow_star.png">';
					}
					for (let i = note; i < 5; i++) {
						html += `<img ng-click="update(${i + 1})Q" src="./bd-star/img/white_star.png">`;
					}
					$element.html(html);
					$compile($element.contents())($scope);
				});

			}
			/*compile: function () {
				console.log('BdStar compile', arguments);
			}*/
		};
	});

})();
