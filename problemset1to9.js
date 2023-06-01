/* 
Practice 01
Create a function named addFive. It has one parameter, num. The function should add 5 to num, and return the sum.
*/

const addFive = function(num) {
return num + 5
}

console.log('testing addFive', addFive(6));

/* Create a function named doubleAndAddTwo. It has one parameter, num. The function should add num + num + 2, and return the sum. */

const doubleandAddTwo = function(num) {
return num + num + 2
}
console.log('testing doubleandAddTwo', doubleandAddTwo(50));

/* Following the current pattern in the code below, modify the function so that invoking getExampleSentence('they/them') returns 'They went to the park. I went with them. They brought their frisbee.', and doesn't alter the rest of the functionality. */

const getExampleSentence = function(pronouns) {
    if (pronouns === 'she/her') {
        return 'She went to the park. I went with her. She brought her frisbee.';
    } 
    else if (pronouns === 'he/him'){
        return 'He went to the park. I went with him. He brought his frisbee.';
    } 
    else if (pronouns === 'ze/hir'){
        return 'Ze went to the park. I went with hir. Ze brought hir frisbee.';
    } 
    else if (pronouns === 'they/them'){
        return 'They went to the park. I went with them. They brought their frisbee.'
    } 
    else {
        return 'I\'m not quite sure how to use these pronouns, it\'s best to ask and confirm!';
    }
}

console.log('testing getExampleSentence', getExampleSentence('they/them'));

/* Create a function named getThirdPlace. It has one parameter, finalists. Assuming that the first item in finalists is first place and the second item in finalists is second place, return the finalist in third place. */

const getThirdPlace = function(finalists) {
return finalists[2];
}

console.log('testing getThirdPlace', getThirdPlace([]));


/* Create a function named compareVotes. It has two parameters, candidateA and candidateB. Both candidateA and candidateB will be objects that look like this: */

const compareVotes = function(candidateA, candiddateB) {
    const candidateAVotes = candidateA.votes;
    const candidateBVotes = candiddateB.votes;

    if (candidateAVotes > candidateBVotes) {
        return candidateA.name;
    } else {
        return candiddateB.name;
    }
}

console.log('testing compareVote', 
    compareVotes(
        { name: 'Pikachu', votes: 25 },
        { name: 'Bulbasar', votes: 24 }
    ));




/* 
Create a function named compareIds. It has two parameters, candidateA and candidateB. Both candidateA and candidateB will be objects that look like this: */

compareVotes = function(candidateA, candidateB) {
    return candidateA.voters > candidateB.votes ? candidateA.name : candidateB.name;
    }


/*
Practice 09
Create a function named compareAlphabetically. It has two parameters, wordA and wordB, which will be strings. Compare wordA and wordB and determine which one comes first alphabetically. Follow these rules:

Assume all characters in both words use the English alphabet
Order uppercase letters before lowercase letters
Return wordA if wordA comes first alphabetically. Return wordB if wordB comes first. Return either wordA or wordB if they are identical strings. */

const comparedAlphabetically = function(wordA, wordB) {
    return wordA < wordB ? wordA : wordB;
}


/* Create a function named compareValues. It has two parameters, a and b, which will be numbers. Compare a against b. If a is less than b, return -1. If a is equal to b, return 0. If a is greater than b, return 1. */

const compareValues = function() {

}