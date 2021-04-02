(function solve() {
    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)){
          //  console.log(''+this);
            return ''+this
        } else {
           // console.log(str + this);
            return str + this
        }
    };
    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)){
           // console.log(''+this);
            return ''+this
        } else {
           // console.log(this + str);
            return this + str
        }
    };
    String.prototype.truncate = function (str) {
        let originalLenght = this.length;
       let newString = this.slice(0, Number(str-3));
        if (newString.length + 3 >= originalLenght){
          // console.log(this.toString());
           return this.toString()
       } else {
           if (Number(str) < 4){
               //console.log('.'.repeat(Number(str)));
               return '.'.repeat(Number(str))
           }
           else if (newString.endsWith(' ')){
               //console.log(newString.trim() + '...');
               return newString.trim() + '...'
           } else {
               let originalString = this.toString();
               if (originalString[Number(str)-3] === ' '){
                   //console.log(newString + '...');
                   return newString.trim() + '...'
               } else {
                   let newstringArr = newString.split(' ');
                   let result = [];
                   for (let i = 0; i < newstringArr.length - 1; i++) {
                       result.push(newstringArr[i])
                   }
                  // console.log(result.join(' ') + '...');
                  return result.join(' ') + '...';
               }

           }
       }
    };
    String.prototype.isEmpty = function () {
        if (this.length < 1){
           // console.log(true);
            return true
        } else {
           // console.log(false);
            return false
        }
    };
    String.format = function (string, ...params) {
        for(let i=0; i<params.length; i++){
            let index = string.indexOf("{"+i+"}");
            while (index != -1) {
                string = string.replace("{"+i+"}", params[i]);
                index = string.indexOf("{"+i+"}");
            }
        }
        return string;

    }
})();


let str = 'the quick brown fox jumps over the lazy dog';
str.ensureStart('my');
str.ensureStart('hello ');
str.ensureEnd('string');
str.ensureEnd(' fails');
str.isEmpty();
str.truncate(10);
str.truncate(25);
str.truncate(43);
str.truncate(45);
str.truncate(6);
str.truncate(12);
str.isEmpty();
String.format('The {0} {1} fox', 'quick', 'brown');
String.format('jumps {0} {1}','dog');
