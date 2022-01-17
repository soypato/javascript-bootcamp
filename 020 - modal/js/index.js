const modal = document.querySelector('#modal');
const buttonModal = document.querySelector('#buttonModal');
const acceptButton = document.querySelector('#accept');

buttonModal.addEventListener('click', () => {
	modal.style.animation = 'fadeIn .2s';
	modal.style.display = 'block';

})
acceptButton.addEventListener('click', () => {
	modal.style.animation = 'fadeOut .2s';
		modal.style.display = 'none';

})