function solve() {
    let dropDownButton = document.querySelector('button');
    let $list = document.querySelector('ul');
    let $box = document.querySelector('#box');
    dropDownButton.addEventListener('click', (e) => {
        if ($list.style.display === 'none' || $list.style.display === '') {
            $list.style.display = 'block';
        } else {
            $list.style.display = 'none';
            $box.style.backgroundColor = 'black';
            $box.style.color = 'white';
        }
    });

    Array.from(document.querySelectorAll('li'))
        .forEach(element => {
            element.addEventListener('click', (e) => {
                $box.style.backgroundColor = element.textContent;
                $box.style.color = 'black';
            });
        });
};
