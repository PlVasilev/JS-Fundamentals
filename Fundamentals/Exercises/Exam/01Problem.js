function travelPlans(input) {
    let result = 0;
    let specializedProf = [];
    let averageProf = [];
    let clumsyProf = [];
    for (let i = 0; i < input.length; i++) {
        let profesionGold = input[i].split(' : ');
        let profesion = profesionGold[0];
        let gold = profesionGold[1];
        switch (profesion) {
            case 'Programming' :
            case 'Hardware maintenance' :
            case 'Cooking' :
            case 'Translating' :
            case 'Designing' : specializedProf.push(profesion,gold); break;
            case 'Driving' :
            case 'Managing' :
            case 'Fishing' :
            case 'Gardening' : averageProf.push(profesion,gold); break;
            case 'Singing' :
            case 'Accounting' :
            case 'Teaching' :
            case 'Exam-Making' :
            case 'Acting' :
            case 'Writing' :
            case 'Lecturing' :
            case 'Modeling' :
            case 'Nursing' : clumsyProf.push(profesion,gold); break;
        }
    }
    let specialCounter = 1;
    for (let i = 0; i < specializedProf.length; i+=2) {
        if (specializedProf[i + 1] < 200) {
            continue;
        }
        if (specialCounter % 2 === 0) {
            result += specializedProf[i + 1] * 0.8 + 200;
        } else {
        result += +specializedProf[i + 1] * 0.8;
       }
        specialCounter++;
    }
    let clumsyCounter = 1;
    for (let i = 0; i < clumsyProf.length; i+=2) {

        if (clumsyCounter % 2 === 0){
            result += +clumsyProf[i + 1]*0.95;
        } else if (clumsyCounter % 3 === 0){
            result += +clumsyProf[i + 1]*0.9;
        } else {
            result += +clumsyProf[i + 1]
        }
        clumsyCounter++;
    }
    for (let i = 0; i < averageProf.length; i+=2) {
        result += +averageProf[i + 1]
    }
    if (result < 1000){
        console.log(`Final sum: ${result.toFixed(2)}`);
        console.log(`Mariyka need to earn ${(1000-result).toFixed(2)} gold more to continue in the next task.`)
    }
    else {
        console.log(`Final sum: ${result.toFixed(2)}`);
        console.log(`Mariyka earned ${(result-1000).toFixed(2)} gold more.`)
    }
}
travelPlans(["Programming : 500",
    "Driving : 243.55",
    "Acting : 200",
    "Singing : 100",
    "Cooking : 199",
    "Hardware maintenance : 800",
    "Gardening : 700",
    "Programming : 500"]);

travelPlans(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"]);