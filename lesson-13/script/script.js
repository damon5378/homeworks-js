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
    
    countTimer('22 july 2019 17:00:00');

    //Menu
    const toggleMenu = () =>{
        const btnMenu = document.querySelector('.menu'),
              menu = document.querySelector('menu'),
              closeBtn = document.querySelector('.close-btn'),
              menuItems = menu.querySelectorAll('ul>li');
        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
            // if(!menu.style.transform || menu.style.transform === `translate(-100%)`){
            //     menu.style.transform = `translate(0)`;
            // } else {
            //     menu.style.transform = `translate(-100%)`;
            // };
        }
            
            btnMenu.addEventListener('click', handlerMenu);
            closeBtn.addEventListener('click', handlerMenu);
            menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));

    };
    toggleMenu();

    //popup
    const togglePopUp = () => {
        const popUp = document.querySelector('.popup'),
              popUpBtn = document.querySelectorAll('.popup-btn'),
              popUpClose = document.querySelector('.popup-close');

              popUpBtn.forEach((elem) => {
                elem.addEventListener('click', () => {
                    popUp.style.display = 'block';
                    popUp.animate([
                        { transform: 'translate3D(0, -500px, 0)' }, 
                        { transform: 'translate3D(0, 0, 0)' }
                      ], {
                        duration: 1000,
                      })
                      if(screen.width < 768){
                        popUp.style.display = 'none';
                      }
                });
              });
              popUpClose.addEventListener('click', () => {
                popUp.style.display = 'none';
              });
              //почему на btn forEach, а на крестик не надо?
            //   popUpClose.forEach((elem) => {
            //       elem.addEventListener('click', () => {
            //         popUp.style.display = 'none';
            //       });
            //   });

              // поставил на паузу и решил написать сам. Даже блин не думаю про всякие forEach(((
        // popUpBtn.addEventListener('click', () => {
        //     popUp.style.display = 'block';
        // });
        // popUpClose.addEventListener('click', () => {
        //     popUp.style.display = 'none';
        // });

    };
    togglePopUp();
});
