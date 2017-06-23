(function() {
	'use strict';
	angular.module('app').controller('giftOfferCtrl',[
		'$scope','$state','localStorageService','notify','$rootScope','$timeout','$uibModal',
		function($scope,$state,localStorageService,notify,$rootScope,$timeout,$uibModal){
			var adminUserId = localStorageService.getStorageId();
			var rootRef = firebase.database().ref();
			var storeRef = firebase.storage().ref();
			if(!adminUserId){
				window.location.href = "#!/login";
				$rootScope.isUserLoggedIn = false;
			}

			$scope.getGiftOffer = function(){
				var giftOfferRef = rootRef.child('giftOffer');
				giftOfferRef.on('value',function(snapshot){
					$timeout(function () {
						$scope.giftOfferLists = snapshot.val();
						angular.forEach($scope.giftOfferLists,function(val,key){
							storeRef.child('giftOffer/'+val.imageName).getDownloadURL().then(function(url) {
								$timeout(function () {
									$scope.giftOfferLists[key].imageUrl = url;
								},0);
							}).catch(function(error) {
								console.log(error);
							});
							var currentD = new Date().getTime();
							var startD = new Date(val.startDate).getTime();
							var endD = new Date(val.endDate).getTime();
							if(currentD <= endD && currentD >= startD){
								$scope.giftOfferLists[key].isDateValied = true;
							}else{
								$scope.giftOfferLists[key].isDateValied = false;
							}
						});
					},0);
				},function(err){
					console.log(err);
				});
			};

			$scope.getGiftOffer();

			$scope.editGiftOffer = function(giftOfferId){
				var size = 'lg';
				var modalInstance = $uibModal.open({
					templateUrl: '../../pages/edit_gift_offer.html',
					controller: 'editGiftOfferCtrl',
					controllerAs: '$scope',
					size: size,
					appendTo: '',
					resolve: {
						items: function () {
							return giftOfferId;
						}
					}
				});
			};

			$scope.applyToAllUser = function(){
				$scope.isButtonBusy = true;
				var userRef = rootRef.child('users');
				userRef.once('value').then(function(snap){
					$timeout(function(){
						var data = snap.val();
						$scope.isButtonBusy = false;
						angular.forEach(data,function(val,key){
							userRef.child(key).child('isGiftOfferAvailable').set("true");
						});
					},0);
				}).catch(function(err){
					console.log(err);
				});
			};
		}
	]);
}());
