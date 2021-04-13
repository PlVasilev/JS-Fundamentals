function roadRadar(input) {
    function speedLimit(x = input[1]) {
        switch (x){
            case 'motorway': return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
        }
    }
    function ifOverTheLimit(speed,limit) {
        let result = speed - limit;
        if (result <= 0) console.log();
        else if (result <= 20) console.log('speeding') ;
        else if (result <= 40) console.log('excessive speeding') ;
        else console.log('reckless driving') ;
    }
    ifOverTheLimit(input[0],speedLimit())
}
roadRadar([21, 'residential']);
roadRadar([200, 'motorway']);
roadRadar([120, 'interstate'])