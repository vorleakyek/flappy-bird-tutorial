import Phaser from 'phaser';

const config = {
  //WebGL (Web graphics libray) JS API for rendering 2D and 3D graphics 
  type: Phaser.AUTO,
  width:800,
  height: 600,
  physics: {
    //Arcade physics plugin, manages physics simulation
    default: 'arcade',
    arcade: {
      // gravity: {y:200}
    }
  },
  scene: {
    preload,
    create,
    update
  }
}

// Loading assetts, such as images, music, animations ...
function preload() {
  this.load.image('sky','assets/sky.png');
  this.load.image('bird','assets/bird.png');
}

let VELOCITY =200;
let bird = null;

function create() {
  //x,y,key of the image 
  this.add.image(0, 0,'sky').setOrigin(0);
  bird = this.physics.add.sprite(config.width/10, config.height/2, 'bird').setOrigin(0);
  bird.body.velocity.x=VELOCITY;
  debugger
}




function update(time,delta) {
  if (bird.x >= config.width - bird.width) {
    bird.body.velocity.x=-VELOCITY;
  } else if (bird.x <= 0) {
    bird.body.velocity.x=VELOCITY;
  }
}

new Phaser.Game(config);

