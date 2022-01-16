const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve()
		}, 1000)
	})
}

fakeRequest('ksdfkdj')
.then((data) => {
	console.log('done')
})
.catch((err) => {
	console.log('error')
})


