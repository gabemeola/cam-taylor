angular.module("camtaylorApp")
.controller("ctMain", function($scope, $q){
	countdownClock();
	
	$scope.uiviewOpen = function(init) {
		if(init){
			if($scope.uiview == true){
				$scope.uiview = false;
				document.getElementById('card--expanded').setAttribute('class', 'card--expanded card--expanded-closeanimation');
				setTimeout(
					function() {
						$scope.uiview = true;
						document.getElementById('card--expanded').setAttribute('class', 'card--expanded card--expanded-openanimtion');
				}, 500);
			} else {
				$scope.uiview = true;
				document.getElementById('card--expanded').setAttribute('class', 'card--expanded card--expanded-openanimtion');
			}
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
					document.getElementById('countdown').innerHTML = 'EXPIRED!';
					return;
			}
			var days = Math.floor(distance / _day),
					hours = Math.floor((distance % _day) / _hour),
					minutes = Math.floor((distance % _hour) / _minute),
					seconds = Math.floor((distance % _minute) / _second);
			
			$scope.countdown = days;
    }
	}
	
	
	$scope.rsvpGuests = 0;
});