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
    
    countTimer('24 july 2019 17:00:00');

    //Menu
    const toggleMenu = () => {
        const body = document.body,
              menu = document.querySelector('menu');
        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
            // if(!menu.style.transform || menu.style.transform === `translate(-100%)`){
            //     menu.style.transform = `translate(0)`;
            // } else {
            //     menu.style.transform = `translate(-100%)`;
            // };
        };
        body.addEventListener('click', (event) => {
          let target = event.target;
          if(target.classList.contains('close-btn') || target.tagName === 'A') {
            menu.classList.remove('active-menu');
          }
          target = target.closest('menu');
          if(!target) {
            menu.classList.remove('active-menu');
          }

          target = event.target;
          target = target.closest('.menu');
          if(target) {
            handlerMenu();
          }
          

        });

    };
    toggleMenu();

    //popup
    const togglePopUp = () => {
        const popUp = document.querySelector('.popup'),
              popUpBtn = document.querySelectorAll('.popup-btn');

              popUpBtn.forEach((elem) => {
                elem.addEventListener('click', () => {
                    popUp.style.display = 'block';
                      if(screen.width < 768){
                        popUp.style.display = 'block';
                      } else {
                        popUp.animate([
                            { transform: 'translate3D(0, -500px, 0)' }, 
                            { transform: 'translate3D(0, 0, 0)' }
                          ], {
                            duration: 1000,
                          })
                      }
                });
              });
              popUp.addEventListener('click', (event) => {
                let target = event.target;
                if(target.classList.contains('popup-close')){
                  popUp.style.display = 'none';
                } else {
                  target = target.closest('.popup-content');

                if(!target){
                  popUp.style.display = 'none';
                }
              }
                
              });

    };
    togglePopUp();

    //Tabs
    const tabs = () => {
      const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

            const toggleTabContent = (index) => {
              for(let i = 0; i < tabContent.length; i++){
                if(index === i) {
                  tab[i].classList.add('active');
                  tabContent[i].classList.remove('d-none');
                } else {
                  tab[i].classList.remove('active');
                  tabContent[i].classList.add('d-none');
                }
              }
            };

            tabHeader.addEventListener('click', (event) => {
              let target = event.target;
                  target = target.closest('.service-header-tab');
              if(target){
                tab.forEach((item, i) => {
                  if(item === target){
                    toggleTabContent(i);
                  }
                });
              }
            });
    };
    tabs();

    //slider
// каким макаром работает у нас active? и почему код работает только вне ф-ии slider
    const addDots = () => {
        
      const slide = document.querySelectorAll('.portfolio-item'),
          dots = document.querySelector('.portfolio-dots');

          for(let i = 0; i < slide.length; i++){
            let createDot = document.createElement('li');
            createDot.className = "dot";
            dots.appendChild(createDot);
        }
    }
          addDots();

    const slider = () => {
      const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            dot = document.querySelectorAll('.dot'),
            slider = document.querySelector('.portfolio-content');
            
      let currentSlide = 0,
          interval;
    
      const prevSlide = (elem, index, srtClass) => {
        elem[index].classList.remove(srtClass);
      };

      const nextSlide = (elem, index, srtClass) => {
        elem[index].classList.add(srtClass);
      };

      const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if(currentSlide >= slide.length) {
          currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
      };
      const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
      };
      const stopSlide = () => {
        clearInterval(interval);
      };
      slider.addEventListener('click', (event) => {
        event.preventDefault();

      let target = event.target;

      if(!target.matches('.portfolio-btn, .dot')) {
        return;
      }

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if(target.matches('#arrow-right')){
        currentSlide++;
      } else if (target.matches('#arrow-left')){
        currentSlide--;
      } else if (target.matches('.dot')){
        dot.forEach((elem, index) => {
          if(elem === target){
            currentSlide = index;
          }
        });
      }
      if(currentSlide >= slide.length) {
        currentSlide = 0;
      }
      if(currentSlide < 0) {
        currentSlide = slide.length - 1;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    });

      slider.addEventListener('mouseover', (event) => {
        if(event.target.matches('.portfolio-btn') ||
          event.target.matches('.dot')){
            stopSlide();
          }
      });
      slider.addEventListener('mouseout', (event) => {
        if(event.target.matches('.portfolio-btn') ||
          event.target.matches('.dot')){
            startSlide();
          }
      });
    startSlide(1500);
    };
    slider();
});
