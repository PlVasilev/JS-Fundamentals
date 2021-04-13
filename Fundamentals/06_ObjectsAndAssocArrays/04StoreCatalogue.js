function storeCatalogue(input) {
        let catalogue = new Map();
    for (let i = 0; i < input.length; i++) {
        let value = input[i].split(' : ');
        let key = input[i][0];
        let item = value[0];
        let price = value[1];
        if (!catalogue.has(key)){
            catalogue.set(key, new Map());
        }
        catalogue.get(key).set(item,price)
    }
    let sortedCatalogue = Array.from(catalogue).sort();
    for (const [key,value] of sortedCatalogue) {
        let sortedProducts = Array.from(value.keys()).sort();
        console.log(key) ;
        for (let i = 0; i < sortedProducts.length; i++) {
            console.log(` ${sortedProducts[i]}: ${value.get(sortedProducts[i])} `)
        }
    }
}
storeCatalogue(['Appricot : 20.4',
                'Fridge : 1500',
                'TV : 1499',
                'Deodorant : 10',
                'Boiler : 300',
                'Apple : 1.25',
                'Anti-Bug Spray : 15',
                'T-Shirt : 10']);