function worker(input) {
    if (input.handsShaking === true){
        input.bloodAlcoholLevel = input.weight * input.experience * 0.1 + input.bloodAlcoholLevel;
        input.handsShaking = false;
    }
    console.log(input);
    return input
}
worker({ weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true }

);

