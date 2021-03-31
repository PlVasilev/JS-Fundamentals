function solve(num) {
    let keyToPrint = '';
    let dictionariy = {};
    for (let i = 0; i < num.length;i++){
        if (i == num.length - 1){
           keyToPrint = num[num.length -1] ;
           break;
        }
        let input = num[i].split(' ');
        let key = input[0];
        let value = input[1];
        if(dictionariy[key] === undefined){
            dictionariy[key] = '';
        }
        dictionariy[key] = value;
    }
    let dictionariesToPrint = Object.keys(dictionariy).sort();
   for (let item of dictionariesToPrint){
    if(item === keyToPrint){
        console.log(dictionariy[item]);
        return;
    }
   }
   console.log('None')
}

solve(['3 test','3 test1','4 test2','4 test3','4 test5','4']
);