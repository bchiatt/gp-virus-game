/* exported Asset */
/* global Media */

var Asset = (function(){
  'use strict';

  function Asset(){
  }

  Asset.load =function(){
    var asset = {};

    asset.fighter = new Image();
    asset.fighter.src = '/android_asset/www/assets/img/fighter.png';
    asset.weapon = new Image();
    asset.weapon.src = '/android_asset/www/assets/img/greenLaserRay.png';
    asset.virus = new Image();
    asset.virus.src = '/android_asset/www/assets/img/influenza.png';
    asset.gameOver = new Media();
    asset.gameOver.src = '/android_asset/www/assets/audio/dead.wav';
    asset.killed = new Media();
    asset.killed.src = '/android_asset/www/assets/audio/killed.wav';
    asset.shooter = new Media();
    asset.shooter.src = '/android_asset/www/assets/audio/shooter.wav';
    asset.theme = new Media();
    asset.theme.src = '/android_asset/www/assets/audio/VirusInvaders.mp3';

    return asset;
  };

  return Asset;
})();
