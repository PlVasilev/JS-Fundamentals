function findVariableNamesInSentences(str) {
    console.log(str.match(/\b_[A-Za-z0-9]+\b/g).map(a => a.substr(1,)).join(','));
}
findVariableNamesInSentences('__invalidVariable _evenMoreInvalidVariable_ _validVariable');