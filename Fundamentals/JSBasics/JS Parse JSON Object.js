function solve(num) {
    for (i = 0; i < num.length ; i++){ //itar //iter //in index // of elements
        let obj = num[i];
        let str = JSON.parse(obj)
        console.log(`Name: ${str.name}`)
        console.log(`Age: ${str.age}`)
        console.log(`Date: ${str.date}`)
    }
}

solve(['{"name":"Gosho","age":10,"date":"19/06/2005"}','{"name":"Tosho","age":11,"date":"04/04/2005"}']
);