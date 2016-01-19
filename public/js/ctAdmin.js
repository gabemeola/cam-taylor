angular.module("camtaylorApp")
.controller("ctAdmin", ["$scope", "svAdminLogin", "ftAuth", "FIRE", "$q", function($scope, svAdminLogin, ftAuth, FIRE, $q) {
	var ref = new Firebase(FIRE.url + "rsvps/"),
			defer = $q.defer();
	
	$scope.adminLogin = function() {
		var username = $scope.admin.username,
				password = $scope.admin.password;
		svAdminLogin.adminLogin(username, password);
	}
	
	ftAuth.$onAuth(function(authData) {
		$scope.authData = authData;
	});
	
	var grabRsvp = function(){
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
									
}]);