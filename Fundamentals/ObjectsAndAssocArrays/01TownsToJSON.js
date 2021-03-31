function townsToJSON(input) {
    let result = [];
    for (let i = 1; i < input.length; i++) {
        let obj = {};
        let values = input[i].split(/\s*\|\s*/).filter(a => a !== '');
        obj['Town']=values[0];
        obj['Latitude']=+values[1];
        obj['Longitude']=+values[2];
        result.push(obj)
    }
    console.log(JSON.stringify(result));
}
townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);