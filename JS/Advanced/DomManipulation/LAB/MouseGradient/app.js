function attachGradientEvents() {
    let box = document.getElementById('gradient-box');
    let percentage = 0;

    box.addEventListener('mousemove', (e) => {
        percentage = Math.floor(((e.pageX - box.clientLeft) / box.clientWidth) * 100);
        document.getElementById('result').innerHTML = percentage + '%';
    });
};
