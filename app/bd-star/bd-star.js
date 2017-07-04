(function () {
	'use strict';

	var app = angular.module('bd-star', []);

	app.directive('bdStar', function () {
		return {
			template: 'toto',
			controller: function BdStarCtrl() {
				console.log('BdStarCtrl', arguments);
			},
			compile: function () {
				console.log('BdStar compile', arguments);
			}
		};
	});

})();
