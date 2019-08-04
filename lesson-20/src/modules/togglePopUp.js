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
export default togglePopUp;