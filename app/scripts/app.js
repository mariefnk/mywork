'use strict';


var myApp=angular.module('myApp',[
  'ngRoute',
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngTouch'
  ]);

myApp.config(function ($routeProvider){

  $routeProvider
  .when('/currentjobs',{
      templateUrl:'views/currentjobs.html',
      controller:'currentjobsController'

  })
  .when('/pendingjobs',{
      templateUrl:'views/pendingjobs.html',
      controller:'pendingController'
  })

  .when('/historyjobs',{
      templateUrl:'views/historyjobs.html',
      controller:'historyJobsController'
  })

  .when ('/payment',{
    templateUrl:'views/payment.html',
    controller:'paymentController'
  })

  .when ('/paymentHistory',{
    templateUrl:'views/paymentHistory.html',
    controller:'paymentHistoryController'
  })

  .when('/settings',{
    templateUrl:'views/settings.html',
    controller:'settings'
  })

  .when ('/myreviews',{
    templateUrl:'views/myreviews.html',
    controller:'myreviewsController'
  })
  .when ('/home-page-employer',{
    templateUrl:'views/home-page-employer.html',
    controller:'HomePageController'
  })
  .when('/', {
    templateUrl:'views/home-page-employer.html',
    controller:'HomePageController'
  })
   .when('/selectedWorker', {
    templateUrl:'views/worker-search-selected-profile.html',
    controller:'SearchWorkerSelected'
  })
  .otherwise({
    redirectTo:'/home-page-employer'
  });

});

myApp.controller('settings',['$scope','$log', function($scope,$log){

}]);

myApp.controller('SearchWorkerSelected', [function(){
  searchController();

}]);

myApp.controller('HomePageController', [
  function () {
    employerPageSetup();
  }
]);


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
    if(!$scope.selectedMonth) {
      return true;
    }
    return element.created.getMonth() == $scope.selectedMonth;
  }
  
  $scope.selectedLocationFilter = function(element) {
    if(!$scope.selectedLocation) return true;
    return element.created.getLocation() == $scope.selectedLocation;
  };
  
  function randomDate(start, end) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  } 

  $scope.appointments = [{"contract_id":"1","first_name":"Larry","last_name":"Ullman","start_date":"2017-04-02 19:10:13","end_date":"2017-04-02 19:10:13","location":"Boston"},{"contract_id":"2","first_name":"John","last_name":"Lennon","start_date":"0000-00-00 00:00:00","end_date":"0000-00-00 00:00:00","location":"Boston"},{"contract_id":"3","first_name":"John","last_name":"Brown","start_date":"0000-00-00 00:00:00","end_date":"0000-00-00 00:00:00","location":"Boston"},{"contract_id":"4","first_name":"Tom","last_name":"Smith","start_date":"0000-00-00 00:00:00","end_date":"0000-00-00 00:00:00","location":"London"},{"contract_id":"5","first_name":"Sebastian","last_name":"Pier","start_date":"0000-00-00 00:00:00","end_date":"0000-00-00 00:00:00","location":"Paris"}];
	
  /*
  $http.get("pages/currentjobs.php").then(function(response){
		$scope.appointments = response.data;
	});
  */
  
  

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

