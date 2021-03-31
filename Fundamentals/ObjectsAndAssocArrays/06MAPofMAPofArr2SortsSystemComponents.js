function MAPofMAPofArr2SortsSystemComponents(input) {
    let production = new Map();
    for (let i = 0; i < input.length; i++) {
        let systemInfo = input[i].split(' | ');
        let system = systemInfo[0];
        let comp = systemInfo[1];
        let subcomp = systemInfo[2];
        let subCompArr = [];
        if (!production.has(system)) {
            production.set(system, new Map());
            production.get(system).set(comp,[`${subcomp}`]);
        } else if (production.get(system).has(comp)) {
            subCompArr = production.get(system).get(comp);
            subCompArr.push(subcomp);
            production.get(system).set(comp,subCompArr);
        } else
        {production.get(system).set(comp,[`${subcomp}`]);}
    }

    let systems = Array.from(production.keys())
        .sort((a, b) => {
        let diff = production.get(b).size-production.get(a).size;
        if (diff === 0){
            return a.localeCompare(b)
        }
        return diff;
    });

    for (const element of systems) {
        console.log(element);
        let componets = Array.from(production.get(element).keys()).sort((a, b) => 
            production.get(element).get(b).length - production.get(element).get(a).length);
        for (const componet of componets) {
            console.log(`|||${componet}`);
            for (const subComponent of production.get(element).get(componet)) {
                console.log(`||||||${subComponent}`);
            }
        }
    }
}
MAPofMAPofArr2SortsSystemComponents(['SULS | Main Site | Home Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']);