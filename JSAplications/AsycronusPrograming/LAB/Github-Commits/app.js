function loadCommits() {
    let userNameRef = document.querySelector('#username');
    let repoRef = document.querySelector('#repo');
    document.querySelector('#commits').innerHTML = '';
    
    let userName = userNameRef.value;
    let repoName = repoRef.value;
    userNameRef.value = '';
    repoRef.value = '';

    let url = `https://api.github.com/repos/${userName}/${repoName}/commits`

    async function getAsyncData(url) {
        try {
            let response = await fetch(url);
            if (response.status < 400) {
                let data = await response.json();
                Array.from(data).forEach(element => {
                    let li = document.createElement('li');
                    li.textContent = `${element.commit.author.name}: ${element.commit.message}`;

                    document.querySelector('#commits').appendChild(li);
                });
            } else {
                throw ({
                    status: response.status,
                    statusText: response.statusText
                });
            };
        }
        catch (err) {
            let li = document.createElement('li');
            li.textContent = `Error: ${err.status} ${err.statusText}`;

            document.querySelector('#commits').appendChild(li);
        };
    };
    getAsyncData(url);
};
