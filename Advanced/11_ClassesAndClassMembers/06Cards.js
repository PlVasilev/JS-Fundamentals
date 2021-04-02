let result = (function () {
    const Suits={
        'SPADES': '\u2660',
        'HEARTS': '\u2665',
        'DIAMONDS': '\u2666',
        'CLUBS': '\u2663',
    };
    const Faces=['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    class Card {
        constructor(face,suit){
            this.suit = suit;// we call the setter suit
            this.face = face;
            //Object.freeze(this)// created card CAN NOT BE CHANGED
        }
        get face(){
            return this._face
        }
        set face(f){
            if (Faces.indexOf(f) < 0 ){
                throw new Error("Invalid face!")
            }
            this._face = f;
        }
        get suit(){
            return this._suit
        }
        set suit(s){
            if (Object.values(Suits).indexOf(s) < 0){   //or .includes(s)
                throw new Error("Invalid suit!")
            }
            this._suit = s;
        }
        toString(){
            return this._face + this._suit
        }
    }
    return {Suits,Card}
})()

let Card = result.Card;
let Suits = result.Suits;

let c1 = new Card('A', Suits.CLUBS);
let c2 = new Card('Q', Suits.CLUBS);
console.log(c1.toString());
console.log(c2.toString());