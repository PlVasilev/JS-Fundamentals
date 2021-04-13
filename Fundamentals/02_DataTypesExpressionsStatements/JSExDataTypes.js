function distanceBetweenTwoPointsin3D(v) {
    let x1 = v[0];
    let y1 = v[1];
    let z1 = v[2];
    let x2 = v[3];
    let y2 = v[4];
    let z2 = v[5];
    let distance = Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2)+Math.pow(z1-z2,2))
    console.log(distance);
}