function firstAndLastKNumbers(arr) {
        console.log(arr.slice(1,arr[0]+1).join(' ')); // slice реже но не променя основния масив
        console.log(arr.slice(arr.length-arr[0],arr.length).join(' ')) // splice реже и променя основния масив
}
firstAndLastKNumbers([3, 6, 7, 8, 9]);