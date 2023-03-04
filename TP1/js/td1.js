'use strict';

// M413 - TD1
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

function onLoad() {
	console.log('In onLoad() function…');
	// Your JavaScript code goes here !
	defineHeading1();
	defineHeading2();
	defineHeading3();
	defineHeading4();
	swapInnerHTML();
	dateAlter();
	getNbDays();
	clock();
	updateGraphicClock();
	updateClock1();
	// updateClock2();
	changeColor();
	menu();
	search();
}

function defineHeading1() {
	let title = document.getElementById("title");
	title.innerHTML = "Nouveau titre";
}

function defineHeading2() {
	let heading2 = document.getElementsByTagName("h2")[0];
	heading2.innerHTML = "premier titre h2";
}

function defineHeading3() {
	let heading3 = document.getElementsByTagName("h2");
	if (heading3.length == 0) {
		document.title = "Lopes Mateus"
	} else {
		document.title = heading3[heading3.length - 1].textContent;
	}
}

function defineHeading4() {
	let heading4 = document.getElementsByClassName("firstOrLast");
	if (heading4 % 2 == 0) {
		document.title = heading4[0].textContent;
	} else {
		document.title = heading4[heading4.length - 1].textContent;
	}
}

function swapInnerHTML() {
	let textes = document.getElementsByTagName("p");
	let temp = textes[0].textContent;
	textes[0].innerHTML = textes[1].textContent;
	textes[1].innerText = temp;
}

function dateAlter() {
	const days = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
	const months = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];

	let date = new Date();
	let day = date.getDay();
	let month = date.getMonth();
	let num = date.getDate();
	let year = date.getFullYear();
	let stringDate = days[day - 1] + " " + num + " " + months[month] + " " + year;
	let el = document.getElementsByTagName("meta");
	let firstAuthor = el[1].getAttribute("content");
	let lastAuthor = el[el.length - 1].getAttribute("content");
	document.getElementById("update-date").innerHTML = "Editer le " + stringDate + " par " + lastAuthor;
}

function getNbDays() {
	let p = document.getElementById("nbDays");
	p.addEventListener("click", function () {
		let juillet19 = new Date('2023-07-19');
		let date = new Date();
		let month = date.getMonth();
		let day = date.getDate();
		let year = date.getFullYear();
		let today = new Date(year + "-" + (month + 1) + "-" + day);
		let diff = Math.floor((juillet19 - today) / (1000 * 60 * 60 * 24));
		if (diff > 1) {
			p.innerHTML = p.innerHTML.replace("xxx", diff);
		} else {
			p.innerHTML = p.innerHTML.replace("xxx", diff);
			p.innerHTML = p.innerHTML.replace("jours", "jour");
		}
	})
}

function clock() {
	let clock = document.getElementById("clock");
	let date = new Date();
	let hour = date.getHours();
	let minute = date.getMinutes();
	let second = date.getSeconds();
	if (second.length == 1) {
		second = "0" + second;
	}
	if (hour.length == 1) {
		hour = "0" + hour;
	}
	if (minute.length == 1) {
		minute = "0" + minute;
	}
	clock.innerHTML = hour + ":" + minute + ":" + second;
}

function updateClock1() {
	window.setInterval(clock, 100);
	window.setInterval(updateGraphicClock, 100);
}

function updateClock2() {
	window.setTimeout(clock, 2000);
}

function updateGraphicClock() {
	let clock = document.getElementById("graphic-clock");
	let images = clock.getElementsByTagName("img");
	let date = new Date();
	let hour = date.getHours() + "";
	let minute = date.getMinutes() + "";
	let second = date.getSeconds() + "";
	if (second.length == 1) {
		second = "0" + second;
	}
	if (hour.length == 1) {
		hour = "0" + hour;
	}
	if (minute.length == 1) {
		minute = "0" + minute;
	}

	for (let i = 0; i < 2; i++) {
		images[i].src = "./assets/images/" + hour[i] + ".gif";
		images[i + 2].src = "./assets/images/" + minute[i] + ".gif";
		images[i + 4].src = "./assets/images/" + second[i] + ".gif";
	}
}

function changeColor() {
	let input = document.getElementById("colorChanger");
	input.addEventListener("input", function () {
		console.log((input.value).length);
		if ((input.value).length == 0) {
			input.className = "white"
		} else if ((input.value).match('^[0-9]+$')) {
			input.className = "green"
		} else if ((input.value).match('^[a-zA-Z]+$')) {
			input.className = "red"
		}
	})
}

function menu() {
	let aside = document.getElementById("aside");
	let addPlus = aside.getElementsByClassName("addPlus");

	for (let i = 0; i < addPlus.length; i++) {
		let plus = document.createElement("span");
		plus.innerHTML = "+ ";
		plus.className = "clickable"
		addPlus[i].insertBefore(plus, addPlus[i].firstChild);
		plus.addEventListener("click", function () {
			if (plus.innerText == "+ ") {
				plus.innerHTML = "- ";
				addPlus[i].getElementsByTagName("ul")[0].className = "displayed";
			} else {
				plus.innerHTML = "+ "
				addPlus[i].getElementsByTagName("ul")[0].className = "notDisplayed";
			}
		})
	}



}

function search() {
	const button = document.getElementById("search-button");
	button.addEventListener("click", function () {
		searching(document.getElementById('search').value);
	});
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