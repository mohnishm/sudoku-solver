function emptyCells(board) {
    let empty = [];
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === 0) {
                let boxRow = 3* Math.floor( i/3);
                let boxCol = 3* Math.floor( j/3);
                empty.push([i,j, boxRow, boxCol]);
            }
        }
    }
    return empty;
}

function isUnique(board, empty, value) {
    let row, col;

    // test row
    row = board[empty[0]];
    for(col = 0; col < 9; col++) {
        if( value == row[col]) {
            return false;
        }
    }
    // test col
    col = empty[1];
    for(let row = 0; row < 9; row++) {
        if( value == board[row][col]){
            return false;
        }	
    }
    // test box
    let boxRow = empty[2];
    let boxCol = empty[3];
    for(let i = 3; i > 0; i--) {
        row = board[ boxRow++];
        for(let j = 3; j > 0; j--) {
            if( row[boxCol + j] == value) {
                return false;
            }
        }
    }
    return true;
}

let solve = (board) => {
    return new Promise((resolve, reject) => {
        try {
            let empty = emptyCells(board);

            for (let i = 0; i < empty.length;) { 
                let row = empty[i][0]; 
                let column = empty[i][1]; 
                let value = board[row][column] + 1;   
                let cell = empty[i];

                while (value <= 9) { 
                    if( isUnique( board, cell, value)) {
                        board[row][column] = value; 
                        i++; 
                        continue;
                    }
                    value++;  
                }

                board[row][column] = 0;
                if( i == 0) {  
                    return null;
                }
                i--; 
            }
            resolve(board);
        } catch(error) {
            reject(error);
        }
    });
}

module.exports = solve;