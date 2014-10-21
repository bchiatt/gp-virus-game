/* exported Virus */
var Virus = (function(){
  'use strict';

  function Virus(x, y){
    var coordinates = [-3, -2, -1, 0, 1, 2, 3],
        iX = Math.floor(Math.random * coordinates.length),
        iY = Math.floor(Math.random * coordinates.length);

    this.width = 20;
    this.height = 20;
    this.dX = coordinates[iX];
    this.dY = coordinates[iY];
    this.r = this.width/2;
  }
  /*Virus.prototype.create = function(){


  };
  Virus.prototype.bounce = function(vX, vY){
    if(vX )

  };*/
})();
