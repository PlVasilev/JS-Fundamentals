function solve(num) {
    let person ={};
    for (i = 0; i < num.length ; i++){ //itar //iter //in index // of elements //.fill(0) filling arr with zeros
        let current = num[i].split(' -> '); // tofixed(2) :f2 in C#
        if(isNaN(current[1]))
        person[`${current[0]}`]= current[1];
        else  person[`${current[0]}`]=Number(current[1]);
    }
    let str = JSON.stringify(person)
    console.log(str)
}
solve(['name -> Angel','surname -> Georgiev','age -> 20','grade -> 6.00','date -> 23/05/1995','town -> Sofia']
);