angular.module("camtaylorApp")
.directive("cardContent", function(){
	return {
		templateUrl: "./templates/_card-content.html"				 
	};			 
})
.directive("pictures", function(){
	return {
		templateUrl: "./templates/_pictures.html"
	};
})
.directive("registryMaceys", function() {
	return {
		templateUrl: "./templates/_registry-maceys.html"
	}
})
.directive("registryTarget", function() {
	return {
		templateUrl: "./templates/_registry-target.html"
	}
});