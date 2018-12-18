/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/parts/tabs.js"),
      form = __webpack_require__(/*! ./parts/form.js */ "./src/parts/form.js"),
      modal = __webpack_require__(/*! ./parts/modal.js */ "./src/parts/modal.js"),
      timer = __webpack_require__(/*! ./parts/timer.js */ "./src/parts/timer.js"),
      img = __webpack_require__(/*! ./parts/img.js */ "./src/parts/img.js"),
      calc = __webpack_require__(/*! ./parts/calc.js */ "./src/parts/calc.js");

    tabs();
    calc();
    modal();
    form();
    img();
    timer();


});

/***/ }),

/***/ "./src/parts/calc.js":
/*!***************************!*\
  !*** ./src/parts/calc.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

 function calc() {
     let popupCalc = document.getElementsByClassName('popup_calc')[0],
         popupCalcProfile = document.getElementsByClassName('popup_calc_profile')[0],
         popupCalcProfileClose = document.getElementsByClassName('popup_calc_profile_close')[0],
         popupCalcClose = document.getElementsByClassName('popup_calc_close')[0],
         popupCalcButton = document.getElementsByClassName('popup_calc_button')[0],
         inputWidth = document.getElementById('width'),
         inputHeight = document.getElementById('height');

     let data = {};

     function checkInput(inp) {
         inp.addEventListener('keypress', function(inp) {
             let that = this;
             setTimeout(function() {
                 let res = /[^0-999]/g.exec(that.value);
                 that.value = that.value.replace(res, '');
             }, 0);
         });
     }

     checkInput(inputWidth);
     checkInput(inputHeight);

     popupCalcClose.addEventListener('click', closePopup);


     function closePopup() {
         inputWidth.value = '';
         inputHeight.value = '';
         data = {};
     }
     // табы
     function tabsCalc() {
         let type = document.querySelectorAll('div.balcon_icons>a'),
             typeImg  = document.querySelectorAll('div.balcon_icons>a>img'),
             typeContent = document.querySelectorAll('div.big_img>img');

         function hideTabContent(a) {
             for (let i = a; i < typeContent.length; i++) {
                 typeContent[i].classList.remove('show');
                 typeContent[i].classList.add('hide');
                 typeImg[i].classList.remove('scale');
             }
         }
         hideTabContent(1);

         function showTabContent(b) {
             if (typeContent[b].classList.contains('hide')) {
                 hideTabContent(0);
                 typeImg[b].classList.add('scale');
                 typeContent[b].classList.remove('hide');
                 typeContent[b].classList.add('show');
             }
         }

         for (let i = 0; i < type.length; i++) {
             type[i].addEventListener('click', (event) => {
                 event.preventDefault();
                 typeContent[i].setAttribute('value', i+1);
                 data.type = typeContent[i].getAttribute('value');
                 showTabContent(i);
             })
         }
     }
     tabsCalc();

     let popupCalcCont = document.querySelector('.popup_calc_content'),
         balconIcons = popupCalcCont.querySelector('.balcon_icons'),
         imgMini = balconIcons.getElementsByTagName('img'),
         bigImg = popupCalcCont.querySelector('.big_img'),
         imgBig = bigImg.getElementsByTagName('img');

     popupCalcCont.addEventListener('click', (e) => {
         e.preventDefault();
         let target = e.target;

         for (let i = 0; i < imgMini.length; i++) {
             if (target == imgMini[i]) {
                 for (let t = 0; t < imgMini.length; t++) {
                     imgMini[t].style.width = '80px';
                 }
                 imgMini[i].style.width = '120px';
                 for (let j = 0; j < imgBig.length; j++) {
                     imgBig[j].style.display = 'none';
                 }
                 break;
             }
         }
     });


     setInterval(() => {
         if (inputWidth.value == '' || inputHeight.value == '') {
             popupCalcButton.setAttribute('disabled', 'true');
         } else {
             popupCalcButton.removeAttribute('disabled', 'true');
         }
     }, 0);

     popupCalcButton.addEventListener('click', () => {
         data.width = inputWidth.value;
         data.height = inputHeight.value;
         popupCalcProfile.classList.remove('fadeOut');
         popupCalc.classList.remove('show');
         popupCalc.classList.add('hide');
         popupCalcProfile.classList.add('show');
         popupCalcProfile.classList.add('animated');
     });

     popupCalcProfileClose.addEventListener('click', popupProfileClose);

     function popupProfileClose() {
         popupCalcProfile.classList.remove('fadeIn');
         popupCalcProfile.classList.add('fadeOut');
         inputWidth.value = '';
         inputHeight.value = '';
         for (let i = 0; i < checkbox.length; i++) {
             checkbox[i].checked = false;
         }
         data = {};
         setTimeout(() => {
             popupCalcProfile.classList.remove('show');
             popupCalcProfile.classList.add('hide');
         }, 700);
     }

     let select = document.getElementById('view_type'),
         buttonProfile = document.getElementsByClassName('popup_calc_profile_button')[0],
         checkboxCustom = document.getElementsByClassName('checkbox-custom'),
         checkbox = document.getElementsByClassName('checkbox'),
         popupCalcEnd = document.getElementsByClassName('popup_calc_end')[0];

     function check() {
         setInterval(() => {
             if (checkbox[0].checked === false && checkbox[1].checked === false) {
                 buttonProfile.setAttribute('disabled', 'true');
             } else {
                 buttonProfile.removeAttribute('disabled', 'true');
             }
             checkbox[0].addEventListener('click', function() {
                 checkbox[1].checked = false;
                 buttonProfile.removeAttribute('disabled', 'true');
             });
             checkbox[1].addEventListener('click', function() {
                 checkbox[0].checked = false;
                 buttonProfile.removeAttribute('disabled', 'true');
             })
         }, 0)

     }
     check();

     buttonProfile.addEventListener('click', () => {
         data.category = select.options[select.selectedIndex].value;
         for (let i = 0; i < checkbox.length; i++) {
             if (checkbox[i].checked) {
                 data.checkbox = checkboxCustom[i].className.slice(16);
             }
         }
         popupCalcProfile.classList.remove('show');
         popupCalcProfile.classList.add('hide');
         popupCalcEnd.classList.add('show');
     });

     //popupEnd
     let popupCalcEndClose = document.getElementsByClassName('popup_calc_end_close')[0],
         inputName = document.querySelector('input.name'),
         inputPhone = document.querySelector('input.phone'),
         buttonCalcEnd = document.getElementsByClassName('btn-block')[8];

     popupCalcEndClose.addEventListener('click', () => {
         popupCalcEnd.classList.add('animated');
         popupCalcEnd.classList.add('fadeOut');
         inputWidth.value = '';
         inputHeight.value = '';
         for (let i = 0; i < checkbox.length; i++) {
             checkbox[i].checked = false;
         }
         data = {};
         setTimeout(() => {
             popupCalcEnd.classList.remove('show');
             popupCalcEnd.classList.add('hide');
             popupCalcEnd.classList.remove('fadeOut');
         }, 700)

     });

     buttonCalcEnd.addEventListener('click', () => {
         data.userName = inputName.value;
         data.userPhone = inputPhone.value;

         let request = new XMLHttpRequest();
         request.open('POST', 'server.php');
         request.setRequestHeader('Content-Type', 'aplication/x-www-form-urlencoded');

         let formData = new FormData(data);

         request.send(formData);
     });
 }

 module.exports = calc;






/***/ }),

/***/ "./src/parts/form.js":
/*!***************************!*\
  !*** ./src/parts/form.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

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




/***/ }),

/***/ "./src/parts/img.js":
/*!**************************!*\
  !*** ./src/parts/img.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function img() {
    let divImage = document.createElement('div'),
        imgPic = document.createElement('img'),
        zoom = document.getElementsByClassName('zoomIn'),
        zoomIn = document.querySelectorAll('.zoomIn > a'),
        works = document.querySelector('.overlay');

    divImage.classList.add('div_picture');
    imgPic.classList.add('div_picture_img');

    for (let i = 0; i < zoom.length; i++) {
        zoom[i].addEventListener('click', (event) => {
            event.preventDefault();
            divImage.style.display = 'block';
            works.style.cssText = `display: flex;
        justify-content: center; align-items: center;`;
            works.appendChild(divImage);
            divImage.appendChild(imgPic);
            for (let i = 0; i < zoomIn.length; i++) {
                zoomIn[i].getAttribute('href');
            }
            imgPic.setAttribute('src', zoomIn[i].href);
        });
    }

    works.addEventListener('click', (event) => {
        let target = event.target;
        if (target == works) {
            divImage.style.display = 'none';
            works.style.display = 'none';
        }
    });
}

module.exports = img;





/***/ }),

/***/ "./src/parts/modal.js":
/*!****************************!*\
  !*** ./src/parts/modal.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
    let engineerBtn = document.querySelector('.popup_engineer_btn'),
        engineerPopup = document.querySelector('.popup_engineer'),
        calcPopup = document.querySelector('.popup_calc'),
        calcPopupClose = document.querySelector('.popup_calc_close'),
        calcPopupBtn = calcPopup.querySelector('.popup_calc_button'),
        calcProfilePopup = document.querySelector('.popup_calc_profile'),
        calcProfilePopupBtn = calcProfilePopup.querySelector('.popup_calc_profile_button'),
        calcProfilePopupClose = document.querySelector('.popup_calc_profile_close'),
        calcEndPopup = document.querySelector('.popup_calc_end'),
        calcEndPopupClose = calcEndPopup.querySelector('.popup_calc_end_close'),
        popup = document.querySelector('.popup'),
        popupClose = document.querySelectorAll('.popup_close'),
        phoneLink = document.querySelectorAll('.phone_link');


    engineerBtn.addEventListener('click', function () {
        modalOpen(engineerPopup);
        modalOpen(popup);
    });

    calcPopupBtn.addEventListener('click', function () {
        modalClose(calcPopup);
        modalOpen(calcProfilePopup);
    });


    calcProfilePopupBtn.addEventListener('click', function () {
        modalClose(calcProfilePopup);
        modalOpen(calcEndPopup);
    });


    phoneLink[0].addEventListener('click', function () {
        modalOpen(popup);
    });
    phoneLink[1].addEventListener('click', function () {
        event.preventDefault();
        modalOpen(popup);
    });

    popupClose[0].addEventListener('click', function (event) {

        modalClose(popup);

    });
    popupClose[1].addEventListener('click', function (event) {
        modalClose(engineerPopup);
        modalClose(popup);
    });

    calcPopupClose.addEventListener('click', function (event) {
        modalClose(calcPopup);
    });

    calcProfilePopupClose.addEventListener('click', function (event) {
        modalClose(calcProfilePopup);
    });

    calcEndPopupClose.addEventListener('click', function (event) {
        modalClose(calcEndPopup);
    });

    document.addEventListener('click', (e) => {
        if (e.target == engineerPopup) {
            modalClose(engineerPopup);
            modalClose(popup);
        }
        if (e.target == popup) {
            modalClose(popup);
        }
        if (e.target.classList.contains('popup_calc_btn')) {
            modalOpen(calcPopup);
        }
    });

    setTimeout(() => {
        modalOpen(popup);
    }, 60000);

    function modalClose(pop) {
        pop.style.display = '';

    }
    function modalOpen(pop) {
        pop.style.display = 'block';

    }
}
module.exports = modal;








/***/ }),

/***/ "./src/parts/tabs.js":
/*!***************************!*\
  !*** ./src/parts/tabs.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

 function tabs() {
     let tab = document.getElementsByClassName('glazing_block'),
         link = document.querySelectorAll('.glazing_block > a'),
         tabContent = document.getElementsByClassName('tabs_content');

     function hideTabContent(a) {
         for (let i = a; i < tabContent.length; i++) {
             tabContent[i].classList.remove('show');
             tabContent[i].classList.add('hide');
             link[i].classList.remove('active');
         }
     }

     hideTabContent(1);

     function showTabContent(b) {
         if (tabContent[b].classList.contains('hide')) {
             hideTabContent(0);
             tabContent[b].classList.remove('hide');
             tabContent[b].classList.add('show');
             link[b].classList.add('active');
         }
     }

     for (let i = 0; i < tab.length; i++) {
         tab[i].addEventListener('click', ()=> {
             showTabContent(i);
         })
     }



     let noClick = document.querySelectorAll('.no_click'),
         decor = document.querySelector('.decoration'),
         decorLink = document.querySelectorAll('.no_click>a'),
         decorContent = document.querySelectorAll('.tabs-finishing-content');

     function showTabClass(a) {
         for (let t = 0; t < noClick.length; t++) {
             noClick[t].classList.remove('after_click');
             decorContent[t].style.display = 'none';
         }
         noClick[a].classList.add('after_click');
         decorContent[a].style.display = 'block';
     }

     decor.addEventListener('click', (event) => {
         let target = event.target;
         if (target.parentElement.classList.contains('no_click')) {
             for (let i = 0; i < decorLink.length; i++) {
                 if (target == decorLink[i]) {
                     showTabClass(i);
                     break;
                 }
             }
         }
     });
 }

 module.exports = tabs;




/***/ }),

/***/ "./src/parts/timer.js":
/*!****************************!*\
  !*** ./src/parts/timer.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

 function timer() {
     let deadline = '2018-12-31';

     function getTimeRemaining(endtime) {
         let t = Date.parse(endtime) - Date.parse(new Date()),
             seconds = Math.floor((t/1000) % 60),
             minutes = Math.floor((t/1000/60) % 60),
             hours = Math.floor((t/(1000*60*60)) % 24) - 3,
             days = Math.floor((t/(1000*60*60*24)));

         if (t <= 0) {
             seconds = 0;
             minutes = 0;
             hours = 0;
             days = 0;
             document.querySelector('.timer_title').innerHTML = 'Акция уже закончилась:';

         }
         return {
             'total' : t,
             'days' : days,
             'hours' : hours,
             'minutes' : minutes,
             'seconds' : seconds
         };
     }


     function setClock(id, endtime) {
         let timer = document.getElementsByClassName(id)[0],
             days = timer.querySelector('.days'),
             hours = timer.querySelector('.hours'),
             minutes = timer.querySelector('.minutes'),
             seconds = timer.querySelector('.seconds'),
             timeInterval = setInterval(upDateClock, 1000);


         function upDateClock() {
             let t = getTimeRemaining(endtime);
             days.textContent = to2(t.days);
             hours.textContent = to2(t.hours);
             minutes.textContent = to2(t.minutes);
             seconds.textContent = to2(t.seconds);

             if (t.total <= 0) {
                 clearInterval(timeInterval);
             }
         }

     }

     function to2(val) {
         return (val < 10 ? "0" + val : val);
     }


     setClock('timer', deadline);
 }

 module.exports = timer;




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map