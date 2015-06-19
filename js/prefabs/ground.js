'use strict';

var Ground = function(game, x, y, width, height) {
  Phaser.TileSprite.call(this, game, x, y, width, height, 'ground');
  // autoscroll
  this.autoScroll(-200, 0);
  // enable physics
  this.game.physics.arcade.enableBody(this);

  // disable gravity for the ground
  this.body.allowGravity = false;
  this.body.immovable = true;
};

Ground.prototype = Object.create(Phaser.TileSprite.prototype);
Ground.prototype.constructor = Ground;

Ground.prototype.update = function() {

};