// JavaScript Document

var app = angular.module("profileApp",[]);
	app.controller("profileController",function($scope){
		$scope.account = {
			firstName : 'Ahmad',
			lastName : 'Hariri',
			picture : '../images/Ahmad.jpg',
			dateOfBirth : 'Jan 1, 2001',
			address : '360 Huntington Ave.',
			city : 'Boston',
			state : 'MA',
			zipCode : '02115',
			phone : '123-456-7890',
			gender : 'Male',
			
			schedule : [{day:'Monday', allDay:false, morning:false, afternoon:false, evening:false },
						{day:'Tuesday', allDay:false, morning:false, afternoon:false, evening:false },
						{day:'Wednesday', allDay:false, morning:false, afternoon:false, evening:false },
						{day:'Thursday', allDay:false, morning:false, afternoon:false, evening:false },
						{day:'Friday', allDay:false, morning:false, afternoon:false, evening:false },
						{day:'Saturday', allDay:false, morning:false, afternoon:false, evening:false },
						{day:'Sunday', allDay:false, morning:false, afternoon:false, evening:false },
					   ],
			experience : 'Developer',
			experienceLevel : '',
			degreeCertificate : '',
			graduationYear : ''
		};
		$scope.fullName = function() {
        	return $scope.account.firstName + ' ' + $scope.account.lastName;
		};
		$scope.experience = ['Waiter','Bartender','Other'];
		$scope.experienceLevel = ['No experience','Less than 2 years','More than 2 years'];
		$scope.degreeCertificate = ['Bachelor','Master','Deploma','Course'];
		$scope.gender = ['Male','Female','Transgender','Other'];
		$scope.validForm = true;
		
		$scope.graduationYear = ['1980','1981','1982','1983','1984','1985','1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017'];
		
		$scope.cancel = function() {
        	$scope.tempAccount = angular.copy($scope.account);
		};
		$scope.save = function() {
        	$scope.account = angular.copy($scope.tempAccount);
		};
		$scope.canSave = function() {
        	if($scope.tempAccount.firstName == undefined || $scope.tempAccount.lastName == undefined || $scope.tempAccount.experience == undefined || $scope.tempAccount.experienceLevel == undefined )return true;
			else return false;
		};
	});
		
		