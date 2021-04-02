function attachEventsListeners() {
    let convert = document.getElementById('convert');
    convert.addEventListener('click', function () {
        let inputUnit = document.getElementById('inputUnits').value;
        let outputUnit = document.getElementById('outputUnits').value;
        let value = document.getElementById('inputDistance').value;
        let toConvet = 0;
        let converter = 0;
        switch (inputUnit){
            case 'km': toConvet = value*1000; break;
            case 'm': toConvet = value; break;
            case 'cm': toConvet = value*0.01; break;
            case 'mm': toConvet = value*0.001; break;
            case 'mi': toConvet = value*1609.34 ; break;
            case 'yrd': toConvet = value*0.9144; break;
            case 'ft': toConvet = value*0.3048; break;
            case 'in': toConvet = value*0.0254  ; break;
        }
        switch (outputUnit){
            case 'km': converter = 1000; break;
            case 'm': converter = 1; break;
            case 'cm': converter = 0.01; break;
            case 'mm': converter = 0.001; break;
            case 'mi': converter = 1609.34 ; break;
            case 'yrd': converter= 0.9144; break;
            case 'ft': converter = 0.3048; break;
            case 'in': converter = 0.0254  ; break;
        }
        let result = toConvet/converter;
        console.log(result);
        document.getElementById('outputDistance').value = result;
    })
}
