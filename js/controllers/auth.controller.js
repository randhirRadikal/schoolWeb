(function() {
	'use strict';
	angular.module('app').controller('authCtrl',[
		'$scope','localStorageService','$rootScope','loginService',
		function($scope,localStorageService,$rootScope,loginService){
			var accessToken = localStorageService.getStorageAccessToken();
			//console.log(userId);
			if(accessToken){
				window.location.href = "#!/dashboard";
			}

			$scope.schoolLogin = function(user){
				//console.log(user);
				loginService.schoolLogin(user,function(res){
					if(res.success){
						console.log(res);
						localStorageService.setStorageAccessToken(res.result.data.token);
						$rootScope.isUserLoggedIn=true;
						window.location.href = "#!/dashboard";
					}else{
						
					}
				});
			};
		}
	]);
}());
