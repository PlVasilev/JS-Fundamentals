function lostintheMountains(keyword,text) {
 //   let eastRegex = /(east).*?([0-9]{2}).*?,.*?([0-9]{6})/gmi;
 //   let norhtRegex = /(north).*?([0-9]{2}).*?,.*?([0-9]{6})/gmi;
 //   let mesageRegex = new RegExp(keyword + '(.*)' + keyword,'gmi');
 //   let northarr = text.match(norhtRegex);
 //   let eastArr = text.match(eastRegex);
//
 //   if (northarr.length > 1) {
 //       let north = northarr[northarr.length-1].split(/(north).*?([0-9]{2}).*?,.*?([0-9]{6})/gmi);
 //       console.log(`${north[2]}.${north[3]} N`);
 //   }else{
 //       let north = norhtRegex.exec(text);
 //       console.log(`${north[2]}.${north[3]} N`);
 //   }
 //   if (eastArr.length > 1) {
 //       let east = eastArr[eastArr.length-1].split(/(east).*?([0-9]{2}).*?,.*?([0-9]{6})/gmi);
 //       console.log(`${east[2]}.${east[3]} E`);
 //   }else{
 //       let east = eastRegex.exec(text);
 //       console.log(`${east[2]}.${east[3]} E`);
 //   }
 //   let mesage = mesageRegex.exec(text);
 //   console.log(`Message: ${mesage[1]}`);

    let pattern = /(north|east)\D*(\d{2})[^,]*(,)\D*(\d{6})/gi;
    let messagePattern = new RegExp(`(${keyword})(.*?)(${keyword})`, 'g');
    let message = messagePattern.exec(text)[2];

    let latOutput = '';
    let longOutput = '';
    let match = pattern.exec(text);
    while (match) {
        if (match[1].toLowerCase() === 'north') {
            latOutput = `${match[2]}.${match[4]} N`;
        } else {
            longOutput = `${match[2]}.${match[4]} E`;
        }
        match = pattern.exec(text);
    }

    console.log(latOutput);
    console.log(longOutput);
    console.log(`Message: ${message}`);


}
//lostintheMountains('<>', 'o u%&lu43t&^ftgv><nortH4276hrv756dcc,  jytbu64574655k <>ThE sanDwich is iN the refrIGErator<>yl i75evEAsTer23,lfwe 987324tlblu6b');
//lostintheMountains('4ds','eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532');
lostintheMountains('encrKey/', 'east eastnorth east29north 43,456789 ' +
    'north one east 40,000000 encrKey/To live is the rarest thing in the world. Most people exist, that is allencrKey/');
lostintheMountains('&amp',
"(&ampThe only time to eat diet food is while you're waiting for the steak to cook&amp(east)(23),(234567)	NORTH48,(((543678)");
lostintheMountains('keyword',
"keyword  let them eat cake!keywordNORTHEASTNORTH again42,north234567,dsae345East	23,432568");