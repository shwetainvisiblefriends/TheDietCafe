mainApp.controller('ProductDetailsCtrl',['$scope','$filter',function($scope,$filter) {
	console.log('ProductDetailsCtrl is called');
	/*$scope.gridOptions = {enableSorting: true,
	        columnDefs: [
	                     { name:'First Name', field: 'fName',cellClass:'bgNfontColorofCell' },
	                     { name:'Last Name', field: 'lName',cellClass:'bgNfontColorofCell'  },
	                     { name:'Company', field: 'company' ,cellClass:'bgNfontColorofCell' },
	                     { name:'Employed', field: 'employed' ,cellClass:'bgNfontColorofCell' }
	                     
	                   
	                   ],
		
		 data :[
	                 {
	                     "fName": "Cox",
	                     "lName": "Carney",
	                     "company": "Enormo",
	                     "employed": true
	                 },
	                 {
	                     "fName": "Lorraine",
	                     "lName": "Wise",
	                     "company": "Comveyer",
	                     "employed": false
	                 },
	                 {
	                     "fName": "Nancy",
	                     "lName": "Waters",
	                     "company": "Fuelton",
	                     "employed": false
	                 }
	             ]};*/
	$scope.allData=[
	                {
	                    "id": 0,
	                    "productName": "orange juice",
	                    "unitePrice": "67.0",
	                    "productImg":"/theDietCafe/static/img/images.jpg",
	                    
	                },
	                {
	                    "id": 2,
	                    "productName": "Banana shake",
	                    "unitePrice": "110.0",
	                    "productImg":"/theDietCafe/static/img/banana-shake.jpg",
	                },
	               
	                {
	                    "id": 3,
	                    "productName": "Fry Aloo",
	                    "unitePrice": "100.0",
	                    "productImg":"/theDietCafe/static/img/air-fry.jpg",
	                    
	                },
	                {
	                    "id": 4,
	                    "productName": "Lemon juice",
	                    "unitePrice": "67.89",
	                    "productImg":'',
	                    
	                },
	                {
	                    "id": 5,
	                    "productName": "malai paneer",
	                    "unitePrice": "123.0",
	                    "productImg":'',
	                    
	                },
	                {
	                    "id": 6,
	                    "productName": "grilled panner",
	                    "unitePrice": "98.0",
	                    "productImg":'',
	                    
	                },
	                {
	                    "id": 7,
	                    "productName": "Veg. Momos",
	                    "unitePrice": "67.0",
	                    "productImg":'',
	                    
	                },
	                {
	                    "id": 8,
	                    "productName": "NonVeg. Momos",
	                    "unitePrice": "67.0",
	                    "productImg":'',
	                    
	                },
	                {
	                    "id": 9,
	                    "productName": "Grilled Chicken",
	                    "unitePrice": "99.0",
	                    "productImg":'',
	                    
	                },
	                {
	                    "id": 10,
	                    "productName": "orange juice",
	                    "unitePrice": "67.0",
	                    "productImg":'',
	                    
	                },
	                {
	                    "id": 11,
	                    "productName": "orange juice",
	                    "unitePrice": "67.0",
	                    "productImg":'',
	                    
	                },
	                {
	                    "id": 12,
	                    "productName": "orange juice",
	                    "unitePrice": "67.0",
	                    "productImg":'',
	                    
	                },
	                {
	                    "id": 13,
	                    "productName": "orange juice",
	                    "unitePrice": "67.0",
	                    "productImg":'',
	                    
	                },
	                {
	                    "id": 14,
	                    "productName": "orange juice",
	                    "unitePrice": "67.0",
	                    "productImg":'',
	                    
	                },
	                {
	                    "id": 14,
	                    "productName": "orange juice",
	                    "unitePrice": "67.0",
	                    "productImg":'',
	                    
	                },
	                {
	                    "id": 16,
	                    "productName": "orange juice",
	                    "unitePrice": "67.0",
	                    "productImg":'',
	                    
	                },
	                {
	                    "id": 17,
	                    "productName": "orange juice",
	                    "unitePrice": "67.0",
	                    "productImg":'',
	                    
	                },
	                {
	                    "id": 18,
	                    "productName": "orange juice",
	                    "unitePrice": "67.0",
	                    "productImg":'',
	                    
	                },
	                {
	                    "id": 19,
	                    "productName": "orange juice",
	                    "unitePrice": "67.0",
	                    "productImg":'',
	                    
	                },
	                {
	                    "id": 20,
	                    "productName": "orange juice",
	                    "unitePrice": "67.0",
	                    "productImg":'',
	                    
	                },
	                
	               
	                
	                
	            ];
	
	
	
	/*pagignation control page*/
	 $scope.currentPage = 0;
	    $scope.pageSize = 12;
	    $scope.data = [];
	    $scope.q = '';
	    
	    $scope.getData = function () {
	      return $filter('filter')($scope.allData, $scope.q)
	     
	    };
	    
	    $scope.numberOfPages=function(){
	        return Math.ceil($scope.getData().length/$scope.pageSize);                
	    };
	    
	
	    $scope.quantities = [1,2,3,4,5];
	    $scope.selectedQty=1;
	    $scope.unitammount=4;
	    var chooseItem={selectedItem:[]};
	    $scope.checkBoxValue;
	    
	    //Create arrary to get details of iteams user selection
	    $scope.getValue=function(singleProductDetail,totalAmmount,totalQty,event){
	    	//console.log($scope.checkBoxValue);
	    	console.log("hi ");
	    	//console.log(singleProductDetail);
	    	//console.log('=================================== Event=================================');
	    	//console.log(event.checkBoxValue);
	    	if(event.checkBoxValue==true){
	    	chooseItem.selectedItem.push({'ProductId':singleProductDetail.id,
	    	'productName':singleProductDetail.productName,
	    	'quantity':totalQty,'totalAmount':totalAmmount});
	    	}
	    	else{
	    		//var index=chooseItem.selectedItem.indexOf(selectedItem);
	    		console.log('length of===');
	    		//console.log(index);
	    		console.log(chooseItem.selectedItem.length)
	    		for(var i=0;i<chooseItem.selectedItem.length;i++){
	    			if(chooseItem.selectedItem[i].ProductId==singleProductDetail.id){
	    				chooseItem.selectedItem.splice(i,1);
	    			}
	    		}
	    	}
	    	console.log(chooseItem);
	    }
	    
	    
}]);





mainApp.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
