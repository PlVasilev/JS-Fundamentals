function sortArray(arr) {
    console.log(arr.sort().sort((a, b) => a.length - b.length).join('\n'));
}
sortArray(['Isacc','Theodor','Jack', 'Harrison','Georege']);