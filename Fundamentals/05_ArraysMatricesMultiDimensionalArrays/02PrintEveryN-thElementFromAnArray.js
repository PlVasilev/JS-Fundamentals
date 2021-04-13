function PrinteveryNthElementfromanArray(input){
    for (let i = 0; i < input.length - 1; i = i + Number(input[input.length-1])) {
        console.log(input[i])
    }
}
PrinteveryNthElementfromanArray()