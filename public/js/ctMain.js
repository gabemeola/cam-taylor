angular.module("camtaylorApp")
.controller("ctMain", function($scope){
	
	$scope.uiviewOpen = function(init) {
		if(init){
			$scope.uiview = true;
		}	
	};
	
});