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

  export default calc;