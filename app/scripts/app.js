'use strict';


var myApp=angular.module('myApp',[
  'ngRoute',
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'ui.router'
  ]);

myApp.run(function(){

  //  var link = '<link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap.css">'
  //  $('head').append(link)
})

myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider){

  // $locationProvider.html5Mode({enabled: true, requireBase: false})
  $urlRouterProvider.otherwise("/");

  $stateProvider.state('landing',{
    url: '/',
    abstract: false,
    views: {
      main: {templateUrl: "views/landing.html", controller: 'LandingPageController'}
    }
  })
  $stateProvider.state('login',{
    url: '/login',
    abstract: false,
    views: {
      main: {templateUrl: "views/login.html", controller: 'loginController'}
    }
  })
  


  $stateProvider.state('app',{
    url: '/app',
    abstract: false,
    views: {
      main: {templateUrl: "views/app.html", controller: 'AppPageController'}
    }
  })

  $stateProvider.state('app.currentjobs',{
    url: '/currentjobs',
    abstract: false,
    views: {
      app: {templateUrl: "views/currentjobs.html", controller: 'currentjobsController'}
    }
  })

  $stateProvider.state('app.pendingjobs',{
    url: '/pendingjobs',
    abstract: false,
    views: {
      app: {templateUrl: "views/pendingjobs.html", controller: 'pendingController'}
    }
  })
  $stateProvider.state('app.historyjobs',{
    url: '/historyjobs',
    abstract: false,
    views: {
      app: {templateUrl: "views/historyjobs.html", controller: 'historyJobsController'}
    }
  })

  $stateProvider.state('app.payment',{
    url: '/payment',
    abstract: false,
    views: {
      app: {templateUrl: "views/payment.html", controller: 'paymentController'}
    }
  })



  $stateProvider.state('app.paymentHistory',{
    url: '/paymentHistory',
    abstract: false,
    views: {
      app: {templateUrl: "views/paymentHistory.html", controller: 'paymentHistoryController'}
    }
  })

  $stateProvider.state('app.settings',{
    url: '/settings',
    abstract: false,
    views: {
      app: {templateUrl: "views/settings.html", controller: 'settings'}
    }
  })

  $stateProvider.state('app.myreviews',{
    url: '/myreviews',
    abstract: false,
    views: {
      app: {templateUrl: "views/myreviews.html", controller: 'myreviewsController'}
    }
  })
  $stateProvider.state('app.homepageemployer',{
    url: '/home-page-employer',
    abstract: false,
    views: {
      app: {templateUrl: "views/home-page-employer.html", controller: 'HomePageController'}
    }
  })
  $stateProvider.state('app.selectedWorker',{
    url: '/selectedWorker',
    abstract: false,
    views: {
      app: {templateUrl: "views/worker-search-selected-profile.html", controller: 'SearchWorkerSelected'}
    }
  })
  $stateProvider.state('app.reviewsPage',{
    url: '/reviewsPage',
    abstract: false,
    views: {
      app: {templateUrl: "views/reviews-page.html", controller: 'ReviewsControllers'}
    }
  })
  $stateProvider.state('app.messagesPage',{
    url: '/messagesPage',
    abstract: false,
    views: {
      app: {templateUrl: "views/messages.html", controller: 'MessagesControllers'}
    }
  })



});

myApp.controller('settings',['$scope','$log', function($scope,$log){

}]);

myApp.controller('SearchWorkerSelected', [

]);

myApp.controller('MessagesControllers', [

]);

myApp.controller('HomePageController', [
  function () {
    employerPageSetup();
  }
]);

myApp.controller('LandingPageController', [function () {
    console.log('hello')
  }
]);

myApp.controller('AppPageController', [function () {
    console.log('evening')
  }
]);



myApp.controller('myreviewsController',['$scope', '$log', function($scope,$log){


}]);

myApp.controller('loginController',['$scope', '$log', function($scope,$log){


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
