(function() {
	'use strict';
	angular.module('app').factory('studentService',['$http','urls','localStorageService',function($http,urls,localStorageService){
		var getClassList = function (callback){
			var config = {headers:  {
			        'Accept': 'application/json;odata=verbose',
			        "Content-Type" : "application/x-www-form-urlencoded"
			    }
			};
			var token = localStorageService.getStorageAccessToken();
			$http.post(urls.BASE_URL+'getClass.aspx',{token:token},config).then(function(res){
				callback({'success':true,'msg':"Login successfully.",'result':res.data});
			}).catch(function(err){
				console.log(err);
				callback({'success':false,'msg':"Login fail."})
			});
		};

		var getSectionList = function (data,callback){
			var config = {headers:  {
			        'Accept': 'application/json;odata=verbose',
			        "Content-Type" : "application/x-www-form-urlencoded"
			    }
			};
			data.token = localStorageService.getStorageAccessToken();
			$http.post(urls.BASE_URL+'getSection.aspx',data,config).then(function(res){
				callback({'success':true,'msg':"Login successfully.",'result':res.data});
			}).catch(function(err){
				console.log(err);
				callback({'success':false,'msg':"Login fail."})
			});
		};

		var getStateList = function (data,callback){
			var config = {headers:  {
			        'Accept': 'application/json;odata=verbose',
			        "Content-Type" : "application/x-www-form-urlencoded"
			    }
			};
			data.token = localStorageService.getStorageAccessToken();
			$http.post(urls.BASE_URL+'getSection.aspx',data,config).then(function(res){
				callback({'success':true,'msg':"Login successfully.",'result':res.data});
			}).catch(function(err){
				console.log(err);
				callback({'success':false,'msg':"Login fail."})
			});
		};

		var getCountryList = function (data,callback){
			var config = {headers:  {
			        'Accept': 'application/json;odata=verbose',
			        "Content-Type" : "application/x-www-form-urlencoded"
			    }
			};
			data.token = localStorageService.getStorageAccessToken();
			$http.post(urls.BASE_URL+'getSection.aspx',data,config).then(function(res){
				callback({'success':true,'msg':"Login successfully.",'result':res.data});
			}).catch(function(err){
				console.log(err);
				callback({'success':false,'msg':"Login fail."})
			});
		};

		var getCityList = function (data,callback){
			var config = {headers:  {
			        'Accept': 'application/json;odata=verbose',
			        "Content-Type" : "application/x-www-form-urlencoded"
			    }
			};
			data.token = localStorageService.getStorageAccessToken();
			$http.post(urls.BASE_URL+'getSection.aspx',data,config).then(function(res){
				callback({'success':true,'msg':"Login successfully.",'result':res.data});
			}).catch(function(err){
				console.log(err);
				callback({'success':false,'msg':"Login fail."})
			});
		};

		var addStudentDetail = function (data,callback){
			var config = {headers:  {
			        'Accept': 'application/json;odata=verbose',
			        "Content-Type" : "application/x-www-form-urlencoded"
			    }
			};
			data.token = localStorageService.getStorageAccessToken();
			$http.post(urls.BASE_URL+'addStudent.aspx',data,config).then(function(res){
				callback({'success':true,'msg':"Login successfully.",'result':res.data});
			}).catch(function(err){
				console.log(err);
				callback({'success':false,'msg':"Login fail."})
			});
		};

		var getStudentList = function (data,callback){
			var config = {headers:  {
			        'Accept': 'application/json;odata=verbose',
			        "Content-Type" : "application/x-www-form-urlencoded"
			    }
			};
			data.token = localStorageService.getStorageAccessToken();
			$http.post(urls.BASE_URL+'getStudent.aspx',data,config).then(function(res){
				callback({'success':true,'msg':"Login successfully.",'result':res.data});
			}).catch(function(err){
				console.log(err);
				callback({'success':false,'msg':"Login fail."})
			});
		};

		return{
			getClassList:getClassList,
			getSectionList:getSectionList,
			getStateList:getStateList,
			getCountryList:getCountryList,
			getCityList:getCityList,
			addStudentDetail:addStudentDetail
		};
	}]);
}());
