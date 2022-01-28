const req = new XMLHttpRequest();

req.onload = function (){
	console.log('Todo listo :)');
	const data 	= JSON.parse(this.responseText); // analiza un string como texto
	console.log(data.ticker.price); // ruta del JSON y encabezados
}
req.onerror = function(){
	console.log('Error al traer los datos :(');
	console.log(this);
}

req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
req.send();