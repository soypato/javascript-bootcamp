const form = document.querySelector('#catAdd');
const catForm = document.querySelector('#catForm');
const ul = document.querySelector('#cats');


form.addEventListener('submit', (e) => {
	e.preventDefault(); // previene la redirección
	const catName = catForm.value;
	const newLI = document.createElement("LI");
	newLI.innerText = catName;
	ul.append(newLI);
})