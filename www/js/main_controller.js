/* global Game */
(function(){
  'use strict';

  angular.module('gp-virus-game')
  .controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){
    var game = null;
    $scope.menu = true;
    $scope.startGame = false;
    $scope.gameOver = false;

    console.log(window);
    document.addEventListener('deviceready', startUp, false);

    console.log(window);
    window.addEventListener('gameover', function(){
      //cancelTimer();
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
    }
    */

    $scope.start = function(){
      game.start();
      $scope.startGame = true;
      $scope.menu = false;
      $scope.gameOver = false;
    };

    function startUp(){
      screen.lockOrientation('portrait');
      game = new Game();
      console.log(game);
    }

  }]);
})();
