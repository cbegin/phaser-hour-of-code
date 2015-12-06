function update () {

    game.physics.arcade.collide(player, platforms);

    // STEP 9
    if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))
    {
        player.body.velocity.y = -400;
    }
}
