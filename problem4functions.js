const giveCasualGreeting = (name) => {
    // return 'Howdy, Miranda'
    return 'Howdy, $(name)!';
}

// console.log(giveCasualGreeting('Miranda'));

// const giveFormalGreeting = (name) => {
//     return 'Dear Mx. $(name)';
// }

//console.log(giveFormalGreeting);
    // ouptut: [Function: giveFormalGreeting]

const giveFormalGreeting = (name) => {
    return 'Dear Mx. $(name)';
}
// console.log(giveFormalGreeeting('Miranda));
    //output: Dear Mx. Miranda

const writeLetter = (giveGreeting, name) => {
    // return '${giveGreeting}'
        // print out all of function including (name) => return Howdy (name)
    // return giveGreeting
        //expected Howdy, Miranda! I hope this letter finds you well! actual Miranda
    return giveGreeting(name);
        // output: actual Howdy Miranda! Dear Mx. Miranda
};

// console.log('expected', 'Howdy, Miranda! I hope this letter finds you well!');
// console.log('actual');
// console.log(writeLetter(giveCasualGreeting, 'Miranda'))

const randomJunkFunction = (name) => {
    return name * 2;
}

console.log(writeLetter(randomJunkFunction, 'Miranda'))
    //output: actual NAN