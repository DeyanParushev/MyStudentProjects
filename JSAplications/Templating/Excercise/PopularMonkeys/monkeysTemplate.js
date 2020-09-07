$(async() => {

    Handlebars.registerPartial('monkey',
        await fetch('./Templates/SingleMonkeyTemplate.hbs').then((response) => response.text()));

    let masterTemplateText = await fetch('./Templates/AllMonkeysTemplate.hbs').then((response) => response.text());
    let masterTemplate = Handlebars.compile(masterTemplateText);
    let resultHTML = masterTemplate({ monkeys });

    document.querySelector('.monkeys').innerHTML += resultHTML;

    Array
        .from(document.querySelectorAll('button'))
        .forEach(button => {
            button.addEventListener('click', (event) => {
                if (event.target.nextElementSibling.style.display === 'none') {
                    event.target.nextElementSibling.style.display = 'block';
                } else {
                    event.target.nextElementSibling.style.display = 'none';
                };
            });
        });
});
