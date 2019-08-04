const sendFormModule = () => {
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

      statusMessage.textContent = loadMessage;

      const formData = new FormData(ourForm);
      let body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });
      
    postData(body)
    .then((response) => {
        if(response.status !== 200){
          throw new Error('Status Network Not 200');
        }
      statusMessage.innerHTML = successMessage;
    })
    .catch((error) => {
      statusMessage.innerHTML = errorMessage;
      console.error(error);
    });
      
    ourForm.reset();

});

const postData = (body) => {
  return fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(body)
  });

};

// end of ourForm.addEventListener
// end of sendForm

};
sendForm(form);
sendForm(formQuest); 
sendForm(formPopup);
};
export default sendFormModule;