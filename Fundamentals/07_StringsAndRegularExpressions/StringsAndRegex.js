// (a,b) => +a + +b  // плюс преди цифрата го parse-ва елемента към Number
//
//let str = arr.join('');      // обръщане на стринг
//let chars = Array.from(str); // за да обърнем стринг трябва да го превърнем в Масив
//let charsRev = chars.reverse();
//let revStr = charsRev.join('');
//console.log(revStr);

//RegEx
// /g глобал флаг за да търси в целия текст \b начало на дума
//let regex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+/g   - regex declaration let a = /ReGex/
//let regex2 = new RegExp('^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+')  - regex declaration let a = ('ReGex') dynamic може да слагаме стринг в скобите
// if (regex.test(email)) валиден и е майла
//}


// Split .split(/\W+/)  \s празно място

function f(arr0,arr1) {
  let target = arr0;
  let srt = arr1;
  let count = 0;
  let index = srt.indexOf(target);
    while (index > -1){
      count++;
      index = srt.indexOf(target, index + 1);
    }
    console.log(count);
}
f('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales,' +
' sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical ' +
'exercises to keep the animal healthy and happy.');