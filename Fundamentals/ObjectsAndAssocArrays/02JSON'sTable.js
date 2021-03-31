function JSONsTable(input) {
    console.log('<table>');
    for (let i = 0; i < input.length; i++) {
        let arr = JSON.parse(input[i]);
        console.log(`    <tr>\n        <td>${htmlEscape(arr['name'])}</td>\n        <td>${htmlEscape(arr['position'])}</td>\n        <td>${htmlEscape(arr['salary'] + '')}</td>\n    <tr>`);
    }
    console.log('</table>');
    function htmlEscape(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}
JSONsTable(['{"name":"Pesho","position":"Promenliva","salary":100000}'
    ,'{"name":"Teo","position":"Lecturer","salary":1000}'
    ,'{"name":"Georgi","position":"Lecturer","salary":1000}']);