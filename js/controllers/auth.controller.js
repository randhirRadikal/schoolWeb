(function() {
	'use strict';
	angular.module('app').controller('authCtrl',[
		'$scope','localStorageService','$rootScope','loginService','notify',
		function($scope,localStorageService,$rootScope,loginService,notify){
			var userData = localStorageService.getStorageAccessToken();
			//console.log(userId);
			if(userData.accessToken){
				window.location.href = "#!/dashboard";
			}

			$scope.schoolLogin = function(user){
				//console.log(user);
				loginService.schoolLogin(user,function(res){
					console.log(res);
					if(res.error_code === 'SUCCESS'){
						localStorageService.setStorageAccessToken(res.data.token,res.data.email,res.data.name);
						$rootScope.isUserLoggedIn=true;
						window.location.href = "#!/dashboard";
					}
					notify(res.error_message);
				});
			};
		}
	]);
}());
