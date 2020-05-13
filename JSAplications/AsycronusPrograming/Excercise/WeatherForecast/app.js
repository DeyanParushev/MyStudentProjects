function attachEvents() {
    let button = document.querySelector('#submit');
    let locationRef = document.querySelector('#location');
    let forecastRef = document.querySelector('#forecast');
    let locationsUrl = `https://judgetests.firebaseio.com/locations.json`;

    let currentForecastRef = document.querySelector('#current');
    let upcomingForecastRef = document.querySelector('#upcoming');

    button.addEventListener('click', async () => {
        let locationsResponse = await fetch(locationsUrl);
        let parsedResponse = await locationsResponse.json();
        let desiredLocation = parsedResponse.find(x => x.name.toLowerCase() === locationRef.value.toLowerCase());
        forecastRef.style.display = 'block';
        locationRef.value = '';

        try {
            let currentForecastResponse = await fetch(`https://judgetests.firebaseio.com/forecast/today/${desiredLocation.code}.json`);
            let upcomingForecastResponse = await fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${desiredLocation.code}.json`);

            if (currentForecastRef.children[1] !== undefined) {
                currentForecastRef.removeChild(currentForecastRef.children[1]);
                upcomingForecastRef.removeChild(upcomingForecastRef.children[1]);
            };

            if (desiredLocation !== undefined && currentForecastResponse.status < 400 && upcomingForecastResponse.status < 400) {
                errorSwitch(true, currentForecastRef, upcomingForecastRef);

                let parsedCurrentForecast = await currentForecastResponse.json();
                currentForecastRef.appendChild(getForecastHTMLElements(parsedCurrentForecast));

                let parsedUpcomingForecast = await upcomingForecastResponse.json();
                upcomingForecastRef.appendChild(getUpcomingForecastHTMLElements(parsedUpcomingForecast));
            } else {
                errorSwitch(false, currentForecastRef, upcomingForecastRef);
            };
        } catch {
            errorSwitch(false, currentForecastRef, upcomingForecastRef);
            if (currentForecastRef.children[1] !== undefined) {
                currentForecastRef.removeChild(currentForecastRef.children[1]);
                upcomingForecastRef.removeChild(upcomingForecastRef.children[1]);
            };
        };
    });
}

let conditionSymbols = {
    'Sunny': '☀',
    'Partly sunny': '⛅',
    'Overcast': '☁',
    'Rain': '☂',
    'Degrees': '°'
};

function getForecastHTMLElements(parsedRequest) {
    let div = createElement('div', 'forecasts');

    let symbolSpan = createElement('span', 'condition symbol');
    symbolSpan.textContent = conditionSymbols[parsedRequest.forecast.condition];
    div.appendChild(symbolSpan);

    let conditionSpan = createElement('span', 'condition');
    div.appendChild(conditionSpan);

    let citySpan = createElement('span', 'forecast-data');
    citySpan.textContent = parsedRequest.name;
    conditionSpan.appendChild(citySpan);

    let tempSpan = createElement('span', 'forecast-data');
    tempSpan.textContent = `${parsedRequest.forecast.low}${conditionSymbols.Degrees}/${parsedRequest.forecast.high}${conditionSymbols.Degrees}`;
    conditionSpan.appendChild(tempSpan);

    let condition = createElement('span', 'forecast-data');
    condition.textContent = parsedRequest.forecast.condition;
    conditionSpan.appendChild(condition);

    return div;
};

function getUpcomingForecastHTMLElements(parsedRequest) {
    let div = createElement('div', 'forecast-info');

    parsedRequest.forecast.forEach(e => {
        let upcomingSpan = createElement('span', 'upcoming');
        div.appendChild(upcomingSpan);

        let symbolSpan = createElement('span', 'symbol');
        symbolSpan.textContent = conditionSymbols[e.condition];
        upcomingSpan.appendChild(symbolSpan);

        let tempSpan = createElement('span', 'forecast-data');
        tempSpan.textContent = `${e.low}${conditionSymbols.Degrees}/${e.high}${conditionSymbols.Degrees}`;
        upcomingSpan.appendChild(tempSpan);

        let condition = createElement('span', 'forecast-data');
        condition.textContent = e.condition;
        upcomingSpan.appendChild(condition);

    });

    return div;
};

function createElement(elementType, elementClass) {
    let newElement = document.createElement(elementType);
    newElement.className = elementClass;

    return newElement;
};

function errorSwitch(bool, currentRef, upcomingRef) {
    if (bool) {
        currentRef.firstElementChild.textContent = 'Current conditions';
        upcomingRef.firstElementChild.textContent = 'Three-day forecast';
    } else {
        currentRef.firstElementChild.textContent = 'Error';
        upcomingRef.firstElementChild.textContent = 'Error';
    };
};

attachEvents();
