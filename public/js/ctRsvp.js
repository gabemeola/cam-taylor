angular.module("camtaylorApp")
.controller("ctRsvp", function($scope, svRsvpForm){
	
	$scope.guests = 0;
	
	$scope.getRsvp = function(init){
		if(init){
			svRsvpForm.getRsvp("3852019950");
			console.log("Function Ran");
		}
	};
	
	$scope.enterRsvp = function(){
		console.log("enterRsvp Ran!");
		
		var firstName = $scope.rsvp.firstname,
				lastName = $scope.rsvp.lastname,
				email = $scope.rsvp.email,
				tel = $scope.rsvp.tel,
				guests = $scope.guests,
				message = $scope.rsvp.message;
		
		console.log(tel);
		svRsvpForm.postRsvp(firstName, lastName, email, tel, guests, message).then(function(res) {
			console.log(res);
		})
		
	}
	
});