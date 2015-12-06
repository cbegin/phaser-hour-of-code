var player;
var platforms;

function create() {

  // STEP 1
  player = game.add.sprite(100, 200, 'player');

  // STEP 4
  game.physics.arcade.enable(player);

  player.body.collideWorldBounds = true;
  player.body.gravity.y = 500;

  // STEP 6
  platforms = game.add.physicsGroup();

  platforms.create(500, 150, 'platform');
  platforms.create(-200, 300, 'platform');
  platforms.create(400, 450, 'platform');

  platforms.setAll('body.immovable', true);

}
