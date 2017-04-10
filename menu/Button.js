class MenuButton{
	constructor(type, x, y, tx, ty){
		this.type = type;
		this.x = x;
		this.y = y;
		this.tailleX = tx;
		this.tailleY = ty;
	}

	mousePressed(mouseX, mouseY){
		if (mouseX>this.x && mouseX<(this.x+this.tailleX) && mouseY>this.y && mouseY<(this.y+this.tailleY)) {
			this.select();
		}
	}

	select(){
		if (this.type=="otherMenu"){
			return 1;
		}
		else if (this.type=="levelButton"){
			return 2;
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
			print(this.chapter);
			print(this.level);
		}
		else {
			print("New Game");
		}
	}
}
