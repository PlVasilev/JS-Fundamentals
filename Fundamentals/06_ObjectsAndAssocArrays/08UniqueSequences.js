function uniqueSequences(input) { // 66/100
    let result = new Map();
    for (let i = 0; i < input.length; i++) {
        let currentArr = JSON.parse(input[i]);
        result.add(JSON.stringify(currentArr.sort((a,b) => b - a)));
    }
    let sortedSet = Array.from(result).sort((a,b) => a.length-b.length);
    for (const any of sortedSet) {
        let anyResult = JSON.parse(any);
           let anyToPrint = anyResult.join(', ');
            console.log(`[${anyToPrint}]`);
    }
}
function uniqueSequences(data) { // 100/100
    let arrays = new Map;
    for (let line of data) {
        let array = JSON.parse(line).map(Number).sort((a, b) => b - a);
        let toStore = `[${array.join(', ')}]`;
        if (!arrays.has(toStore))
            arrays.set(toStore, array.length);
    }

    console.log([...arrays.keys()].sort((a, b) => arrays.get(a) -arrays.get(b)).join('\n'));
}
uniqueSequences(['[-3, -2, -1, 0, 1, 2, 3, 4]',
                '[10, 1, -17, 0, 2, 13]',
                '[10, 1, -17, 0, 2, 13]',
                '[10, 1, -17, 0, 2.0, 13]',
                '[10, 1, -17, 0, 2.000, 13]',
                '[4, -3, 3, -2, 2, -1, 0, 0]']);