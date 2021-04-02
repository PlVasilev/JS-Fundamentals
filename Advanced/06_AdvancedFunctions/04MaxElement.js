function mexElement(arr) {
   // return Math.max(...arr)
    return Math.max.apply("no matter",arr)
}
mexElement([1, 44, 123, 33])