function gradsToDegrees(num) {
    let grads = num % 400;
    let degrees = grads * 0.9;
    let result = 0;
    degrees < 0 ? result = 360 + degrees : result = degrees;
    console.log(result);
}

gradsToDegrees(100);
gradsToDegrees(400);
gradsToDegrees(850);
gradsToDegrees(-50);