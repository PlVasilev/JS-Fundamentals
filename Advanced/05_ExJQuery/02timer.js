function timer() {
    let seconds = $('#seconds');
    let min = $('#minutes');
    let hours = $('#hours');
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');
    let time = -1;
    let running = false;
    let stopped = true;
    startBtn.on('click', function () {
        if (running === false && stopped === true) {
            step();
            timer = setInterval(
                step, 1000);
            running = true;
            stopped = false;
        }
    });

    stopBtn.on('click', function() {
        if (running === true && stopped === false) {
            time = time - 11;
            clearInterval(timer);
            running = false;
            stopped = true;
        }
    });

    function step() {
        time++;
        seconds.text(("0" + (time % 60)).slice(-2));
        min.text(("0" + Math.floor((time / 60)) % 60).slice(-2));
        hours.text(("0" + Math.floor((time / 3600) %24)).slice(-2));
    }
}
