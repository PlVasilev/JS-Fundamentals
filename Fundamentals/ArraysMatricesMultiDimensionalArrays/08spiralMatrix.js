function spiralMatrix(row,col) {
    let matrix = [];
    for (let i = 0; i < row; i++) {
        let row = [];
        for (let j = 0; j < col; j++) {
            row.push(0)
        }
        matrix.push(row)
    }
    let currentRow = 0;
    let currentCol = col - 1;
    let num = 1;
    let repeat = 0;
    while (num <= row*col){
        for (let i = currentRow ; i <= currentCol ; i++) {
            matrix[currentRow][i]= num++;
        }
        currentRow++;
        for (let i = currentRow ; i <= currentCol ; i++) {
            matrix[i][currentCol ]=num++;
        }

        for (let i = currentCol - 1 ; i >= currentRow  ; i--) {
            matrix[currentCol ][i] = num++;
        }

        for (let i = currentCol ; i >= currentRow ; i--) {
            matrix[i][currentRow - 1] = num++;
        }
        currentCol--;
        repeat++;

    }
    for (let i = 0; i < row; i++) {
            console.log(matrix[i].join(' '));
    }
}
spiralMatrix(5,5);

// 1  2  3  4 5
//16 17 18 19 6
//15 24 25 20 7
//14 23 22 21 8
//13 12 11 10 9
