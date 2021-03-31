function findOccurrencesofWordinSentence(str, word) {
    let matchWord = word;
    let matchStr = str;
   // let count = 0;
   // let index = matchStr.indexOf(matchWord);//
   // while (index > -1){
   //     count++;
   //     index = matchStr.indexOf(matchWord, index + 1);
   // }
   // console.log(count);
    let regex = new RegExp(`\\b${matchWord}\\b`,'igm');
    let result = matchStr.match(regex);
    if(result)console.log(result.length);
    else console.log(0);
}
findOccurrencesofWordinSentence('Hw do you plan on achieving that? ow? Hw can you even think of that?','how')