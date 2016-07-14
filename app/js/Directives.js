angular.module("camtaylorApp")
	.directive("cardContent", function(){
		return {
			template: require("../templates/_card-content.html")
		};
	})
	.directive("pictures", function(){
		return {
			template: require("../templates/_pictures.html")
		};
	})
	.directive("registry", function() {
		return {
			template: require("../templates/_registry.html")
		}
	})
	.directive("registryMaceys", function() {
		return {
			template: require("../templates/_registry-maceys.html")
		}
	})
	.directive("registryTarget", function() {
		return {
			template: require("../templates/_registry-target.html")
		}
	})
	.directive("location", function() {
		return {
			template: require("../templates/_location.html")
		}
	})
	.directive("rsvp", function() {
		return {
			template: require("../templates/_rsvp.html")
		}
	})
	.directive("adminLogin", function() {
		return {
			template: require("../templates/_admin-login.html")
		}
	})
	.directive("adminMain", function() {
		return {
			template: require("../templates/_admin-main.html")
		}
	});
