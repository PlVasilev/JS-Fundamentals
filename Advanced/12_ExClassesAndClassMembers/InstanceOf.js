class Rat{
        constructor(name){
            this.name = name;
            this.unitedRats = [];
        }
        unite(otherRat){
            if (otherRat instanceof Rat) 
            this.unitedRats.push(otherRat);
        }
        getRats(){
            return this.unitedRats
        }
        toString(){
            let string =  `${this.name}\n`;
            for (const rat of this.unitedRats) {
                string+=`##${rat.name}\n`
            }
            console.log(string);
            return string
        }
    }

let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho
