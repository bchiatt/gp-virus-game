
/* exported Game */
/* global Asset, Virus, Fighter, Laser*/

var Game = (function(){
  'use strict';
  var count = null,
      loopId,
      results,
      evt;

  function Game(){
    this.canvas        = document.getElementById('canvas');
    this.ctx           = this.canvas.getContext('2d');
    this.canvas.height = window.innerHeight;
    this.canvas.width  = window.innerWidth;
    this.assets        = Asset.load();
    this.kills         = 0;
    this.isWon         = false;
    this.isLost        = false;
    this.viruses       = [];
  }

  Game.prototype.listen = function(){
    var id    = null,
        touch = null;
    window.addEventListener('touchstart', function(data){
      touch++;
      var deltaX    = data.touches[0].clientX,
          direction = this.getDirection(deltaX);

      if(touch < 2){
        id = setInterval(function(){
          this.fighter.update(direction, this);
        }.bind(this), 60);
      }else{
        touch = null;
        if(this.fighter.lasers.length < 5){
          this.assets.shooter.play();
          Laser.create(this);
        }
      }
    }.bind(this));

    window.addEventListener('touchend', function(data){
        touch = null;
        clearInterval(id);
    });
  };

  Game.prototype.loop = function(timestamp){
    count++;
    console.log(count);
    //this.isWon = this.fighter.killsVirus(this.fighter);
    //this.isLost = this.virus.criticalMass(this) || this.viurs.hitsFighter(this);
    /*if(count > 83){
      count = null;
      Virus.create(this);
    }*/

    this.clear();
    this.fighter.draw(this);
    this.viruses.forEach(Virus.checkVirus.bind(this));
    this.fighter.lasers.forEach(Laser.checkLaser.bind(this));

    this.ctx.font = '20px Sans-Serif';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText('Kill Count: '+ this.kills, 5, 40);

    this.ctx.fillStyle='#FF0000';
    this.ctx.fillRect(0,0,(this.viruses.length * (this.canvas.width / 40)),20);

    if(this.viruses.length > 40){this.isLost = true;}
    if(this.viruses.length === 0){this.isWon = true;}

    if(this.isLost){
      this.stop();
      evt = new Event('gameover');
      evt.results = {
        type: 'lost',
        kills: this.kills
      };
      //evt.initCustomEvent('gameover, true, true', results);
      window.dispatchEvent(evt);
      this.assets.gameOver.play();
      navigator.vibrate(500, 500, 500);
    }else if(this.isWon){
      this.stop();
      evt = document.createEvent('CustomEvent');
      results = {
        type: 'won',
        kills: this.kills
      };
      evt.initCustomEvent('gameover, true, true', results);
      window.dispatchEvent(evt);
    }else{
      loopId = window.requestAnimationFrame(this.loop.bind(this));
    }
  };

  Game.prototype.clear = function(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  Game.prototype.start = function(){
    this.listen();
    this.isWon = false;
    this.isLost  = false;
    this.fighter = new Fighter(this);
    for(var x = 0; x < 4; x++){
      Virus.create(this);
    }
    this.loop();
  };

  Game.prototype.getDirection = function(deltaX){
    if(deltaX > this.canvas.width / 2){
        return '+';
      }else{
        return '-';
      }
  };

  Game.prototype.stop = function(){
    window.cancelAnimationFrame(loopId);
    this.assets.theme.stop();
    loopId = null;
    count = null;
  };

  return Game;
})();
