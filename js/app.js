(function() {
	'use strict';
	angular.module('app',[
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
				templateUrl : 'pages/dashboard.html'
			}).state({
				name : 'students',
				url : '/students',
				controller:'studentsCtrl',
				templateUrl : 'pages/student.html'
			});
			$urlRouterProvider.when('','/login');
		}
	]);

	angular.module('app').run(["$rootScope","localStorageService","$state", function ($rootScope,localStorageService,$state) {
		var userId = localStorageService.getStorageAccessToken();
		//console.log(userId);
		if (userId) {
			$rootScope.isUserLoggedIn = true;
		} else {
			$rootScope.isUserLoggedIn = false;

		}
	}]);

}());
