function cappyJuice(input) {
    let juices = {};
    let bottles = new Map();
    for (let i = 0; i < input.length; i++) {
        const inputElement = input[i].split(' => ');
        let fruit = inputElement[0];
        let quant = +inputElement[1];
        if (!juices.hasOwnProperty(fruit)) {
            juices[fruit] = 0;
        }
        juices[fruit] += quant;
        if (juices[fruit] > 999) {
            let cuurentBot = juices[fruit] / 1000;
            if (!bottles.has(fruit)){
                bottles.set(fruit,0)
            }
            bottles.set(fruit,bottles.get(fruit) + Math.floor(cuurentBot));
            juices[fruit] = quant % 1000;
        }
    }
    for (const [k,v] of bottles) {
        console.log(`${k} => ${v}`)
    }
}
cappyJuice(['Kiwi => 234',
            'Pear => 2345',
            'Watermelon => 3456',
            'Kiwi => 4567',
            'Pear => 5678',
            'Watermelon => 6789']);