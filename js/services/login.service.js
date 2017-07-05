(function() {
	'use strict';
	angular.module('app').factory('loginService',['$http','urls',function($http,urls){
		var schoolLogin = function (user,callback){
			$http.post(urls.BASE_API_URL+'users/login.json',user).then(function(res){
				callback(res);
			}).catch(function(err){
				console.log(err);
				callback({'error_code':'ERROR','error_message':"Login fail."})
			});
		};

		var schoolDetails = function(){

		};

		return{
			schoolLogin:schoolLogin,
			schoolDetails:schoolDetails
		};
	}]);
}());
