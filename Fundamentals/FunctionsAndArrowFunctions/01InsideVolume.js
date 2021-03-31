function insideVolume(point) {
    
    function ifInside(x,y,z) {
        // let x = point[0];
        // let y = point[1];
        // let z = point[2];
        let result = 'outside';
        let x1 = 10;
        let x2 = 50;
        let y1 = 20;
        let y2 = 80;
        let z1 = 15;
        let z2 = 50;
        if (x >= x1 && x <= x2){
            if (y >= y1 && y <= y2){
                if (z >= z1 && z <= z2){
                    result = 'inside';
                }
            }
        }
        console.log(result);
    }

    for (let i = 0; i < point.length; i = i + 3) {
        ifInside(point[i],point[i+1],point[i+2]);
    }
    
}
insideVolume([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43]
);