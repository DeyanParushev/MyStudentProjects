function growingWord() {
    let divElements = document.getElementsByClassName('conditions');
    let paragraphArray = divElements[0].getElementsByTagName('p');
    let paragraph = paragraphArray[paragraphArray.length - 1];

    let paragraphTextSize = paragraph.style.cssText.fontsize;

    if (paragraphTextSize === 0) {
        paragraph.style.color = "blue";
        paragraph.style.fontSize = '2px';
    }else if (paragraphTextSize === '2px'){
        paragraph.style.color = "green";
        paragraph.style.fontSize = '4px';
    }else if (paragraphTextSize === '4px'){
        paragraph.style.color = "red";
        paragraph.style.fontSize = '8px';
    }else if (paragraphTextSize === '8px'){
        paragraph.style.color = "blue";
        paragraph.style.fontSize = '2px';
    }
}