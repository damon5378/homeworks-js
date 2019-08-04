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
  export default inputNumbers;