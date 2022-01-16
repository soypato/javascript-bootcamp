const p1 = {
	score: 0,
	display: document.querySelector('#p1Display'),
	button: document.querySelector('#p1Button')
}

const p2 = {
	score: 0,
	display: document.querySelector('#p2Display'),
	button: document.querySelector('#p2Button')
}

function updateScores(player, opponent){
	if(!isGameOver){
		player.score += 1;
		if (player.score == winningScore){
			isGameOver = true;		
			player.display.classList.add('winner')
			opponent.display.classList.add('loser')
			opponent.button.disabled = true;
			player.button.disabled = true
		}
		player.display.textContent = player.score;
	}
}

const playToSelect = document.querySelector('#playTo')
const resetButton = document.querySelector('#resetButton');
let winningScore = 3;
let isGameOver = false;

p1.button.addEventListener('click', () =>{
	updateScores(p1, p2)
})

p2.button.addEventListener('click', () =>{
	updateScores(p2, p1)
})


const resetFunction = () => {
	isGameOver = false;
	for (let p of [p1, p2]) {
		p.score = 0;
		p.display.textContent = 0;
		p.display.classList.remove('winner', 'loser');
		p.button.disabled = false;
	}
}

playToSelect.addEventListener('change',function() {
	winningScore = parseInt(this.value);
	resetFunction();
})

resetButton.addEventListener('click', resetFunction);


	