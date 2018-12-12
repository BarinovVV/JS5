window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let tabs = require('./js/parts/tabs.js'),
        form = require('./js/parts/form.js'),
        modal = require('./js/parts/modal.js'),
        timer = require('./js/parts/timer.js'),
        slider = require('./js/parts/slider.js'),
        calc = require('./js/parts/calc.js');

    tabs();
    calc();
    modal();
    slider();
    form();
    timer();

});