/* global Game */

(function(){
  'use strict';

  angular.module('gp-virus-game')
  .controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){
    var game = null;
    $scope.menu = true;
    $scope.startGame = false;
    $scope.gameOver = false;

    document.addEventListener('deviceready', startUp, false);

    window.addEventListener('gameover', function(){

      console.log('game over');
      game = null;
      $scope.menu = true;
      $scope.startGame = false;
      $scope.gameOver = true;

    });
    /*
    function startClock(){
      resetClock();
      cancelTimer();
      timer = $interval(function(){
        $scope.clock++;
      }, 1000);
    }

    function resetClock(){
      $scope.clock = 0;
    }
    function cancelTimer(){
      $interval.cancel(timer);
    }*/



    $scope.start = function(){
      game.start();
      $scope.startGame = true;
      $scope.menu = false;
      $scope.gameOver = false;
    };

    function startUp(){
      screen.lockOrientation('portrait');
      game = new Game();
      game.assets.theme.play();
      console.log(game);
    }

  }]);
})();
