class Game {
	constructor(){
		this.music = new Music("resources/sounds/musics/", 3);
		this.soundEffect = new SoundEffect("resources/chapters/");

		this.engine = Matter.Engine.create();

		this.entities = [];
	}

	load(){
		this.music.load();
	}

	update(){
		Matter.Engine.run(this.engine);
	}

	render(){
		for( var entity in this.entities) {
			entity.render();
		}
	}

	selectLevel(){

	}
}
