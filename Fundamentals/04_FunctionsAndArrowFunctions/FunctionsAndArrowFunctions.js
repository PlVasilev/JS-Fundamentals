function palindrome() { //arguments - ако е празен Input се ползва arguments за обработка на input който не е деклариран
                        // arguments = ana в момента
                        // arguments винаги е масив
    let palindrome = true;
    for (let i = 0; i < arguments[0].length/2; i++) {
        if (arguments[0][i] !== arguments[0][arguments[0].length-1-i]) {
            palindrome = false;
            break;
        }
    }
    console.log(palindrome);
}
palindrome('anka');