// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);

    // const newStringA = buildCharMap(stringA);
    // const newStringB = buildCharMap(stringB);

    // for (let char in Object.keys(newStringA).length > Object.keys(newStringB).length ? newStringA : newStringB) {
    //     if (newStringA[char] !== newStringB[char]) return false;
    // }
    // return true;
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

function buildCharMap(letter) {
    let result = {};
    for (let char of letter.replace(/[^\w]/g, "").toLowerCase()) {
        result[char] = result[char] + 1 || 1;
    }
    return result;
}

module.exports = anagrams;
