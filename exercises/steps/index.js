// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
    if (n === row) return;

    if (n === stair.length) {
        return steps(n, row + 1);
    }

    stair.length <= row ? stair += '#' : stair += ' ';

    steps(n, row, stair);


    // if (n === row) return;
    // let result = '';
    // for (let i = 0; i < n; i += 1) {
    //     if (i <= row) {
    //         result += '#';
    //     } else {
    //         result += ' ';
    //     }
    // }
    // console.log(result);
    // steps(n, row + 1);

    // for (let row = 1; row <= n; row += 1) {
    //     let result = '';
    //     for (let column = 1; column <= n; column += 1) {
    //         if (column <= row) {
    //             result += '#';
    //         } else {
    //             result += ' ';
    //         }
    //     }
    //     console.log(result);
    // }
}

module.exports = steps;
