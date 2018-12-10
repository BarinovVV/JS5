function timer() {
    //Timer

    let deadLine = '2018-12-12';

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
    }


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

    }

    function to2(val) {
        return (val < 10 ? "0" + val : val);
    }

    setClock('timer', deadLine);
}

module.exports = timer;
