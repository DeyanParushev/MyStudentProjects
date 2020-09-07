function solve() {
    let infoMessageBox =
        document.getElementById('info')
            .children[0];
        
    let currentStopId = 'depot';
    let bussStopName = '';
    let departButton = document.querySelector('#depart');
    let arriveButton = document.querySelector('#arrive');
    
    function depart() {
        let url = `https://judgetests.firebaseio.com/schedule/${currentStopId}.json` 
        fetch(url)
        .then((response) => {
            return response.json();})
        .then((parsedResponse) => {
            infoMessageBox.textContent = `Next stop ${parsedResponse.name}`;

            bussStopName = parsedResponse.name;
            departButton.disabled = true;
            arriveButton.disabled = false;
            currentStopId = parsedResponse.next;})
        .catch((err) => {
            infoMessageBox.textContent = 'Error';
            departButton.disabled = true;
            arriveButton.disabled = true;
        });
    }

    function arrive() {
        infoMessageBox.textContent = `Arriving at ${bussStopName}`;
        arriveButton.disabled = true;
        departButton.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
