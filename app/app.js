(function () {
	'use strict';

	var app = angular.module('exerciceUn', []);

	app.directive('bdHeader', function () {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/bd-header.html'
		};
	});

	app.directive('bdBody', function () {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/bd-body.html'
		};
	});

	app.directive('bdFooter', function () {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/bd-footer.html'
		};
	});

})();
