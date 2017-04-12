'use strict';

// var list=[{"contract_id":"1","first_name":"Larry","last_name":"Ullman","start_date":"2017-04-02 19:10:13","end_date":"2017-04-02 19:10:13","location":"Boston", "status":"1"},{"contract_id":"2","first_name":"John","last_name":"Lennon","start_date":"0000-00-00 00:00:00","end_date":"0000-00-00 00:00:00","location":"Boston","status":"2"},{"contract_id":"3","first_name":"John","last_name":"Brown","start_date":"0000-00-00 00:00:00","end_date":"0000-00-00 00:00:00","location":"Boston","status":"1"},{"contract_id":"4","first_name":"Tom","last_name":"Smith","start_date":"0000-00-00 00:00:00","end_date":"0000-00-00 00:00:00","location":"London","status":"3"},{"contract_id":"5","first_name":"Sebastian","last_name":"Pier","start_date":"0000-00-00 00:00:00","end_date":"0000-00-00 00:00:00","location":"Paris","status":"2"}];

var myApp=angular.module('myApp',[
  'ngRoute',
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngTouch'
  ]);

  myApp.run(function($rootScope) {
    $rootScope.appointments = [{"contract_id":"4551","first_name":"Larry","last_name":"Ullman","start_date":"2017-04-02","end_date":"2017-04-02","location":"Boston", "status":"1"},
    {"contract_id":"2232","first_name":"John","last_name":"Lennon","start_date":"2017-04-02","end_date":"2017-04-02","location":"Boston","status":"2"},
    {"contract_id":"3323","first_name":"John","last_name":"Brown","start_date":"2017-04-02","end_date":"2017-04-02","location":"Boston","status":"1"},
    {"contract_id":"4323","first_name":"Tom","last_name":"Smith","start_date":"2017-04-02","end_date":"2017-04-02","location":"London","status":"3"},

     {"contract_id":"3232","first_name":"Peter","last_name":"Lennon","start_date":"2017-04-02","end_date":"2017-04-02","location":"London","status":"2"},
    {"contract_id":"5453","first_name":"Ava","last_name":"Brown","start_date":"2017-04-02","end_date":"2017-04-02","location":"Boston","status":"1"},

         {"contract_id":"552","first_name":"Dean","last_name":"Lennon","start_date":"2017-04-02","end_date":"2017-04-02","location":"London","status":"2"},
    {"contract_id":"3545","first_name":"Anna","last_name":"Brown","start_date":"2017-04-02","end_date":"2017-04-02","location":"Boston","status":"1"},

         {"contract_id":"21234","first_name":"Sam","last_name":"Lennon","start_date":"2017-04-02","end_date":"2017-04-02","location":"London","status":"3"},
    {"contract_id":"43543","first_name":"Asayl","last_name":"Brown","start_date":"2017-04-02","end_date":"2017-04-02","location":"Boston","status":"3"},

    {"contract_id":"5455","first_name":"Sebastian","last_name":"Pier","start_date":"2017-04-02","end_date":"2017-04-02","location":"Paris","status":"2"}];

    
});

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
   .when('/selectedWorker', {
    templateUrl:'views/worker-search-selected-profile.html',
    controller:'SearchWorkerSelected'
  })
   .when('/reviewsPage', {
    templateUrl:'views/reviews-page.html',
    controller:'ReviewsControllers'
  })
   .when('/messagesPage', {
    templateUrl:'views/messages.html',
    controller:'MessagesControllers'
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

myApp.controller('MessagesControllers', [
  
]);

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
myApp.controller('currentjobsController', function($http,$scope,$timeout,$log, $rootScope){


//var j = $.noConflict();

/*$scope.appointments = [];
  
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
  } */

  // $scope.appointments = [{"contract_id":"1","first_name":"Larry","last_name":"Ullman","start_date":"2017-04-02 19:10:13","end_date":"2017-04-02 19:10:13","location":"Boston"},{"contract_id":"2","first_name":"John","last_name":"Lennon","start_date":"0000-00-00 00:00:00","end_date":"0000-00-00 00:00:00","location":"Boston"},{"contract_id":"3","first_name":"John","last_name":"Brown","start_date":"0000-00-00 00:00:00","end_date":"0000-00-00 00:00:00","location":"Boston"},{"contract_id":"4","first_name":"Tom","last_name":"Smith","start_date":"0000-00-00 00:00:00","end_date":"0000-00-00 00:00:00","location":"London"},{"contract_id":"5","first_name":"Sebastian","last_name":"Pier","start_date":"0000-00-00 00:00:00","end_date":"0000-00-00 00:00:00","location":"Paris"}];
	//$scope.appointments=list;
  
/*  $http.get("https://kochetygovam.000webhostapp.com/currentjobs.php").then(function(response){
    
		$scope.appointments = response.data;
	});*/
  
  $scope.testClick =function(cId){
for(var i = 0; i<$rootScope.appointments.length; i++)
{
   if($rootScope.appointments[i].contract_id == cId){
     $rootScope.appointments[i].status = 3;
   }
}
       
       
      }
  
  

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

//$scope.appointments = [{"contract_id":"1","first_name":"Larry","last_name":"Ullman","start_date":"2017-04-02 19:10:13","end_date":"2017-04-02 19:10:13","location":"Boston"},{"contract_id":"2","first_name":"John","last_name":"Lennon","start_date":"0000-00-00 00:00:00","end_date":"0000-00-00 00:00:00","location":"Boston"},{"contract_id":"3","first_name":"John","last_name":"Brown","start_date":"0000-00-00 00:00:00","end_date":"0000-00-00 00:00:00","location":"Boston"},{"contract_id":"4","first_name":"Tom","last_name":"Smith","start_date":"0000-00-00 00:00:00","end_date":"0000-00-00 00:00:00","location":"London"},{"contract_id":"5","first_name":"Sebastian","last_name":"Pier","start_date":"0000-00-00 00:00:00","end_date":"0000-00-00 00:00:00","location":"Paris"}];

 $scope.testClick =function(cId){
for(var i = 0; i<$rootScope.appointments.length; i++)
{
   if($rootScope.appointments[i].contract_id == cId){
     $rootScope.appointments[i].status = 0;
   }
}
       
       
      }



}]);
//// FOR HISTORY TABLE
myApp.controller('historyJobsController',['$scope','$log', function($scope,$log){
 


 $scope.testClick =function(cId){
for(var i = 0; i<$rootScope.appointments.length; i++)
{
   if($rootScope.appointments[i].contract_id == cId){
     $rootScope.appointments[i].status = 3;
   }
}
       
       
      }

}]);