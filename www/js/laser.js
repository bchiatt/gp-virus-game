/* exported Laser */

var Laser = (function(){
  'use strict';


  function Laser(fighter){
    console.log(fighter, 'Fighter!!!!');
    this.height = 10;
    this.width  = 4;
    this.x      = (fighter.cX - this.width / 2) *1;
    this.y      = (fighter.cY - 10) * 1;
    this.cLx     = this.x + (this.width / 2) ;
    this.cLy     = this.y + (this.height / 2) ;
    console.log(this, 'Laser!!!!!');
  }

  Laser.checkLaser = function(element, index){
    element.draw(this);
  };

  Laser.prototype.draw = function(game){
    game.ctx.drawImage(game.assets.weapon, this.x, (this.y -= 5), this.width, this.height);
  };

  Laser.create = function(game){
    game.fighter.lasers.push(new Laser(game.fighter));
    console.log(game.fighter.lasers);
  };

  return Laser;
})();
