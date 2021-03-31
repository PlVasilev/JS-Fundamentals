function figureof4Squares(num) {
    let rows = num;
    if (num % 2 === 0){
        rows = num - 1;
    }
    for (let i = 1; i <= rows; i++) {
        if (i/num === 1/num) {
            console.log(`+${'-'.repeat(num-2)}+${'-'.repeat(num-2)}+`)
        }else if (i/rows === rows/rows) {
            console.log(`+${'-'.repeat(num-2)}+${'-'.repeat(num-2)}+`)
        }else if ((rows+1)/2 === i) {
            console.log(`+${'-'.repeat(num-2)}+${'-'.repeat(num-2)}+`)

        }else {
            console.log(`|${' '.repeat(num-2)}|${' '.repeat(num-2)}|`)
        }

    }
}
figureof4Squares(5);
figureof4Squares(6);
