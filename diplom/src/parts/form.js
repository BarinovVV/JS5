 function form() {
     let message = {
         loading: 'Загрузка...',
         success: 'Спасибо! Скоро мы с вами свяжемся!',
         failure: 'Что-то пошло не так...'
     };

     let mainForm = document.getElementsByClassName('main_form'),
         myForm = document.getElementsByClassName('form')[7],
         popupForm = document.querySelector('.popup_form'),
         calcEnd = document.querySelector('.popup_calc_end'),
         formCalcEnd = calcEnd.querySelector('.popup_form'),
         statusMessage = document.createElement('div');

     statusMessage.classList.add('status');


     function onlyNumber(target) {
         if (target.getAttribute('name') == 'user_phone') {
             target.value = target.value.replace(/[^\d]/g, '');
         }
     }

     formCalcEnd.addEventListener('keyup', (e) => {
         let target = e.target;
         onlyNumber(target);
     });

     mainForm[0].addEventListener('keyup', (e) => {
         let target = e.target;
         onlyNumber(target);
     });

     mainForm[1].addEventListener('keyup', (e) => {
         let target = e.target;
         onlyNumber(target);
     });
     mainForm[2].addEventListener('keyup', (e) => {
         let target = e.target;
         onlyNumber(target);
     });
     mainForm[3].addEventListener('keyup', (e) => {
         let target = e.target;
         onlyNumber(target);
     });
     mainForm[4].addEventListener('keyup', (e) => {
         let target = e.target;
         onlyNumber(target);
     });
     mainForm[5].addEventListener('keyup', (e) => {
         let target = e.target;
         onlyNumber(target);
     });
     popupForm.addEventListener('keyup', (e) => {
         let target = e.target;
         onlyNumber(target);
     });
     myForm.addEventListener('keyup', (e) => {
         let target = e.target;
         onlyNumber(target);
     });

     function sendData(data) {

         data.appendChild(statusMessage);

         let request = new XMLHttpRequest();
         request.open("POST", 'server.php');

         request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

         let formData = new FormData(data);

         request.send(formData);

         request.onreadystatechange = function() {
             if (request.readyState < 4) {
                 statusMessage.innerHTML = message.loading;
             } else if (request.readyState === 4) {
                 if (request.status == 200 && request.status < 300) {
                     statusMessage.innerHTML = message.success;
                 }
                 else {
                     statusMessage.innerHTML = message.failure;
                 }
             }
         };
         let input = data.getElementsByTagName('input');
         for (let i = 0; i < input.length; i++) {
             input[i].value = '';
         }
     }

     formCalcEnd.addEventListener('submit', function(event) {
         event.preventDefault();
         sendData(formCalcEnd);
     });

     mainForm[0].addEventListener('submit', function(event) {
         event.preventDefault();
         sendData(mainForm[0]);
     });
     mainForm[1].addEventListener('submit', function(event) {
         event.preventDefault();
         sendData(mainForm[1]);
     });
     mainForm[2].addEventListener('submit', function(event) {
         event.preventDefault();
         sendData(mainForm[2]);
     });
     mainForm[3].addEventListener('submit', function(event) {
         event.preventDefault();
         sendData(mainForm[3]);
     });
     mainForm[5].addEventListener('submit', function(event) {
         event.preventDefault();
         sendData(mainForm[5]);
     });
     popupForm.addEventListener('submit', function(event) {
         event.preventDefault();
         sendData(popupForm);
     });
     myForm.addEventListener('submit', function(event) {
         event.preventDefault();
         sendData(form);
     });
 }
 module.exports = form;


