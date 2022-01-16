const colorChanges = (color, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.body.style.color = color;
			resolve();
		}, delay)
	})
}

colorChanges('red', 1000)
.then(() => {console.log(''),1000})