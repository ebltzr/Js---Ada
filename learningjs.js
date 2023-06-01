const fizzBuzz = function(num) {
    if(num % 15 === 0) {
        console.log('FizzBuzz');
    } else if (num % 3 === 0) {
        console.log('Fizz');
    } else if(num % 5 === 0) {
        console.log('Buzz');
    }else {
        console.log(num)
    }
}

const exampleOfThree = 3;
const exampleOfFive = 5;
const exampleOfFifteen = 15;
const exampleOfOne = 1;

//this prints Fizz
fizzBuzz(exampleOfThree)

//this prints Buzz
fizzBuzz(exampleOfFive)

//this prints FizzBuzz
fizzBuzz(exampleOfFifteen)

//this prints 1
fizzBuzz(exampleOfOne)