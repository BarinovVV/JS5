window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	let tab = document.querySelectorAll('.info-header-tab'),
			info = document.querySelector('.info-header'),
			tabContent = document.querySelectorAll('.info-tabcontent');

	function hideTabContent(a) {
		for ( let i = a; i < tabContent.length; i++) {
				tabContent[i].classList.remove('show');
				tabContent[i].classList.add('hide');
		};
	}; 

	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
				tabContent[b].classList.remove('hide');
				tabContent[b].classList.add('show');
		};
	};

	info.addEventListener('click', (event) => {
		let target = event.target;

		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tab.length; i++) {
					if (target == tab[i]) {
						hideTabContent(0);
						showTabContent(i);
						break;
					}
			}
		}
	});

	//Timer

	let deadLine = '2018-12-04';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
				seconds = Math.floor((t/1000) % 60),
				minutes = Math.floor((t/1000/60) % 60),
				hours = Math.floor((t/(1000*60*60)));

		if (t <= 0) {
			t = 0;
			seconds = 0;
			minutes = 0;
			hours = 0;
			document.querySelector('.timer-action').textContent = 'Акция уже закончилась'; 
		}

				return {
					'total': t,
					'hours': hours,
					'minutes': minutes,
					'seconds': seconds
				}
	};


	function setClock(id, endtime) {
		let timer = document.getElementById(id),
				hours = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds'),
				timeInterval = setInterval(upDateClock, 1000);


		function upDateClock() {
				let t = getTimeRemaining(endtime);
				hours.textContent = to2(t.hours);
				minutes.textContent = to2(t.minutes);
				seconds.textContent = to2(t.seconds);

				if (t.total <= 0) {
					clearInterval(timeInterval);
				}
		}

	};

	function to2(val) {
	 return (val < 10 ? "0" + val : val);
	}

	setClock('timer', deadLine);

	//Modal

	let more = document.querySelector('.more'),
			description = document.querySelectorAll('.description-btn'),
			overlay = document.querySelector('.overlay'),
			close = document.querySelector('.popup-close');

	more.addEventListener('click', () => {
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
			this.classList.add('more-splash');
	});

	close.addEventListener('click', () => {
			overlay.style.display = '';
			more.classList.remove('more-splash');
			document.body.style.overflow = '';

	});

	description.forEach(function(item) {
		item.addEventListener('click', () => {
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
			this.classList.add('more-splash');
		})
	})

	// Form

	let message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с вами свяжемся!',
		failure: 'Что-то пошло не так...'
	};
	let form = document.querySelector('.main-form'),
			input = form.getElementsByTagName('input'),
			statusMessage = document.createElement('div');

			statusMessage.classList.add('status');

		form.addEventListener('submit', function(event) {
			event.preventDefault();
			form.appendChild(statusMessage);

			let request = new XMLHttpRequest();
			request.open('POST', 'server.php');
			request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

			let formData = new FormData(form);
			request.send(formData);

		})

});

