const animales = [
	{name: 'Noa', color: 'azul'},
	{name: 'Euge', color: 'rojo'},
	{name: 'Navidad', color: 'rojo'},
	{name: 'Ki Na Ma', color: 'rojo'}
]

for (let i = 0; i < animales.length; i++) {
	if (animales[i].color === 'rojo') {
		if (animales[i].name.includes('N') === true ||
		animales[i].name.includes('n') === true	||
		animales[i].name.includes('a') === true	||
		animales[i].name.includes('A') === true) {
			console.log(animales[i]);
		}
	}
}	