import Phaser from 'phaser';

const config = {
  //WebGL (Web graphics libray) JS API for rendering 2D and 3D graphics 
  type: Phaser.AUTO,
  width:800,
  height: 600,
  physics: {
    //Arcade physics plugin, manages physics simulation
    default: 'arcade'
  },
  scene: {
    preload,
    create
    //update: update
  }
}

// Loading assetts, such as images, music, animations ...
function preload() {
  debugger
}

//
function create() {
  debugger
}

new Phaser.Game(config);

