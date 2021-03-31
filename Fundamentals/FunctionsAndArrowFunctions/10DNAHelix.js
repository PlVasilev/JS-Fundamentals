function DNAHelix(num) {
    let a = 'A';
    let b = 'T';
    for (let i = 1; i <= num; i+=4) {
        if(num-i  >= 0) {
            console.log(`**${a}${b}**`);
            if (a === 'A' && b === 'T'){a = 'C';b = 'G';}
            else if (a === 'C' && b === 'G'){a = 'T';b = 'T';}
            else if (a === 'T' && b === 'T'){a = 'A';b = 'G';}
            else if (a === 'A' && b === 'G'){a = 'G';b = 'G';}
            else {a = 'A';b = 'T';}
        }
        if(num-(i+1) >= 0) {
            console.log(`*${a}--${b}*`);
            if (a === 'A' && b === 'T'){a = 'C';b = 'G';}
            else if (a === 'C' && b === 'G'){a = 'T';b = 'T';}
            else if (a === 'T' && b === 'T'){a = 'A';b = 'G';}
            else if (a === 'A' && b === 'G'){a = 'G';b = 'G';}
            else {a = 'A';b = 'T';}
        }
        if(num-(i+2) >= 0) {
            console.log(`${a}----${b}`);
            if (a === 'A' && b === 'T'){a = 'C';b = 'G';}
            else if (a === 'C' && b === 'G'){a = 'T';b = 'T';}
            else if (a === 'T' && b === 'T'){a = 'A';b = 'G';}
            else if (a === 'A' && b === 'G'){a = 'G';b = 'G';}
            else {a = 'A';b = 'T';}
        }
        if(num-(i+3) >= 0) {
            console.log(`*${a}--${b}*`);
            if (a === 'A' && b === 'T'){a = 'C';b = 'G';}
            else if (a === 'C' && b === 'G'){a = 'T';b = 'T';}
            else if (a === 'T' && b === 'T'){a = 'A';b = 'G';}
            else if (a === 'A' && b === 'G'){a = 'G';b = 'G';}
            else {a = 'A';b = 'T';}
        }


    }
}

DNAHelix(10);