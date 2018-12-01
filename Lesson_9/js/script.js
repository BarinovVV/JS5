window.addEventListener('DOMContentLoaded', function() {
	'use strict';

	let lesson = document.querySelector('h2'),
			title = document.querySelector('title');

	lesson.textContent = 'Домашнее задание Урок № 9';
	title.textContent = 'Lesson 9';
	lesson.style.textAlign = 'center';

	let age = document.getElementById('age');

	function showUser(surname, name) {
	         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
	}

	showUser.call(age, 'Валерий', 'Баринов');

});

