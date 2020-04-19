function attachEventsListeners() {
    let delegateElement = document.getElementsByTagName('main')[0];
    let divElements = document.getElementsByTagName('div');
    delegateElement.addEventListener('click', (e) => {
        let value = e.target.parentNode.children[1].value;
        let object = {
            daysBtn: (days) => {
                divElements[1].children[1].value = days * 24;
                divElements[2].children[1].value = days * 24 * 60;
                divElements[3].children[1].value = days * 24 * 60 * 60;
            },
            hoursBtn: (hours) => {
                divElements[0].children[1].value = hours / 24;

                divElements[2].children[1].value = hours * 60;
                divElements[3].children[1].value = hours * 60 * 60;
            },
            minutesBtn: (minutes) => {
                divElements[0].children[1].value = minutes / 1440;
                divElements[1].children[1].value = minutes / 60;

                divElements[3].children[1].value = minutes * 60;
            },
            secondsBtn: (seconds) => {
                divElements[0].children[1].value = seconds / 86400;
                divElements[1].children[1].value = seconds / 3600;
                divElements[2].children[1].value = seconds / 60;
            }
        };
        object[e.target.id](value);
    });
};
