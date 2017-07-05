(function() {
	'use strict';
	angular.module('app').controller('addStudentsCtrl',[
		'$scope','$state','localStorageService','notify','$rootScope','studentService','commonService',
		function($scope,$state,localStorageService,notify,$rootScope,studentService,commonService){
			var adminUserId = localStorageService.getStorageAccessToken();
			if(!adminUserId){
				window.location.href = "#!/login";
				$rootScope.isUserLoggedIn = false;
			}

			$scope.getClassList = function(){
				commonService.getClassList(function(res){
					$scope.classList = res.result;
				});
			};

			$scope.getSectionList = function(clsid){
				commonService.getSectionList({clsid:clsid},function(res){
					$scope.sectionList = res.result;
				});
			};

			$scope.getStateList = function(country_id){
				commonService.getStateList({country_id:country_id},function(res){
					$scope.stateList = res.result;
				});
			};

			$scope.getCountryList = function(){
				commonService.getStateList({},function(res){
					$scope.countryList = res.result;
				});
			};

			$scope.getCityList = function(state_id){
				commonService.getStateList({state_id:state_id},function(res){
					$scope.cityList = res.result;
				});
			};

			$scope.getClassList();
			$scope.getCountryList();
		}
	]);
}());
