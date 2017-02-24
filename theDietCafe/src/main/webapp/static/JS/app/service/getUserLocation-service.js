'use strict';

mainApp.factory('GetUserLocationService', ['$http', '$q', function($http, $q){

	return {
		
			
		    getUserCurrentLocation: function(){
     		    	
					return $http.get('http://ip-api.com/json')
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while creating user');
										return $q.reject(errResponse);
									}
							);
		    },
		    
		 
		
	};
	
	

}]);