function ancientVSMemory(input) {
        let arr = input.join(' ').split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '32656' && arr[i+1] === '19759' && arr[i+2] === '32763'
        && arr[i+3] === '0' && arr[i+5] === '0') {
            let size = Number(arr[i + 4]);
            let copy = arr.slice(i + 6, i + 6 + size); // slice взима част от стринга без да променя оргинала
            console.log(copy.map(st => String.fromCharCode(st)).join('')); // Numbers to ASKII table code числа към симвули
        }
    }

}
ancientVSMemory(['0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0',
                '5 0 71 111 115 104 111 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 4 0',
                '75 105 114 111 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 8 0 86 101',
                '114 111 110 105 107 97 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0']);