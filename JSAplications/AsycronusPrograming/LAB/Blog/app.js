function attachEvents() {
    let buttonLoad = document.querySelector('#btnLoadPosts');
    let viewButton = document.querySelector('#btnViewPost');
    let postsRef = document.querySelector('#posts');
    let allPostsUrl = `https://blog-apps-c12bf.firebaseio.com/posts.json`
    let desiredPostUrl = `https://blog-apps-c12bf.firebaseio.com/posts/`;
    let contentArr = [];

    buttonLoad.addEventListener('click', async (event) => {
        let response = await fetch(allPostsUrl);
        let responseObject = await response.json();
        let responseObjectEntriesArr = Object.entries(responseObject)[0];
        
        contentArr = Array.from(Object.entries(responseObjectEntriesArr[1]));
        contentArr.forEach(event => {
            let option = document.createElement('option');
            option.value = event[0];
            option.textContent = event[1].title;

            postsRef.appendChild(option);
        });
    });

    viewButton.addEventListener('click', async () => {
        let option = postsRef.selectedOptions[0];
        let post = contentArr.find(x => x[0] === option.value);
        let postResponse = await fetch(desiredPostUrl + post[1].id + '.json');
        let returnedObject = await postResponse.json();
        console.log(returnedObject);
    });
};

attachEvents();
