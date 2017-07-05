(function() {
	'use strict';
	angular.module('app',[
		'ui.router',
		'cgNotify',
		'ngStorage',
		'ngFileUpload'
	]);
	angular.module('app').constant('urls',{
			BASE_URL : 'http://localhost/nodeProject/schoolWeb/',
			BASE_API_URL : 'http://localhost/nodeProject/demoProjectPhp/',
			BASE_ADMIN_URL : 'http://localhost/nodeProject/schoolWeb/admin'
	});
	angular.module('app').config([
		'$stateProvider','$urlRouterProvider','$httpProvider',
		function($stateProvider,$urlRouterProvider,$httpProvider){

			/*$httpProvider.interceptors.push(['$q','localStorageService', function ($q,localStorageService) {

        return {
            'request': function (config) {
                config.headers = config.headers || {};
								var userData = localStorageService.getStorageAccessToken();
                if (userData.token) {
                    config.headers.Authorization = 'Basic ' + userData.token;
                    config.headers.Accept = 'application/json';
                }
                return config;
            },
            'responseError': function (response) {
                if (response.status === 401 || response.status === 403 || response.status === 500) {
                    //$location.path('/login');
                    //alert(response.status);
                    var login_url = urls.BASE+'users/login';
                    //window.location.href = login_url;

                }
                return $q.reject(response);
            }
        };
			}]);*/

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
			}).state({
				name : 'addStudent',
				url : '/students/add',
				controller:'addStudentsCtrl',
				templateUrl : 'pages/add_student.html'
			}).state({
				name : 'fee',
				url : '/fee',
				controller:'feeCtrl',
				templateUrl : 'pages/fee/index.html'
			}).state({
				name : 'fee_add',
				url : '/fee/add',
				controller:'addFeeCtrl',
				templateUrl : 'pages/fee/add.html'
			});
			$urlRouterProvider.when('','/login');
		}
	]);

	angular.module('app').run(["$rootScope","localStorageService","$state", function ($rootScope,localStorageService,$state) {
		var userData = localStorageService.getStorageAccessToken();
		//localStorageService.deleteStorageAccessToken();
		if (userData.accessToken) {
			console.log('login');
			$rootScope.isUserLoggedIn = true;
		} else {
			console.log('not login');
			$rootScope.isUserLoggedIn = false;

		}
	}]);

}());
