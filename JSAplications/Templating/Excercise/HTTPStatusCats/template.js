(async() => {
    Handlebars.registerPartial('cat', await fetch('./SingleCatTemplate.hbs').then((response) => response.text()));

    let catsTemplate = await fetch('./AllCatsTemplate.hbs').then((response) => response.text());
    let allCatsTemplate = Handlebars.compile(catsTemplate);
    let resultHTML = allCatsTemplate({ cats });

    document.querySelector('section#allCats').innerHTML = resultHTML;
    Array.from(document.querySelectorAll('.showBtn').forEach(buttond => {
        addEventListener('click', (e) => {
            if (e.target.textContent === 'Show status code') {
                e.target.nextElementSibling.style.display = 'block';
                e.target.textContent = 'Hide status code';
            } else {
                e.target.nextElementSibling.style.display = 'none';
                e.target.textContent = 'Show status code';
            };
        });
    }));
})();
