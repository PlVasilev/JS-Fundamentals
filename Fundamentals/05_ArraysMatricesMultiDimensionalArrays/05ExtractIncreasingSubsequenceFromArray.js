function ExtracIncreasingSubsequenceFromArray(arr) {
    //console.log(arr.filter((a, b) => b <= a).join('\n'));
    let num = arr[0];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
         let curNum = arr[i];
         if (curNum >= num) {
             result.push(arr[i]);
             num = curNum;
         }
    }
    console.log(result.join('\n'));
}
ExtracIncreasingSubsequenceFromArray([1,3,8,4,10,12,3,2,24]);