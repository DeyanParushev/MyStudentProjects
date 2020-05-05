function getInfo() {
    let targetElement = document.querySelector('#result');
    targetElement.innerHTML = '';
    let stopId = document.querySelector('#stopId').value;
    let url = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;

    function createDiv(obj) {
        let div = document.createElement('div');
        div.id = 'stopName';

        if (obj !== undefined || obj !== null) {
            div.textContent = obj.name;
            let list = document.createElement('ul');

            Object.keys(obj.buses)
                .forEach(bus => {
                    let li = document.createElement('li');
                    li.textContent = `Bus ${bus} arrives in ${obj.buses[bus]} minutes.`;
                    list.appendChild(li);
                });

            targetElement.appendChild(div);
            targetElement.appendChild(list);
        } else {
            div.textContent = 'Error';
            targetElement.appendChild(div);
        };
    };

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((parsedObj) => {
            createDiv(parsedObj);
        })
        .catch((err) => {
            let errorDiv = document.createElement('div');
            errorDiv.id = 'stopName';
            errorDiv.textContent = 'Error';
            targetElement.appendChild(errorDiv);
        });
};
