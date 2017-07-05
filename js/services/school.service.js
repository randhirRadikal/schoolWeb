(function() {
	'use strict';
	angular.module('app').factory('schoolService',['$http','urls',function($http,urls){
		var schoolLogin = function (user,callback){
			var config = {headers:  {
			        'Accept': 'application/json;odata=verbose',
			        "Content-Type" : "application/x-www-form-urlencoded"
			    }
			};
			$http.post(urls.BASE_URL+'login.aspx',user,config).then(function(res){
				console.log(res);
				callback({'success':true,'msg':"Login successfully.",'result':res.data});
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
