function sumAndVat(input) {
    let sum = 0;
    for(let num of input){
        sum += num;
    }
    console.log(sum);
    console.log(sum*0.2);
    console.log(sum*1.2);
}