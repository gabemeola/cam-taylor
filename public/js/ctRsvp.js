angular.module("camtaylorApp")
.controller("ctRsvp", function($scope, svRsvpForm){
	
	$scope.guests = 0;
	$scope.rsvpDone = "RSVP";
	
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
		svRsvpForm.postRsvp(firstName, lastName, email, tel, guests, message)
		if(svRsvpForm.done){
			$scope.rsvp.firstname =  " ";
			$scope.rsvp.lastname = " " ;
			$scope.rsvp.email =  "username@email.com";
			$scope.rsvp.tel =  " ";
			$scope.guests = 0;
			$scope.rsvp.message =  " ";
			$scope.rsvpDone = "Thank you! See you soon!";
		}
		
		console.log(svRsvpForm.done);		
	}
	
});