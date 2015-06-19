// (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';



var game = new Phaser.Game(288, 505, Phaser.AUTO, 'flappy-bird-reborn');

// Game States
// game.state.add('boot',    BootState);
game.state.add('menu',    Menu);
game.state.add('play',    Play);
game.state.add('preload', Preload);


// Start State - Entry point of application
game.state.start('preload');









/*
KEEP DOING IT:
http://www.codevinsky.com/phaser-2-0-tutorial-flappy-bird-part-4/
*/