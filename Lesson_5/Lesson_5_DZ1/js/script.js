'use strict';

console.log("Начинаем делать урок 5");

let menu = document.querySelectorAll('.menu-item'),
		main = document.getElementsByTagName('body');


let arr = [];
menu.forEach(function(item, i) {
	console.log(menu[i].innerText);
	arr.push(menu[i].innerText);
});
menu[1].innerText = 'Второй пункт';
menu[2].innerText = 'Третий пункт';
// menu[4].innerText = 'Пятый пункт';

main[0].style.backgroundImage = 'url(../Lesson%205%20DZ1/img/apple_true.jpg)';
