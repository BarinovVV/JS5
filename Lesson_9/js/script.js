window.addEventListener('DOMContentLoaded', function() {
	'use strict';

	let lesson = document.querySelector('h2'),
			title = document.querySelector('title');

	lesson.textContent = 'Домашнее задание Урок № 9';
	title.textContent = 'Lesson 9';
	lesson.style.textAlign = 'center';

	// var audio = new Audio('../js/sound.mp3');
	// 		audio.play();
	// let audio  = document.getElementById('audio'),
	// 		myBody = document.querySelector('body');

	// myBody.addEventListener('click', function() {
	// 	audio.play();
		
	// })


	let age = document.getElementById('age');
	 
	function showUser(surname, name) {
	         alert("Пользователь " + surname + " " + name + ", его возраст " + age.value);
	}
	 
	showUser('Артем', 'Исламов');



});

window.onwheel = function() {
 let audio  = document.getElementById('audio');
		audio.play();

}