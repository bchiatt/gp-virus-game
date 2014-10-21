/* exported Fighter*/

var Fighter = (function(){
  'use strict';

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
    }
  };

  Fighter.prototype.update = function(direction, game){
    var edge = this.checkBoundaries(game);
    if(!edge){
      this.x += (direction + 1) * 6;
    }else{
      this.x -= (direction + 1) * 7;
    }
    console.log(this.x);
    //this.cX = this.x + (this.width / 2);
  };

  Fighter.prototype.shoot = function(){};

  Fighter.prototype.checkBoundaries = function(game){
    return this.x >= game.canvas.width - this.width || this.x <= 0;
  };

  return Fighter;
})();
