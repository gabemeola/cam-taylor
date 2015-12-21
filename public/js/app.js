angular.module("camtaylorApp", ["firebase", "ui.router", "ngMaterial", "ngAnimate"])

.constant("FIRE", {
	url: ""
})

.config(function ($urlRouterProvider, $stateProvider) {
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
		});
})