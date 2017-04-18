


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

// <<<<<<< HEAD
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


/*=======
  angular.module('datepickerBasicUsage', ['ngMaterial', 'ngMessages']).controller('AppCtrl', function() {
  this.myDate = new Date();
  this.isOpen = false;
});
>>>>>>> efa72678a7f9c96803081d0dee111118024f649e*/

myApp.run(function($rootScope) {

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


    $rootScope.appointments = [{"contract_id":"4551","title":"DJ","first_name":"Larry","last_name":"Ullman","start_date":"2017-04-02","end_date":"2017-04-02","month":monthNames[(new Date("2017-04-02").getMonth())],"location":"Boston","phone":"123-435-6576","wage":"$15","Email":"h@gmail.com","paid":"$50", "status":"1"},
    {"contract_id":"2232","title":"Waiter","first_name":"John","last_name":"Lennon","start_date":"2017-03-02","end_date":"2017-03-02","month":monthNames[(new Date("2017-03-02").getMonth())],"location":"Boston","phone":"123-435-6476","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"2"},
    {"contract_id":"3323","title":"Waiter","first_name":"John","last_name":"Brown","start_date":"2017-05-02","end_date":"2017-05-02","month":monthNames[(new Date("2017-05-02").getMonth())],"location":"Boston","phone":"123-434-33-76","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"1"},
    {"contract_id":"4323","title":"Waiter","first_name":"Tom","last_name":"Smith","start_date":"2017-06-02","end_date":"2017-04-02","month":monthNames[(new Date("2017-06-02").getMonth())],"location":"London","phone":"123-433-6576","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"3"},

     {"contract_id":"3232","title":"Waiter","first_name":"Peter","last_name":"Lennon","start_date":"2017-04-02","end_date":"2017-04-02","month":monthNames[(new Date("2017-04-02").getMonth())],"location":"London","phone":"123-435-6576","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"2"},
    {"contract_id":"5453","title":"Waiter","first_name":"Ava","last_name":"Brown","start_date":"2017-04-02","end_date":"2017-04-02","month":monthNames[(new Date("2017-04-02").getMonth())],"location":"London","phone":"123-435-6576","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"1"},

         {"contract_id":"552","title":"Waiter","first_name":"Dean","last_name":"Lennon","start_date":"2017-03-02","end_date":"2017-03-02","month":monthNames[(new Date("2017-03-02").getMonth())],"location":"London","phone":"123-435-6576","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"2"},
    {"contract_id":"3545","title":"Waiter","first_name":"Anna","last_name":"Brown","start_date":"2017-05-02","end_date":"2017-05-02","month":monthNames[(new Date("2017-05-02").getMonth())],"location":"Boston","phone":"123-435-6596","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"1"},

         {"contract_id":"21234","title":"Waiter","first_name":"Sam","last_name":"Lennon","start_date":"2017-03-02","end_date":"2017-03-02","month":monthNames[(new Date("2017-03-02").getMonth())],"location":"London","phone":"123-435-6576","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"3"},
    {"contract_id":"43543","title":"Waiter","first_name":"Asayl","last_name":"Brown","start_date":"2017-05-02","end_date":"2017-05-02","month":monthNames[(new Date("2017-05-02").getMonth())],"location":"Boston","phone":"123-435-6576","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"3"},

    {"contract_id":"5455","title":"Waiter","first_name":"Sebastian","last_name":"Pier","start_date":"2017-04-02","end_date":"2017-04-02","month":monthNames[(new Date("2017-04-02").getMonth())],"location":"Paris","phone":"123-435-6576","wage":"$15","Email":"h@gmail.com","paid":"$50","status":"2"}];

    
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

  // $stateProvider.state('app.myreviews',{
  //   url: '/myreviews',
  //   abstract: false,
  //   views: {
  //     app: {templateUrl: "views/myreviews.html", controller: 'myreviewsController'}
  //   }
  // })
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
      {firstName: 'Joe', lastName: 'Laton', category: 'Waitress', salary: '14' ,profilePicture: 'images/12080057_10206075733424857_1178354056710554146_o.jpg', description: "Well, I’m currently an account executive at Smith, where I handle our top performing client. Before that, I worked at an agency where I was on three different major national healthcare brands. And while I really enjoyed the work that I did, I’d love the chance to dig in much deeper with one specific healthcare company, which is why I’m so excited about this opportunity with Metro Health Center."},
      {firstName: 'Marie', lastName: 'Staren', category: 'Waitress', salary: '11', profilePicture: 'images/12080057_10206075733424857_1178354056710554146_o.jpg', description: "I have spent the last six years developing my skills as a customer service manager for Megacompany Inc., where I have won several performance awards and been promoted twice. I love managing teams and solving customer problems."},
      {firstName: 'Don', lastName: 'Teston', category: 'Bartender', salary: '20',  profilePicture: 'images/12080057_10206075733424857_1178354056710554146_o.jpg', description: "My first job was as an administrative assistant for Macy’s in Fort Lauderdale, Florida. I learned a great deal in that role that served me well over the next 12 years. At the time, I wasn’t sure about my career path, so I next took a position selling real estate. It only lasted for six months, but I sure enjoyed it."},
      {firstName: 'Clark',lastName: 'Olivier', category: 'Security Agent', salary: '12',  profilePicture: 'images/12080057_10206075733424857_1178354056710554146_o.jpg', description: "Although I love my current role, I feel I’m now ready for a more challenging assignment and this position really excites me."},
      {firstName: 'Clara', lastName: 'Bruni', category: 'DJ', salary: '17',  profilePicture: 'images/12080057_10206075733424857_1178354056710554146_o.jpg', description: "Because of the company’s financial problems and my boss’s issues, I’m worried about my job’s stability and decided to start looking for new opportunities."},
      {firstName: 'Max',lastName: 'Fray' , category: 'Waitress', salary: '15',  profilePicture: 'images/12080057_10206075733424857_1178354056710554146_o.jpg'}
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

angular.module('myApp.directives', [])
  .directive('pwCheck', [function () {
    return {
      require: 'ngModel',
      link: function (scope, elem, attrs, ctrl) {
        var firstPassword = '#' + attrs.pwCheck;
        elem.add(firstPassword).on('keyup', function () {
          scope.$apply(function () {
            var v = elem.val()===$(firstPassword).val();
            ctrl.$setValidity('pwmatch', v);
          });
        });
      }
    }
  }]);

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

  $scope.useMonths = {};
  $scope.useCategory = {};
  $scope.useLocation = {};

//$scope.selectedMonth = '04';
$scope.status1 = [];

/*
$scope.months = [{ name:'March', val:'03'},
{ name:'April', val:'04'},
{ name:'May', val:'05'},
{ name:'June', val:'06'}]; */
 angular.forEach($rootScope.appointments, function (value, key) {
            if(value.status==1)
            {
            $scope.status1.push(value);
            }
        });  

 // Watch the pants that are selected
    $scope.$watch(function () {
        return {
            filteredAppointments: $scope.status1,
            useMonths: $scope.useMonths,
            useCategory: $scope.useCategory,
            useLocation: $scope.useLocation
        }
    }, function (value) {
        var selected;
        console.log(value);
        $scope.monthsGroup = uniqueItems($scope.status1, 'month');
        var filterAfterMonths = [];        
        selected = false;
        for (var j in $scope.status1) {
            var p = $scope.status1[j];
            for (var i in $scope.useMonths) {
                if ($scope.useMonths[i]) {
                    selected = true;
                    if (i == p.month) {
                        filterAfterMonths.push(p);
                        break;
                    }
                }
            }        
        }
        if (!selected) {
            filterAfterMonths = $scope.status1;
        }

        $scope.categoryGroup = uniqueItems(filterAfterMonths, 'title');
        var filterAfterCategory = [];        
        selected = false;
        for (var j in filterAfterMonths) {
            var p = filterAfterMonths[j];
            for (var i in $scope.useCategory) {
                if ($scope.useCategory[i]) {
                    selected = true;
                    if (i == p.title) {
                        filterAfterCategory.push(p);
                        break;
                    }
                }
            }       
        }
        if (!selected) {
            filterAfterCategory = filterAfterMonths;
        }

        $scope.locationGroup = uniqueItems(filterAfterCategory, 'location');
        var filterAfterLocation = [];        
        selected = false;
        for (var j in filterAfterCategory) {
            var p = filterAfterCategory[j];
            for (var i in $scope.useLocation) {
                if ($scope.useLocation[i]) {
                    selected = true;
                    if (i == p.location) {
                        filterAfterLocation.push(p);
                        break;
                    }
                }
            }    
        }
        if (!selected) {
            filterAfterLocation = filterAfterCategory;
        }       

        $scope.filteredAppointments = filterAfterLocation;   
       //alert($scope.filteredAppointments);     
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