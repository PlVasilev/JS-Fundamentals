function PopulationsinTowns(input) {
     let map = new Map();
    for (const str of input) {
         let [town,population] = str.split(/\s*<->\s*/);
         if (!map.has(town)){
             map.set(town, 0);
         }
         map.set(town,map.get(town) + +population) // parce to number + плюс пред променливата
        // така се добавя стойност във value в мап взимаме позицията на town в мапа и добавяме value
    }
    for (const [key,value] of map) {
        console.log(`${key} : ${value}`);
    }
}
PopulationsinTowns(['Istanbul <-> 100000',
                    'Honk Kong <-> 2100004',
                    'Jerusalem <-> 2352344',
                    'Mexico City <-> 23401925',
                    'Istanbul <-> 1000']);