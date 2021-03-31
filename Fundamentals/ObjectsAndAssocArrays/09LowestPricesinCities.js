function powestPricesinCities(input) {
        let map = new Map();
    for (const str of input) {
        let [town,product,price] = str.split(' | ');
        if (!map.has(product)){
            map.set(product,new Map());
        }
        //else if(map.get(product).has(town)){
        //    map.get(product).set(town, price);
        //}
        map.get(product).set(town, +price);
    }
    for (const [key,value] of map) {
        let sortedTons = Array.from(value.keys())
            .sort((k1,k2) => {
             let diff = value.get(k1) - value.get(k2)     // ДОПЪЛНИТЕЛНА СОРТИРОВКА АКО СА РАВНИ
                if (diff === 0){
                    return k1.localeCompare(k2) //
                }
                return diff
            });
        console.log(`${key} -> ${value.get(sortedTons[0])} (${sortedTons[0]})`)

    }
}
powestPricesinCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);