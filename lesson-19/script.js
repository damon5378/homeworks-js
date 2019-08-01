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
    statusMessage.style.cssText = 'font-size: 2rem';

    
    ourForm.addEventListener('submit', (event) => {
      event.preventDefault();
      ourForm.appendChild(statusMessage);
      // statusMessage.textContent = loadMessage;
      const formData = new FormData(ourForm);
      let body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });
      

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