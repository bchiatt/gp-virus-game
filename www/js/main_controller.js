(function(){
  'use strict';

  angular.module('gp-virus-game')
  .controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){
    $scope.menu = true;
    $scope.startGame = false;
    $scope.gameOver = false;
    var game = null;

    document.addEventListener('deviceready', function(){
      screen.lockOrientation('portrait');
      game = new Game();
    });

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
      $scope.startGame = true;
      $scope.menu = false;
      $scope.gameOver = false;
    };

  }]);
})();
