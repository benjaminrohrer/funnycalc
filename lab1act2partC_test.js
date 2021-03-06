let pc = new PreCalc(0);

console.log("TESTING Part C trace Example() -----------------\n");

console.log("########  TESTING calc() ######## \n");

console.log(pc.calc('{"op" : "add", "number" : 5}')); 	// should return 5
console.log(pc.calc('{"op" : "print"}')); 				// stack [0 ]

console.log(pc.calc('{"op" : "push", "number" : 5}')); 	// returns 5, 
console.log(pc.calc('{"op" : "print"}')); 				// stack [5 0 ]

console.log(pc.calc('{"op" : "pop"}')); 				// returns 5, 
console.log(pc.calc('{"op" : "print"}')); 				// stack [0].

console.log(
  pc.calc('{"op" : "push", "expr" : {"op" : "subtract", "number" : 2}}')
); 														// return -2 
console.log(pc.calc('{"op" : "print"}'));  				// stack [-2 0]

console.log(pc.calc('{"op" : "push", "expr" : {"op" : "add", "number" : 19}}')); //return 17 stack [17 -2 0]
console.log(pc.calc('{"op" : "print"}')); 				//prints [17 -2 0]

console.log(pc.calc('{"op" : "pop"}')); 				// returns 17, stack [-2 0]
console.log(pc.calc('{"op" : "print"}')); 				//prints [-2 0]

pc.calcStack.unshift(-2);
console.log(pc.calc('{"op" : "print"}')); 				//prints [-2 0]
console.log(
  pc.calc(
    '{"op" : "push", "expr" : {"op" : "add", "expr": {"op" : "pop"}}}'
  )
); 														// returns -2 
console.log(pc.calc('{"op" : "print"}')); 				// prints [-2 0]

console.log(pc.calc('{"op" : "pop"}')); 				// returns -2
console.log(pc.calc('{"op" : "print"}'));				// stack [0]

console.log(pc.calc('{"op" : "pop"}')); 				// returns 0
console.log(pc.calc('{"op" : "print"}'));				// stack []

console.log(pc.calc('{"op" : "pop"}')); 				// returns (what? You have an empty stack now)
console.log("\n");
