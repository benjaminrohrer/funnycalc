// define result outside function so calc result can persist.
var result = 0;
var value = 0;
// calc function
function calc(jsonString) {
	let exp = JSON.parse(jsonString);

	if (exp.op === "add"){
		console.log("add operation found");
		if ("expr" in exp) {
			console.log("expr found");
			value = calc(JSON.stringify(exp.expr));
			result = result + value;
		} else if ("number" in exp){
			result = result + exp.number;
		}
	}
	if (exp.op == "subtract"){
		console.log("subtract operation found");
		if ("expr" in exp) {
			console.log("expr found");
			value = calc(JSON.stringify(exp.expr));
			result = result - value;
		} else if ("number" in exp){
			result = result - exp.number;
		}
	}
	return result;

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