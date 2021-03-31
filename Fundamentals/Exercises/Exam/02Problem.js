function travenInvestigation(input) {
    let sentanses = [];
    let arguments =  input[0].split(`${input[1]}`);
    let validSentances = [];
    let inValidSentaces = [];
    for (let i = 2; i < input.length; i++) {
        sentanses.push(input[i].toLowerCase());
    }
    for (const sentans of sentanses){
        let valid = true;
        for (let i = 0; i < arguments.length; i++) {
            let word = arguments[i];
            if (!sentans.includes(word)) {
                inValidSentaces.push(sentans);
                valid = false;
                break;
            }
        }
         if (valid === true) validSentances.push(sentans)
    }
    if (validSentances.length > 0){
        console.log('ValidSentences');
        for (let i = 0; i < validSentances.length; i++) {
            console.log(`${i+1}. ${validSentances[i]}`)
        }
        if (inValidSentaces.length > 0){
            console.log('='.repeat(30));
            console.log('InvalidSentences');
            for (let i = 0; i < inValidSentaces.length; i++) {
                console.log(`${i + 1}. ${inValidSentaces[i]}`)
            }
        }
    } else {
        if (inValidSentaces.length > 0){
            console.log('InvalidSentences');
            for (let i = 0; i < inValidSentaces.length; i++) {
                console.log(`${i + 1}. ${inValidSentaces[i]}`)
            }
        }
    }
}
travenInvestigation(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho  e KoftiPockivkaLTD Tip 123  ve MinkaTrans BulgaTour",
    "We will koftipoivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
    "dqdo BuLriaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]
);
