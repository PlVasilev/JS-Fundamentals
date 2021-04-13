function f(num) { // Rename shift F6
    let result = [];
    for (let i = 0; i < num.length; i++) {
        if (num[i]<0){
            result.unshift(num[i]);
        } else {
            result.push(num[i])
        }
    }
    console.log(result.join('\n'))
}
f([3, -2, 0, -1]);