angular.module("camtaylorApp")
.service("svAdminLogin", ["FIRE", "$q", "$firebaseAuth", "ftAuth", function (FIRE, $q, $firebaseAuth, ftAuth) {
	
	this.adminLogin = function(email, password){
		ftAuth.$authWithPassword({
			email: email,
			password: password
		}).then(function(userData){
			console.log("Logged in as: "  + userData.password.email + " " + userData.uid);
		}).catch(function(error){
			console.warn("Authentication failed:" + error);
		})
	}
}]);