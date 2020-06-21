// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // solution 1
    // return str.split('').reverse().join('');

    // solution 2
    // let reserved = '';
    // for (let character of str) {
    //     reserved = character + reserved;
    // }
    // return reserved;

    // solution 3
    return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
