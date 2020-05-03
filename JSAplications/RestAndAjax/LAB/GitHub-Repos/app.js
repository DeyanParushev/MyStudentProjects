function loadRepos() {
	document.querySelector('#repos').innerHTML = '';
	let userName = document.querySelector('#username').value;
	let url = `https://api.github.com/users/${userName}/repos`;

	fetch(url)
		.then((data) => {
			return data.json();
		})
		.then((data) => {
			Array.from(data)
				.forEach(e => {
					let item = document.createElement('li');
					let link = document.createElement('a');
					link.href = e.html_url;
					link.textContent = e.full_name;

					item.appendChild(link);
					document.querySelector('#repos').appendChild(item);
				});
		})
		.catch((data) => {

		});
};
