function countWordswithMaps(input) {
    let map = new Map();
    input.join(' ').toLowerCase().split(/[^\w]+/).
    filter(a => a !== '').
    forEach( word => {
        if (!map.has(word)) {
            map.set(word,0);}
        map.set(word, map.get(word) + 1);
    });
    let sortedKeys = Array.from(map.keys()).sort(); // сортиране в отделна променлива kvp in S# arr to print

    for (const value of sortedKeys) {
        console.log(`'${value}' -> ${map.get(value)} times`);
    }
}
countWordswithMaps(['Far too slow, you\'re far too slow.'])