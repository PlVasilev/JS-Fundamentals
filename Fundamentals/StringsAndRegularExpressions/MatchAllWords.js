function matchAllWords(text) {
    console.log(text.match(/\w+/g).join('|')); // g - at the end to get all matches the text "global"
}
matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');