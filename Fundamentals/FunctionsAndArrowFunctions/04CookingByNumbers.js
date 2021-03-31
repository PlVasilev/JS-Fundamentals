function cookingByNumbers(input) {
    let number = parseFloat(input[0]);
    for (let i = 1; i < input.length; i++) {
        switch (input[i]){
            case 'dice': number = (Math.sqrt(number)); break;
            case 'chop': number =(number/2); break;
            case 'spice': number = (++number); break;
            case 'bake': number = (number*3); break;
            case 'fillet': number = (number*0.8); break;
        }
        console.log(number);
    }
}
cookingByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);