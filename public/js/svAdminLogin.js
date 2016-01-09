angular.module("camtaylorApp")
.service("svAdminLogin", function (FIRE, $q, $firebaseAuth, ftAuth) {
	var defer = $q.defer();
	
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
});