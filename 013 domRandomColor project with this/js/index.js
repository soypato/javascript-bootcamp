const h1 = document.querySelector('h1');
const button = document.querySelector('button');
const span = document.querySelector('span')

const generateRandomColor = () => {
	const r = Math.floor(Math.random()*255);
	const g = Math.floor(Math.random()*255);
	const b = Math.floor(Math.random()*255);
	return `rgb(${r}, ${g}, ${b})`;
}


function makeRandColor(){
	const newColor = generateRandomColor();
	console.log(newColor);
	this.innerText = newColor;
	this.style.backgroundColor = newColor;
	h1.innerText = newColor;
}


button.addEventListener('click', makeRandColor);





