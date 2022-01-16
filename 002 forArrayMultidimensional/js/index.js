const pasajeros = [
  ["Angelina", "Patricio", "Mora"],
  ["Carina", "Martín", "Pablo"],
  ["José", "Franco", "Nico"]
];

for (let i = 0; i < pasajeros.length; i++){
    const fila = pasajeros[i];
    console.log(`Fila ${i+1}`);
    for (let j = 0; j < fila.length; j++){
    	console.log(fila[j]);
	}
}