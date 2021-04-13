function splitAString(str) {
   let strArrFirst = str.split(' ').map(a => a[0].toUpperCase());
   let strArrRest = str.split(' ').map(a => a.substr(1,).toLowerCase());
   let result = [];
    for (let i = 0; i < strArrRest.length; i++) {
        result.push(strArrFirst[i]+strArrRest[i])
    }
    console.log(result.join(' '));

}
splitAString('Was that Easy? tRY thIs onE for SiZe!');