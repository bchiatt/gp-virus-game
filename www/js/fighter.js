/* exported Fighter*/
/*global Laser */

var Fighter = (function(){
  'use strict';



  function Fighter(game){
    this.width = 30;
    this.height = 30;
    this.r = this.width/2;
    this.x = (game.canvas.width/2 - this.r);
    this.y = game.canvas.height - this.height;
    this.cX     = this.x + (this.width / 2);
    this.cY     = this.y + (this.height / 2);
    this.lasers = [];
  }

  Fighter.prototype.draw = function(game){
    if(!game.isWon && !game.isLost){
      game.ctx.drawImage(game.assets.fighter, this.x, this.y, this.width, this.height);
      game.fighter.checkBoundaries(game);
    }
  };

  Fighter.prototype.update = function(direction, game){
    var edge = this.checkBoundaries(game);
    if(!edge){
      this.x += (direction + 1) * 6;
      this.cX     = this.x + (this.width / 2);
    }else{
      this.x -= (direction + 1) * 7;
      this.cX     = this.x + (this.width / 2);

    }
  };

  Fighter.prototype.shoot = function(laser){
    new Laser();

      for (var i = 0; i < this.lasers.length; i++) {
        if (this.lasers[i][1] > -11) {
          this.lasers[i][1] -= 10;
        } else if (this.lasers[i][1] < -10) {
          this.lasers.splice(i, 1);
        }
      }
  };

  Fighter.prototype.checkBoundaries = function(game){
    if(this.x >= game.canvas.width - this.width || this.x <= 0){
      this.x = this.x;
    }
  };

  return Fighter;
})();
