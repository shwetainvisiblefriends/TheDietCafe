 
   mainApp.controller('HomeCtrl',['$scope',function($scope) {
	console.log("hallo home page");
	$scope.getCurrentLocation=function(){
	console.log("calling home ctlr!!!!")
	navigator.geolocation.getCurrentPosition(function(pos) {
        $scope.position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        console.log(JSON.stringify($scope.position));                  
    }, 
    function(error) {                    
        alert('Unable to get location: ' + error.message);
    }, options);
		
	};
}])