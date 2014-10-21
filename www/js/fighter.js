/* exported Fighter*/
/*global Laser */

var Fighter = (function(){
  'use strict';

var lasers = [];

  function Fighter(game){
    this.width = 30;
    this.height = 30;
    this.r = this.width/2;
    this.x = (game.canvas.width/2 - this.r);
    this.y = game.canvas.height - this.height;
  }

  Fighter.prototype.draw = function(game){
    if(!game.isWon && !game.isLost){
      game.ctx.drawImage(game.assets.fighter, this.x, this.y, this.width, this.height);
      game.fighter.checkBoundaries(game);
    }
  };

  Fighter.prototype.update = function(direction){
    this.x += (direction + 1) * 5;
    console.log(this.x);
    //this.cX = this.x + (this.width / 2);
  };

  Fighter.prototype.shoot = function(laser){
    new Laser();
  };

  Fighter.prototype.checkBoundaries = function(game){
    if(this.x >= game.canvas.width - this.width || this.x <= 0){
      this.x = this.x;
    }
  };

  return Fighter;
})();
