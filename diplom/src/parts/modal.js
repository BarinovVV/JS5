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






