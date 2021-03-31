function letterOcurInString(input1,input2) {
    let word = input1;
    let letter = input2;
    let counter = 0;
    for (let i=0; i<word.length; i++) {
        if (word[i] == letter){
            counter++;
        }
    }
    console.log(counter);
    
}
letterOcurInString('hello', 'l')