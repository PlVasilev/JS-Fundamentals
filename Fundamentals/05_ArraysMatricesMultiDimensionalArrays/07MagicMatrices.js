function magicMatrices(matrix) {
    let magicMtrix = true;
    let rowSum = 0;
    let currentRow = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            currentRow += matrix[i][j];
        }
        if (i === 0) rowSum = currentRow;
        else if (rowSum !== currentRow) {
            magicMtrix = false; break;
        }
        currentRow = 0;
    }
    console.log(magicMtrix);
}
magicMatrices([[4, 5, 6],
               [6, 5, 4],
               [5, 5, 5]]);
magicMatrices([ [11, 32, 45], 
                [21, 0, 1],
                [21, 1, 1]]);