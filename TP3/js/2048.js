// M413 - Taquin
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

const myBox = {
	value: "",
	lastInsert: false
};

const coordinate = {
	row: 0,
	column: 0
};

const gameBox = [];

function onLoad() {
	console.log('Processus de chargement du document terminé…');
	//
	// All your JavaScript code goes here !
	//
	init();

}
// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;



function init() {
	for (let i = 0; i < 4; i++) {
		gameBox[i] = [];
		for (let j = 0; j < 4; j++) {
			gameBox[i][j] = Object.create(myBox);
		}
	}

	document.addEventListener('keydown', handleKeyDown);
	insertValue(getNewValue(), getEmptyBox());
	insertValue(getNewValue(), getEmptyBox());
	displayGrid();
}

function handleKeyDown(event) {
	if (event.key === 'ArrowLeft') {
		moveLeft();
	} else if (event.key === 'ArrowRight') {
		moveRight();
	} else if (event.key === 'ArrowUp') {
		moveUp();
	} else if (event.key === 'ArrowDown') {
		moveDown();
	}
	insertValue(getNewValue(), getEmptyBox());
	displayGrid();
}

function insertValue(value, coordinate) {
	gameBox[coordinate.row][coordinate.column].value = value;
	resetLastInsert();
	gameBox[coordinate.row][coordinate.column].lastInsert = true;
}


function resetLastInsert() {
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			gameBox[i][j].lastInsert = false;
		}
	}
}

function displayGrid() {
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			if (gameBox[i][j].value != "") {
				let box = document.getElementById("r" + (i + 1) + "-c" + (j + 1));
				box.innerHTML = gameBox[i][j].value;
				box.classList.remove("red");
				if (gameBox[i][j].lastInsert) {
					box.classList.add("red");
				}

			} else {
				let box = document.getElementById("r" + (i + 1) + "-c" + (j + 1));
				box.innerHTML = "";
				box.classList.remove("red");
			}
		}
	}
}

function getEmptyBox() {
	let column = rd(-1, 4);
	let row = rd(-1, 4);

	while (gameBox[row][column].value != "") {
		column = rd(-1, 4);
		row = rd(-1, 4);
	}

	let co = Object.create(coordinate);
	co.row = row;
	co.column = column;
	return co;
}

function getNewValue() {
	let value = Math.random();
	if (value > 0.9) {
		return 4;
	} else {
		return 2;
	}
}

function rd(max, min) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moveLeft() {
	for (let row = 0; row < gameBox.length; row++) {
		let empty = true;
		for (let el = 0; el < gameBox[row].length; el++) {
			if (gameBox[row][el].value != "") {
				empty = false;
			}
		}
		if (!empty) {
			let index = 0;
			let firstEl = gameBox[row][index];
			for (let el = 1; el < gameBox[row].length; el++) {
				if (gameBox[row][el].value == firstEl.value) {
					gameBox[row][index].value += gameBox[row][el].value;
					gameBox[row][el].value = "";
				} else if (gameBox[row][el].value != "" && firstEl.value != "") {
					index++;
					firstEl = gameBox[row][el];
					let tmp = gameBox[row][index];
					gameBox[row][index] = gameBox[row][el];
					gameBox[row][el] = tmp;
				} else if (gameBox[row][el].value != "" && firstEl.value == "") {
					firstEl = gameBox[row][el];
					let tmp = gameBox[row][index];
					gameBox[row][index] = gameBox[row][el];
					gameBox[row][el] = tmp;
				}
			}
		}
	}
}

function moveRight() {
	for (let row = 0; row < gameBox.length; row++) {
		let empty = true;
		for (let el = 0; el < gameBox[row].length; el++) {
			if (gameBox[row][el].value != "") {
				empty = false;
			}
		}
		if (!empty) {
			let index = 3;
			let firstEl = gameBox[row][index];
			for (let el = gameBox[row].length - 2; el >= 0; el--) {
				if (gameBox[row][el].value == firstEl.value) {
					gameBox[row][index].value += gameBox[row][el].value;
					gameBox[row][el].value = "";
				} else if (gameBox[row][el].value != "" && firstEl.value != "") {
					index--;
					firstEl = gameBox[row][el];
					let tmp = gameBox[row][index];
					gameBox[row][index] = gameBox[row][el];
					gameBox[row][el] = tmp;
				} else if (gameBox[row][el].value != "" && firstEl.value == "") {
					firstEl = gameBox[row][el];
					let tmp = gameBox[row][index];
					gameBox[row][index] = gameBox[row][el];
					gameBox[row][el] = tmp;
				}
			}
		}
	}
}


function moveUp() {
	for (let column = 0; column < gameBox.length; column++) {
		let empty = true;
		for (let row = 0; row < gameBox[column].length; row++) {
			if (gameBox[row][column].value != "") {
				empty = false;
			}
		}

		if (!empty) {
			let index = 0;
			let firstEl = gameBox[index][column];
			for (let row = 1; row < gameBox.length; row++) {
				if (gameBox[row][column].value == firstEl.value) {
					gameBox[index][column].value += gameBox[row][column].value;
					gameBox[row][column].value = "";
				} else if (gameBox[row][column].value != "" && firstEl.value != "") {
					index++;
					firstEl = gameBox[row][column];
					let tmp = gameBox[index][column];
					gameBox[index][column] = gameBox[row][column];
					gameBox[row][column] = tmp;
				} else if (gameBox[row][column].value != "" && firstEl.value == "") {
					firstEl = gameBox[row][column];
					let tmp = gameBox[index][column];
					gameBox[index][column] = gameBox[row][column];
					gameBox[row][column] = tmp;
				}
			}
		}
	}
}

function moveDown() {
	for (let column = 0; column < gameBox.length; column++) {
		let empty = true;
		for (let row = 0; row < gameBox[column].length; row++) {
			if (gameBox[row][column].value != "") {
				empty = false;
			}
		}

		if (!empty) {
			let index = 3;
			let firstEl = gameBox[index][column];
			for (let row = gameBox.length - 2; row >= 0; row--) {
				if (gameBox[row][column].value == firstEl.value) {
					gameBox[index][column].value += gameBox[row][column].value;
					gameBox[row][column].value = "";
				} else if (gameBox[row][column].value != "" && firstEl.value != "") {
					index--;
					firstEl = gameBox[row][column];
					let tmp = gameBox[index][column];
					gameBox[index][column] = gameBox[row][column];
					gameBox[row][column] = tmp;
				} else if (gameBox[row][column].value != "" && firstEl.value == "") {
					firstEl = gameBox[row][column];
					let tmp = gameBox[index][column];
					gameBox[index][column] = gameBox[row][column];
					gameBox[row][column] = tmp;
				}
			}
		}
	}
}
