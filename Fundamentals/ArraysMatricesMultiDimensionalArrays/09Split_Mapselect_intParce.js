function diagonalAttack(arr) {
    let matrix = [];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i].split(' ').map(Number); /////
        matrix.push(element)
    }

    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (i === j) {
                sum1 +=matrix[i][j];
            }
        }
        sum2 += matrix[i][matrix[i].length -1 - i]
    }
    if (sum1 === sum2) {
        let matrixResult = [];
        for (let i = 0; i < arr.length; i++) {
            let result = [];
            for (let j = 0; j < arr.length; j++) {
                if (i === j || j === arr.length-i-1) result.push(matrix[i][j]);
                else result.push(sum1);
            }
            matrixResult.push(result);
        }
        console.log(matrixResult.map(row => row.join(' ')).join('\n'))

    }else console.log(matrix.map(row => row.join(' ')).join('\n'))


}
diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);
diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0']
);