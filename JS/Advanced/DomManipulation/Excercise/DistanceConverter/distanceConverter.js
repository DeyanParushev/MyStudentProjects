function attachEventsListeners() {
    let outputField = document.getElementById('outputDistance');
    outputField.type = 'number';
    outputField.disabled = false;

    let inputField = document.getElementById('inputDistance');
    inputField.type = 'number';

    let convertToMeters = {
        km: (value) => {
            return value * 1000;
        },
        m: (value) => {
            return value;
        },
        cm: (value) => {
            return value * 0.01;
        },
        mm: (value) => {
            return value * 0.001;
        },
        mi: (value) => {
            return value * 1609.34;
        },
        yrd: (value) => {
            return value * 0.9144;
        },
        ft: (value) => {
            return value * 0.3048;
        },
        in: (value) => {
            return value * 0.0254;
        },
    };

    let convertFromMeters = {
        km: (value) => {
            return value / 1000;
        },
        m: (value) => {
            return value;
        },
        cm: (value) => {
            return value / 0.01;
        },
        mm: (value) => {
            return value / 0.001;
        },
        mi: (value) => {
            return value / 1609.34;
        },
        yrd: (value) => {
            return value / 0.9144;
        },
        ft: (value) => {
            return value / 0.3048;
        },
        in: (value) => {
            return value / 0.0254;
        }
    };

    let convertButton = document.getElementById('convert');
    convertButton.addEventListener('click', (e) => {
        let inputDistance = document.getElementById('inputDistance').value;
        let inputDimension = document.getElementById('inputUnits').value;

        let inputToMeters = convertToMeters[inputDimension](inputDistance);

        let outputDimension = document.getElementById('outputUnits').value;
        let outputToDesiredDimension = convertFromMeters[outputDimension](inputToMeters);

        document.getElementById('outputDistance').value = outputToDesiredDimension;
    });
};
