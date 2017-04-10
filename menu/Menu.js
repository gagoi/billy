class Menu{
	constructor(type){
		this.menuType = type;
	}

	load(){
		this.menuRender = loadImage("Resources/");
	}

	render(){
		clear();
		image(this.menuRender, 0, 0);
	}

	getType(){
		return this.menuType;
	}
}

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















