function f8(input) {
    let map = new Map();
    for (const value of input) {
        let [town,product,quantity,price] = value.split(/ -> | : /gm);
        if (!map.has(town)) {
            map.set(town, new Map()) // правим като value нов map в който ще сетваме продуктите и стойността
        }
        map.get(town).set(product, Number(quantity) * Number(price))
    }
    for (const [key,value] of map) {
        console.log(`Town - ${key}`)
        for (const [k,v] of value) { // key value of the map value
            console.log(`$$$${k} : ${v}`)
        }
    }
}
f8(['Sofia -> Laptops HP -> 200 : 2000',
            'Sofia -> Raspberry -> 200000 : 1500',
            'Sofia -> Audi Q7 -> 200 : 100000',
            'Montana -> Portokals -> 200000 : 1',
            'Montana -> Qgodas -> 20000 : 0.2',
            'Montana -> Chereshas -> 1000 : 0.3',]);