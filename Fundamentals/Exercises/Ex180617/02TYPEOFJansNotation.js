function jansNotation(input) {
    let arrOfnumbers = [];
    for (let i = 0; i < input.length; i++) {
        let current = input[i];
        if (typeof  current === 'number'){
            arrOfnumbers.push(current)
        } else {
            if (arrOfnumbers.length < 2){
                console.log('Error: not enough operands!');
                return;
            }
            let num2 = arrOfnumbers.pop();
            let num1 = arrOfnumbers.pop();
            switch (current){
                case '+': arrOfnumbers.push(num1+num2); break;
                case '-': arrOfnumbers.push(num1-num2); break;
                case '/': arrOfnumbers.push(num1/num2); break;
                case '*': arrOfnumbers.push(num1*num2); break;
            }
        }
    }
    if (arrOfnumbers.length>1){
        console.log('Error: too many operands!')
    }else {
        console.log(arrOfnumbers[0]);
    }

}
jansNotation([5, 3, 4, '*', '-']);
jansNotation([7, 33, 8, '-']);
jansNotation([15, '/']);
jansNotation([-1, 1, '+', 101, '*', 18, '+', 3, '/']);