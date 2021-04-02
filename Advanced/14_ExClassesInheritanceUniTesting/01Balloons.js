function soleve() {
    class Balloon{
        constructor(color,gasWeight){
            this.color =color;
            this.gasWeight = gasWeight;
        }
    }
    class PartyBalloon extends Balloon{

        constructor(color,gasWeight,ribbonColor, ribbonLeght){
            super();
            this.color =color;
            this.gasWeight = gasWeight;
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLeght
            }
        }
        get ribbon() {
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon{
        constructor(color,gasWeight,ribbonColor, ribbonLeght,text){
            super();
            this.color =color;
            this.gasWeight = gasWeight;
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLeght
            }
            this._text = text;
        }

        get text() {
            return this._text;
        }
    }

    return{
        Balloon: Balloon,
        PartyBalloon: PartyBalloon,
        BirthdayBalloon: BirthdayBalloon

    }
    
}
