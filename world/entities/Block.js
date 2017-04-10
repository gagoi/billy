class Block{
	constructor(code, name, x, y, options){
		this.size = 32;

		options = options || {};
		this.code = code;
		this.name = name;
		this.body = Matter.Bodies.rectangle(x, y, this.size, this.size, options);
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

	setCode(code){
		this.code = code;
	}

	render(){
		push();
		translate(this.body.position.x, this.body.position.y));
		rotate(this.body.angle);
		pop();

	}
}
