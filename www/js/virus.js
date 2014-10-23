/* exported Virus */
var Virus = (function(){
  'use strict';
  var virusWidth  = 40,
      virusHeight = 40;

  function Virus(x, y, game){
    var coordinates = [-3, -2, -1, 1, 2, 3],
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
    game.viruses.push(new Virus(randomX, 2, game));
  };

  Virus.checkVirus = function(virus, index){
    virus.cX     = virus.x + (virus.width / 2);
    virus.cY     = virus.y + (virus.height / 2);

    this.isLost = virus.checkCollision(this);

    if(this.isLost === true){console.log('ka-BOOOM!');}

    this.fighter.lasers.forEach(function(laser, index){
      var sumSq    = Math.pow(this.cX - (laser.x + 2), 2) + Math.pow(this.cY - laser.y, 2),
          distance = Math.sqrt(sumSq);

      if (distance < this.r * 0.75){
        laser.isOut = true;
        this.isKilled = true;
      }

      //game.viruses.splice(index, 1);
    }.bind(virus));

    if(virus.isKilled === true){
      this.assets.killed.play();
      this.kills++;
      //window.dispatchEvent(new Event('dead'));
      clearTimeout(virus.timer);
      this.viruses.splice(index, 1);
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

  Virus.prototype.checkCollision = function(game){
    game.fighter.cX = game.fighter.x + (game.fighter.width / 2);
    game.fighter.cY = game.fighter.y + (game.fighter.height / 2);

    var sumSq    = Math.pow(this.cX - (game.fighter.cX), 2) + Math.pow(this.cY - game.fighter.cY, 2),
        distance = Math.sqrt(sumSq);

    return distance < this.r + game.fighter.r - 5;
  };

  Virus.prototype.replicate = function(game){
    this.timer = setTimeout(function(){
      game.viruses.push(new Virus(this.x, this.y, game));
      this.replicate(game);
    }.bind(this), 5000, game);
  };

  /*function double(){
    console.log('duplicate', this);
    new Virus(this.x, this.y);
  }*/

  return Virus;
})();
