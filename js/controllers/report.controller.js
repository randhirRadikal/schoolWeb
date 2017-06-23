(function() {
	'use strict';
	angular.module('app').controller('reportCtrl',[
		'$scope','$state','localStorageService','notify','$rootScope','$timeout',
		function($scope,$state,localStorageService,notify,$rootScope,$timeout){
			var adminUserId = localStorageService.getStorageId();
			var rootRef = firebase.database().ref();

			if(!adminUserId){
				window.location.href = "#!/login";
				$rootScope.isUserLoggedIn = false;
			}

			$scope.getReportList = function(){
				var gameSetRef = rootRef.child('gameSet');
				gameSetRef.once('value').then(function(snapshot){
					$timeout(function () {
						$scope.gameSetLists =  {
							Cat1 :{
								totalPlayed:0,
								totalWin:0
							},
							Cat2:{
								totalPlayed:0,
								totalWin:0
							},
							Cat3:{
								totalPlayed:0,
								totalWin:0
							},
							Cat4:{
								totalPlayed:0,
								totalWin:0
							}
						};
						var log = [];
						angular.forEach(snapshot.val(), function(value, key) {
							$scope.gameSetLists.Cat1.totalPlayed = parseInt($scope.gameSetLists.Cat1.totalPlayed)+parseInt(value.C1.totalPlayed);
							$scope.gameSetLists.Cat1.totalWin = parseInt($scope.gameSetLists.Cat1.totalWin)+parseInt(value.C1.totalWin);

							$scope.gameSetLists.Cat2.totalPlayed = parseInt($scope.gameSetLists.Cat2.totalPlayed)+parseInt(value.C2.totalPlayed);
							$scope.gameSetLists.Cat2.totalWin = parseInt($scope.gameSetLists.Cat2.totalWin)+parseInt(value.C2.totalPlayed);

							$scope.gameSetLists.Cat3.totalPlayed = parseInt($scope.gameSetLists.Cat3.totalPlayed)+parseInt(value.C3.totalPlayed);
							$scope.gameSetLists.Cat3.totalWin = parseInt($scope.gameSetLists.Cat3.totalWin)+parseInt(value.C3.totalPlayed);

							$scope.gameSetLists.Cat4.totalPlayed = parseInt($scope.gameSetLists.Cat4.totalPlayed)+parseInt(value.C4.totalPlayed);
							$scope.gameSetLists.Cat4.totalWin = parseInt($scope.gameSetLists.Cat4.totalWin)+parseInt(value.C4.totalPlayed);
						}, log);
					},0);
				}).catch(function(err){
					console.log(err);
				});
			};

			$scope.getReportList();
		}
	]);
}());
