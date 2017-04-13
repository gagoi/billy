class Menu{
	constructor(type){
		this.menuType = type;
		this.whichMenu = 0;
		this.nChapter = 2;
		this.nLevel = 10*this.nChapter;
		this.levelArray = new Array();

		//levelArray form: [(0,),...,(0,9),(1,0),...(1,9)]
		//Access : levelArray[10*(chapter-1)+(level)]
		//Reverse:   i:   chap=(i/10)+1  level=(i%10)
		for (var i=0; i<this.nLevel; i++){
			this.levelArray.push(new MenuButton(2, (Math.floor(i/10))+1,  i%10, 20+(i%5)*200, 50+(Math.floor(i/5))*100, 150, 20));
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

	//getType(){
	//	return this.menuType;
	//}
}

/*
class MainMenu extends Menu{
	constructor(type){
		super(type);
		this.b1 = new MenuButton("newGameButton", 300, 200, 200, 50);
		this.b2 = new MenuButton("otherMenu", 300, 300, 200, 50);
	}

	mouse(x, y){
		this.b1.mousePressed(x, y);
		this.b2.mousePressed(x, y);
	}

	update(){

	}
}

class LevelMenu extends Menu{
	constructor(){
		this.nbChap = 2;
		this.nbLvl = 10;
		this.buttonArray = new Array();
		for (var i=0; i<this.nbChap; i++){
			this.buttonArray.push(new Array());
			for (var j=0; j<this.nbLvl; j++){
				var str = "Chapter " + String(i) + " Level " + String(j)
				this.buttonArray[i].push(new MenuButtonLevel("levelButton", str, 20+i*200, 50+j*110, 150, 20, i, j));
			}
		}
	}

	mouse(x, y){
		for (var i=0; i<this.nbChap; i++){
			for (var j=0; j<this.nbLvl; j++){
				this.buttonArray[i][j].mousePressed(x, y);
			}
		}
	}
}
*/














