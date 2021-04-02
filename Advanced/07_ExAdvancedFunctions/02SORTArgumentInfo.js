function result() {
    let result = {};
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(type + ': ' + obj);
        if (!result.hasOwnProperty(type)){
            result[type]=1
        } else {
            result[type]++;
        }
    }
    Object.keys(result).sort((a, b) => result[b] - result[a]).forEach(k => console.log(`${k} = ${result[k]}`))
}
function result1() {
    let map = new Map();

    for (let arg of arguments) {
        let type = typeof(arg);
        if (!map.has(type)) {
            map.set(type, 0);
        }
        map.set(type, map.get(type)+1);
        console.log(`${type}: ${arg}`)
    }

    // console.log([...map.entries()]);

    [...map.entries()].sort((a,b) => b[1] - a[1])
        .forEach((elem) => console.log(`${elem[0]} = ${elem[1]}`))
}

result('cat', 42, function () { console.log('Hello world!'); });
result1({ name: 'bob'}, 3.333, 9.999);
result1(42, 'cat', [], undefined);