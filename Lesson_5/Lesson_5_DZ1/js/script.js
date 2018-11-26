'use strict';

console.log("Начинаем делать урок 5");

let menuItems = document.querySelectorAll('.menu-item'),
		menu = document.querySelector('.menu'),
		main = document.getElementsByTagName('body'),
		title = document.querySelector('#title');


let arr = [];
menuItems.forEach(function(item, i) {
	console.log(menuItems[i].innerText);
	arr.push(menuItems[i].innerText);
});
menuItems[1].innerText = 'Второй пункт';
menuItems[2].innerText = 'Третий пункт';

main[0].style.backgroundImage = 'url(../Lesson_5_DZ1/img/apple_true.jpg)';

let li = document.createElement('li');
li.classList.add('menu-item');
li.innerText = 'Пятый пункт';
menu.appendChild(li);
title.innerHTML = "Мы продаем только <strong>подлинную</strong> технику Apple";