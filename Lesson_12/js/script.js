window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let lesson = document.querySelector('h2'),
        title = document.querySelector('title'),
        myBody = document.querySelector('body');

    lesson.textContent = 'Домашнее задание Урок № 12';
    title.textContent = 'Lesson 12';
    lesson.style.textAlign = 'center';

    let drink = 1;

    function shoot(arrow, headshot, fail) {
        console.log('Вы сделали выстрел...');

        setTimeout(function() {
            Math.random() > .5 ? headshot({}) : fail('Вы промахнулись...');
        }, 3000);
    }

    function win() {
        console.log('Вы победили!');
        (drink == 1) ? buyBeer() : giveMoney();
    }
    function loose() {
        console.log('Вы проиграли!');
    }
    function buyBeer() {
        console.log('Вам купили пиво!');
    }
    function giveMoney() {
        console.log('Вам заплатиил!');
    }

    shoot({},
        function(mark) {
            console.log('Вы попали в цель!');
            win(mark, buyBeer, giveMoney);
        },
        function(miss) {
            console.error(miss);
            loose();
        }
    );

});