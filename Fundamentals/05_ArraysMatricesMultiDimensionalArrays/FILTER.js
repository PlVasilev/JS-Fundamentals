function processOddNumbers(arr) { // filter - филтрира, map - филтрира и променя стойности на елемнетите които са филтрирани
    console.log(arr
        .filter((e, i) => i % 2 === 1)
        .map(a => a * 2)
        .reverse()
        .join(' '));
}
processOddNumbers([3, 0, 10, 4, 7, 3]);