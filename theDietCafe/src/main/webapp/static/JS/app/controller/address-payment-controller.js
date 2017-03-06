mainApp.controller('AddresNPaymntCtrl',['$scope','$uibModalInstance',function($scope,$uibModalInstance) {
	console.log("hallo AddresNPaymntCtrl");
	$scope.close = function () {
		
		
		
		
		console.log('halllo');
		//$uibModalInstance.dismiss('cancel');
		
		
		 if (navigator.geolocation) {
		        navigator.geolocation.getCurrentPosition(function (position) {

		                mysrclat = position.coords.latitude; 
		                mysrclong = position.coords.longitude;
		                console.log(mysrclat);
		                console.log(mysrclong);
		                
		                var geocoder = new google.maps.Geocoder();
		                geocoder.geocode({ 'latLng': latlng }, function (results, status) {
		                    if (status == google.maps.GeocoderStatus.OK) {
		                        if (results[1]) {
		                            alert("Location: " + results[1].formatted_address);
		                        }
		                    }
		                });
		        });
		        
		    }
		};
		

}])