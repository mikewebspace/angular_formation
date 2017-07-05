var app = angular.module('bd-http', []);

app.controller('BdHttpCtrl', function bdHttpCtrl($http) {
	'ngInject';
	var ctrl = this;

	ctrl.start=function(){
		$http.get('../ws/s1').then(function(response){
			console.log('response name:',response.data.name);}).catch(function(error){
				console.error('error:',error);
			});
	}
}

);