function solve(num) {
    let numbers = [];
    for (let i = 0; i < num.length;i++){
        let input = num[i].split(' ');
        if(input[0] == 'add'){
            numbers.push(input[1])
        }
        else if (input[0] == 'remove'){
            numbers.splice(Number(input[1]),1)
        }
    }
    for (i = 0; i< numbers.length; i++){
        console.log(numbers[i])
    }
}

solve(['add 3','add 5','remove 2','remove 0','add 7']
);