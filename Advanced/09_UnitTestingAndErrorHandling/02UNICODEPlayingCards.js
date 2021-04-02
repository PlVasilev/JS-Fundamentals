function makeCard(face, suit){
    let validCards=['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits={
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    };
    if (validCards.indexOf(face)<0 || !validSuits.hasOwnProperty(suit)){// if indexOf < 0 there is no card like this
        throw new Error("Invalid card or suit!") // ERROR ENDS THE FUNCTION no need of return
    }
    return{
        toString: function () {
            return face + validSuits[suit];
        }
    }
}
console.log('' + makeCard('A', 'S'));
console.log('' + makeCard('10', 'H'));
console.log('' + makeCard('1', 'C'));
console.log('' + makeCard('J', 'D'));