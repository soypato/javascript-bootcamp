const menuButton = document.querySelector('#menuButton');
const navSlider = document.querySelector('#navSlider');

let navSliderStatus = 'closed';
navSlider.style.animation = 'slideIn .2s'

menuButton.addEventListener('click', () => {
	if (navSliderStatus === 'closed'){
		navSlider.style.display = 'inline';
		navSliderStatus = 'open'
		menuButton.innerHTML = 'Cerrar';
	} else if (navSliderStatus === 'open'){
		navSliderStatus = 'closed'
		menuButton.innerHTML = 'Menú';
		navSlider.style.display = 'none';
	}
})