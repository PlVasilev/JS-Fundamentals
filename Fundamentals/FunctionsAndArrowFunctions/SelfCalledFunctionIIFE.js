(function (input) { // no need of name Immediately-invoked function expression IIFE
    let sum = 0;
    let sumInverce = 0;
    let concat = '';
    for (let i = 0; i < input.length; i++) {
        sum += input[i];
        sumInverce += 1/input[i];
        concat += input[i];
    }
    console.log(sum);
    console.log(sumInverce);
    console.log(concat); // all results are kept inside the function can not be accessed anymore
}([1, 2, 3])); // the function  calls itself
