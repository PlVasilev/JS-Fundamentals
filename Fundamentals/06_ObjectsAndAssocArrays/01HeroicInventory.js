function heroicInventory(input) {
    let heroes = [];
    for (let i = 0; i < input.length; i++) {
        let obj = {};
        let currObj = input[i].split(/\W+/gm).filter(a => a !== '');
        obj['name'] = currObj[0];
        obj['level'] = +currObj[1];
        let items = [];
        for (let j = 2; j < currObj.length; j++) {
           items.push(currObj[j])
        }
        obj['items'] = items;
        heroes.push(obj);
    }
    console.log(JSON.stringify(heroes));
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
                'Derek / 12 / BarrelVest, DestructionSword',
                'Hes / 1 / Desolator, Sentinel, Antara']);