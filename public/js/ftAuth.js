angular.module("camtaylorApp")
.factory("ftAuth", function($q, $firebaseAuth, FIRE){
	var ref = new Firebase(FIRE.url);
  return $firebaseAuth(ref);
});