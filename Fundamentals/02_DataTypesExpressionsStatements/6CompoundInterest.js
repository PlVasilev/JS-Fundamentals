function compoundInterest(input) {
    let P = input[0];
    let i = input[1]/100;
    let n = 12/input[2];
    let t = input[3];
    let accumulatedValue = P*(Math.pow(1 + i/n,n*t));
    console.log(accumulatedValue);
}
compoundInterest([1500, 4.3, 3, 6])
//•	P is the principal sum
//•	i is the nominal interest rate
//•	n is the compounding frequency
//•	t is the overall length of time the interest is applied
