(function() {
	'use strict';
	angular.module('app').controller('addFeeCtrl',[
		'$scope','$state','localStorageService','notify','$rootScope',
		function($scope,$state,localStorageService,notify,$rootScope){
			var userData = localStorageService.getStorageAccessToken();
			if(!userData.accessToken){
				window.location.href = "#!/login";
				$rootScope.isUserLoggedIn = false;
			}

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
