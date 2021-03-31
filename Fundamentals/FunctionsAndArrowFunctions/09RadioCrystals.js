function radioCrystals(input) {
    let target = input[0];

    for (let i = 1; i < input.length; i++) {
        let currentThickness = input[i];
        let cut = 0;
        let lap = 0;
        let grind = 0;
        let etch = 0;
        let xRay = 0;
        let lastOperation = '';
        let operationCounter = 0;
        let xCount = 0;
        let currentOperation = '';

        while (currentThickness){
            if (currentThickness === target) {
                console.log(`Processing chunk ${input[i]} microns`);
                if (cut > 0){
                    console.log(`Cut x${cut}`);
                    console.log('Transporting and washing');
                }
                if (lap  > 0){
                    console.log(`Lap x${lap}`);
                    console.log('Transporting and washing');
                }
                if (grind  > 0){
                    console.log(`Grind x${grind}`);
                    console.log('Transporting and washing');
                }
                if (etch  > 0){
                    console.log(`Etch x${etch}`);
                    console.log('Transporting and washing');
                }
                if (xRay  > 0){
                    console.log(`X-ray x${xRay}`);
                }
                console.log(`Finished crystal ${currentThickness} microns`);
                break;

            }

            if (currentThickness + 1 === target && xCount === 0){
                xCount++; xRay++;
                currentThickness++;
                currentOperation = 'xRay';
                operationCounter++;
            } else if(currentThickness / 4 >= target - 1 ){
                currentThickness = currentThickness/4;
                cut++;
                currentOperation = 'cut';
                operationCounter++;
            }  else if(currentThickness * 0.8 >= target  - 1){
                currentThickness = currentThickness * 0.8;
                lap++;
                currentOperation = 'lap';
                operationCounter++;
            } else if(currentThickness - 20 >= target  - 1){
                currentThickness = currentThickness - 20;
                grind++;
                currentOperation = 'grind';
                operationCounter++;
            } else if(currentThickness -2 >= target  - 1){
                currentThickness = currentThickness - 2;
                etch++;
                currentOperation = 'etch';
                operationCounter++;
            }
            if(operationCounter === 1)lastOperation = currentOperation;
            else if (lastOperation !== currentOperation){
                currentThickness = Math.floor(currentThickness);
            }
        }
        
    }
}
radioCrystals([1000, 4000, 8100]);