'use strict';

var mainApp=angular.module('mainApp',['ui.router']);


mainApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    
$urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'static/pages/home.html',
            controller:'HomeCtrl'
        })
        
       
      
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('aboutUs', {
            url: '/about',
            templateUrl: 'static/pages/aboutUs.html'
           ,controller:'AboutUsCtrl'
            
        })
    
    /* .state('plans', {
        url: '/plans',
        templateUrl: 'static/pages/plans.html'
        
    })
    
    
    
  .state('termsAndConditions', {
        url: '/termsAndConditions',
        templateUrl: 'static/pages/termsAndConditions.html'
        
    })
      .state('whyUs', {
        url: '/whyUs',
        templateUrl: 'static/pages/whyUs.html'
        
    })
    .state('fAQ.html', {
        url: '/fAQ.html',
        templateUrl: 'static/pages/fAQ.html.html'
        
    })
    .state('contactUs', {
        url: '/contactUs',
        templateUrl: 'static/pages/contactUs.html'
        
    })
    
    .state('loginPage', {
        url: '/loginPage',
        templateUrl: 'static/pages/loginPage.html'
        	,controller:'LoginCtrl'
        
    })
    
     .state('signUp', {
        url: '/signUp',
        templateUrl: 'static/pages/signUp.html'
        	,controller:'SignUpCtrl'
        
    })
    
    
     .state('logout', {
       
        controller:'LogOutCtrl'
        
    })
    
     .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'static/pages/dashboard.html'
        	,controller:'DashBoardCtrl'
        
    }) 
    
    
    .state('dashboard.profile', {
            url: '/profile',
            templateUrl: 'static/pages/profile.html',
            	 controller:'ProfileCtrl',
            	 resolve:{
            		 resa:function(){
            			 if(window.sessionStorage.getItem('loggedInUserId')===null){
            					$state.go('loginPage');
            					return
            				}	 
            		 }
            	 }
            	 
            
        })
    
        .state('dashboard.account', {
            url: '/account',
            templateUrl: 'static/pages/account.html',
            controller:'AccountCtrl'
            
        })
         .state('dashboard.downLine', {
            url: '/downline',
            templateUrl: 'static/pages/downLine.html',
            controller:'DownLineCtrl'
            
            
            
        })
         .state('dashboard.rewards', {
            url: '/rewards',
            templateUrl: 'static/pages/rewards.html',
            
        })
        
        .state('dashboard.todayTask', {
            url: '/todayTask',
            templateUrl: 'static/pages/todayTask.html',
            controller:'TodayTaskCtrl'
            
        })
        
        .state('dashboard.directReferralIncome', {
            url: '/directReferralIncome',
            templateUrl: 'static/pages/directReferral.html',
            controller:'DirectReferralCtrl'
            
        })
        
        .state('dashboard.binaryIncome', {
            url: '/binaryIncome',
            templateUrl: 'static/pages/binaryIncome.html',
            controller:'BinaryIncomeCtrl'
            
        })
        
        
        
        .state('dashboard.totatPayment', {
        url: '/totalPayment',
        templateUrl: 'static/pages/totalpayment.html'
        	,controller:'TotalpaymentCtrl'
        
    })*/
    ;
    
    
        
}]);


/*mainApp.controller('IndexCtrl', ['$scope','$state', function($scope,$state) {
	
	
}])
*/

