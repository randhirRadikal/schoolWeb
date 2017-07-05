(function() {
	'use strict';
	angular.module('app').factory('localStorageService',['$localStorage','$sessionStorage',function($localStorage,$sessionStorage){

		$localStorage=$localStorage.$default({
			accessToken:"",
			userEmail:"",
			userName:""
		});

		var setStorage=function(accessToken,userEmail,userName){
			$localStorage.accessToken=accessToken;
			$localStorage.userEmail=userEmail;
			$localStorage.userName=userName;
		};

		var getStorageAccessToken=function(){
			var data = {
				accessToken:$localStorage.accessToken,
				userEmail:$localStorage.userEmail,
				userName:$localStorage.userName
			};
			return data;
		};

		var deleteStorageAccessToken = function(){
			delete $localStorage.accessToken;
			delete $localStorage.userEmail;
			delete $localStorage.userName;
			return true;
		};


		return{
			setStorageAccessToken : setStorage,
			getStorageAccessToken : getStorageAccessToken,
			deleteStorageAccessToken : deleteStorageAccessToken
		};
	}]);
}());
