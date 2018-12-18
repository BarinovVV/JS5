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


