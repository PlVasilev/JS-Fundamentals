class Stringer {
    constructor(innerString,innerLength){
        this.innerString = innerString;
        this.innerLength = innerLength;
    }
    decrease(num){
        this.innerLength  = this.innerLength-num;
        if (this.innerLength < 0){
            this.innerLength = 0;
        }
    }
    increase(num){
        this.innerLength  = this.innerLength+num;
        if (this.innerLength < 0){
            this.innerLength = 0;
        }
    }
    toString(){
        if (this.innerLength === 0){
            return "..."
        }else if (this.innerLength < this.innerString.length){
            return this.innerString = this.innerString.substring(0,this.innerLength) + "...";
        }else {
            return this.innerString
        }
    }

}


let s = new Stringer("Viktor", 6);
console.log(s.toString());
s.decrease(3);
console.log(s.toString());
