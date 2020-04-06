function stopwatch() {
    let watch = 0;
    let startButton = document.getElementById("startBtn");
    let stopButton = document.getElementById("stopBtn");
    let dial = document.getElementById("time");
    let timeAsText = '';

    let startWatchCounter;
    let startSyncCounter;
    
    function watchCount() {
        return watch += 1;
    }

    function sync() {
        dial.innerHTML = timeConverter(watch);
    }

    function timeConverter(currentTime){
        let minutes = Math.floor(currentTime / 60);
        let seconds = Math.fround(currentTime % 60);

        let minutesString = '' + minutes;
        if(minutes < 10){
            minutesString = '0' + minutes;
        }

        let secondsString = '' + seconds;
        if(seconds< 10){
            secondsString = '0' + seconds;
        }

        let convertedTime = minutesString + ':' + secondsString;
        return convertedTime;
    }

    startButton.addEventListener('click', (e) => {
        
        dial.innerHTML = '00:00';
        startWatchCounter = setInterval(watchCount, 1000);
        startSyncCounter = setInterval(sync, 1000);

        startButton.disabled = true;
        stopButton.disabled = false;
    });

    stopButton.addEventListener('click', (e) =>{
        clearInterval(startWatchCounter);
        clearInterval(startSyncCounter);

        startButton.disabled = false;
        stopButton.disabled = true;
    })
}
