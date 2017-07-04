(function () {
	'use strict';

	var app = angular.module('bd-route', ['ui.router']);

	app.config(function($stateProvider) {
		$stateProvider.state({
			name: 'home',
			url: './bd-route/tmpl/home.html',
			template: 'Home'
		});
		$stateProvider.state({
			name: 'products',
			url: './bd-route/tmpl/products.html',
			template: 'Products'
		});
		$stateProvider.state({
			name: 'services',
			url: './bd-route/tmpl/services.html',
			template: 'Services'
		});
		$stateProvider.state({
			name: 'contact',
			url: './bd-route/tmpl/contact.html',
			template: 'Contact'
		});
		
	});

})();
