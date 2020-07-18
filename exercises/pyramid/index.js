// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, col = 0, level = '') {
    const maxCol = (n * 2 - 1);
    if (n === row) {
        return;
    }

    if (level.length === maxCol) {
        console.log(level)
        return pyramid(n, row + 1);
    }
    const midlevel = Math.floor(maxCol / 2);

    if (col >= midlevel - row && col <= midlevel + row) {
        level += '#';
    } else {
        level += ' ';
    }

    pyramid(n, row, col + 1, level);

    // let midpoint = Math.floor((2 * n - 1) / 2);
    // for (let row = 0; row < n; row += 1) {
    //     let level = '';
    //     for (let col = 0; col < n * 2 - 1; col += 1) {
    //         if (midpoint - row <= col && midpoint + row >= col) {
    //             level += '#';
    //         } else {
    //             level += ' ';
    //         }
    //     }
    //     console.log(level);
    // }

}

module.exports = pyramid;
