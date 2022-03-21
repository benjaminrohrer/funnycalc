// PreCalc 
function PreCalc(number) {
	this.calcStack = [number];

	this.push = function(input) {
		let statement = JSON.parse(input);
		if ("number" in statement) {
			this.calcStack.unshift(statement.number);
			return statement.number;
		} else if ("expr" in statement) {
			let expression = JSON.stringify(statement.expr);
			this.calcStack.unshift(this.calc(expression));
			return this.calcStack[0];
		}
	}
	this.pop = function() {
		let val = this.calcStack.shift();
		return val;
	}
	this.add = function(input) {
		let statement = JSON.parse(input);
		if ("number" in statement) {
			return (this.calcStack[0] + statement.number);
		} else if ("expr" in statement) {
			let expression = JSON.stringify(statement.expr);
			let value = this.calc(expression);
			return (this.calcStack[0] + value);
		}
	}
	this.subtract = function(input) {
		let statement = JSON.parse(input);
		if ("number" in statement) {
			return (this.calcStack[0] - statement.number);
		} else if ("expr" in statement) {
			let expression = JSON.stringify(statement.expr);
			let value = this.calc(expression);
			return (this.calcStack[0] - value);
		}
	}
	this.calc = function(jsonString) {
		let statement = JSON.parse(jsonString);
		if (statement.op === "add") {
			return this.add(JSON.stringify(statement));
		} else if (statement.op === "subtract") {
			return this.subtract(JSON.stringify(statement));
		} else if (statement.op === "push") {
			return this.push(JSON.stringify(statement));
		} else if (statement.op === "pop") {
			return this.pop(JSON.stringify(statement));
		} else if (statement.op === "print") {
			return this.calcStack;
		}
	}
}