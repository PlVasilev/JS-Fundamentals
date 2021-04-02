function printDeckOfCards(arr) {
    function makeCard(face, suit) {
        const validCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        };
        if (validCards.indexOf(face) < 0 || !validSuits.hasOwnProperty(suit)) {// if indexOf < 0 there is no card like this
            throw new Error("Invalid card or suit!") // ERROR ENDS THE FUNCTION no need of return
        }
        return {
            toString: function () {
                return face + validSuits[suit];
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
            let end = arr[i].length - 1;
            let card = arr[i].substring(0, end);
            let suit = arr[i][end];
            try {
                arr[i] = makeCard(card, suit)
            } catch (e) {
                console.log("Invalid card: " + arr[i])
                return
            }
    }
    console.log(arr.join(' '))

}
printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);