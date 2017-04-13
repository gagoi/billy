class Menu{
	constructor(){
		this.whichMenu = 0;
		this.nChapter = 3;
		this.nLevel = 10*this.nChapter;
		this.levelArray = new Array();

		//levelArray form: [(0,),...,(0,9),(1,0),...(1,9)]
		//Access : levelArray[10*(chapter-1)+(level)]
		//Reverse:   i:   chap=(i/10)+1  level=(i%10)
		for (var i=0; i<this.nLevel; i++){
			this.levelArray.push(new MenuButton(2, (Math.floor(i/10))+1,  i%10, 355+(i%10)*66, 36+(Math.floor(i/10))*182, 60, 140));
		}

		this.bNewGame = new MenuButton(0, -1, -1, 312, 294, 400, 100);
		this.bSelectLevel = new MenuButton(1, 0, 0, 312, 409, 400, 100);
	}

	load(){
		this.menuRender0 = loadImage("Resources/textures/menu/main_menu.png");
		this.menuRender1 = loadImage("Resources/textures/menu/level_menu_test.png");
	}

	render(){
		switch (this.whichMenu) {
			case 0:
				image(this.menuRender0, 0, 0);
				this.bNewGame.render();
				this.bSelectLevel.render();
				break;
			case 1:
				image(this.menuRender1, 0, 0);
				for (var i=0; i<this.nLevel; i++){
					this.levelArray[i].render();
				}
				break;
			case 2:
				break;
		}
	}

	update(){
		switch (this.whichMenu) {
			case 0:
				break;
			case 1:
				break;
			case 2:
				break;
		}
	}

	mousePressed(x, y){
		switch (this.whichMenu) {
			case 0:
				this.select = this.bNewGame.mousePressed(x, y);
				if (this.select==-21){
					//New Game
					console.log("New Game");
				}
				this.select = this.bSelectLevel.mousePressed(x, y);
				if (this.select==-10){
					//Go to level selection
					console.log("Go to level selection");
					this.whichMenu = 1;
				}
				break;
			case 1:
				for (var i=0; i<this.nLevel; i++){
					this.select = this.levelArray[i].mousePressed(x, y);
					if (this.select!=-100){
						//Go to a level
						//chapter= (Math.floor(this.select/10))+1
						//level= this.select%10
						console.log("chapter: ",(Math.floor(this.select/10))+1);
						console.log("Level: ", this.select%10);
					}
				}
				break;
			case 2:
				break;
		}
	}
}














