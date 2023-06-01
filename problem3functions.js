/* Implement the function isOddNumber.

isOddNumber should take in one number, num. It returns true if num is an odd number. It returns false if num is an even number.

If num is not a number, the function should return a falsy value. */

const isOddNumber = (num) => {
    if (num % 2 === 0) {
        return false;
    }
        return true;
}



console.log(isOddNumber(1)); //True
console.log(isOddNumber(2)); //False
console.log(isOddNumber('hello')); //false
console.log(isOddNumber([])); //false
console.log(isOddNumber({})); //false

// in terminal used node problem3functions.js (below)
/* 
1 % 2 === 0
false

'hello' % 2
fase

NAN == true
false

NAN ==false
false

[] % 2
0

{} % 2
NAN


*/