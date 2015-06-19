'use strict';

var PipeGroup = function(game, parent) {

  Phaser.Group.call(this, game, parent);
  // TOP
  this.topPipe = new Pipe(this.game, 0, 0, 0);
  this.add(this.topPipe);
  // BOTTOM
  this.bottomPipe = new Pipe(this.game, 0, 440, 1);
  this.add(this.bottomPipe);

  this.hasScored = false;

  this.setAll('body.velocity.x', -200);

};


PipeGroup.prototype = Object.create(Phaser.Group.prototype);
PipeGroup.prototype.constructor = PipeGroup;

PipeGroup.prototype.update = function() {

};

