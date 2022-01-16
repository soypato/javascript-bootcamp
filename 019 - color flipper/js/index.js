const h1 = document.querySelector('h1');

const primary = {
	selector: document.querySelector('#btn-primary'),
	colors: ['#f00', '#ff0','#00f']
}
const secondary = {
	selector: document.querySelector('#btn-secondary'),
	colors: ['#FFA500', '#00FF00','#7f00ff']
}

const random = document.querySelector('#btn-random');


const restoreH1 = () => {
	setTimeout(() => {
		h1.innerText = 'Color Flipper';
	}, 3000)
}

const selectorColors = (btn) => {
	let randomColors = Math.floor(Math.random() * 3) + 1;
	let outColor;

	switch(randomColors){
		case 1:
			outColor = btn.colors[0];
			break;
		case 2:
			outColor = btn.colors[1];
			break;
		case 3:
			outColor = btn.colors[2];
			break;
	}	  

	h1.innerText = outColor;
	restoreH1();
	console.log(`Color: ${outColor} || Number ${randomColors}`);
	return outColor;


}

const randomHex = () => {
	const r = Math.floor(Math.random()*255);
	const g = Math.floor(Math.random()*255);
	const b = Math.floor(Math.random()*255);

	const colorsRGB = `rgb(${r}, ${g}, ${b})`;

	h1.innerText = colorsRGB
	restoreH1();
	return colorsRGB;
}

primary.selector.addEventListener('click',()=>{
	document.body.style.backgroundColor = selectorColors(primary);
});

secondary.selector.addEventListener('click',()=>{
	document.body.style.backgroundColor = selectorColors(secondary);
});

random.addEventListener('click', () => {
    document.body.style.backgroundColor = randomHex();
})

