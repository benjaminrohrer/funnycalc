// Testing calc()
console.log("########  TESTING calc() ######## \n");

console.log(calc('{"op" : "add", "number" : 0}')); // should return 0
console.log(calc('{"op" : "add", "number" : -1}')); // should return -1
console.log(calc('{"op" : "subtract", "number" : -1}')); // should return 0
console.log(calc('{"op" : "add", "number" : 5}')); // should return 5
console.log(calc('{"op" : "subtract", "number" : 10}')); // should return -5
console.log(calc('{"op" : "add", "number" : 15}')); // should return 10

console.log("\n\n\n\n");
// Testing exec() function
console.log("########  TESTING exec() ######## \n");

reset();

let expA = [
  { exp: { op: "add", number: 0 }, expected: 0 },
  { exp: { op: "add", number: -1 }, expected: -1 },
  { exp: { op: "subtract", number: -1 }, expected: 0 },
  { exp: { op: "add", number: 5 }, expected: 5 },
  { exp: { op: "subtract", number: 10 }, expected: -5 },
  { exp: { op: "add", number: 15 }, expected: 10 },
];

exec(expA);

