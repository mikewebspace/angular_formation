var app = angular.module('bd-http', []);

app.service('MonService', function ($http, $q) {
	this.service1 = function () {
		$http.get('../ws/s1').then(function (response) {
			console.log('response name:', response.data.name);
			return $q.all([
				$http.get('../ws/s2').then((response) => {
					console.log('response name :', response.data.name);
					return $http.get('../ws/s5').then(function (response) {
						console.log('response name :', response.data.name);
					});
				}),
				$http.get('../ws/s3').then(function (response) {
					console.log('response name :', response.data.name);
				}),
				$http.get('../ws/s4').then(function (response) {
					console.log('response name :', response.data.name);
				}),]);
		}).catch(function (error) {
			console.error('error:', error);
		});
	};
});

app.controller('BdHttpCtrl', function bdHttpCtrl(MonService) {
	'ngInject';
	var ctrl = this;
	ctrl.start = function () {
		MonService.service1();
	}
});