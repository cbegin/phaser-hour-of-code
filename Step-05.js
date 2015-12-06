function preload() {

    // STEP 1
    game.stage.backgroundColor = '#85b5e1';

    // STEP 2
    game.load.baseURL = 'http://examples.phaser.io/assets/';
    game.load.crossOrigin = 'anonymous';

    game.load.image('player', 'sprites/phaser-dude.png');

    // STEP 5
    game.load.image('platform', 'sprites/platform.png');

}
