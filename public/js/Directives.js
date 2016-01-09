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
.directive("registry", function() {
	return {
		templateUrl: "./templates/_registry.html"
	}
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
})
.directive("location", function() {
	return {
		templateUrl: "./templates/_location.html"
	}
})
.directive("rsvp", function() {
	return {
		templateUrl: "./templates/_rsvp.html"
	}
})
.directive("adminLogin", function() {
	return {
		templateUrl: "./templates/_admin-login.html"
	}
})
.directive("adminMain", function() {
	return {
		templateUrl: "./templates/_admin-main.html"
	}
});
