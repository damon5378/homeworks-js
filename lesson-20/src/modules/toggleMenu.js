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
export default toggleMenu;