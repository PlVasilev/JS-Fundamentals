function NAME_CYCLEDiagonalSums(matrix) {
    let sum1 = 0;
    let sum2 = 0;
    //loop: // name of cicle
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (i === j) {
                sum1 +=matrix[i][j];
                //break loop; // break loop named cycle;
            }
        }
        sum2 += matrix[i][matrix[i].length -1 - i]
    }
    let result = [];
    result.push(sum1);
    result.push(sum2);
    console.log(result.join(' '));
}
NAME_CYCLEDiagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);