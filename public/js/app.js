angular.module("camtaylorApp", ["firebase", "ui.router", "ngMaterial", "ngAnimate", "ngMap"])
	.constant("FIRE", {
		url: "https://taylor-cam.firebaseio.com/camtaylorApp/"
	})
	.config(["$urlRouterProvider", "$stateProvider", function ($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise("/");
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: './templates/_cameronbio.html',
				controller: null,
			})
			.state("cameronbio", {
				url: '/cameronbio',
				templateUrl: './templates/_cameronbio.html',
				controller: null,
			})
			.state("taylorbio", {
				url: "/taylorbio",
				templateUrl: "./templates/_taylorbio.html",
				controller: null,
			})
			.state("rsvp", {
				url: "/rsvp",
				templateUrl: "./templates/_rsvp.html",
				controller: null,
			})
			.state("templebtn", {
				url: "/temple",
				templateUrl: "./templates/_templebtn.html",
				controller: null
			})
			.state("registry", {
				url: "/registry",
				templateUrl: "./templates/_registry.html",
				controller: null
			});
}]);