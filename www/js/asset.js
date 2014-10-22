/* exported Asset */
/* global Media */

var Asset = (function(){
  'use strict';

  function Asset(){
  }

  Asset.load =function(){
    var asset = {};

    asset.fighter = new Image();
    asset.fighter.src = 'assets/img/fighter.png';
    asset.weapon = new Image();
    asset.weapon.src = 'assets/img/greenLaserRay.png';
    asset.virus = new Image();
    asset.virus.src = 'assets/img/influenza.png';
    asset.gameOver = new Media();
    asset.gameOver.src = 'assets/audio/dead.wav';
    asset.killed = new Media();
    asset.killed.src = 'assets/audio/killed.wav';
    asset.shooter = new Media();
    asset.shooter.src = 'assets/audio/shooter.wav';
    asset.theme = new Media();
    asset.theme.src = 'assets/audio/VirusInvaders.mp3';

    return asset;
  };

  return Asset;
})();
