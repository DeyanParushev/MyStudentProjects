async function generateTemplate() {
    let handleBarsResponse = await fetch('./ulTemplate.hbs');
    let parsedResponse = await handleBarsResponse.text();
    let template = Handlebars.compile(parsedResponse);
    return template;
};

document.querySelector('#btnLoadTowns').addEventListener('click', async (event) => {
    let template = await generateTemplate();
    let towns = document.querySelector('#towns').value.split(', ');

    document.querySelector('#root').innerHTML = template({ towns });
});
