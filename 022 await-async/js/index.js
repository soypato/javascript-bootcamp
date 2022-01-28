const makeFakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		const randNum = Math.random();
		setTimeout(() => {			
			if (randNum < 0) {
				resolve({data: 'hi', status: 200});
			} else {
				reject({data: 'Not found', status: 404});
			}
		}, 1000);
	});
}

async function makeRequest(){
	try {
		let data1 = await makeFakeRequest('/page1');
		console.log(data1);
	} catch (e) {
		console.log('Error: ', e);
	}
} 