function calc() {
    //calculator

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total =0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function () {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000 * getValue();
        console.log(getValue());

        if (restDays.value == '' || persons.value == '' ) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });
    persons.addEventListener('keyup', function () {
        this.value = this.value.replace(/^0|[^\d]/g, '');
    });

    restDays.addEventListener('change', function () {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000 * getValue();

        if (persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });
    restDays.addEventListener('keyup', function () {
        this.value = this.value.replace(/^0|[^\d]/g, '');
    });

    place.addEventListener('change', function () {
        let selectedValue = getValue();
        if (restDays.value == '' || persons.value == '' ) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = (daysSum + personsSum) * 4000 * selectedValue;
        }
    });

    function getValue() {
        let selind = place.options.selectedIndex;
        return place.options[selind].value;
    }

}

module.exports = calc;

