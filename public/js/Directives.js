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
});