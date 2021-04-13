function bitcoinMining(input) {
    let days = 0;
    let availableMoney = 0;
    let dayBouthFirstBC = 0;
    let bitcoinsBouth = 0;
    for (let i = 1; i <= input.length; i++) {
        days++;
        if (i % 3 === 0){
            availableMoney += 67.51 * Number(input[i-1]) * 0.7;
        } else {
            availableMoney += 67.51 * Number(input[i-1]);
        }
        if (availableMoney >= 11949.16) {
            bitcoinsBouth += Math.floor(availableMoney/11949.16);
            availableMoney = availableMoney % 11949.16;
            if (dayBouthFirstBC === 0) 
            dayBouthFirstBC = days;
        }
    }
    console.log(`Bought bitcoins: ${bitcoinsBouth}`);
    if (bitcoinsBouth !== 0) console.log(`Day of the first purchased bitcoin: ${dayBouthFirstBC}`);
    console.log(`Left money: ${availableMoney.toFixed(2)} lv.`);
}
bitcoinMining(['3124.15', '504.212', '2511.124']);