class Game {
	constructor(){
		this.music = new Music("resources/sounds/musics/", 3);
		this.soundEffect = new SoundEffect("resources/chapters/");

		this.menu = new Menu();

		this.engine = Matter.Engine.create();

		this.entities = [];

        this.level = new Level(1, 1);
    }

	load(){
		this.menu.load();
		this.music.load();
		this.soundEffect.load();
	}

	update(){
		Matter.Engine.run(this.engine);
		this.music.volume(0.1);
		this.music.play();
	}

	render(){
		this.menu.render();
		for( var entity in this.entities) {
			entity.render();
		}
	}

	mousePressed(){
		this.menu.mousePressed(mouseX, mouseY);
	}

	selectLevel(chapter, level){
		this.soundEffect.play(chapter, level);
	}
}
