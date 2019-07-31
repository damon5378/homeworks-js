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

    const inputNumbers = () => {
      const inputSquare = document.querySelector('.calc-square'),
          inputCount = document.querySelector('.calc-count'),
          inputDay = document.querySelector('.calc-day');
          // formPhone = document.querySelector('.form-phone'),
          // topForm = document.querySelector('#form2-phone'),
          // formPopup = document.querySelector('#form3-phone'),
          // formName = document.querySelector('#form1-name'),
          // formNamePopup = document.querySelector('#form3-name'),
          // formNameFooter = document.querySelector('#form2-name'),
          // formMessage = document.querySelector('#form2-message');

        inputSquare.addEventListener('input', () => {
          inputSquare.value = inputSquare.value.replace(/[^0-9]/ig, '');
        });

        inputCount.addEventListener('input', () => {
          inputCount.value = inputCount.value.replace(/[^0-9]/ig, '');
        });

        inputDay.addEventListener('input', () => {
          inputDay.value = inputDay.value.replace(/[^0-9]/ig, '');
        });

        // formPhone.addEventListener('input', () => {
        //   formPhone.value =  formPhone.value.replace(/[^\+0-9]/ig, '');
        // });

        // topForm.addEventListener('input', () => {
        //   topForm.value = topForm.value.replace(/[^\+0-9]/ig, '');
        // });

        // formPopup.addEventListener('input', () => {
        //   formPopup.value = formPopup.value.replace(/[^\+0-9]/ig, '');
        // });

        // formName.addEventListener('input', () => {
        //   formName.value = formName.value.replace(/[^аА-яЯ ]/, '');
        // });

        // formNamePopup.addEventListener('input', () => {
        //   formNamePopup.value = formNamePopup.value.replace(/[^аА-яЯ ]/, '');
        // });

        // formNameFooter.addEventListener('input', () => {
        //   formNameFooter.value = formNameFooter.value.replace(/[^аА-яЯ ]/, '');
        // });

        // formMessage.addEventListener('input', () => {
        //   formMessage.value = formMessage.value.replace(/[^аА-яЯ ]/, '');
        // });
    };
    inputNumbers();

    // Our Team

  const ourTeam = document.getElementById('command');

    let ourTeamFunction = (target) => {
      let defaultSrc = target.src;
      console.log('переменная с исходным src: ' + defaultSrc);
      target.src = target.dataset.img;
      console.log('новое значение src: ' + target.src);
      target.dataset.img = defaultSrc;
      console.log('новое значение data: ' + target.dataset.img);
    };

    ourTeam.addEventListener('mouseover', (event) => {
      let target = event.target;

      if(target.matches('.command__photo')){
        ourTeamFunction(target);
      }
    });
    ourTeam.addEventListener('mouseout', (event) => {
      let target = event.target;

      if(target.matches('.command__photo')){
        ourTeamFunction(target);
      }
    });

    //Calc

    const calc = (price = 100) => {
      const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');

        const countSum = () => {
          let total = 0;
          let countValue = 1;
          let dayValue = 1;
          const typeValue = calcType.options[calcType.selectedIndex].value;
          const squareValue = +calcSquare.value;

          if(calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
          }

          if(calcDay.value && calcDay.value < 5) { //вот тут не понятно что к чему
            dayValue *= 2;
          } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
          }

          if(typeValue && squareValue) {
            total = price * typeValue * squareValue * countValue * dayValue;
          } 
          totalValue.textContent = total;
        };


        calcBlock.addEventListener('change', (event) => {
          const target = event.target;

          // *******************Первый способ****************

          // if(target.matches('.calc-type') || target.matches('.calc-square') || 
          //     target.matches('.calc-day') || target.matches('.calc-count')) {

          //     }

          // *******************Второй способ****************

          // if(target === calcType || target === calcSquare || 
          //   target === calcDay || target === calcCount) {

          //   }

          // *******************Третий способ****************

          if(target.matches('select') || target.matches('input')){
            countSum();
          }

        });
    };
    calc();

    // send-ajax-form

  const form = document.getElementById('form1'),
  formQuest = document.getElementById('form2'),
  formPopup = document.getElementById('form3'),
  bodyFormEvent = document.body;

bodyFormEvent.addEventListener('input', (event) => {
  let target = event.target;


  if (target.classList.contains('form-phone')) {
    target.value = target.value.replace(/[^0-9\\+]/, '');
  }

  if (target === document.getElementById('form2-name') || target.classList.contains('mess') || 
      target.classList.contains('form-name')) {

    target.value = target.value.replace(/[^А-яа-я\s]/, '');
  }

});


const sendForm = (ourForm) => {   //!!!!!!!!!!!!!!!!!!!!!!!!!!!
const errorMessage = 'Что-то пошло не так...',
loadMessage = 'Загрузка...',
successMessage = 'Спасибо! Мы скоро с вами свяжемся!';


const statusMessage = document.createElement('div');
statusMessage.style.cssText = 'font-size: 2rem; color: #fff;';


ourForm.addEventListener('submit', (event) => {
event.preventDefault();
ourForm.appendChild(statusMessage);
// statusMessage.textContent = loadMessage;
const formData = new FormData(ourForm);
let body = {};
formData.forEach((val, key) => {
  body[key] = val;
});
ourForm.reset();

const postData = (body) => {
return new Promise(function (resolve, reject){
  const request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
  if (request.readyState < 4) {
    resolve();
  
  } else if (request.status === 200) {

    resolve();
  } else {
    reject();
  }
  
});
request.open('POST', './server.php');
request.setRequestHeader('Content-Type', 'application/json');
request.send(JSON.stringify(body));
});
}; // end of postData


postData(body)
.then(() => statusMessage.innerHTML = loadMessage)
.then(() => statusMessage.innerHTML = successMessage)
.catch(() => statusMessage.innerHTML = errorMessage);

}); // end of ourForm.addEventListener
}; // end of sendForm

sendForm(form); ////!!!!!!!!!!!!!!!!!!!
sendForm(formQuest); ////!!!!!!!!!!!!!!!!!!!
sendForm(formPopup); ////!!!!!!!!!!!!!!!!!!!
    
});

