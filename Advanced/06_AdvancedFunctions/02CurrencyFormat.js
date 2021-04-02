//Partial Application
function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}
function getDollarFormater(currencyFormatter) {
    function formatter(value) {
       return currencyFormatter(",","$", true, value)
    }
    return formatter
}
const dollarFormatter = getDollarFormater(currencyFormatter);
let result = dollarFormatter(22.3232323232);
console.log(result);