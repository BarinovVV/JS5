window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let tabs = require('./parts/tabs.js'),
      form = require('./parts/form.js'),
      modal = require('./parts/modal.js'),
      timer = require('./parts/timer.js'),
      img = require('./parts/img.js'),
      calc = require('./parts/calc.js');

    tabs();
    calc();
    modal();
    form();
    img();
    timer();


});