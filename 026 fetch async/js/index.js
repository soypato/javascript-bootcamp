const btcPrice = async () => {
	try{
		const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
		const data = await res.json();
		console.log(data.ticker.price);
	}
	catch(e){
		console.log('error')
	}
}