function carFacory(car) {
    console.log(car);
    let producedCar = {
        model: car.model,
        engine:{
            power:  function () {
                if (car.power > 160) {
                    return 200
                } else if (car.power > 105){
                    return 120
                }
                else return 90
            }(),
            volume: function () {
                if (car.power > 160) {
                    return 3500
                } else if (car.power > 105){
                    return 2400
                }
                else return 1800
            }()
        },
        carriage: { type: car.carriage,
            color: car.color },
        wheels: function () {
            let wheelSize = car.wheelsize;
            if (car.wheelsize % 2 === 0){
                wheelSize = car.wheelsize - 1;
            }
            return [wheelSize,wheelSize,wheelSize,wheelSize]
        }()
    };
    return producedCar;
}
carFacory({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
);