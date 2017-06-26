(function() {
	'use strict';
	angular.module('app').factory('localStorageService',['$localStorage','$sessionStorage',function($localStorage,$sessionStorage){

		$localStorage=$localStorage.$default({
			accessToken:""
		});
		console.log('ok');

		var setStorageAccessToken=function(accessToken){
			console.log(accessToken);
			$localStorage.accessToken=accessToken;
		};

		var getStorageAccessToken=function(){
			return $localStorage.accessToken;
		};

		var deleteStorageAccessToken = function(){
			return delete $localStorage.accessToken;
		};


		return{
			setStorageAccessToken : setStorageAccessToken,
			getStorageAccessToken : getStorageAccessToken,
			deleteStorageAccessToken : deleteStorageAccessToken
		};
	}]);
}());
