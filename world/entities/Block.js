class Block{
	constructor(code, name, isHard){
		this.code = code;
		this.name = name;
		this.isHard = isHard;
	}

	isHard(){
		return isHard;
	}

	setHardness(hardness){
		this.isHard = hardness;
	}

	getName(){
		return this.name;
	}

	setName(name){
		this.name = name;
	}

	getCode(){
		return this.code;
	}

	setCode(){
		this.code = code;
	}
}
