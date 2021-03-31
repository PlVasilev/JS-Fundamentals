function gameOfEpicness(amries,battles) {
     let kingdomArmies = new Map();
     let kingdomWins = new Map();
     let kingdomLoses = new Map();
    for (const force of amries) {
        let kingdom = force.kingdom;
        let general = force.general;
        let army = force.army;
        if (!kingdomArmies.has(force.kingdom)){
            kingdomArmies.set(force.kingdom,new Map());
        }
        if (!kingdomArmies.get(kingdom).has(general)){
            kingdomArmies.get(kingdom).set(general,army);
        }
        else {
            kingdomArmies.get(kingdom).set(general, kingdomArmies.get(kingdom).get(general) + army);
        }
    }
    for (const battle of battles) {
        let attackerKingdom = battle[0];
        let attackerName = battle[1];
        let attacherArmy = kingdomArmies.get(attackerKingdom).get(attackerName);
        let defenderKingdom = battle[2];
        let defenderName = battle[3];
        let defenderArmy = kingdomArmies.get(defenderKingdom).get(defenderName);
        if (attackerKingdom === defenderKingdom){
            continue;
        }
        else if (attacherArmy > defenderArmy){
            let winingArmy = Math.ceil(attacherArmy * 0.1);
            let losingArmy = Math.ceil(defenderArmy * 0.1);
            kingdomArmies.get(attackerKingdom).set(attackerName, kingdomArmies.get(attackerKingdom).get(attackerName) + winingArmy);
            kingdomArmies.get(defenderKingdom).set(defenderName, kingdomArmies.get(defenderKingdom).get(defenderName) - losingArmy);

            if(!kingdomWins.has(attackerKingdom)){
                kingdomWins.set(attackerKingdom, new Map());
            }
            if (!kingdomWins.get(attackerKingdom).has(attackerName)){
                kingdomWins.get(attackerKingdom).set(attackerName,1);
            } else {
                kingdomWins.get(attackerKingdom).set(attackerName, kingdomWins.get(attackerKingdom).get(attackerName) + 1);
            }

            if(!kingdomLoses.has(defenderKingdom)){
                kingdomLoses.set(defenderKingdom, new Map());
            }
            if (!kingdomLoses.get(defenderKingdom).has(defenderName)){
                kingdomLoses.get(defenderKingdom).set(defenderName,1);
            } else {
                kingdomLoses.get(defenderKingdom).set(defenderName, kingdomLoses.get(defenderKingdom).get(defenderName) + 1);
            }
        } else if (defenderArmy > attacherArmy){
            let losingArmy = Math.ceil(attacherArmy * 0.1);
            let winingArmy = Math.ceil(defenderArmy * 0.1);
            kingdomArmies.get(attackerKingdom).set(attackerName, kingdomArmies.get(attackerKingdom).get(attackerName) - losingArmy);
            kingdomArmies.get(defenderKingdom).set(defenderName, kingdomArmies.get(defenderKingdom).get(defenderName) + winingArmy);

            if(!kingdomLoses.has(attackerKingdom)){
                kingdomLoses.set(attackerKingdom, new Map());
            }
            if (!kingdomLoses.get(attackerKingdom).has(attackerName)){
                kingdomLoses.get(attackerKingdom).set(attackerName,1);
            } else {
                kingdomLoses.get(attackerKingdom).set(attackerName, kingdomLoses.get(attackerKingdom).get(attackerName) + 1);
            }

            if(!kingdomWins.has(defenderKingdom)){
                kingdomWins.set(defenderKingdom, new Map());
            }
            if (!kingdomWins.get(defenderKingdom).has(defenderName)){
                kingdomWins.get(defenderKingdom).set(defenderName,1);
            } else {
                kingdomWins.get(defenderKingdom).set(defenderName, kingdomWins.get(defenderKingdom).get(defenderName) + 1);
            }
        }
    }

    let lossfactor = 0;
    let result = new Map();
    for (const [key,value] of kingdomWins) {
        let sum = 0;
        for (const [valKey,valVal] of value) {
            if (kingdomLoses.has(key)){
               lossfactor++;
            }
            sum += valVal;
        }
        result.set(key,sum*100-lossfactor);
        lossfactor = 0;
    }

    let sortedResult = Array.from(result.keys()).sort((a,b) => result.get(b) - result.get(a));
    for (const winner of sortedResult) {
        console.log(`Winner: ${winner}`);
        let sortedArmies = Array.from(kingdomArmies.get(winner).keys()).sort((a,b) =>
            kingdomArmies.get(winner).get(b) - kingdomArmies.get(winner).get(a));

        for (const sortedArmy of sortedArmies) {
            if (kingdomArmies.get(winner).get(sortedArmy)) {
                    console.log(`/\\general: ${sortedArmy}`);
                    console.log(`---army: ${kingdomArmies.get(winner).get(sortedArmy)}`);
                    if (kingdomWins.get(winner).get(sortedArmy)) {
                    console.log(`---wins: ${kingdomWins.get(winner).get(sortedArmy)}`)}
                    else {
                        console.log(`---wins: 0`);
                    }
                }
                if (!kingdomLoses.get(winner)){
                    console.log(`---losses: 0`);
                }
                else if (!kingdomLoses.get(winner).get(sortedArmy)){
                    console.log(`---losses: 0`);
                }
                else{
                    console.log(`---losses: ${kingdomLoses.get(winner).get(sortedArmy)}`);
                }
        }
        break;
    }
}
gameOfEpicness([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "Stonegate", general: "Doran1", army: 77002 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "YorkenShire", general: "Quin1", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["Maiden Way", "Berinon", "Stonegate", "Ulric"],
        ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"]]
);

//gameOfEpicness([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
//        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
//        { kingdom: "Stonegate", general: "Doran", army: 70000 },
//        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
//        { kingdom: "YorkenShire", general: "Quinn", army: 2000 } ],
//    [ ["YorkenShire", "Quinn", "Stonegate", "Doran"],
//        ["Stonegate", "Ulric", "Maiden Way", "Merek"] ]
//);