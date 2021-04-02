function solve() {
    class Melon{
        constructor(weight,melonSort){
            if (new.target === Melon){
                throw new TypeError("Abstract class cannot be instantiated directly");
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }
    }
    class Watermelon extends Melon{
        constructor(weight,melonSort) {
            super(weight, melonSort);
        }
        get elementIndex() {
                return this.weight * this.melonSort.length;
        }
        toString(){
            //console.log(`Element: Water\n` + `Sort: ${this.melonSort}\n` + `Element Index: ${this.elementIndex}`);
            return `Element: Water\n` + `Sort: ${this.melonSort}\n` + `Element Index: ${this.elementIndex}`;
        }

    }
    class Firemelon extends Melon{
        constructor(weight,melonSort) {
            super(weight, melonSort);
        }
        get elementIndex() {
            return this.weight * this.melonSort.length;
        }
        toString(){
            //console.log(`Element: Water\n` + `Sort: ${this.melonSort}\n` + `Element Index: ${this.elementIndex}`);
            return `Element: Fire\n` + `Sort: ${this.melonSort}\n` + `Element Index: ${this.elementIndex}`;
        }

    }
    class Earthmelon extends Melon{
        constructor(weight,melonSort) {
            super(weight, melonSort);
        }
        get elementIndex() {
            return this.weight * this.melonSort.length;
        }
        toString(){
            //console.log(`Element: Water\n` + `Sort: ${this.melonSort}\n` + `Element Index: ${this.elementIndex}`);
            return `Element: Earth\n` + `Sort: ${this.melonSort}\n` + `Element Index: ${this.elementIndex}`;
        }

    }
    class Airmelon extends Melon{
        constructor(weight,melonSort) {
            super(weight, melonSort);
        }
        get elementIndex() {
            return this.weight * this.melonSort.length;
        }
        toString(){
            //console.log(`Element: Water\n` + `Sort: ${this.melonSort}\n` + `Element Index: ${this.elementIndex}`);
            return `Element: Air\n` + `Sort: ${this.melonSort}\n` + `Element Index: ${this.elementIndex}`;
        }

    }
    class Melolemonmelon extends Watermelon{
        constructor(weight,melonSort) {
            super(weight, melonSort);
            this.element = 'Water';
        }
        get elementIndex() {
            return this.weight * this.melonSort.length;
        }
        toString(){
            //console.log(`Element: Water\n` + `Sort: ${this.melonSort}\n` + `Element Index: ${this.elementIndex}`);
            return `Element: ${this.element}\n` + `Sort: ${this.melonSort}\n` + `Element Index: ${this.elementIndex}`;
        }
        morph(){
            if (this.element === 'Water') return this.element = 'Fire';
            else if (this.element === 'Fire') return this.element = 'Earth';
            else if (this.element === 'Earth') return this.element = 'Air';
            else if (this.element === 'Air') return this.element = 'Water';
        }

    }

    return{Melon, Watermelon,Firemelon, Earthmelon,Airmelon,Melolemonmelon}

}
let result = solve();
let WM = result.Watermelon;
let wm = new WM(10,'aa');
console.log(wm);
console.log(wm.elementIndex);
wm.toString();
//, Melolemonmelon