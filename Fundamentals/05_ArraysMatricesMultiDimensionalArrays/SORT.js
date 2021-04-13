function SORT(arr) {
    let min = arr.sort((a,b) => a-b);
    let result = min.slice(0,2);
    console.log(result.join(' '));
}
SORT([3, -1, 10, 4, 7, 3]);