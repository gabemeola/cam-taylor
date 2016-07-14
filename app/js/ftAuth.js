angular.module("camtaylorApp")
.factory("ftAuth", ["$q", "$firebaseAuth", "FIRE", function($q, $firebaseAuth, FIRE){
	var ref = new Firebase(FIRE.url);
  return $firebaseAuth(ref);
}]);