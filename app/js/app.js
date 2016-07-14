angular.module("camtaylorApp", ["firebase", "ui.router", "ngMaterial", "ngAnimate", "ngMap"])
	.constant("FIRE", {
		url: "https://taylor-cam.firebaseio.com/camtaylorApp/"
	})
	.config(["$urlRouterProvider", "$stateProvider", function ($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise("/");
		$stateProvider
			.state('home', {
				url: '/',
				template: require('../templates/_cameronbio.html'),
				controller: null
			})
			.state("cameronbio", {
				url: '/cameronbio',
				template: require('../templates/_cameronbio.html'),
				controller: null
			})
			.state("taylorbio", {
				url: "/taylorbio",
				template: require("../templates/_taylorbio.html"),
				controller: null
			})
			.state("rsvp", {
				url: "/rsvp",
				template: require("../templates/_rsvp.html"),
				controller: null
			})
			.state("templebtn", {
				url: "/temple",
				template: require("../templates/_templebtn.html"),
				controller: null
			})
			.state("registry", {
				url: "/registry",
				template: require("../templates/_registry.html"),
				controller: null
			});
	}]);

// Disable Angular Debug is Environment is in production
if(process.env.production) {
	angular.module("camtaylorApp")
		.config(['$compileProvider', function ($compileProvider) {
			$compileProvider.debugInfoEnabled(false);
		}]);
} else {
	angular.module("camtaylorApp")
		.config(['$compileProvider', function ($compileProvider) {
			$compileProvider.debugInfoEnabled(true);
		}]);
}