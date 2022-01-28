const h1 = document.querySelector('h1');
const info = document.querySelector('#info');
const formSearch = document.querySelector('#form-search');
const inputSearch = document.querySelector('#input-search');
const band = prompt('Artista')
const url = `https://itunes.apple.com/search?term=${band}`

	fetch(url)
	.then(response => response.json())
	.then(data => {
	const dataMap = data.results.map(function(arr){
		return ` \n Nombre del artista: ${arr.artistName} || Código del artista: ${arr.artistId}`;
	})
	h1.innerText = `Resultados para ${band}`;
	info.innerText = dataMap
	})
.catch(err => console.log(err))

