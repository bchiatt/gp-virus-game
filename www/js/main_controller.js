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

    // function playAudio(url){

      // var my_media = new Media(url,
        // success callback
      // function() { console.log('playAudio():Audio Success'); },
        // error callback
      // function(err){ console.log('playAudio():Audio Error: ' + err);
      // });

    // Play audio
      // my_media.play();

    // Pause after 10 seconds
      // setTimeout(function(){
          // media.pause();
        // }, 10000);
      // }
    // success callback
    // function() { console.log('playAudio():Audio Success'); },
    // error callback
    // function(err){ console.log('playAudio():Audio Error: ' + err); }

    // playAudio('/assets/audio/VirusInvaders.mp3');

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
