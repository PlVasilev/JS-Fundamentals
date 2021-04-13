function multiplicationTable(num){
    console.log("<table border=\"1\">");
    let row = '';
    for (let i = 0; i <= num; i++) { //  console.log(new Array(i+1).join('$'))
        for (let j = 1; j <= num; j++) {
            if (i === 0)  row += `<th>${j}</th>`;
            else{
                row += `<td>${j*i}</td>`
            }
        }
       if (i === 0) {console.log(`<tr><th>x</th>${row}</tr>`);}
       else{
           console.log(`<tr><th>${i}</th>${row}</tr>`);
       }
        row = '';
    }
    console.log("</table>")
}
multiplicationTable(4);