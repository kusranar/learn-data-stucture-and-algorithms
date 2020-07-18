// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    // return str.replace(/[^aiueo]/gi, '').split('').length;

    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;

    // let count = 0;
    // for (let char of str.toLowerCase()) {
    //     if (['a', 'i', 'u', 'e', 'o'].includes(char)) count += 1;
    // }
    // return count;
}

module.exports = vowels;
