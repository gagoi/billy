class MenuButton{
	constructor(type, chap, level, x, y, tx, ty){
		this.type = type;		//0: new game, 1: level selection, 2: level button

		this.chapter = chap;
		this.level = level;
		//(-1,-1)=(-21): start menu
		//(0,0)=(0): level selection menu

		this.x = x;
		this.y = y;
		this.tailleX = tx;
		this.tailleY = ty;
	}

	mousePressed(mouseX, mouseY){
		if (mouseX>this.x && mouseX<(this.x+this.tailleX) && mouseY>this.y && mouseY<(this.y+this.tailleY)) {
			return (10*(this.chapter-1)+this.level);
		}
	}

	select(){
		if (this.type=="otherMenu"){
			return ;
		}
		else if (this.type=="levelButton"){
			return ;
		}
		else {

		}
	}
}

class MenuButtonLevel extends MenuButton{
	constructor(type, name, x, y, tx, ty, chap, lvl){
		super(type, name, x, y, tx, ty);
		this.chapter = chap;
		this.level = lvl;
	}

	select(){
		if (this.type=="otherMenu"){
			typeMenu = "changingMenu"
		}
		else if (this.type=="levelButton"){
			return (10*(this.chapter-1)+this.level)
		}
		else {
			print("New Game");
		}
	}
}
