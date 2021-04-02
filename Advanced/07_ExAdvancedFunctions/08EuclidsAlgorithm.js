function euclidsAlgorithm(firstNumber, secondNumber) {
    while (firstNumber != secondNumber)
    {
        if (firstNumber > secondNumber) {
            firstNumber -= secondNumber;
        } else {
            secondNumber -= firstNumber;
        }
    }
    console.log(firstNumber);
    return firstNumber;
}
euclidsAlgorithm(105,232);