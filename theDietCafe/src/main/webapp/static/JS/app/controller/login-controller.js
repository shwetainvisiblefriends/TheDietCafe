mainApp.controller('LoginCtrl',['$scope','$state',function($scope,$state) {
	console.log("hallo login page");
	$scope.login=function(){
		
		console.log('login method is called');
		$state.go('product');
		
	};
}])