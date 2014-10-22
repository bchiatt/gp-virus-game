/* global Game */

(function(){
  'use strict';

  angular.module('gp-virus-game')
  .controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){
    var game = null;
    $scope.menu = true;
    $scope.startGame = false;
    $scope.gameOver = false;
    $scope.kills = 0;

    document.addEventListener('deviceready', startUp, false);

    window.addEventListener('dead', function(){
      $scope.kills++;
      $scope.$apply();
    });

    window.addEventListener('gameover', function(){

      console.log('game over');
      game = null;
      $scope.menu = true;
      $scope.startGame = false;
      $scope.gameOver = true;
<<<<<<< HEAD

=======
      $scope.$apply();
>>>>>>> b35bcaef2f5a63402b872d74170ec64fbed678f5
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
      game.assets.theme.play();
    };

    function startUp(){
      screen.lockOrientation('portrait');
      game = new Game();
      game.assets.theme.play();
      console.log(game);
    }

  }]);
})();
