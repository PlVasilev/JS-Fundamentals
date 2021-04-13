function solve(arr) {
    let input = arr.map(line => JSON.parse(line));
    let towns = {}; // create empty object
    for (let entry of input){
        if(towns[entry.town] === undefined){ // like contains.key in C#
            towns[entry.town] = 0;           // adding key with value 0;
        }
        towns[entry.town] += entry.income;
    }
    let townNames = Object.keys(towns).sort(); // method who returns only the keys
    for (let name of townNames){
        console.log(`${name} -> ${towns[name]}`)
    }

}
solve([ '{"town":"Sofia","income":200}',  // за да станат стингове ги слагаме в кавички
        '{"town":"Varna","income":120}',
        '{"town":"Pleven","income":60}',
        '{"town":"Varna","income":70}',
]);