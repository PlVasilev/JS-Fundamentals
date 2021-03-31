function solve(arr) {
       let nums = arr.map(Number);
       nums.sort((a, b) => a - b); // = sort in S#. nums.sort((a, b) => b - a) sort by decending
    //console.log(nums.pop())        // nums.sort((a, b) => a - b).slice(-3); // .slice отрежи го отзад вземи последните 3
    //console.log(nums.pop())        // nums.pop() вземи последния елемент
    //console.log(nums.pop())        // nums.shift() вземи първия елемент
    for (let i = 1; i <= arr.length && i<=3; i++){
        console.log(nums.pop())
    }
}
solve(['10','30','15','20','50','5']);