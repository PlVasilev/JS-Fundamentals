function findANUmber(input) {
    let text = '';
    for (let i = 0; i < input.length; i++) {
        text += input[i];
    }
    let numbers = text.match(/\d+/g);
    console.log(numbers.join(' '));
}
findANUmber(['Let’s go11!!!11!', 'Okey!1!]']);