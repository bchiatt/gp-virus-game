/* exported Virus */
var Virus = (function(){
  'use strict';
  var virusWidth  = 40,
      virusHeight = 40;

  function Virus(x, y, game){
    var coordinates = [-3, -2, -1, 0, 1, 2, 3],
        iX          = Math.floor(Math.random() * coordinates.length),
        iY          = Math.floor(Math.random() * coordinates.length);

    this.width    = virusWidth;
    this.height   = virusHeight;
    this.x        = x * 1;
    this.y        = y * 1;
    this.dX       = coordinates[iX];
    this.dY       = coordinates[iY];
    this.r        = this.width/2;
    this.isKilled = false;

    this.replicate(game);
  }

  Virus.create = function(game){
    var randomX = Math.floor(Math.random() * (window.innerWidth - virusWidth));
    game.viruses.push(new Virus(randomX, 2, game));
  };

  Virus.checkVirus = function(element, index){
    // this = game
    element.draw(this);
  };

  Virus.prototype.draw = function(game){
    if(!this.isKilled){
      this.checkBoundaries(game);
      game.ctx.drawImage(game.assets.virus, (this.x+= this.dX), (this.y+=this.dY), this.width, this.height);
    }
  };

  Virus.prototype.checkBoundaries = function(game){
    if(this.x <= 0 || this.x >= (game.canvas.width - this.width)){
      return this.dX *= -1;
    }else if(this.y <= 0 || this.y >=(game.canvas.height - this.height)){
      return this.dY *= -1;
    }
  };

  Virus.prototype.replicate = function(game){
    console.log('start timeout');
    window.setTimeout(double(this, game), 5000);
  };

  function double(virus, game){
    console.log('duplicate', virus);
    game.viruses.push(new Virus(virus.x, virus.y));
  }

  return Virus;
})();
