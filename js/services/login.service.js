(function() {
	'use strict';
	angular.module('app').factory('loginService',['$http',function($http){
		var schoolLogin = function (user,callback){
			console.log(user);
			
			/*$http({
			  url: "https://siddhivinayakcollege.in/schoolapi/login.aspx",
			  method: "POST",
			  data: $.param(user),
			  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			  withCredentials: true,
			  }).success(function (data, status, headers, config) {
				 console.log(data);
			});*/
			var req = {
			 method: 'POST',
			 url: 'http://siddhivinayakcollege.in/schoolapi/login.aspx',
			 headers: {
			   'Content-Type':'application/x-www-form-urlencoded'
			 },
			 withCredentials: true,
			 data: user
			}
			//$http.post('http://siddhivinayakcollege.in/schoolapi/login.aspx',).then(function(res){
			$http(req).then(function(res){
				cconsole.log(res);
				
			}, function(err){
				console.log(err);
			});

			/*
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
			});*/
		};

		var schoolDetails = function(){

		};

		return{
			schoolLogin:schoolLogin,
			schoolDetails:schoolDetails
		};
	}]);
}());
