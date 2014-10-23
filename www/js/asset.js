/* exported Asset */
/* global Media */

var Asset = (function(){
  'use strict';

  function Asset(){
  }

  Asset.load =function(){
    var asset = {};

    asset.fighter = new Image();

    asset.fighter.src = getMediaURL('assets/img/neutrophil.png');

    asset.weapon = new Image();
    asset.weapon.src = getMediaURL('assets/img/greenLaserRay.png');
    asset.virus = new Image();
    asset.virus.src = getMediaURL('assets/img/influenza.png');
    asset.gameOver = new Media();
    asset.gameOver.src = getMediaURL('assets/audio/dead.wav');
    asset.killed = new Media();
    asset.killed.src = getMediaURL('assets/audio/killed.wav');
    asset.shooter = new Media();
    asset.shooter.src = getMediaURL('assets/audio/shooter.wav');
    asset.theme = new Media();
    asset.theme.src = getMediaURL('assets/audio/VirusInvaders.mp3');

    return asset;
  };

  function getMediaURL(url){
    if(window.device.platform.toLowerCase() === 'android'){
      return '/android_asset/www/' + url;
    }else{
      return url;
    }
  }

  return Asset;
})();
