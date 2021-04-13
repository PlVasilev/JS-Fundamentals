function SumLastKNum(n,k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        let start = Math.max(0,i - k);
        let sum = result.slice(start,i).reduce((a,b) => a+b); // взима 2 по 2 елемнтите и прави операция с тях
        result.push(sum)                                      // като напраи операцията и с резултата от нея
    }                                                         // прави отново операцията със следващия елемент докато свършат
    console.log(result.join(' '));
}
SumLastKNum(6,2);
