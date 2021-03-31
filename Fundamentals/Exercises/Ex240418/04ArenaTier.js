function arenaTier(input) {
    let result = {};
    for (const string of input) {
        if (string.includes(' -> ')){
            let [name,item,score] = string.split(' -> ');
            if(!result.hasOwnProperty(name)){
                result[name] = {};
                result[name][item] = Number(score);
                result[name]['__total__'] = Number(score); // нап елемент за тотал score
            } else {
                if (!result[name].hasOwnProperty(item)){ // ако го няма
                    result[name][item] = Number(score);
                    result[name]['__total__'] += Number(score);
                } else  {
                    if (result[name][item] < score){// ако има нещо на позиция item
                        result[name]['__total__'] -= result[name][item];
                        result[name]['__total__'] += Number(score);
                        result[name][item] = Number(score); // ако item има
                    }
                }
            }
        } else if (string.includes(' vs ')){
            let [gladiator1, gladiator2] = string.split(' vs ');
            if (result.hasOwnProperty(gladiator1) && result.hasOwnProperty(gladiator2)) {
                for (const gl1Item in result[gladiator1]) { // цикъл in само в обект , of за масив
                    let gl1Score = result[gladiator1][gl1Item];
                    let gl2Score = result[gladiator2][gl1Item];
                    if (gl1Score && gl2Score && gl1Item !== '__total__') {
                        if (gl1Score > gl2Score){
                            delete result[gladiator2];
                            break;
                        }
                        else if (gl1Score < gl2Score){
                            delete result[gladiator1];
                            break;
                        }
                    }
                }
            }
        } else {
            break;
        }
    }
    // sort
    console.log(result);
    let sortedGladiators = Object.keys(result).sort((g1, g2) => {
        let diffInscore = result[g2]['__total__'] - result[g1]['__total__']; // от ресулта на, позиция гладиатор, елемент тотал
            if (diffInscore === 0){
                return g1.localeCompare(g2) // сравняване на стрингове по азбучен ред
            }
            return diffInscore;
    });
    for (const gl of sortedGladiators) {
        console.log(`${gl}: ${result[gl]['__total__']}`);
        let sortedItems = Object.keys(result[gl]).filter(i => i !== '__total__').sort((i1, i2) =>{
            let diffInscore = result[gl][i2] - result[gl][i1]; // от ресулта на, позиция гладиатор, елемент тотал
            if (diffInscore === 0){
                return i1.localeCompare(i2) // сравняване на стрингове по азбучен ред
            }
            return diffInscore;
        });   // Object.keys наливаме в масив вскичките клщчове
        for (const item of sortedItems) {
            console.log(`- ${item} <!> ${result[gl][item]}`)
        }
    }
}
arenaTier(['Pesho -> Duck -> 400',
            'Julius -> Shield -> 150',
            'Gladius -> Heal -> 200',
            'Gladius -> Support -> 250',
            'Gladius -> Shield -> 250',
            'Pesho vs Gladius',
            'Gladius vs Julius',
            'Gladius vs Gosho',
            'Ave Cesar']);