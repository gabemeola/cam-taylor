angular.module("camtaylorApp")
.service("svUpdateBios",["FIRE", "$q", "$firebaseAuth", "ftAuth", function(FIRE, $q, $firebaseAuth, ftAuth) {
	
	this.pushUpdate = function(name, bio) {
		var ref = new Firebase(FIRE.url + "bios/" + name);
		
		ref.set({
			bio: bio
		});
		return this.done = true;
	}
	
}]);