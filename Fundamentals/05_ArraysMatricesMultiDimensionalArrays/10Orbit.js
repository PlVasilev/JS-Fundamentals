function orbit() {
    let width = arguments[0][0];
    let hight = arguments[0][1];
    let row = arguments[0][2];
    let col = arguments[0][3];

    let matrix = [];
    for (let i = 0; i < hight; i++) {
        let row = [];
        for (let j = 0; j < width; j++) {
            row.push(0)
        }
        matrix.push(row)
    }
    matrix[row][col]= 1;
    let num = 1;
    let nextOrbirt = 1;
    while(nextOrbirt<=width) {
        num++;
        for (let i = col - nextOrbirt; i <= col + nextOrbirt; i++) {
            if (matrix[row - nextOrbirt] && matrix[row - nextOrbirt][i] === 0) matrix[row - nextOrbirt][i] = num;
        }
        for (let i = col - nextOrbirt; i <= col + nextOrbirt; i++) {
            if (matrix[row][i] === 0) matrix[row][i] = num;
        }
        for (let i = col - nextOrbirt; i <= col + nextOrbirt; i++) {
            if (matrix[row + nextOrbirt] && matrix[row + nextOrbirt][i] === 0) matrix[row + nextOrbirt][i] = num;
        }
        nextOrbirt++
    }
    if (row === col) {
    for (let i = 0; i < width; i++) {
        let numberToFill = matrix[row][i];
        for (let j = 0; j < hight; j++) {
            if (matrix[j][i] === 0) matrix[j][i] = numberToFill;
        }
    }
    for (let i = 0; i < hight; i++) {
        console.log(matrix[i].join(' '));
        }
    }else{
        for (let i = 0; i < width; i++) {
            let numberToFill = matrix[row][i];
            for (let j = 0; j < hight; j++) {
                if (matrix[j][i] === 0) matrix[j][i] = numberToFill;
            }
        }
        for (let i = 0; i < hight; i++) {
            console.log(matrix[i].join(' '));
        }
    }
}
orbit([5, 5, 2,0]);