window.addEventListener('DOMContentLoaded', function() {
	'use strict';

	let lesson = document.querySelector('h2'),
			title = document.querySelector('title'),
			myBody = document.querySelector('body');

	lesson.textContent = 'Домашнее задание Урок № 10';
	title.textContent = 'Lesson 10';
	lesson.style.textAlign = 'center';

	class Options {
		constructor(height, width, bg, fontSize, textAlign) {
			this.height = height;
			this.width = width;
			this.bg = bg;
			this.fontSize = fontSize;
			this.textAlign = textAlign;
		}

		createDiv() {
			let newDiv = document.createElement('div');

			myBody.appendChild(newDiv);
			newDiv.textContent = 'Мы создали новый div';
			newDiv.style.cssText = `height: ${this.height}px;
			width: ${this.width}px; 
			background-color: ${this.bg};
			font-size: ${this.fontSize}px;
			text-align: ${this.textAlign};`;


		}


	}

	let newDiv = new Options(300, 300, '#ccc', 40, 'center',);

	newDiv.createDiv();


});