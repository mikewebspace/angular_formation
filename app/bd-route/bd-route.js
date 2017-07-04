(function () {
	'use strict';

	var app = angular.module('bd-route', ['ui.router']);

	app.config(function ($stateProvider) {
		$stateProvider.state({
			name: 'home',
			url: '/',
			templateUrl: './bd-route/tmpl/home.html'
		});
		$stateProvider.state({
			name: 'products',
			url: '/products',
			templateUrl: './bd-route/tmpl/products.html'
		});
		$stateProvider.state({
			name: 'services',
			url: '/services',
			templateUrl: './bd-route/tmpl/services.html'
		});
		$stateProvider.state({
			name: 'contact',
			url: '/contact',
			templateUrl: './bd-route/tmpl/contact.html'
		});

	});

})();
