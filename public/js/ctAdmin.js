angular.module("camtaylorApp")
.controller("ctAdmin", ["$scope", "svAdminLogin", "ftAuth", "FIRE", "$q", "$mdDialog", "$mdMedia", "svUpdateBios", function($scope, svAdminLogin, ftAuth, FIRE, $q, $mdDialog, $mdMedia, svUpdateBios) {
	
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
	//Edit Cameron's Bio Modal
	$scope.showEditCameronBio = function(ev) {
		$mdDialog.show({
			controller: null,
			templateUrl: './templates/_edit-cameronbio.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true,
		})
	}
	//Edit Taylor's Bio Modal
	$scope.showEditTaylorBio = function(ev) {
		$mdDialog.show({
			controller: null,
			templateUrl: './templates/_edit-taylorbio.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true,
		})
	}
	//X button to close modal
	$scope.cancel = function() {
    $mdDialog.cancel();
  };
		
	//Grabs Bios from Firebase	
	var grabBios = function() {
		var ref = new Firebase(FIRE.url + "bios/"),
				defer = $q.defer();
		ref.on("value", function(snapshot) {
			var data = snapshot.val();
			defer.resolve(data);
		})
		return defer.promise;
	}
	
	//Invokes Grab Bios function and binds them to the scope
	grabBios().then(function(res) {
		$scope.cameronBio = res.cameron.bio;
		$scope.taylorBio = res.taylor.bio;
	});
	
	//Pushes the new updated bios to Firebase
	$scope.pushBios = function(name) {
		console.warn("$scope.pushBios ran");
		if(name == "cameron") {
			var updatedBio = $scope.cameronBio;
			svUpdateBios.pushUpdate(name, updatedBio);
				if(svUpdateBios.done){
					console.warn("Updated");
				}
		} else if(name == "taylor") {
			var updatedBio = $scope.taylorBio;
			svUpdateBios.pushUpdate(name, updatedBio)
				if(svUpdateBios.done){
					console.warn("Updated");
				}
		}
	}
}]);