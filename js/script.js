const changeButton = document.querySelector('.button')
changeButton.addEventListener('click', getUserInput);


// -----------------------------------------------------------------
function getUserInput() {
		let num;

		do {
			num = prompt('Type a number between 0 and 200');
			if (num === null) break;

			num = +num
			if (num < 0) num *= -1;

		} while (num > 200 || !(!!num));  // !! - return the boolean value, false for the "falsy values"

		getGrid(num);
	}

// -----------------------------------------------------------------
function getGrid (len) {
	const grid = document.querySelector('#grid-squares');
	grid.textContent = '';
	for (let i = 0; i < len; i++) {
		const row = document.createElement('div');
		row.classList.add('row');
		for (let j = 0; j < len; j++) {
			const cell = document.createElement('div');
			cell.classList.add('cell');
			row.append(cell);
		}
		grid.append(row);
	}
	getCells();
}

// -----------------------------------------------------------------
function getCells() {
	const cells = document.querySelectorAll('.cell');
	cells.forEach((cell) => {
				cell.addEventListener('mousemove', (event) => {
					if (event.ctrlKey) {
						console.log("ctrl Key was pressed");
						cell.style.backgroundColor = 'white';
					}
					else {
						console.log('HOVER!!');
						// These work the same, but there are some subtle diferences between the results ···
						//cell.style.backgroundColor = `hsl(${random(360)}, ${random(100)}%, ${random(100)}%)`;
						//cell.style.backgroundColor = `rgb(${random(100)}%, ${random(100)}%, ${random(100)}%)`;
						cell.style.backgroundColor = `hsl(${random(360)}, 75%, 75%)`;  // I like these colors!
					}
					console.log(cell.style.backgroundColor);
					console.log(typeof cell.style.backgroundColor)
				})
		});
}
function random(number) {
	return Math.floor(Math.random() * (++number)) + 1;
}
