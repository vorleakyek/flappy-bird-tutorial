import Phaser from "phaser";

const config = {
  //WebGL (Web graphics libray) JS API for rendering 2D and 3D graphics
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    //Arcade physics plugin, manages physics simulation
    default: "arcade",
    arcade: {
      gravity: { y: 400 },
    },
  },
  scene: {
    preload,
    create,
    update,
  },
};

// Loading assetts, such as images, music, animations ...
function preload() {
  this.load.image("sky", "assets/sky.png");
  this.load.image("bird", "assets/bird.png");
}

let VELOCITY = 200;
const flapVelocity = 300;
const initialBirdPosition = { x: config.width * 0.1, y: config.height / 2 };
let bird = null;

function create() {
  //x,y,key of the image
  this.add.image(0, 0, "sky").setOrigin(0);
  bird = this.physics.add
    .sprite(initialBirdPosition.x, initialBirdPosition.y, "bird")
    .setOrigin(0);

  this.input.on("pointerdown", flap);

  this.input.keyboard.on("keydown-SPACE", flap);
}

function update(time, delta) {
  if (bird.y >= config.height || bird.y < -bird.height) {
    restartBirdPosition();
  }
}

function restartBirdPosition() {
  bird.x = initialBirdPosition.x;
  bird.y = initialBirdPosition.y;
  bird.body.velocity.y = 0;
}

function flap() {
  bird.body.velocity.y = -flapVelocity;
}

new Phaser.Game(config);
