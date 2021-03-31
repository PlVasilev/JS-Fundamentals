function autoEngineeringCompany(input) {
    let production = new Map();
    for (let i = 0; i < input.length; i++) {
        let cars = input[i].split(' | ');
        let brand = cars[0];
        let model = cars[1];
        let qwant = +cars[2];
        if (!production.has(brand)){
            production.set(brand, new Map());
        } else if (production.get(brand).has(model)){
            qwant = production.get(brand).get(model) + qwant;
        }
        production.get(brand).set(model,qwant);

    }
    for (const [brand,model] of production) {
        console.log(brand);
        for (const [modelele,qwantele] of model) {
            console.log(`###${modelele} -> ${qwantele}`);
        }
    }
}
autoEngineeringCompany(['Audi | Q7 | 1000',
                        'Audi | Q7 | 100',
                        'Audi | Q6 | 100',
                        'BMW | X5 | 1000',
                        'BMW | X6 | 100',
                        'Citroen | C4 | 123',
                        'Volga | GAZ-24 | 1000000',
                        'Lada | Niva | 1000000',
                        'Lada | Jigula | 1000000',
                        'Citroen | C4 | 22',
                        'Citroen | C5 | 10']);