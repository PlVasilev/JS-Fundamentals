function cars(input) {
    let commandProcessor = (function () {
        let result = {};
        function create(arr) {
            let name = arr[0];
            if (arr.length > 2){
                let inheritName = arr[2];
                result[name] = Object.create(result[inheritName])
            } else {
                result[name] = {}
            }
        }
        function set(arr) {
            let objName = arr[0];
            let key = arr[1];
            let value = arr[2];
            result[objName][key] = value;
        }
        function print(arr) {
            let output = [];
            let name = arr[0];
            for (const key  in result[arr[0]]) {
                output.push(key + ":" + result[name][key])
            }
           console.log(output.join(', '))
        }
      return{create,set,print}
    }());
    for (const inputElement of input) {
        let tokens = inputElement.split(' ');
        let command = tokens.shift();
        commandProcessor[command](tokens)
    }
}
cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);