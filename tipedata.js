// MATERI TIPE DATA

// UNDIFINED

let Z;
console.log(typeof(Z));

/* output: undefined */

// NUMBERS

let x = 10;
console.log(typeof(x))

/* output: number */

let y = 17.25;
console.log(typeof(y))

/* output: number */

// OPERATOR ARITMATIKA 

let a = 12;
let b = 9;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

/* output:
21
3
108
1.3333333333333333
3
*/

// OPERATOR INCREMENT DAN DECREMENT 

/* Increment dan Decrement */

let postfix = 5;
console.log(postfix++);
/* output: 5 */
console.log(postfix);
/* output: 6 */

let prefix = 5;
console.log(++prefix);
/* output: 6 */

// BIG INT

const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

/* output
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/

console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);

/* output
7n
3n
10n
2n; Bukan 2.5n
1n
*/

// STRING

let greet = "Hello";
console.log(typeof(greet))

/* output: string */

const question = '"What do you think of JavaScript?" I asked';

console.log(question)

/* output: "What do you think of JavaScript?" I asked */

const answer = '"I think it\'s awesome!" he answered confidently';

console.log(answer);

let c = "Hello";
let moreGreet = c + c;
console.log(moreGreet);

/* output: HelloHello */

const myName = "Taqi";
console.log(`Hello, my name is ${myName}.`);

/* output: Hello, my name is Taqi. */

// BOOLEAN

let X = true;
let Y = false;

console.log(typeof(X))
console.log(typeof(Y))

/* output: 
boolean
boolean
*/

const A = 10;
const B = 12;

let isGreater = A > B;
let isLess = A < B;

console.log(isGreater);
console.log(isLess);

/* output:
false
true
*/

// NULL

let someLaterData = null;
console.log(someLaterData);

/* output:
null
*/

// SYMBOL

const id = Symbol("id");

console.log(id);

/* output
Symbol(id)
*/

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);

/* output
false
*/