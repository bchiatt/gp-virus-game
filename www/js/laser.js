/* exported Laser */

var Laser = (function(){
  'use strict';


  function Laser(fighter){
    console.log(fighter, 'Fighter!!!!');
    this.height = 10;
    this.width  = 4;
    this.x      = (fighter.cX - this.width / 2) *1;
    this.y      = (fighter.cY - 10) * 1;
    //this.cLx     = this.x + (this.width / 2) ;
    //this.cLy     = this.y + (this.height / 2) ;
  }

  Laser.checkLaser = function(laser, index){
    laser.isOut = laser.didVanish();
    if (laser.isOut === true){
      this.fighter.lasers.splice(index, 1);
    }else{
      laser.draw(this);
    }
  };

  Laser.prototype.draw = function(game){
    game.ctx.drawImage(game.assets.weapon, this.x, (this.y -= 17), this.width, this.height);
  };

  Laser.create = function(game){
    game.fighter.lasers.push(new Laser(game.fighter));
  };

  Laser.prototype.didVanish = function(game){
    return this.y - this.height < 0;
  };

  return Laser;
})();
