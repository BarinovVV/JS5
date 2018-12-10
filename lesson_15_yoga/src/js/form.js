function form() {
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
                });
                request.send(json);
            })
        }

        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }

        postData(formData)
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure)
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
}

module.exports = form;

