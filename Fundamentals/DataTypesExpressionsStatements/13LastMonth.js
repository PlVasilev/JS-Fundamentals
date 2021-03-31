function lastMonth(date) {
    let year = date[2];
    let february = 28;
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
        february = 29;
    }
    switch (date[1]) {
        case 3: console.log(february); break;
        case 1:
        case 2:
        case 4:
        case 6:
        case 8:
        case 9:
        case 11:console.log(31); break;
        case 5:
        case 7:
        case 10:
        case 12:console.log(30); break;
    }
}
lastMonth([17, 3, 2002])