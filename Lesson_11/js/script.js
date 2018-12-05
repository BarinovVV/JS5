window.addEventListener('DOMContentLoaded', function() {
	'use strict';

	let lesson = document.querySelector('h2'),
			title = document.querySelector('title'),
			myBody = document.querySelector('body');

	lesson.textContent = 'Домашнее задание Урок № 11';
	title.textContent = 'Lesson 11';
	lesson.style.textAlign = 'center';

	// let options = {
	// 	width: 1400,
	// 	height: 800,
	// 	background: 'red',
	// 	font: {
	// 		size: '16px',
	// 		color: 'white'
	// 	}
	// };

	// console.log(JSON.stringify(options));
	// console.log(JSON.parse(JSON.stringify(options)));

	let inputRub = document.querySelector('#rub'),
			inputUsd = document.querySelector('#usd');

	inputRub.addEventListener('input', () => {
		let request = new XMLHttpRequest();

		// request.open(method, url, async, login. pass);

		request.open('GET', 'js/current.json');
		request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
		request.send();

		request.addEventListener('readystatechange', function {
			if (request.readyState === 4 && request.status == 200) {
				let data = JSON.parse(request.response);

				inputUsd.value = +(inputRub.value / data.usd).toFixed(2);

			} else {

				inputUsd.value = 'Что-то пошло не так!';

			}
		});

	});

});