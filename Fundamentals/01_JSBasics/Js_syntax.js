'use strict';
function sumOfNumbers() {
    let arr=[16,'d',"Ivan"];
    arr[0]=1;
    arr[10]="hello";
    console.log(`arr1=${arr[0]}`);// интерпулация вмъкване на променлива
    console.log(arr[0].toFixed(3)); // 3 numbers after decimal point
    console.log(arr[6]);
    //Use strict - to learn to write correctly
    // Math.pow = 5**5 5 on 5th :)
}
sumOfNumbers();