/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const seen = new Set();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            // Single
            if (board[i][j] !== '.') {
                const rowKey = `row${i}${board[i][j]}`;
                const colKey = `column${j}${board[i][j]}`;
                const boxKey = `box${Math.floor(i / 3) * 3 + Math.floor(j / 3)}${board[i][j]}`;

                if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
                    return false;
                }

                seen.add(rowKey);
                seen.add(colKey);
                seen.add(boxKey);
            }
        }
    }
    return true;

};