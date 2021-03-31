function MATRIX(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i].reduce((a,b) => Math.max(a,b));
        result.push(min);
    }
    console.log(result.reduce((a,b) => Math.max(a,b)));
}
MATRIX([[3, 5, 7, 12],
                [-1, 4, 33, 2],
                 [8, 3, 0, 4]]);
