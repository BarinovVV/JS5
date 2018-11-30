window.addEventListener('DOMContentLoaded', function() {
	'use strict';

	let lesson = document.querySelector('h2'),
			btn = document.querySelector('button'),
			box = document.querySelector('.box'),
			width = box.clientWidth,
			height = box.clientHeight;

	lesson.textContent = 'Домашнее задание Урок № 8';
	lesson.style.textAlign = 'center';

	console.log(width);
	console.log(height);
	console.log(box.getBoundingClientRect().left);
	console.log(document.documentElement.clientHeight);
	console.log(document.documentElement.clientWidth);
	console.log(document.documentElement.scrollTop);

	btn.addEventListener('click', function() {
		// box.style.height = box.scrollHeight + 'px';
		console.log(box.scrollTop);
		box.scrollTop = 0;
	});

	scrollBy(0, 200);






});