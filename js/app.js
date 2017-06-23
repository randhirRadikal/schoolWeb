(function() {
	'use strict';
	angular.module('app',[
		'ui.bootstrap',
		'ui.bootstrap.datetimepicker',
		'ui.router',
		'cgNotify',
		'ngStorage',
		'ngFileUpload'
	]);

	angular.module('app').config([
		'$stateProvider','$urlRouterProvider',
		function($stateProvider,$urlRouterProvider){

			$stateProvider.state({
				name:'login',
				url : '/login',
				controller:'authCtrl',
				templateUrl : 'pages/login.html'
			}).state({
				name : 'dashboard',
				url : '/dashboard',
				controller:'dashboardCtrl',
				template : '<h3>Welcome to dashboard</h3>'
			});
			$urlRouterProvider.when('','/login');
		}
	]);

	angular.module('app').run(["$rootScope","localStorageService","$state", function ($rootScope,localStorageService,$state) {
		var userId = localStorageService.getStorageId();
		//console.log(userId);
		if (userId) {
			$rootScope.isUserLoggedIn = true;
		} else {
			$rootScope.isUserLoggedIn = false;

		}
	}]);

}());
