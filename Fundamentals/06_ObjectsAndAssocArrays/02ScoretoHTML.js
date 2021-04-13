function scoretoHTML(str) {
    let arr = JSON.parse(str);
    let result = '<table>\n  <tr>';
    for (const keys in arr[0]) {
         result+=`<th>${keys}</th>`
    }
    result+='</tr>\n';
    for (const obj of arr) {
        result+=`  <tr><td>${htmlEscape(obj['name'])}</td><td>${htmlEscape(obj['score'] + '')}</td></tr>\n`
    }
    console.log(result + '</table>');

    function htmlEscape(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}
scoretoHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');