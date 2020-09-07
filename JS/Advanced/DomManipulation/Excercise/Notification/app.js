function notify(message) {
    document.getElementById('notification').innerHTML = message;
    document.getElementById('notification').style.display = 'block';

    let interval = setTimeout(hide, 2000);

    function hide(){
        document.getElementById('notification').style.display = 'none';
    };
};
