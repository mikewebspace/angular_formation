(function () {
	'use strict';

	var app = angular.module('bd-star', []);

	app.component('bdStar',
		{
			//template: 'toto',
			bindings: {
				n: '=?note'
			},
			controller: function BdStarCtrl($scope, $element, $compile) {
				'ngInject';
				const ctrl = this;
				console.log('BdStarCtrl', arguments);
				ctrl.update = function (newNote) {
					console.log('update', arguments);
					ctrl.n = newNote;
				}
				$scope.$watch('$ctrl.n', function () {
					let note = ctrl.n || 3;
					note = (note > 5) ? 5 : note;
					note = (note < 0) ? 0 : note;
					let html = '';
					for (let i = 0; i < note; i++) {
						html += '<img ng-click="$ctrl.update(' + (i + 1) + ')" src="./bd-star/img/yellow_star.png">';
					}
					for (let i = note; i < 5; i++) {
						/* Syntaxe ES6 */
						html += `<img ng-click="$ctrl.update(${i + 1})" src="./bd-star/img/white_star.png">`;
					}
					$element.html(html);
					$compile($element.contents())($scope);
				});

			}
			/*compile: function () {
				console.log('BdStar compile', arguments);
			}*/
		});

})();
