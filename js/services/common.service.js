(function() {
	'use strict';
	angular.module('app').factory('commonService',['$http','urls','localStorageService',function($http,urls,localStorageService){
		var getClassList = function (callback){
			var userData = localStorageService.getStorageAccessToken();
			var config = {headers:  {
			        'Authorization': 'Basic '+userData.accessToken,
			        "Accept" : "application/json"
			    }
			};
			$http.get(urls.BASE_API_URL+'Commons/getClassList.json',config).then(function(res){
				callback(res.data);
			}).catch(function(err){
				console.log(err);
				callback({'error_code':'ERROR','error_message':"Problem in class, please reload the page."})
			});
		};

		var getSectionList = function (sectionId,callback){
			var userData = localStorageService.getStorageAccessToken();
			var config = {headers:  {
			        'Authorization': 'Basic '+userData.accessToken,
			        "Accept" : "application/json"
			    }
			};
			$http.get(urls.BASE_API_URL+'Commons/getSectionList/'+sectionId+'.json',config).then(function(res){
				callback(res.data);
			}).catch(function(err){
				console.log(err);
				callback({'error_code':'ERROR','error_message':"Problem in section, please reload the page."})
			});
		};

		var getStateList = function (data,callback){
			var userData = localStorageService.getStorageAccessToken();
			var config = {headers:  {
			        'Authorization': 'Basic '+userData.accessToken,
			        "Accept" : "application/json"
			    }
			};
			$http.post(urls.BASE_API_URL+'Commons/getStatesList.json',data).then(function(res){
				callback(res.data);
			}).catch(function(err){
				console.log(err);
				callback({'error_code':'ERROR','error_message':"Problem in state, please reload the page."})
			});
		};

		var getCountryList = function (data,callback){
			$http.post(urls.BASE_API_URL+'Commons/getCountriesList.json',data).then(function(res){
				callback(res.data);
			}).catch(function(err){
				console.log(err);
				callback({'error_code':'ERROR','error_message':"Problem in country, please reload the page."})
			});
		};

		var getCityList = function (data,callback){
			$http.post(urls.BASE_API_URL+'Commons/getCitiesList.json',data).then(function(res){
				callback(res.data);
			}).catch(function(err){
				console.log(err);
				callback({'error_code':'ERROR','error_message':"Problem in city, please reload the page."})
			});
		};

		return{
			getClassList:getClassList,
			getSectionList:getSectionList,
			getStateList:getStateList,
			getCountryList:getCountryList,
			getCityList:getCityList
		};
	}]);
}());
