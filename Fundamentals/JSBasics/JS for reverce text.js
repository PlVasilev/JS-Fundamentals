function solve([nums]) {
    nums = Number(nums);
    for (let i = 1 ; i <= nums; i++){
        let numberAsString = ''+ i; // превръща по този начин число в стринг
        if(numberAsString === [...numberAsString].reverse().join('')){ //[...something] превръща numberAsString в масив
        console.log(i)
        }
    }
}
solve(['750'])