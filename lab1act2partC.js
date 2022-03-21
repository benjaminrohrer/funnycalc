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
		if ("expr" in exp) {
			this.value = this.calc(JSON.stringify(exp.expr));
			this.result = this.result + this.value;
		} else if ("number" in exp){
			this.result = this.calcStack[0] + exp.number;
		}
	}
	if (exp.op === "subtract"){
		if ("expr" in exp) {
			this.value = this.calc(JSON.stringify(exp.expr));
			this.result = this.result - this.value;
		} else if ("number" in exp){
			this.result = this.calcStack[0] - exp.number;
		}
	}
	if (exp.op === "push") {
		if ("expr" in exp) {
			this.calcStack.unshift(this.calc(JSON.stringify(exp.expr)));
		} else if ("number" in exp) {
			this.calcStack.unshift(exp.number);
			return exp.number;
		}
	}
	if (exp.op === "pop") {
		this.result = this.calcStack.shift();
	}
	if (exp.op === "print") {
		return this.printStack();
	}

	return this.result;

}
PreCalc.prototype.printStack = function() {
	let output = "[";
	for (let i = 0; i < this.calcStack.length; i ++){
		output = output + this.calcStack[i] + " ";
	}
	output = output + "]";
	return output;
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
