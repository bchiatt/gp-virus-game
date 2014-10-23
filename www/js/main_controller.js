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

    window.addEventListener('gameover', function(evt){
      console.log('game over');
      console.log(evt);
      $scope.kills = evt.results.kills;
      if(evt.results.type === 'won'){
        $scope.result = 'You are safe from the virus invasion! And...';
      }else{
        $scope.result = 'Sad. The virus overwhelmed your body! But...';
      }
      $scope.startGame = false;
      $scope.gameOver = true;
      $scope.$apply();
      game = new Game();
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
      game = new Game();
      screen.lockOrientation('portrait');
      game.assets.theme.play();
      console.log(game);
    }

  }]);
})();
