// define result outside function so calc result can persist.
var result = 0;
// calc function
function calc(jsonString) {
	let exp = JSON.parse(jsonString);

	if (exp.op === "add") {
		result = result + exp.number;
	} else if (exp.op === "subtract") {
		result = result - exp.number;
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
// reset result for testing exec function
function reset() {
	result = 0;
}