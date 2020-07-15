(function () {
'use strict'

angular.module("NameCalculator", [])

.controller("NameCalculatorController", function ($scope) {

$scope.name = "";
$scope.totalValue = 5;

$scope.displayNameValue = function() {

  var total = Displayed($scope.name);
  $scope.totalValue = total;
}

function Displayed(val) {

  var total = 0;
  for (var i = 0; i < val.length; i++) {
    total += val.charCodeAt(i);
  }
return total;
}


})


})();
