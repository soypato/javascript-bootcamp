const url = 'https://api.cryptonator.com/api/ticker/btc-usd'

fetch(url)
.then(response => response.json())
.then(data => {
	console.log('Precio del BTC actual: ', data.ticker.price)
})
.catch(err => console.log(err))