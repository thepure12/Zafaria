function create() 
{
	this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
	//this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.scale.pageAlignHorizontally = true;

	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.add.sprite(0, game.world.height - game.cache.getImage("background").height, "background")
	player = game.add.sprite(0, game.world.height - 300, 'knight');
	player.scale.setTo(.3, .3);
	player.animations.add('left', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, true);
	player.animations.add('right', [12, 13, 14, 15, 16, 17, 18 , 19, 20, 21], 10, true);

	game.physics.arcade.enable(player);
	player.body.bounce.y = 0.2;
    //player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    cursors = game.input.keyboard.createCursorKeys();
}