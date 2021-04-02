function attachGradientEvents() {
    let gradient = document.getElementById('gradient-box');
    gradient.addEventListener('mousemove', function (ev) {
       let percent =  Math.trunc((ev.offsetX / (ev.target.clientWidth - 1))*100);
        document.getElementById('result').textContent = percent + '%';
    });
    gradient.addEventListener('mouseout', function (ev) {
        document.getElementById('result').textContent = ''
    })

}