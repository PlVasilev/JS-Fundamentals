function validityChecker(input) {
   let x1 = input[0];
   let y1 = input[1];
   let x2 = input[2];
   let y2 = input[3];
   let distance1 = Math.sqrt((x1 - 0)**2+(y1 - 0)**2);
   let distance2 = Math.sqrt((x2 - 0)**2+(y2 - 0)**2);
   let distance3 = Math.sqrt((x2 - x1)**2+(y2 - y1)**2);

    distance1.toString().includes('.') ? console.log(`{${x1}, ${y1}} to {0, 0} is invalid`) : console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    distance2.toString().includes('.') ? console.log(`{${x2}, ${y2}} to {0, 0} is invalid`) : console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    distance3.toString().includes('.') ? console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`) :
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);

}
validityChecker([3, 0, 0, 4]);
validityChecker([2, 1, 1, 1]);