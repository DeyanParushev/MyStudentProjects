function lockedProfile() {
    let buttonElements = document.getElementsByTagName('button');

    Array.from(buttonElements).forEach(element => {
        element.addEventListener('click', (e) => {
            if (e.target.tagName.toLowerCase() === 'button') {
                let parentDiv = e.target.parentNode.children;
    
                if (parentDiv[4].checked === true) {
                    if (e.target.innerHTML === 'Show more') {
                        e.target.innerHTML = 'Hide it';
                        parentDiv[9].style.display = 'block';
                    } else {
                        e.target.innerHTML = 'Show more';
                        parentDiv[9].style.display = 'none';
                    }
                };
            };
        });
    });
};
