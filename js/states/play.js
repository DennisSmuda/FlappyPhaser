'use strict';

function Play() {}

Play.prototype = {

  create: function() {
    this.game.physics.startSystem(Phaser.Physics.ARCARDE);
    this.game.physics.arcade.gravity.y = 1200;

    this.background = this.game.add.sprite(0, 0, 'background');


    // Create Bird
    this.bird = new Bird(this.game, 100, this.game.height/2);
    this.game.add.existing(this.bird);

    // Create Ground
    this.ground = new Ground(this.game, 0, 400, 335, 112);
    this.game.add.existing(this.ground);

    // Keep spacebar from propogating up to the browser
    this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

    // Add keyboard controls
    var flapKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    flapKey.onDown.add(this.bird.flap, this.bird);

    this.input.onDown.add(this.bird.flap, this.bird);


    // Add a timer
    this.pipeGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 1.25, this.generatePipes, this);
    this.pipeGenerator.timer.start();
    

  },

  update: function() {
    this.game.physics.arcade.collide(this.bird, this.ground);

  },

  generatePipes: function() {
    var pipeY = this.game.rnd.integerInRange(-100, 100);
    var pipeGroup = new PipeGroup(this.game);
    pipeGroup.x = this.game.width;  
    pipeGroup.y = pipeY;
  },
};