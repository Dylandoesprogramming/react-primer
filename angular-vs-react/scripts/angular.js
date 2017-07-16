angular.module('digestTest', [])
.controller('digestController', function($scope, $interval) {
   $interval(function() {
      $scope.time = new Date().toLocaleString()
   }, 1000)
})