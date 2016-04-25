angular.module("camtaylorApp")
.controller("ctRsvp", ["$scope", "svRsvpForm", function($scope, svRsvpForm){
	
	$scope.guests = 0;
	$scope.rsvpDone = "RSVP";
	
	$scope.enterRsvp = function(){
		console.log("enterRsvp Ran!");
		
		var firstName = $scope.rsvp.firstname,
				lastName = $scope.rsvp.lastname,
				email = $scope.rsvp.email,
				tel = $scope.rsvp.tel,
				guests = $scope.guests,
				message = $scope.rsvp.message;
		
		console.log(tel);
		svRsvpForm.postRsvp(firstName, lastName, email, tel, guests, message);
		if(svRsvpForm.done){
			$scope.rsvp.firstname =  " ";
			$scope.rsvp.lastname = " " ;
			$scope.rsvp.email =  " ";
			$scope.rsvp.tel =  " ";
			$scope.guests = 0;
			$scope.rsvp.message =  " ";
			$scope.rsvpDone = "Thank you!";
		}
		
		console.log(svRsvpForm.done);		
	}
	
}]);