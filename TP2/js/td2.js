/**
* 
* M413 - TD2
* * 
* 	@author Jean-Michel Bruneau
*	@copyright UCA - IUT -INFO
* 	@version	1.0
* 	@date			2021-01-31
*
*/
"use strict";

// M413 - TD2
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

function onLoad() {
	console.log('Processus de chargement du document terminé…');
	//
	// All your JavaScript code goes here !
	//
	initSelect();
	addElements();
	search();
}

function initSelect() {
	document.body.addEventListener('click', select2);
}

function select(event) {
	event.preventDefault();
	event.stopPropagation();
	let target = event.target;
	if (target !== document.body) {
		if (target.classList.contains('selected')) {
			target.classList.remove('selected');
		} else {
			target.classList.add('selected');
		}
	}
}

function select2(event) {
	let target = event.target;
	if (target.classList.contains('selected2')) {
		target.classList.remove('selected2');
	} else if (event.id !== 'insert-div' && !target.closest('#insert-div')) {
		let selectedElements = document.getElementsByClassName('selected2');
		for (let i = 0; i < selectedElements.length; i++) {
			selectedElements[i].classList.remove('selected2');
		}
		target.classList.add('selected2');
	}
}

function addElements() {
	let insertDiv = document.createElement('div');
	insertDiv.id = 'insert-div';

	let insertSelect = document.createElement('select');
	insertSelect.id = 'insert-type';
	insertSelect.name = 'type';

	let divOption = document.createElement('option');
	divOption.value = 'div';
	divOption.textContent = 'div';
	insertSelect.appendChild(divOption);

	let pOption = document.createElement('option');
	pOption.value = 'p';
	pOption.textContent = 'p';
	insertSelect.appendChild(pOption);

	let spanOption = document.createElement('option');
	spanOption.value = 'span';
	spanOption.textContent = 'span';
	insertSelect.appendChild(spanOption);

	insertDiv.appendChild(insertSelect);

	let insertText = document.createElement('input');
	insertText.id = 'insert-text';
	insertText.type = 'text';
	insertText.value = 'My New Text Element';
	insertDiv.appendChild(insertText);

	let body = document.getElementsByTagName('body')[0];
	body.insertBefore(insertDiv, body.firstChild);
}

function insertElement(target) {
	let select = document.getElementById('insert-type');
	let input = document.getElementById('insert-text');
	let type = select.value;
	let text = input.value;
	let newElement = document.createElement(type);
	newElement.innerText = text;

	target.target.parentElement.insertBefore(newElement, target.target);
}


function search() {
	const interactive = document.getElementById("Isearch");
	interactive.addEventListener("input", function () {
		searching(document.getElementById('Isearch').value);
	});
}


function searching(searchText) {
	let pageContentBackup = '';
	removeAllSelectSpans();
	if (!searchText) {
		return;
	}

	let textNodes = getTextNodes(document.body);

	if (!pageContentBackup) {
		pageContentBackup = document.body.innerHTML;
	} else {
		document.body.innerHTML = pageContentBackup;
	}

	textNodes.forEach((node) => {
		let parent = node.parentNode;
		let index = node.textContent.trim().toLowerCase().indexOf(searchText);
		console.log(index);

		if (index !== -1) {
			let span = document.createElement('span');
			span.className = "select";
			let selectedText = node.splitText(index);
			selectedText.splitText(searchText.length);
			span.appendChild(selectedText.cloneNode(true));
			parent.replaceChild(span, selectedText);
		}
	});
}

function getTextNodes(node) {
	let textNodes = [];
	if (node.nodeType === Node.TEXT_NODE) {
		textNodes.push(node);
	} else {
		let childNodes = node.childNodes;
		for (let i = 0; i < childNodes.length; i++) {
			textNodes.push(...getTextNodes(childNodes[i]));
		}
	}
	return textNodes;
}

function removeAllSelectSpans() {
	let selectClass = 'select';
	let selectSpans = document.querySelectorAll(`.${selectClass}`);
	selectSpans.forEach((span) => {
		let parent = span.parentNode;
		parent.replaceChild(span.firstChild, span);
	});
}
// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;
