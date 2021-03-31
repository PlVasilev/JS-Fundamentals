'use strict';
function ColorfulNumbers(num) {
    console.log('<div class="chessboard">');
    let color = '';
    for (let i = 0; i < num; i++) {
        console.log("  <div>");
        i % 2 === 0 ? color = "black" : color = "white";
        for (let j = 0; j < num; j++) {
            if (color === "black") {
                console.log(`    <span class="${color}"></span>`);
                color = "white"
            }else {
                console.log(`    <span class="${color}"></span>`);
                color = "black"
            }
        }
        console.log("  </div>");
    }
    console.log("</div>");
}
ColorfulNumbers(4);