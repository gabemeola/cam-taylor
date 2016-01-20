angular.module("camtaylorApp")
.controller("ctMain", ["$scope", "$q", "FIRE", function($scope, $q, FIRE) {
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
			var days = Math.floor(distance / _day);
//					hours = Math.floor((distance % _day) / _hour),
//					minutes = Math.floor((distance % _hour) / _minute),
//					seconds = Math.floor((distance % _minute) / _second);
			
			$scope.countdown = days + " Days!";
    }
	}

	if (screen.width < 450) {
    $scope.mobile = true;
		console.log("mobile")
	} else {
		$scope.mobile = false;
		console.log("not mobile")
	}
	
	$scope.ngMapInit = function (){
		$scope.ngMapShow = true;
	}
	//Grabs Bios from Firebase
	var grabBios = function() {
		var ref = new Firebase(FIRE.url + "bios/"),
			defer = $q.defer();
		ref.on("value", function(snapshot) {
			var data = snapshot.val();
			defer.resolve(data);
		})
		return defer.promise;
	}
	grabBios().then(function(res) {
		$scope.cameronBio = res.cameron.bio;
		$scope.taylorBio = res.taylor.bio;
	});
}]);