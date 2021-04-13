function rotateArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length-1; i++) {
       newArr.push(arr[i]);
    }
    let rotations = arr[arr.length-1] % newArr.length;
    for (let i = 0; i < rotations; i++) {
        newArr.unshift(newArr[newArr.length-1]);
        newArr.pop();
    }
    console.log(newArr.join(' '));
}
rotateArray([1,2,3,4,2]);