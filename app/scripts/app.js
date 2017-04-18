


var myApp=angular.module('myApp',[
  'ngRoute',
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'ui.bootstrap',
  'ngMaterial', 
  'ngMessages',
  'ui.router'
  ]);

  var uniqueItems = function (data, key) {
    var result = [];
    
    for (var i = 0; i < data.length; i++) {
        var value = data[i][key];
 
        if (result.indexOf(value) == -1) {
            result.push(value);
        }
    
    }
    return result;
};

myApp.run(function($rootScope) {
    $rootScope.appointments = [{"contract_id":"4551","title":"Waiter","first_name":"Larry","last_name":"Ullman","start_date":"2017-04-02","end_date":"2017-04-02","month":new Date("2017-04-02").getMonth(),"location":"Boston","phone":"123-435-6576","wage":"$15","Email":"h@gmail.com","paid":"$50", "status":"1"},
    {"contract_id":"2232","title":"Waiter","first_name":"John","last_name":"Lennon","start_date":"2017-03-02","end_date":"2017-03-02","month":new Date("2017-03-02").getMonth(),"location":"Boston","phone":"123-435-6476","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"2"},
    {"contract_id":"3323","title":"Waiter","first_name":"John","last_name":"Brown","start_date":"2017-05-02","end_date":"2017-05-02","month":new Date("2017-05-02").getMonth(),"location":"Boston","phone":"123-434-33-76","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"1"},
    {"contract_id":"4323","title":"Waiter","first_name":"Tom","last_name":"Smith","start_date":"2017-06-02","end_date":"2017-04-02","month":new Date("2017-06-02").getMonth(),"location":"London","phone":"123-433-6576","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"3"},

     {"contract_id":"3232","title":"Waiter","first_name":"Peter","last_name":"Lennon","start_date":"2017-04-02","end_date":"2017-04-02","month":new Date("2017-04-02").getMonth(),"location":"London","phone":"123-435-6576","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"2"},
    {"contract_id":"5453","title":"Waiter","first_name":"Ava","last_name":"Brown","start_date":"2017-04-02","end_date":"2017-04-02","month":new Date("2017-04-02").getMonth(),"location":"Boston","phone":"123-435-6576","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"1"},

         {"contract_id":"552","title":"Waiter","first_name":"Dean","last_name":"Lennon","start_date":"2017-03-02","end_date":"2017-03-02","month":new Date("2017-03-02").getMonth(),"location":"London","phone":"123-435-6576","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"2"},
    {"contract_id":"3545","title":"Waiter","first_name":"Anna","last_name":"Brown","start_date":"2017-05-02","end_date":"2017-05-02","month":new Date("2017-05-02").getMonth(),"location":"Boston","phone":"123-435-6596","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"1"},

         {"contract_id":"21234","title":"Waiter","first_name":"Sam","last_name":"Lennon","start_date":"2017-03-02","end_date":"2017-03-02","month":new Date("2017-03-02").getMonth(),"location":"London","phone":"123-435-6576","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"3"},
    {"contract_id":"43543","title":"Waiter","first_name":"Asayl","last_name":"Brown","start_date":"2017-05-02","end_date":"2017-05-02","month":new Date("2017-05-02").getMonth(),"location":"Boston","phone":"123-435-6576","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"3"},

    {"contract_id":"5455","title":"Waiter","first_name":"Sebastian","last_name":"Pier","start_date":"2017-04-02","end_date":"2017-04-02","month":new Date("2017-04-02").getMonth(),"location":"Paris","phone":"123-435-6576","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"2"}];

    
});








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

  $scope.user_role = 'worker'
  $scope.select_type = function(el){
    $scope.user_role = el
  }
  $scope.submit = function(isValid){
    if(isValid){
      if($scope.user_role == 'worker'){
        // navigate to worker page
      }else{
        // navigate to employer section
        $state.go('app.homepageemployer')
      }
    }
  }
  $scope.currentSection = 1
  $scope.navigateToNextSection = function(next){
    // check that the form is valid so far
  


    //if valid show next section
    if(next){
      if($scope.user_role == 'worker' && $scope.currentSection <5)
        $scope.currentSection++;
      if($scope.user_role == 'employer' && $scope.currentSection < 3)
        $scope.currentSection++;
    }
   
    // if section is last section show submit button


  }
   $scope.navigateToPreviousSection = function(){
   $scope.currentSection--;
   }

//   $scope.step1 = function(event, form){

//   var curStep = $(event.target).closest(".setup-content");
//   var curStepBtn = curStep.attr("id");
//    console.log("Button ID: ", curStepBtn);
//    var Selector='div.setup-panel div a[href="#' + curStepBtn + '"]';
//    console.log(Selector);
//     var    nextStepWizard = $(Selector).parent().next().children("a"),
//         curInputs = curStep.find("input[type='text'],input[type='url']"),
//         isValid = true;
//         console.log('Form is valid? ', form.$invalid);
//       console.log(form)
//       form.$setSubmitted()
//      if (!form.$invalid){
//         console.log("Valid Form");
//         console.log(nextStepWizard);
//         nextStepWizard.removeAttr('disabled');
//         nextStepWizard.trigger('click');

//      }
//      else{
//        console.log("invalid from");
// }
//   }

  $scope.step2 = function(event, form){
    var curStep = $(event.target).closest(".setup-content"),
        curStepBtn = curStep.attr("id"),
        nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
        curInputs = curStep.find("input[type='text'],input[type='url']"),
        isValid = true;
          if (!form.$invalid){
        console.log("Valid Form");
        console.log(nextStepWizard);
        nextStepWizard.removeAttr('disabled');
        nextStepWizard.trigger('click');

     }
     else{
       console.log("invalid from");
}
        
      
  }

  // $(document).ready(function () {
// var navListItems = $('div.setup-panel div a'),
//         allWells = $('.setup-content'),
//         allNextBtn = $('.nextBtn'),
//       allPrevBtn = $('.prevBtn');

// allWells.hide();

// navListItems.click(function (e) {
//     e.preventDefault();
//     var $target = $($(this).attr('href')),
//             $item = $(this);

//     if (!$item.hasClass('disabled')) {
//         navListItems.removeClass('btn-primary').addClass('btn-default');
//         $item.addClass('btn-primary');
//         allWells.hide();
//         $target.show();
//         $target.find('input:eq(0)').focus();
//     }
// });

// allPrevBtn.click(function(){
//     var curStep = $(this).closest(".setup-content"),
//         curStepBtn = curStep.attr("id"),
//         prevStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a");

//         prevStepWizard.removeAttr('disabled').trigger('click');
// });

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

// $('div.setup-panel div a.btn-primary').trigger('click');
// });
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

myApp.controller('paymentHistoryController',['$scope', '$log', '$state',  function($scope,$log, $state){


}]);

myApp.controller('paymentController',['$scope', '$log', '$state',  function($scope,$log, $state){


}]);

myApp.directive('innerHtmlBind', function() {
  return {
    restrict: 'A',
    scope: {
      inner_html: '=innerHtml'
    },
    link: function(scope, element, attrs) {
      scope.inner_html = element.html();
    }
  }
});
////FOR CURRENT TABLE
myApp.controller('currentjobsController', function($http,$scope,$timeout,$log,$rootScope, $mdDialog){

//$scope.selectedMonth = '04';

$scope.months = [{ name:'March', val:'03'},
{ name:'April', val:'04'},
{ name:'May', val:'05'},
{ name:'June', val:'06'}];


 // Watch the pants that are selected
    $scope.$watch(function () {
        return {
            filteredAppointments: $rootScope.appointments,
            useMonths: $scope.useMonths,
            /*useShirts: $scope.useShirts,
            useShoes: $scope.useShoes */
        }
    }, function (value) {
        var selected;
        
        $scope.monthsGroup = uniqueItems($rootScope.appointments, 'month');
        var filterAfterMonths = [];        
        selected = false;
        for (var j in $rootScope.appointments) {
            var p = $rootScope.appointments[j];
            for (var i in $scope.useMonths) {
                if ($scope.useMonths[i]) {
                    selected = true;
                    if (i == p.months) {
                        filterAfterMonths.push(p);
                        break;
                    }
                }
            }        
        }
        if (!selected) {
            filterAfterMonths = $rootScope.appointments;
        }
/*
        $scope.shirtsGroup = uniqueItems($scope.players, 'shirt');
        var filterAfterShirts = [];        
        selected = false;
        for (var j in filterAfterPants) {
            var p = filterAfterPants[j];
            for (var i in $scope.useShirts) {
                if ($scope.useShirts[i]) {
                    selected = true;
                    if (i == p.shirt) {
                        filterAfterShirts.push(p);
                        break;
                    }
                }
            }       
        }
        if (!selected) {
            filterAfterShirts = filterAfterPants;
        }

        $scope.shoesGroup = uniqueItems($scope.players, 'shoes');
        var filterAfterShoes = [];        
        selected = false;
        for (var j in filterAfterShirts) {
            var p = filterAfterShirts[j];
            for (var i in $scope.useShoes) {
                if ($scope.useShoes[i]) {
                    selected = true;
                    if (i == p.shoes) {
                        filterAfterShoes.push(p);
                        break;
                    }
                }
            }    
        }
        if (!selected) {
            filterAfterShoes = filterAfterShirts;
        }        */

        $scope.filteredAppointments = filterAfterMonths;   
        alert($scope.filteredAppointments);     
    }, true);

    $scope.$watch('filtered', function (newValue) {
        if (angular.isArray(newValue)) {
            console.log(newValue.length);
        }
    }, true);    

/*
$scope.getFiltersCount = function(obj, month){
  console.log(obj)
  alert(obj);
} */

    $scope.testClick =function(cId){
for(var i = 0; i<$rootScope.appointments.length; i++)
{
   if($rootScope.appointments[i].contract_id == cId){
     $rootScope.appointupdateTimements[i].status = 3;
   }
}
 }


$scope.updateTime = function(){
  $scope.startTime = $('#startTime').val();
  $scope.endTime = $('#endTime').val();
}


$scope.addItem = function(cId){

  // var x=angular.element(document.getElementById("startdate").val());      

if ($scope.startTime=="" || $scope.endTime =="" || $scope.startTime==undefined || $scope.endTime ==undefined ){
  alert("Please enter the date");
}
else{
  for(var i = 0; i<$rootScope.appointments.length; i++)
{
   if($rootScope.appointments[i].contract_id == cId){
     
     var first_name=$rootScope.appointments[i].first_name;
     var last_name=$rootScope.appointments[i].last_name;
     var title=$rootScope.appointments[i].title;
     var status=2;
     
     var contract_id=Math.floor(Math.random() * ((2000-1000)+1) + 1000);
     var start_date=$scope.startTime;
     var end_date=$scope.endTime;
     var phone=$rootScope.appointments[i].phone;
     var wage=$rootScope.appointments[i].wage;
     var Email=$rootScope.appointments[i].Email;
     var paid=$rootScope.appointments[i].paid;
     var location=$rootScope.appointments[i].location;
   
     $rootScope.appointments.push({"contract_id":contract_id,"title":title,"first_name":first_name,"last_name":last_name,"start_date":start_date,"end_date":end_date,"location":location,"phone":phone,"wage":wage,"Email":Email,"paid":paid ,"status":status})
   $('#myModal').modal('hide');
  }
}
}
}


 /*$scope.addItem = function(item) {
        $scope.items.push(item);
        $scope.item = {};
    };
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
myApp.controller('pendingController',['$scope','$log', function($scope,$log,$rootScope){
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

myApp.controller('historyJobsController',['$scope','$log', function($scope,$log,$rootScope){
 
 $scope.testClick =function(cId){
for(var i = 0; i<$rootScope.appointments.length; i++)
{
   if($rootScope.appointments[i].contract_id == cId){
     $rootScope.appointments[i].status = 3;
   }
}
       
       
      }

}]);