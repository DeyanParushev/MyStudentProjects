function createArticle() {

    let articleName = document.getElementById('createTitle').value;
    let newArticleTitleElement = document.createElement('h3');
    newArticleTitleElement.textContent = articleName;

    let textContentFromField = document.getElementById('createContent').value;
    let newArticleContentElement = document.createElement('p');
    newArticleContentElement.textContent = textContentFromField;

    if (articleName !== '' && textContentFromField !== '') {
        let newArticleElement = document.createElement('article');
        newArticleElement.appendChild(newArticleTitleElement);
        newArticleElement.appendChild(newArticleContentElement);

        document.getElementById('articles').appendChild(newArticleElement);
        function clearFields() {
            document.getElementById('createTitle').value = '';
            document.getElementById('createContent').value = '';
        }

        clearFields();
    }
}

