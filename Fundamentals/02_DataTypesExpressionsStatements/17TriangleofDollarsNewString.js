function triangleofDollars(num) {
    for (let i = 1; i <= num; i++) {
        console.log(new Array(i+1).join('$'))
    }
}
triangleofDollars(5)