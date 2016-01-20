angular.module("camtaylorApp")
.controller("ctAdmin", ["$scope", "svAdminLogin", "ftAuth", "FIRE", "$q", "$mdDialog", "$mdMedia", function($scope, svAdminLogin, ftAuth, FIRE, $q, $mdDialog, $mdMedia) {
	
	$scope.adminLogin = function() {
		var username = $scope.admin.username,
				password = $scope.admin.password;
		svAdminLogin.adminLogin(username, password);
	}
	
	ftAuth.$onAuth(function(authData) {
		$scope.authData = authData;
	});
	
	var grabRsvp = function(){
		var ref = new Firebase(FIRE.url + "rsvps/"),
				defer = $q.defer();
		ref.on("value", function(snapshot) {
			var data = snapshot.val();
			defer.resolve(data);
		})
		return defer.promise;
	}
	
	grabRsvp().then(function(res) {
		$scope.rsvpData = res;
		console.log($scope.rsvpData)
	});
	
	$scope.showEditCameronBio = function(ev) {
		$mdDialog.show({
			controller: null,
			templateUrl: './templates/_edit-cameronbio.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true,
		})
	}
	$scope.cancel = function() {
    $mdDialog.cancel();
  };
		
		
	var grabBios = function() {
		var ref = new Firebase(FIRE.url + "bios/"),
				defer = $q.defer();
		ref.on("value", function(snapshot) {
			var data = snapshot.val();
			defer.resolve(data);
		})
			return defer.promise;
	}
	grabBios().then(function(res) {
		$scope.cameronBio = res.cameron;
		$scope.taylorBio = res.taylor;
		console.log($scope.cameronBio);
	});
}]);