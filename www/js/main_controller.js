(function(){
  'use strict';

  angular.module('gp-virus-game')
  .controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){
    $scope.menu = true;
    $scope.startGame = false;
    $scope.gameOver = false;
  }]);
})();
