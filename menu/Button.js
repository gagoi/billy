class MenuButton{
	constructor(type, chap, level, x, y, tx, ty){
		this.type = type;		//0: new game, 1: level selection, 2: level button

		this.chapter = chap;
		this.level = level;
		//(-1,-1)=(-21): start menu
		//(0,0)=(-10): level selection menu

		this.x = x;
		this.y = y;
		this.tailleX = tx;
		this.tailleY = ty;
	}

	render(){
		noFill();
		noStroke();
		rect(this.x, this.y, this.tailleX, this.tailleY);
	}

	mousePressed(mouseX, mouseY){
		if (mouseX>this.x && mouseX<(this.x+this.tailleX) && mouseY>this.y && mouseY<(this.y+this.tailleY)) {
			return (10*(this.chapter-1)+this.level);
		}
		return -100;
	}
}
