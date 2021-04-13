function solve() { // в Джъдж се слага функцията
    let sum = ((30 + 25) * 1/3 * (35 -14 -12));
    console.log(sum ** 2); // **2 степен 2ра;
}

function solve(arr) { //параметрите като са подадени на един ред we put (arr)
   let num1 = Number(arr[0]);
   let num2 = Number(arr[1]);
   let sum = num1 + num2;
   console.log(sum);
}

let myArr = [];
myArr.push('5');
myArr.push('3');
solve(myArr)

function solve1([num1,num2]) {
    let sum = Number(num1) + Number(num2);
    return(sum)
}
solve1(['5','3']) //same as upper

