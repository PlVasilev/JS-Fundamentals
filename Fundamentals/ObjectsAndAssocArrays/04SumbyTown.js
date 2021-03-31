function sumbyTown(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i+=2) {
        let [town,income] = [arr[i],Number(arr[i+1])];
        if (result.hasOwnProperty(town)){
            result[town] += income;
        } else {
            result[town] = income;
        }
    }
    console.log(JSON.stringify(result))
}
sumbyTown(['Sofia','20','Varna','3','Sofia','5','Varna','4']);