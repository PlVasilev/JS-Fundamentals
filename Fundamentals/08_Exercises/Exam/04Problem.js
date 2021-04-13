function trivelTime(input) {
    let result = {};
    for (let i = 0; i < input.length; i++) {
       let [country,town1,cost] = input[i].split(' > ');
        let townArrFirst = town1.split(' ').map(a => a[0].toUpperCase());
        let townArrRest= town1.split(' ').map(a => a.substr(1,));
        let town = townArrFirst+townArrRest;
        if (!result.hasOwnProperty(country)){
           result[country] = {};
            result[country][town] = +cost;
        } else if (!result[country].hasOwnProperty(town)) {
           result[country][town] = +cost;
        } else {
           if ( result[country][town] > +cost) {
               result[country][town] = cost
           }
        }
    }
    let sortdresult = Object.keys(result).sort(function (a,b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    for (const cities of sortdresult) {
        let sortedCities = Object.keys(result[cities]).sort((a,b) => {
           let diff = result[cities][a] - result[cities][b];
           if (diff === 0) {
              return a.localeCompare(b)
           }
           return diff;
        });
        let sortedResult = `${cities} ->`;
        for (const sortedCity of sortedCities) {
            sortedResult += ` ${sortedCity} -> ${result[cities][sortedCity]}`;
        }
        console.log(sortedResult);
    }
}
//trivelTime(["Bulgaria > Sofia > 500",
//    "Bulgaria > Sopot > 800",
//    "France > Paris > 2000",
//    "Albania > Tirana > 1000",
//    "Bulgaria > Sofia > 200" ]
//);
trivelTime(['Bulgaria > Sofia > 1',
'aaa > Sofia > 10',
'aaa > sofiA > 8',
'aaa > sofiA > 5',
'aaa > sofiA > 7',
'Albania > Orgrimar > 1',
'Albania > Tirana > 25000.5',
'zz > Aarna > 25010',
'Bulgaria > Lukovit > 10']);