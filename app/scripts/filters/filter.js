/*$(document).ready(function() {
var rows=$("table#myTable tr:not(:first-child");

$("#selectField").on("change", function() {

        var selected = this.value;

        if (selected != "All") {

            rows.filter("[position=" + selected + "]").show();
            rows.not("[position=" + selected + "]").hide();
            var visibleRows = rows.filter("[position=" + selected + "]");
            
        } else {

            rows.show();
          

        }

    });
});*/


/*
var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
 // $scope.name = 'World';
  
  $scope.appointments = [];
  
  $scope.selectedLocation = "";
  
  $scope.selectedLocationFilter = function(element) {
    if(!$scope.selectedLocation) return true;
    return element.created.getLocation() == $scope.selectedLocation;
  }

  $scope.appointments.push({id: 1, name: "Item number 1", start: randomDate(new Date(2014, 0, 1), new Date())
, end: randomDate(new Date(2014, 0, 1), new Date()), location:"Paris" });
  $scope.appointments.push({id: 2, name: "Item number 2", start: randomDate(new Date(2014, 0, 1), new Date())
, end: randomDate(new Date(2014, 0, 1), new Date()), location:"London" });
  $scope.appointments.push({id: 3, name: "Item number 3", start: randomDate(new Date(2014, 0, 1), new Date())
, end: randomDate(new Date(2014, 0, 1), new Date()), location:"Paris"});
  
  function randomDate(start, end) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  }  
  
  
}); */
