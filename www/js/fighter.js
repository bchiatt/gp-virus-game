/* exported Fighter*/

var Fighter = (function(){
  'use strict';

  function Fighter(game){
    this.width = _;
    this.height = _;
    this.r = this.width/2;
    this.x = (window.innerWidth/2 - this.r);
    this.y = window.innerHeight - this.height;
  }

  Fighter.prototype.draw = function(game){
    if(!game.isWon && !game.isLost){
      game.ctx.drawImage(game.assets.fighter, this.x, this.y, this.width, this.height);
      checkBoundaries();
    }
  };

  Fighter.prototype.update = function(deltaX){
    this.x += deltaX;
    this.cX = this.x + (this.width / 2);
  };

  Fighter.prototype.shoot = function(){};

  function checkBoundaries(game){
    if(this.x >= game.canvas.width - this.width || this.x <= 0){
      this.x = this.x;
    }
  }

  return Fighter;
})();
