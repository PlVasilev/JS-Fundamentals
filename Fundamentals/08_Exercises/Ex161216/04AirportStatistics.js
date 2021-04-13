function airportStatistics(input) {
    let planes = {};
    let towns = {};
    for (let i = 0; i < input.length; i++) {
        const inputElement = input[i];
        let [plane,town,pasangers,status] = inputElement.split(' ');
        if (plane && town && pasangers && status){
            if (!planes.hasOwnProperty(plane)){
                if (status === 'land')
                planes[plane] = status;
            } else {
                if (planes[plane] === 'land' && status === 'depart'){
                    planes[plane] = status
                }
                else if (planes[plane] === 'depart' && status === 'land'){
                    planes[plane] = status;
                }
                else {
                    continue;
                }
            }
                if (status === 'land' && planes[plane] === 'land'){
                    if (!towns.hasOwnProperty(town)) {towns[town] = {};
                    towns[town]['plane'] = [];}
                    if (!towns[town]['plane'].includes(plane)){
                        towns[town]['plane'].push(plane);
                    }
                    if (!towns[town]['Arrivals']) towns[town]['Arrivals'] = Number(pasangers);
                    else towns[town]['Arrivals'] += Number(pasangers);
                    if (!towns[town]['Departures']) towns[town]['Departures'] = 0;

                }
                 else if (status === 'depart' && planes[plane] === 'depart'){
                    if (!towns.hasOwnProperty(town)) {towns[town] = {};
                    towns[town]['plane'] = [];}
                    if (!towns[town]['plane'].includes(plane)){
                        towns[town]['plane'].push(plane);
                    }
                    if (!towns[town]['Departures']) towns[town]['Departures'] = Number(pasangers);
                    else towns[town]['Departures'] += Number(pasangers);
                    if (!towns[town]['Arrivals']) towns[town]['Arrivals'] = 0;
                }
        }
    }
    let sortedPlanes = Object.keys(planes).sort(function (a,b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    console.log('Planes left:');
    for (const sortedPlane of sortedPlanes) {
        if (planes[sortedPlane] === 'land'){
            console.log(`- ${sortedPlane}`);
        }
    }
    let sortedTowns = Object.keys(towns).sort((a,b) => {
        let diff = towns[b]['Arrivals'] - towns[a]['Arrivals'];
        if (diff === 0){
          return  a.localeCompare(b);
        }
        return diff;
    });
    for (const sortedTown of sortedTowns) {
        console.log(sortedTown);
        console.log(`Arrivals: ${towns[sortedTown]['Arrivals']}`);
        console.log(`Departures: ${towns[sortedTown]['Departures']}`);
        console.log('Planes:');
        let sortedPlane = towns[sortedTown]['plane'].sort(function (a,b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        });
        for (const ele of sortedPlane) {
            console.log(`-- ${ele}`)
        }
    }

}
airportStatistics([
    'Airbus Paris 100 land',
    'AirForce Paris 200 land',
    'Airbus Paris -300 land',
    'AirForcE Paris 100 land',
    'AirForce London 100 land',
    'AirFoRce LoNdon 130 land',
    'Nemibue London 150 land',
    'Nemibue London 150 depart'
]);