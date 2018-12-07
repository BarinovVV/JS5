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

    more.addEventListener('click', function() {
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
        item.addEventListener('click', function() {
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
        contactForm = document.querySelector('#form'),
        contactInput = contactForm.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    // Отправка формы из модалки на промисах
    form.addEventListener('submit', event => {
        event.preventDefault();
        form.appendChild(statusMessage);
        let formMessage = document.querySelector('.status');
        formMessage.style.cssText = `color: white;
			padding-top: 20px`;

        let formData = new FormData(form);
        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);



        function postData(data) {

            return new Promise(function(resolve, reject) {
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                request.addEventListener('readystatechange', () => {
                    if (request.readyState < 4 ) {
                        resolve()
                    } else if (request.readyState === 4 && request.status == 200) {
                        resolve()
                    } else {
                        reject()
                    }
                })
                request.send(json);
            })
        }


        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }

        postData(formData)
            .then(_ => statusMessage.innerHTML = message.loading)
            .then(_ => statusMessage.innerHTML = message.success)
            .catch(_ => statusMessage.innerHTML = message.failure)
            .then(clearInput)
    });

    //Отправка формы из контактной формы без промисов
    contactForm.addEventListener('submit', event => {
        event.preventDefault();

        contactForm.appendChild(statusMessage);
        let contactMessage = document.querySelector('.status');
        contactMessage.style.cssText = `color: yellow;
			padding-top: 20px`;

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        // request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(contactForm);

        let obj = {};

        formData.forEach(function(value, key) {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', () => {
            if (request.readyState < 4 ) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < contactInput.length; i++) {
            contactInput[i].value = '';
        }
    });


    let check = document.querySelectorAll('input[name=phone]');

    check.forEach(function(elem) {
        elem.addEventListener('focus', _ => {
            if(!/^\+\d*$/.test(elem.value))
                elem.value = '+';
        });

        elem.addEventListener('keypress', e => {
            if(!/\d/.test(e.key))
                e.preventDefault();
        });

    });

});

