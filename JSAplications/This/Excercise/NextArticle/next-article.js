function getArticleGenerator(articles) {
    let object = {
        articles: articles,
        index: 0,
        newObject: () => {
            if (object.index < object.articles.length) {
                let newElement = document.createElement('div');
                newElement.textContent = object.articles[object.index];
                object.articles.splice(0, 1);
                return newElement;
            };
        },
    };

    return () => {
        document.querySelector('#content').appendChild(object.newObject());
        let returnValue = object.newObject;
        return returnValue;
    };
};
