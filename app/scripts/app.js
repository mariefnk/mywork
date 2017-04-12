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

  $stateProvider.state('register',{
    url: '/register',
    abstract: false,
    views: {
      main: {templateUrl: "views/register.html", controller: 'registerController'}
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

myApp.controller('HomePageController', ['$scope',function ($scope) {
    // employerPageSetup();
    $scope.workers = [
      {firstName: 'Joe', lastName: 'Laton', category: 'Waitress', profilePicture: 'images/12080057_10206075733424857_1178354056710554146_o.jpg'},
      {firstName: 'Marie', lastName: 'Staren', category: 'Waitress', profilePicture: 'images/12080057_10206075733424857_1178354056710554146_o.jpg'},
      {firstName: 'Don', lastName: 'Teston', category: 'Bartender', profilePicture: 'images/12080057_10206075733424857_1178354056710554146_o.jpg'},
      {firstName: 'Clark',lastName: 'Olivier', category: 'Security Agent', profilePicture: 'images/12080057_10206075733424857_1178354056710554146_o.jpg'},
      {firstName: 'Clara', lastName: 'Bruni', category: 'DJ', profilePicture: 'images/12080057_10206075733424857_1178354056710554146_o.jpg'},
      {firstName: 'Max',lastName: 'Fray' , category: 'Waitress', profilePicture: 'images/12080057_10206075733424857_1178354056710554146_o.jpg'}
    ]
    console.log($scope.workers)
  }
]);

myApp.controller('LandingPageController', ['$scope', function ($scope) {
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll>400){
      $('.navbar-fixed-top').addClass('navbar-scroll')
    } else{
      $('.navbar-fixed-top').removeClass('navbar-scroll')
    }

  });

}]);

myApp.controller('AppPageController', [function () {
    console.log('evening')
  }
]);

myApp.controller('registerController', ['$scope','$state', function($scope,$state) {

  $scope.type = 'worker'
  $scope.select_type = function(el){
    $scope.type = el
  }
  $scope.submit = function(){
    console.log($scope.type)
    console.log($scope.first_name)

    //
    $state.go('app.homepageemployer')

  }

  $scope.step1 = function(event, form){
    var curStep = $(event.target).closest(".setup-content"),
        curStepBtn = curStep.attr("id"),
        nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
        curInputs = curStep.find("input[type='text'],input[type='url']"),
        isValid = true;
      console.log(form)
      form.$setSubmitted()
      if (!form.$invalid){
        nextStepWizard.removeAttr('disabled').trigger('click');
      }
  }

  $scope.step2 = function(event, form){
    var curStep = $(event.target).closest(".setup-content"),
        curStepBtn = curStep.attr("id"),
        nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
        curInputs = curStep.find("input[type='text'],input[type='url']"),
        isValid = true;
        // if (smth==false){
        //   alert('hey, fix smth')
        // } else {
        //   nextStepWizard.removeAttr('disabled').trigger('click');
        // }
        
      
  }

  $(document).ready(function () {
var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn'),
      allPrevBtn = $('.prevBtn');

allWells.hide();

navListItems.click(function (e) {
    e.preventDefault();
    var $target = $($(this).attr('href')),
            $item = $(this);

    if (!$item.hasClass('disabled')) {
        navListItems.removeClass('btn-primary').addClass('btn-default');
        $item.addClass('btn-primary');
        allWells.hide();
        $target.show();
        $target.find('input:eq(0)').focus();
    }
});

allPrevBtn.click(function(){
    var curStep = $(this).closest(".setup-content"),
        curStepBtn = curStep.attr("id"),
        prevStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a");

        prevStepWizard.removeAttr('disabled').trigger('click');
});

// allNextBtn.click(function(){
//     var curStep = $(this).closest(".setup-content"),
//         curStepBtn = curStep.attr("id"),
//         nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
//         curInputs = curStep.find("input[type='text'],input[type='url']"),
//         isValid = true;

//     $(".form-group").removeClass("has-error");
//     for(var i=0; i<curInputs.length; i++){
//         if (!curInputs[i].validity.valid){
//             isValid = false;
//             $(curInputs[i]).closest(".form-group").addClass("has-error");
//         }
//     }

//     if (isValid)
//         nextStepWizard.removeAttr('disabled').trigger('click');
// });

$('div.setup-panel div a.btn-primary').trigger('click');
});
  }
]);




myApp.controller('myreviewsController',['$scope', '$log', function($scope,$log){


}]);

myApp.controller('loginController',['$scope', '$log', '$state',  function($scope,$log, $state){

      $scope.login = function(){
        $state.go('app.homepageemployer')
      }

      $('.nav-tabs > li > a').click(function() {
          if($(this).hasClass('disabled')) {
              return false;
          } else {
              var linkIndex = $(this).parent().index() - 1;
              $('.nav-tabs > li').each(function(index, item) {
                  $(this).attr('rel-index', index - linkIndex);
              });
          }
      });
      $('#step-1-next').click(function() {
          // Check values here
          var isValid = true;
          console.log('sexy')
          if(isValid) {
              $('.nav-tabs > li:nth-of-type(2) > a').removeClass('disabled').click();
          }
      });
      $('#step-2-next').click(function() {
          // Check values here
          var isValid = true;

          if(isValid) {
              $('.nav-tabs > li:nth-of-type(3) > a').removeClass('disabled').click();
          }
      });
      $('#step-3-next').click(function() {
          // Check values here
          var isValid = true;

          if(isValid) {
              $('.nav-tabs > li:nth-of-type(4) > a').removeClass('disabled').click();
          }
      });

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