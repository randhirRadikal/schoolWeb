(function() {
	'use strict';
	angular.module('app').controller('authCtrl',[
		'$scope','localStorageService','$rootScope','loginService',
		function($scope,localStorageService,$rootScope,loginService){
			var userId = localStorageService.getStorageId();
			//console.log(userId);
			if(userId){
				window.location.href = "#!/dashboard";
			}

			$scope.schoolLogin = function(user){
				//console.log(user);
				loginService.schoolLogin(user,function(res){
					console.log(res);
				});
			};
		}
	]);
}());
