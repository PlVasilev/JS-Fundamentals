function modifyAverage(num) {
    let sum = 0;
    let numAsText = num + '';
    for (let i = 0; i < numAsText.length; i++) {
        sum += parseInt(numAsText[i]) ;
    }
    if (sum/numAsText.length > 5){
        console.log(num);
    } else {
        numAsText +='9';
        modifyAverage(numAsText);
    }
}
modifyAverage(101);
modifyAverage(5835);