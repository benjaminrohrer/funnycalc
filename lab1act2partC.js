// define result outside function so calc result can persist.
//var result = 0;
//var value = 0;

function PreCalc(number) {
	this.calcStack = [number];
	this.result = 0;
	this.value = 0;
}
// calc function
PreCalc.prototype.calc = function(jsonString) {
	let exp = JSON.parse(jsonString);

	if (exp.op === "add"){
		console.log("add operation found");
		if ("expr" in exp) {
			console.log("expr found");
			this.value = this.calc(JSON.stringify(exp.expr));
			this.result = this.result + this.value;
		} else if ("number" in exp){
			this.result = this.result + exp.number;
		}
	}
	if (exp.op === "subtract"){
		console.log("subtract operation found");
		if ("expr" in exp) {
			console.log("expr found");
			this.value = this.calc(JSON.stringify(exp.expr));
			this.result = this.result - this.value;
		} else if ("number" in exp){
			this.result = this.calcStack[0] - exp.number;
		}
	}
	if (exp.op === "push") {
		console.log("push found");
		if ("expr" in exp) {
			this.calc(JSON.stringify(exp.expr));
			this.printStack();
		} else if ("number" in exp) {
			this.calcStack.unshift(exp.number);
			this.printStack();
			return exp.number;
		}
	}
	if (exp.op === "pop") {
		console.log("pop found");
		this.result = this.calcStack.shift();
		this.printStack();
	}

	return this.result;

}
PreCalc.prototype.printStack = function() {
	let output = "[";
	for (let i = 0; i < this.calcStack.length; i ++){
		output = output + this.calcStack[i] + " ";
	}
	output = output + "]";
	console.log(output);
}
// exec function
function exec(array) {
	for (let i = 0; i < array.length; i++) {
		let exp = JSON.stringify(array[i].exp);
		calc(exp);
		console.log(result + " = " + array[i].expected);
	}
}

function reset() {
	result = 0;
}