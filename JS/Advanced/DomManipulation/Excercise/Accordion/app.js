function toggle() {
    let currentState = document.getElementsByClassName('head')[0]
        .children[0]
        .innerHTML;

    let extraContent = document.getElementById('extra');

    if (currentState === "More") {
        document.getElementsByClassName('head')[0]
            .children[0]
            .innerHTML = 'Less';

        extraContent.style.display = 'block';
    } else if (currentState === 'Less') {
        document.getElementsByClassName('head')[0]
            .children[0]
            .innerHTML = 'More';

        extraContent.style.display = 'none';
    };
};
