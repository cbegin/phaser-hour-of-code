var player;

function create() {

    // STEP 1
    player = game.add.sprite(100, 200, 'player');

    // STEP 4
    game.physics.arcade.enable(player);
    
    player.body.collideWorldBounds = true;
    player.body.gravity.y = 500;


}
