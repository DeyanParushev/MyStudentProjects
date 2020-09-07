function solve(steps, length, speed) {
    let distanceInMeters = steps * length;
    let additionalTime = Math.floor(distanceInMeters / 500) * 60;
    let timeInSeconds = (distanceInMeters * 3600) / (speed * 1000) + additionalTime;

    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor((timeInSeconds % 3600) / 60);
    let seconds = Math.round(timeInSeconds % 3600) % 60;

    let hourStr = addZeroIfLes(hours);
    let minuteStr = addZeroIfLes(minutes);
    let secondsStr = addZeroIfLes(seconds);

    function addZeroIfLes(num){
        return num <10 ? `0${num}` : `${num}`;
    }

    console.log(`${hourStr}:${minuteStr}:${secondsStr}`);
}
solve(4000, 0.6, 5);
//00:32:48
