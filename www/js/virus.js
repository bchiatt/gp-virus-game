/* exported Virus */
var Virus = (function(){
  'use strict';

  function Virus(x, y){
    var coordinates = [-3, -2, -1, 0, 1, 2, 3],
        iX          = Math.floor(Math.random() * coordinates.length),
        iY          = Math.floor(Math.random() * coordinates.length);

    this.width    = 20;
    this.height   = 20;
    this.x        = x;
    this.y        = y;
    this.dX       = coordinates[iX];
    this.dY       = coordinates[iY];
    this.r        = this.width/2;
    this.isKilled = false;
  }

  Virus.prototype.draw = function(game){
    if(!this.isKilled){
      this.checkBoundaries();
      game.ctx.drawImage(game.asset.virus, (this.x+= this.dX), (this.y+=this.dY), this.width, this.height);
    }
  };

  Virus.prototype.create = function(game){
    var randomX = Math.floor(Math.random() * (window.innerWidth - this.width));
    game.viruses.push(new Virus(randomX, 2));
  };

  Virus.prototype.checkBoundaries = function(){
    if(this.x <= 0 || this.x >= (window.innerWidth - this.width)){
      return this.dY *= -1;
    }else if(this.y <= 0 || this.y >=(window.innerHeight - this.height)){
      return this.dX *= -1;
    }
  };

})();
