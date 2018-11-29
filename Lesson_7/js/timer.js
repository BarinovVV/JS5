window.addEventListener('DOMContentLoaded', function() {
	'use strict';

	let timerText = document.querySelector('.timer');

	timerText.style.fontSize = '25px';


// function currentTime() {
// 		let now = new Date();
// 		timerText.textContent = now.toLocaleTimeString();
// }

// let timer = setInterval(currentTime, 1000);

let timer = setTimeout(function currentTime() {
	let now = new Date();
			timerText.textContent = now.toLocaleTimeString();
			setTimeout(currentTime, 1000);
});


});