/* exported Laser */

var Laser = (function(){
  'use strict';


  function Laser(fighter){
    this.height = 10;
    this.width  = 4;
    this.x      = fighter.x;
    this.y      = fighter.y + 5;
  }

  Laser.prototype.draw = function(fighter){
    game.ctx.drawImage(game.asset.weapon, this.x, this.y, this.width, this.height);
  };

  // function moveLaser() {
    // for (var i = 0; i < lasers.length; i++) {
      // if (lasers[i][1] > -11) {
        // lasers[i][1] -= 10;
      // } else if (lasers[i][1] < -10) {
        // lasers.splice(i, 1);
      // }
    // }
  // }

})();
// });
