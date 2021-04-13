'use strict';
function binaryLog(num) {
    for ( let x of num){
        console.log(Math.log2(x));
    }
}
binaryLog([1024,256])