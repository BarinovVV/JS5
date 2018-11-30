window.addEventListener('DOMContentLoaded', function() {
	'use strict';

	let lesson = document.querySelector('h2');

	lesson.textContent = 'Домашнее задание Урок № 9';
	lesson.style.textAlign = 'center';

	// var audio = new Audio('../js/sound.mp3');
	// 		audio.play();
	let audio  = document.getElementById('audio'),
			myBody = document.querySelector('body');

	myBody.addEventListener('click', function() {
		audio.play();
		
	})



});