function loadRepos() {
   let url = 'https://api.github.com/repos/testnakov/test-nakov-repo/issues/1';

   const httpRequest = new XMLHttpRequest();
   httpRequest.addEventListener('readystatechange', (e) => {
      if(httpRequest.readyState === 4){
         document.getElementById('res').innerHTML += httpRequest.responseText;
         id++;
      };
   });

   httpRequest.open("GET", url);
   httpRequest.send();
};
