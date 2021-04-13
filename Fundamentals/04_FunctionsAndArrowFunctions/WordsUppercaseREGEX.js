
function wordsUppercase(str) {
        console.log(str.split(/\W+/).filter(w => w !== '').join(', ').toUpperCase());
        let strUpper = str.toUpperCase();
        let words = extractWords();
        words = words.filter(w => w != '');
        console.log(words.join(', ')) ;
        function extractWords() { return strUpper.split(/\W+/); }
}
    wordsUppercase('Hi, how are you?');