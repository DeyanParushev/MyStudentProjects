function focus() {
    let focusDivs = Array.from(document.getElementsByTagName('body')[0].children[0].children);

    focusDivs.forEach(element => {
        element.children[1].addEventListener('focus', (e) => {
            element.className =  'focused';
        });

        element.children[1].addEventListener('blur', (e) => {
            element.className =  '';
        });
    });
}
