(function() {
	'use strict';
	angular.module('app').factory('loginService',['$http',function($http){
		var schoolLogin = function (user,callback){
			console.log(user);
			var config = {headers:  {
			        'Accept': 'application/json;odata=verbose',
			        "Content-Type" : "application/json"
			    }
			};

			$http.post('http://siddhivinayakcollege.in/schoolapi/login.aspx',user,config).then(function(res){
				console.log('ok');
				console.log(res);
				callback({'success':true,'msg':"Login successfully."});
			}).catch(function(err){
				console.log(err);
				callback({'success':false,'msg':"Login fail."})
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
