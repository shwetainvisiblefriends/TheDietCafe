 
   mainApp.controller('HomeCtrl',['$scope','GetUserLocationService',function($scope,GetUserLocationService) {
	console.log("hallo home page");
	$scope.getCurrentLocation=function(){
		console.log('calling submit button..');
		
		GetUserLocationService.getUserCurrentLocation()
				.then(
						function(d) {
							console.log(d);
							
							
							
				              
							
						},
						
						function(errResponse){}
						);
		
	};
}])