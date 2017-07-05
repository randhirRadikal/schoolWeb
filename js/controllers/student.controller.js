(function() {
	'use strict';
	angular.module('app').controller('studentsCtrl',[
		'$scope','$state','localStorageService','notify','$rootScope',
		function($scope,$state,localStorageService,notify,$rootScope){
			var UserId = localStorageService.getStorageAccessToken();
			if(!UserId.accessToken){
				window.location.href = "#!/login";
				$rootScope.isUserLoggedIn = false;
			}

			
		}
	]);
}());
