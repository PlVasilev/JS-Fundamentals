function rounding(input) {
    let number = input[0];
    let precision = input[1];

    let factor = Math.pow(10, precision);
    console.log(Math.round(number * factor) / factor);
}


rounding([10.5, 3]);
rounding([3.1415926535897932384626433832795, 2]);