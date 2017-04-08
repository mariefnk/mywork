'use strict';


var myApp=angular.module('myApp',[
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

myApp.config(function ($routeProvider){
  $routeProvider
  //from yeoman
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl',
    controllerAs: 'about'
  })
  //ours
  .when('/currentjobs',{
      templateUrl:'pages/currentjobs.html',
      controller:'currentjobsController'

  })

  .when('/pendingjobs',{
      templateUrl:'pages/pendingjobs.html',
      controller:'pendingController'
  })

  .when('/historyjobs',{
      templateUrl:'pages/historyjobs.html',
      controller:'historyJobsController'
  })

  .when ('/payment',{
    templateUrl:'pages/payment.html',
    controller:'paymentController'
  })

  .when ('/paymentHistory',{
    templateUrl:'pages/paymentHistory.html',
    controller:'paymentHistoryController'
  })

  .when('/settings',{
    templateUrl:'pages/settings.html',
    controller:'settings'
  })

  .when ('/myreviews',{
    templateUrl:'pages/myreviews.html',
    controller:'myreviewsController'
  })

  .otherwise({
    redirectTo:'/currentjobs'
    
  });

});

myApp.controller('settings',['$scope','$log', function($scope,$log){

}]);


myApp.controller('myreviewsController',['$scope', '$log', function($scope,$log){


}]);

myApp.controller('paymentHistoryController',['$scope', '$log', function($scope,$log){


}]);

myApp.controller('paymentController',['$scope', '$log', function($scope,$log){


}]);

////FOR CURRENT TABLE
myApp.controller('currentjobsController', function($http,$scope,$timeout,$log){


//var j = $.noConflict();

$scope.appointments = [];
  
  $scope.selectedLocation = "";
  $scope.selectedMonth = "";
  
   $scope.selectedMonthFilter = function(element) {
    if(!$scope.selectedMonth) return true;
    return element.created.getMonth() == $scope.selectedMonth;
  }
  
  $scope.selectedLocationFilter = function(element) {
    if(!$scope.selectedLocation) return true;
    return element.created.getLocation() == $scope.selectedLocation;
  }
    function randomDate(start, end) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  } 


	$http.get("pages/currentjobs.php").then(function(response){
		$scope.appointments = response.data;
	});

  
  

///////////////////////////////////////////////////////////////////Modal



$scope.modalDisp = function(clickedInst){
  //alert(clickedInst);
  $scope.currentSelected = clickedInst;

//var modal = document.getElementById('myModal');
	//modal.style.display = "block";
  //j('#myModal').modal('show');
}

});


  
//////// FOR PENDING TABLE
myApp.controller('pendingController',['$scope','$log', function($scope,$log){
   $scope.appointments = [];
  
  $scope.selectedLocation = "";
  $scope.selectedMonth = "";
  
   $scope.selectedMonthFilter = function(element) {
    if(!$scope.selectedMonth) return true;
    return element.created.getMonth() == $scope.selectedMonth;
  }
  
  $scope.selectedLocationFilter = function(element) {
    if(!$scope.selectedLocation) return true;
    return element.created.getLocation() == $scope.selectedLocation;
  }
    function randomDate(start, end) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  } 





}]);
//// FOR HISTORY TABLE
myApp.controller('historyJobsController',['$scope','$log', function($scope,$log){
 $scope.appointments = [];
  
  $scope.selectedLocation = "";
  $scope.selectedMonth = "";
  
   $scope.selectedMonthFilter = function(element) {
    if(!$scope.selectedMonth) return true;
    return element.created.getMonth() == $scope.selectedMonth;
  }
  
  $scope.selectedLocationFilter = function(element) {
    if(!$scope.selectedLocation) return true;
    return element.created.getLocation() == $scope.selectedLocation;
  }
    function randomDate(start, end) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  } 



}]);

