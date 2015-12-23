angular.module("camtaylorApp")
.controller("ctMain", function($scope){
	
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
	
	$scope.guests = 0;
	
});