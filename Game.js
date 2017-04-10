class Game {
	constructor(){
		this.music = new Music("resources/sounds/musics/", 3);
		this.soundEffect = new SoundEffect("resources/chapters/");

		this.isInMenu = 0;
		this.menu = new MainMenu();
		this.levelMenu = new LevelMenu();

		this.engine = Matter.Engine.create();

		this.entities = [];
	}

	load(){
		this.menu.load();
		this.levelMenu.load();
		this.music.load();
		this.soundEffect.load();
	}

	update(){
		this.isInMenu = menu.
		switch (this.isInMenu) {
			case 0:
				this.menu.mouse(mouseX, mouseY);
				break;
			case 1:
				this.levelMenu.mouse(mouseX, mouseY);
				break;
			case 2:
				//GAME UPDATE
		}

		Matter.Engine.run(this.engine);
		this.music.play();
	}

	render(){
		switch (this.isInMenu) {
			case 0:
				this.menu.render();
				break;
			case 1:
				this.levelMenu.render();
				break;
			case 2:
				//GAME UPDATE
		}
		for( var entity in this.entities) {
			entity.render();
		}
	}

	selectLevel(chapter, level){
		this.soundEffect.play(chapter, level);
	}
}
