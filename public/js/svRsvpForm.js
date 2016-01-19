angular.module("camtaylorApp")
.service("svRsvpForm", ["$q", "FIRE", "$firebaseObject", function($q, FIRE, $firebaseObject) {
	
	this.postRsvp = function(firstName, lastName, email, tel, guests, message) {
		
		var ref = new Firebase(FIRE.url + "rsvps/" + tel + "/");
		console.warn(firstName, lastName, email, tel, guests, message);
		
		ref.set({
			firstName: firstName,
			lastName: lastName,
			email: email,
			tel: tel,
			guests: guests,
			message: message
		});
		return this.done = true;
	}
}]);