function airPollution(input,affects) {
    let sofiqMatrix = [];
    for (let i = 0; i < 5; i++) {
        let row = input[i].split(' ').map(a => Number(a));
        sofiqMatrix.push(row)
    }
    for (let i = 0; i < affects.length; i++) {
        let currentAffect = affects[i].split(' ');
        if (currentAffect[0].toLowerCase() === 'breeze' && currentAffect[1] < 5){
            sofiqMatrix[currentAffect[1]] = sofiqMatrix[currentAffect[1]].map(a =>
            a - 15);
        }
        else if (currentAffect[0].toLowerCase() === 'gale') {
            for (let j = 0; j < 5; j++) {
                sofiqMatrix[j][currentAffect[1]] -= 20
            }
        }
        else if (currentAffect[0].toLowerCase() === 'smog') {
            for (let j = 0; j < 5; j++) {
                for (let k = 0; k < 5; k++) {
                    sofiqMatrix[j][k] += +currentAffect[1];
                }
            }
        }
    }
    let polutedAreas = [];
    for (let j = 0; j < 5; j++) {
        for (let k = 0; k < 5; k++) {
            if (sofiqMatrix[j][k] >= 50){
                polutedAreas.push(`[${j}-${k}]`)
            }
        }
    }
    if (polutedAreas.length > 0){
        console.log(`Polluted areas: ${polutedAreas.join(', ')}`);
    }
    else console.log('No polluted areas');
}
airPollution([
        "5 7 22 14 4",
        "41 35 37 27 33",
        "23 28 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",
    ],
    ["breeze 1", "gale 2", "smog 100"]
);