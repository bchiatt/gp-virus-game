/* exported Virus */
var Virus = (function(){
  'use strict';
  var virusWidth  = 40,
      virusHeight = 40;

  function Virus(x, y){
    var coordinates = [-3, -2, -1, 0, 1, 2, 3],
        iX          = Math.floor(Math.random() * coordinates.length),
        iY          = Math.floor(Math.random() * coordinates.length);

    this.width    = virusWidth;
    this.height   = virusHeight;
    this.x        = x * 1;
    this.y        = y * 1;
    this.dX       = coordinates[iX];
    this.dY       = coordinates[iY];
    this.r        = this.width;
    this.isKilled = false;

    this.replicate(game);
  }

  Virus.create = function(game){
    var randomX = Math.floor(Math.random() * (window.innerWidth - virusWidth));
    game.viruses.push(new Virus(randomX, 2));
  };

  Virus.checkVirus = function(virus, index){
    virus.cX     = virus.x + (virus.width / 2);
    virus.cY     = virus.y + (virus.height / 2);

    this.fighter.lasers.forEach(function(laser, index){
      var sumSq    = Math.pow(this.cX - (laser.x + 2), 2) + Math.pow(this.cY - laser.y, 2),
          distance = Math.sqrt(sumSq);

      console.log('virus', this.cX, this.cY);
      console.log('laser', laser.x + 2, laser.y);
      console.log('distance', distance);
      console.log('radius', this.r);

      if (distance < this.r){
        console.log('hit!');
        virus.isKilled = true;
      }
      //game.viruses.splice(index, 1);
    }.bind(virus));

    if(virus.isKilled === true){
      this.viruses.splice(index, 1);
      console.log('I am hit!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    }else{
      virus.draw(this);
    }
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
    window.setTimeout(function(){
      game.viruses.push(new Virus(this.x, this.y, game));
      this.replicate(game);
    }.bind(this), 5000, game);
  };


  return Virus;
})();
