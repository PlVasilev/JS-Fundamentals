function attachEventsListeners() {
    let daysButton = document.getElementById("daysBtn");
    let hoursButton = document.getElementById("hoursBtn");
    let minButton = document.getElementById("minutesBtn");
    let secButton = document.getElementById("secondsBtn");
    daysButton.addEventListener('click', function () {
        let toConvert = document.getElementById('days').value;
        let time = toConvert*86400;
        convert(time);
        console.log(time);
    });
    hoursButton.addEventListener('click', function () {
        let toConvert = document.getElementById('hours').value;
        let time = toConvert*3600;
        convert(time);
        console.log(time);

    });
    minButton.addEventListener('click', function () {
        let toConvert = document.getElementById('minutes').value;
        let time = toConvert*60 ;
        convert(time);
        console.log(time);

    });
    secButton.addEventListener('click', function () {
        let time = document.getElementById('seconds').value;
        convert(time);
        console.log(time);

    });
    function convert(time) {
        document.getElementById("days").value = time/86400;
        document.getElementById("hours").value = time/3600;
        document.getElementById("minutes").value = time/60;
        document.getElementById("seconds").value = time;
    }
}
