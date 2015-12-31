/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	//App
	__webpack_require__( 1);
	//Directive
	__webpack_require__( 2);

	//Controllers
	__webpack_require__( 3);
	__webpack_require__( 4);
	//End Of Controllers

	//Services
	__webpack_require__( 5);
	//End Services

	//Factories
	//End of Factories

/***/ },
/* 1 */
/***/ function(module, exports) {

	angular.module("camtaylorApp", ["firebase", "ui.router", "ngMaterial", "ngAnimate", "ngMap"])

	.constant("FIRE", {
		url: "https://taylor-cam.firebaseio.com/camtaylorApp/"
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
			})
			.state("location", {
				url: "/location",
				templateUrl: "./templates/_location.html",
				controller: null
		});
	})

/***/ },
/* 2 */
/***/ function(module, exports) {

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

/***/ },
/* 3 */
/***/ function(module, exports) {

	angular.module("camtaylorApp")
	.controller("ctMain", function($scope, $q){
		countdownClock();
		$scope.uiview = true;
		
		$scope.uiviewOpen = function(init) {
			if($scope.uiview){
				$scope.uiview = false;
			}
		};
		
		function countdownClock(){
			var end = new Date('03/22/2016 10:1 AM'),
	    		_second = 1000,
	    		_minute = _second * 60,
	    		_hour = _minute * 60,
	    		_day = _hour * 24;
				showRemaining();
	    function showRemaining() {
				var now = new Date();
				var distance = end - now;
				if (distance < 0) {
						clearInterval(timer);
						document.getElementById('countdown').innerHTML = 'MARRIED!';
						return;
				}
				var days = Math.floor(distance / _day),
						hours = Math.floor((distance % _day) / _hour),
						minutes = Math.floor((distance % _hour) / _minute),
						seconds = Math.floor((distance % _minute) / _second);
				
				$scope.countdown = days + " Days!";
	    }
		}
		
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	angular.module("camtaylorApp")
	.controller("ctRsvp", function($scope, svRsvpForm){
		
		$scope.guests = 0;
		$scope.rsvpDone = "RSVP";
		
		$scope.enterRsvp = function(){
			console.log("enterRsvp Ran!");
			
			var firstName = $scope.rsvp.firstname,
					lastName = $scope.rsvp.lastname,
					email = $scope.rsvp.email,
					tel = $scope.rsvp.tel,
					guests = $scope.guests,
					message = $scope.rsvp.message;
			
			console.log(tel);
			svRsvpForm.postRsvp(firstName, lastName, email, tel, guests, message)
			if(svRsvpForm.done){
				$scope.rsvp.firstname =  " ";
				$scope.rsvp.lastname = " " ;
				$scope.rsvp.email =  "username@email.com";
				$scope.rsvp.tel =  " ";
				$scope.guests = 0;
				$scope.rsvp.message =  " ";
				$scope.rsvpDone = "Thank you!";
			}
			
			console.log(svRsvpForm.done);		
		}
		
	});

/***/ },
/* 5 */
/***/ function(module, exports) {

	angular.module("camtaylorApp")
	.service("svRsvpForm", function($q, FIRE, $firebaseObject) {
		
		this.postRsvp = function(firstName, lastName, email, tel, guests, message) {
			var defer = $q.defer(),
					ref = new Firebase(FIRE.url + "rsvps/" + tel + "/");
			console.warn(firstName, lastName, email, tel, guests, message);
			
			ref.set({
				firstName: firstName,
				lastName: lastName,
				email: email,
				tel: tel,
				guests: guests,
				message: message
			});
			return this.done = true;
		}
	});

/***/ }
/******/ ]);