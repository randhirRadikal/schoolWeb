(function() {
	'use strict';
	angular.module('app').controller('feeCtrl',[
		'$scope','$state','localStorageService','notify','$rootScope','commonService',
		function($scope,$state,localStorageService,notify,$rootScope,commonService){
			var userData = localStorageService.getStorageAccessToken();
			//console.log(userId);
			if(!userData.accessToken){
				window.location.href = "#!/login";
			}
			console.log('ok');

			$scope.getClassList = function(){
				console.log('ok');
				commonService.getClassList(function(res){
					$scope.classList = res.result;
				});
			};

			$scope.getSectionList = function(clsid){
				commonService.getSectionList({clsid:clsid},function(res){
					$scope.sectionList = res.result;
				});
			};

			$scope.getClassList();

			$scope.getFeeList = function (studentId,classId,sectionId){
				var data = {
					studentId:studentId,
					classId:classId,
					sectionId:sectionId
				};
			};
		}
	]);
}());
