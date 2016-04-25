angular.module("camtaylorApp")
.service("svUpdateBios",["FIRE", function(FIRE) {
	
	this.pushUpdate = function(name, bio) {
		var ref = new Firebase(FIRE.url + "bios/" + name);
		
		ref.set({
			bio: bio
		});
		return this.done = true;
	}
	
}]);