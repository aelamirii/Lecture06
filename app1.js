( function(){
'use strict';

angular.module('NameCalculator', [])

.controller('NameCalculatorController', function($scope){

$scope.name = "";
$scope.totalValue = 0;

$scope.displayNameValue = function(){
 //var total  = 5;
 var total = Displayed($scope.name);
 $scope.totalValue = total;
};


function Displayed(val)
{
  var total_ = 0;
  for (var i = 0; i < val.length; i++) {
    total_ += val.charCodeAt(i);
  }
  return total_;
}


})

})();
