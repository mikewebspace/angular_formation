//(function () { // Pas utile avec Webpack
//'use strict'; // Pas utile avec webpack

// Ajouté pour Webpack
import 'angular/angular-csp.css';
import './style.scss';

import 'angular';
import 'angular-ui-router';
import './bd-star/bd-star.js';
import './bd-route/bd-route.js';
import './bd-http.js';

const app = angular.module('main', ['bd-route', 'bd-star', 'bd-http']);

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

//})(); // Pas utile avec Webpack
