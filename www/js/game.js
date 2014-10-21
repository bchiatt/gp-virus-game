/* exported Game */
/* global Asset, Fighter, Virus */

var Game = (function(){
  'use strict';

  function Game(){
    var bodyHeight   = window.innerHeight,
        headerHeight = document.getElementsByTagName('ion-header-bar')[0].clientHeight;

    this.canvas        = document.getElementById('canvas');
    this.ctx           = this.canvas.getContext('2d');
    this.canvas.height = bodyHeight - headerHeight;
    this.canvas.width  = window.innerWidth;
    this.assets        = Asset.load();
    this.isWon         = false;
    this.isLost        = false;

    this.listen();
  }

  Game.prototype.listen = function(){
    var id    = null,
        touch = null;
    window.addEventListener('touchstart', function(data){
      touch++;
      console.log(touch);
      console.log(data);
      var deltaX    = data.touches[0].clientX,
          direction = this.getDirection(deltaX);

      if(touch < 2){
        id = setInterval(function(){
          console.log('loop');
          this.fighter.update(direction);
        }.bind(this), 167);
      }else{
        touch = null;
        console.log('bang!');
      }
    }.bind(this));

    window.addEventListener('touchend', function(data){
        console.log('stop');
        touch = null;
        clearInterval(id);
    });
  };

  Game.prototype.loop = function(timestamp){
    //this.isWon = this.fighter.killsVirus(this.fighter);
    //this.isLost = this.virus.criticalMass(this) || this.viurs.hitsFighter(this);

    this.clear();
  //  this.virus.draw(this);
    this.fighter.draw(this);
  //  this.laser.draw(this);

    if(this.isLost){
      window.dispatchEvent(new Event('gameover'));
      this.assets.ray.play();
    }else if(this.isWon){
      window.dispatchEvent(new Event('gameover'));
      navigator.vibrate(3000);
    }else{
      window.requestAnimationFrame(this.loop.bind(this));
    }
  };

  Game.prototype.clear = function(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  Game.prototype.start = function(){
    this.isWon = false;
    this.isLost  = false;
    this.fighter = new Fighter(this);
    console.log('fighter -------------->', this.fighter);
    this.loop();
  };

  Game.prototype.getDirection = function(deltaX){
    if(deltaX > this.canvas.width / 2){
        return '+';
      }else{
        return '-';
      }
  };

  return Game;
})();
