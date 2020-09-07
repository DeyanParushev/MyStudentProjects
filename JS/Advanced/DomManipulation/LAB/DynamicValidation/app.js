function validate() {
    let inputField = document.getElementById('email');
    let pattern = /[a-z]+\@[a-z]+\.[a-z]+/;
    inputField.addEventListener('change', (e) => {
        let emailAddress = inputField.value;

        if (!pattern.test(emailAddress)) {
            e.target.className = 'error';
        } else {
            e.target.className = '';
        };
    });
};
