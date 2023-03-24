'use strict';

const boxList = document.querySelectorAll('.box');

boxList.forEach(function(box) {
	box.addEventListener('click', function selection(event) {
		let clickedBox = event.target;
		let emptyBox = document.querySelector('.empty');

		if (clickedBox !== box) {
			clickedBox = clickedBox.parentNode;
		}

		if (clickedBox === emptyBox) {
			return;
		}

		const clickedBoxRow = clickedBox.id.charAt(1);
		const clickedBoxColumn = clickedBox.id.charAt(4);
		const emptyBoxRow = emptyBox.id.charAt(1);
		const emptyBoxColumn = emptyBox.id.charAt(4);

		if (Math.abs(parseInt(emptyBoxColumn - clickedBoxColumn) + parseInt(emptyBoxRow - clickedBoxRow)) === 1 ) {
			clickedBox.classList.add('empty');
			emptyBox.classList.remove('empty');
			emptyBox.innerHTML = clickedBox.innerHTML;
			clickedBox.textContent = '';
		}
	})
})

