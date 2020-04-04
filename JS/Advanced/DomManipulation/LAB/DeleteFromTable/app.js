function deleteByEmail() {
    let searchedEmail = document.getElementsByTagName('input')[0].value;

    let tableRows = Array.from(document.querySelectorAll('tbody tr'));
    //let emails = tableRows.map(x => x.children[1].innerHTML);
    let emailNode = tableRows.filter(x=> x.children[1].innerHTML === searchedEmail);

    if(emailNode.length > 0){
       let parentNode = emailNode[0].parentNode;
       parentNode.removeChild(emailNode[0]);
        document.getElementById('result').innerHTML = 'Deleted.';
    }else{
        document.getElementById('result').innerHTML = 'Not found.';
    }
}
