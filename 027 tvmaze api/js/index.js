const h1 = document.querySelector('h1')
const form = document.querySelector('#search-form');
const imgJson = document.querySelector('#img-json')
const searchInfo = document.querySelector('#search-info')

form.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log('Envíado')
	const searchTerms = form.elements.query.value;
	fetch(`https://api.tvmaze.com/singlesearch/shows?q=${searchTerms}`)
	.then(response => response.json())
	.then(data => {
		console.log(data.officialSite)
		imgJson.src = data.image.medium;
		const ulInfo = document.createElement('ul')
		ulInfo.innerHTML = data.name
		searchInfo.appendChild(ulInfo)
		h1.innerHTML = `Resultados para ${data.name}`
		})
	.catch((e) => console.error(`ERROR //  ${e}`))
	})