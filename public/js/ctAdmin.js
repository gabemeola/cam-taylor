angular.module("camtaylorApp")
.controller("ctAdmin", function($scope, svAdminLogin, ftAuth) {
	
	$scope.adminLogin = function() {
		var username = $scope.admin.username,
				password = $scope.admin.password;
		svAdminLogin.adminLogin(username, password);
	}
	
	ftAuth.$onAuth(function(authData) {
		$scope.authData = authData;
	});
});