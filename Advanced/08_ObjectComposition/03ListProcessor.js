function listProcessor(input) {
    let commandExecutor = (function () {
        let resultArr = [];
        function add(str) {
            resultArr.push(str)
        }
        function remove(str) {
            resultArr = resultArr.filter(el => el !== str)
        }
        function print() {
            console.log(resultArr.join(','))
        }
        return{add, remove, print}
    }());
    for (const element of input) {
        let [command,value] = element.split(' '); // 0 comand 1 value
        commandExecutor[command](value);
    }
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);