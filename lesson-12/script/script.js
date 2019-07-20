// function countDown(){
//     let today = new Date();
//     let eventDate = new Date("July 19, 2019 00:00:00");

//     let currentTime = today.getTime();
//     let eventTime = eventDate.getTime();

//     let remTime = eventTime - currentTime;

//     let seconds = Math.floor(remTime / 1000);
//     let minutes = Math.floor(seconds / 60);
//     let hours = Math.floor(minutes / 60);

//     hours = hours % 24;
//     minutes = minutes % 60;
//     seconds = seconds % 60;

//     hours = (hours < 10) ? "0" + hours : hours;
//     minutes = (minutes < 10) ? "0" + minutes : minutes;
//     seconds = (seconds < 10) ? "0" + seconds : seconds;
    

//     document.getElementById('timer-hours').innerHTML = hours;
//     document.getElementById('timer-minutes').innerHTML = minutes;
//     document.getElementById('timer-seconds').innerHTML = seconds;

//     let clearTimer = setInterval(countDown, 1000);
//     if(seconds == 0){
//         clearInterval(clearTimer);
//     }
// }
// countDown();


window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    //Timer
    function countTimer(deadline){
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');


        function getTimeRemaining(){
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
                hours = (hours < 10) ? "0" + hours : hours;
                minutes = (minutes < 10) ? "0" + minutes : minutes;
                seconds = (seconds < 10) ? "0" + seconds : seconds;
                    return {timeRemaining, hours, minutes, seconds};
                }

        function updateClock(){
            let timer = getTimeRemaining();
            
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;
            if(timer.timeRemaining > 0) {
                setInterval(updateClock, 1000);
            } else {
                clearInterval(updateClock);
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
            
        }
        
        updateClock();
    }
    
    countTimer('21 july 2019 15:37:33');


});



