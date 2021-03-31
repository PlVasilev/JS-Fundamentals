function expedition(primery,secondery,ovreley,start){
    for (let i = 0; i < ovreley.length; i++) {
        let primeryX = ovreley[i][0];
        let primeryY = ovreley[i][1];
        let x = 0;
        for (let j = primeryX; j < Math.min(primeryX + secondery.length, primery.length) ; j++) {
            let y = 0;
            for (let k = primeryY; k < primeryY + secondery[0].length; k++) {
                if (secondery[x][y] === 1){
                   if (primery[j][k] === 1) primery[j][k] = 0;
                   else primery[j][k] = 1;
                }
                y++;
            }
            x++;
        }
    }
    let x = start[0];
    let y = start[1];
    let steps = 1;
    let rotations = 1;
    let up = true;
    let down = true;
    let right = true;
    let left = true;
    let finalX = 0;
    let finalY = 0;
    while (rotations === steps){
        if (primery[x+1] && primery[x][y] === primery[x+1][y] && down === true ) {
           x = x + 1;
           steps++;
           up = false;
            down = true;
            right = true;
            left = true;

        }else if (primery[x-1] && primery[x][y] === primery[x-1][y] && up === true) {
            x = x - 1;
            steps++;
            up = true;
            down = false;
            right = true;
            left = true;
        }else if (primery[x][y] === primery[x][y+1] && right === true) {
            y = y + 1;
            steps++;
            up = true;
            down = true;
            right = true;
            left = false;
        }else if ( primery[x][y] === primery[x][y-1] && left === true) {
            y = y - 1;
            steps++;
            up = true;
            down = true;
            right = false;
            left = true;
        }
        finalX = x;
        finalY = y;
        rotations++;
    }
     if (finalX === 0){
         console.log(steps);
         console.log("Top");
     }else if (finalX === primery.length - 1){
         console.log(steps);
         console.log("Bottom");
    } else if (finalY === 0){
         console.log(steps);
         console.log("Left");
    }else if (finalY === primery[0].length - 1){
         console.log(steps);
         console.log("Right");
    }else {
         console.log(steps);
         let quadrant = 0;
         if (finalX + 1 <= primery.length/2 && finalY + 1 <= primery[0].length/2) quadrant = 2;
         else if (finalX + 1 <= primery.length/2 && finalY + 1 > primery[0].length/2) quadrant = 1;
         else if (finalX + 1 > primery.length/2 && finalY + 1 <= primery[0].length/2) quadrant = 3;
         else if (finalX + 1 > primery.length/2 && finalY + 1 > primery[0].length/2) quadrant = 4;
             console.log(`Dead end ${quadrant}`);

     }
}
expedition([[1, 1, 0, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 0, 1],
            [0, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 1, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0]],
        [[0, 1, 1],
        [0, 1, 0],
        [1, 1, 0]],
        [[1, 1],
        [2, 3],
        [5, 3]],
        [0, 2]);
expedition([[1, 1, 0, 1],
        [0, 1, 1, 0],
        [0, 0, 1, 0],
        [1, 0, 1, 0]],
    [[0, 0, 1, 0, 1],
        [1, 0, 0, 1, 1],
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1]],
    [[0, 0],
        [2, 1],
        [1, 0]],
    [2, 0]
);