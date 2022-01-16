const verdurasCompradas = [];
const cantidadDeVerduras = prompt("Introduzca cuántas verduras quiere");

parseInt(cantidadDeVerduras);

for (var i = 0; i < cantidadDeVerduras; i++) {
	verdurasCompradas.push(prompt(`Nombre de la verdura número ${i + 1}`));
}

console.log("Las verduras que tenemos: \n" + verdurasCompradas);

