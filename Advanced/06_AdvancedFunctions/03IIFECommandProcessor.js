function commandProcessor(input) {
    let commandPro = (function () {
        let result = '';
        return{
            'append': (st) => {result += st},
            'removeStart': (num) => {result = result.substring(num)},
            'removeEnd': (num) => {result = result.substring(0,result.length - num)},
            'print': () => {console.log(result)}
        }
    })();

    for (const comm of input) {
        let[command,item]= comm.split(' ');
        commandPro[command](item);
    }

}
commandProcessor(['append 123',
    'append 45',
    'removeStart 2',
    'removeEnd 1',
    'print']);