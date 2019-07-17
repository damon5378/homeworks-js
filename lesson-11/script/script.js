'use strict';

let start = document.querySelector('#start'),
    cancel = document.querySelector('#cancel'),
    incomePlus = document.getElementsByTagName('button')[0],
    expensesPlus = document.getElementsByTagName('button')[1],
    depositCheck = document.querySelector('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    // findValue = document.querySelectorAll('[class$="value"]'),   
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],  
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],           
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    // incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    incomePercent = document.querySelector('.income-percent'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    incomeItems = document.querySelectorAll('.income-items');

    start.disabled = true;
    salaryAmount.addEventListener('input', function(){
        if(salaryAmount.value == '' || salaryAmount.value == null){
            console.log('TRUE');
        } else {
            console.log('FALSE');
            start.disabled = false;
        }
    });

    
    // let appData = {
    //     income: {},
    //     incomeMonth: 0,
    //     addIncome: [],
    //     expenses: {},
    //     addExpenses: [],
    //     deposit: false,
    //     percentDeposit: 0,
    //     moneyDeposit: 0,
    //     budget: 0,
    //     budgetDay: 0,
    //     budgetMonth: 0,
    //     expensesMonth: 0,
    //     start: function(){
    //         this.budget = +salaryAmount.value;
    //         this.getExpenses();
    //         this.getIncome();
    //         this.getExpensesMonth();
    //         this.getInfoDeposit();
    //         this.getBudget();
    //         this.getAddExpenses();
    //         this.getAddIncome();
    //         this.showResult();
    //         this.inputsDisable();
    //         // this.reset();
    //         // appData.include();
    //         // appData.getInfoDeposit();
    //     },
    //     cancel: function(){
    //         let inputClear = document.querySelectorAll('input[type=text]');
    //         inputClear.forEach(function(item){
    //             item.disabled = false;
    //             item.value = '';
    //         });
    //         periodAmount.innerHTML = 1;
    //         periodSelect.value = 1;
    //         expensesPlus.style.display = 'block';
    //         incomePlus.style.display = 'block';
    //         if(expensesItems.length === 2){
    //             expensesItems[0].parentNode.removeChild(expensesItems[1]);
    //         } else if (expensesItems.length === 3){
    //             expensesItems[0].parentNode.removeChild(expensesItems[1]);
    //             expensesItems[0].parentNode.removeChild(expensesItems[2]);
    //         }
    //         if(incomeItems.length === 2){
    //             incomeItems[0].parentNode.removeChild(incomeItems[1]);
    //         } else if (incomeItems.length === 3){
    //             incomeItems[0].parentNode.removeChild(incomeItems[1]);
    //             incomeItems[0].parentNode.removeChild(incomeItems[2]);
    //         }
    //         appData.income = {},
    //         appData.incomeMonth = 0,
    //         appData.addIncome = [],
    //         appData.expenses = {},
    //         appData.addExpenses = [],
    //         appData.deposit = false,
    //         appData.percentDeposit = 0,
    //         appData.moneyDeposit = 0,
    //         appData.budget = 0,
    //         appData.budgetDay = 0,
    //         appData.budgetMonth = 0,
    //         appData.expensesMonth = 0,
    //         start.style.display = 'block';
    //         cancel.style.display = 'none';
    // },
    //     showResult: function(){
    //         budgetMonthValue.value = this.budgetMonth;
    //         budgetDayValue.value = this.budgetDay;
    //         expensesMonthValue.value = this.expensesMonth;
    //         additionalExpensesValue.value = this.addExpenses.join(', ');
    //         additionalIncomeValue.value = this.addIncome.join(',');
    //         targetMonthValue.value = Math.ceil(this.getTargetMonth());
    //         incomePeriodValue.value = this.calcPeriod();
    //         periodSelect.addEventListener('change', function(){
    //         incomePeriodValue.value = appData.calcPeriod();
    //    });
    //     },
    //     addIncomeBlock: function(){
            
    //         let cloneIncomeItem = incomeItems[0].cloneNode(true);
    //         incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    //         incomeItems = document.querySelectorAll('.income-items');
    //         if(incomeItems.length === 3){
    //             incomePlus.style.display = 'none';
    //         }
    //         cloneIncomeItem.querySelectorAll('input').forEach((item) => {
    //             item.value = '';
    //         });
    //     },
    //     getIncome: function(){
    //         const self = this;
    //         incomeItems.forEach(function(item){
    //             let itemIncome = item.querySelector('.income-title').value;
    //             let cashIncome = item.querySelector('.income-amount').value;
    //             if(itemIncome !== '' && cashIncome !== ''){
    //                 self.income[itemIncome] = cashIncome;
    //             }
    //         });
    //         for(let key in self.income){
    //             self.incomeMonth += +self.income[key];
    //         }
    //     },
    //     addExpensesBlock: function(){
            
    //         let cloneExpensesItem = expensesItems[0].cloneNode(true);
    //         expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    //         expensesItems = document.querySelectorAll('.expenses-items');
    //         if(expensesItems.length === 3){
    //             expensesPlus.style.display = 'none';
    //         }
    //     },
    //     getExpenses: function(){
    //         const self = this;
    //         expensesItems.forEach(function(item){
    //             let itemExpenses = item.querySelector('.expenses-title').value;
    //             let cashExpenses = item.querySelector('.expenses-amount').value;
    //             if(itemExpenses !== '' && cashExpenses !== ''){
    //                 self.expenses[itemExpenses] = cashExpenses;
    //             }
    //         });
    //     },
        
    //     getAddExpenses: function(){
    //         const self = this;
    //         let addExpenses = additionalExpensesItem.value.split(',');
    //         addExpenses.forEach(function(item){
    //             item = item.trim();
    //             if (item !== ''){
    //                 self.addExpenses.push(item);
    //             }
    //         });
    //     },
    //     getAddIncome: function(){
    //         const self = this;
    //         additionalIncomeItem.forEach(function(item){
    //             let itemValue = item.value.trim();
    //             if (itemValue !== ''){
    //                 self.addIncome.push(itemValue);
    //             }
    //         });
    //     },
    //     inputRange: function(){
    //         periodAmount.innerHTML = periodSelect.value;
    //         let amountPosition = (periodSelect.value / periodSelect.max);
    //     },
    //     inputsDisable: function(){
    //         document.querySelectorAll('.data input[type=text]').forEach(function(item){
    //             item.disabled = true;
    //         });
    //         start.style.display = 'none';
    //         cancel.style.display = 'block';
    //     },
        
    //     getExpensesMonth: function getExpensesMonth() {
    //         let sumCost = 0;
    //         for(let key in this.expenses) {
    //             sumCost += +this.expenses[key];
    //         }
    //         this.expensesMonth = sumCost; 
    //     },
    //     getBudget: function getBudget() {
    //         this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit) / 12;
    //         this.budgetDay = Math.ceil(this.budgetMonth / 30);
    //     },
    //     getTargetMonth: function getTargetMonth() {
    //         return targetAmount.value / this.budgetMonth;
    //         },
    //     getStatusIncome: function getStatusIncome() {
    //         if (this.budgetDay >= 800) {
    //             return ('Высокий уровень дохода');
    //         } else if (this.budgetDay >= 300 && this.budgetDay < 800) {
    //             return ('Средний уровень дохода');
    //         } else if (this.budgetDay >= 0 && this.budgetDay < 300) {
    //             return ('Низкий уровень дохода');
    //         } else if (this.budgetDay < 1) {
    //             return ('Что-то пошло не так');
    //         }
    //         },
    //     include: function include(){
    //         for(let key in this){
    //             console.log('Наша программа включает в себя данные: ' + key + ' - ' + this[key]); 
    //         }
    //     },
    //     getInfoDeposit: function getInfoDeposit(){
    //         do{
    //             this.percentDeposit = depositPercent.value;
    //             this.moneyDeposit = depositAmount.value;
    //             console.log(this.percentDeposit);
    //             console.log(this.moneyDeposit);
    //         }
    //         while(isNaN(this.percentDeposit) || this.percentDeposit == '' || this.percentDeposit == null);
    //         while(isNaN(this.moneyDeposit) || this.moneyDeposit == '' || this.moneyDeposit == null);
    //     },
    //     calcPeriod: function(){
    //         return this.budgetMonth * periodSelect.value;
    //     },
    // }


    // depositCheck.addEventListener('change', function(){
    //     if(depositCheck.checked){
    //         depositBank.style.display = 'inline-block';
    //         depositAmount.style.display = 'inline-block';
    //         this.deposit = 'true';
    //         depositBank.addEventListener('change', function(){
    //             let selectIndex = this.options[this.selectedIndex].value;
    //             if(selectIndex === 'other') {
    //                 depositPercent.style.display = 'inline-block';
    //                 depositPercent.value = '';
    //             } else {
    //                 depositPercent.style.display = 'none';
    //                 depositPercent.value = selectIndex;
    //             }
    //         });
    //     } else {
    //         depositBank.style.display = 'none';
    //         depositAmount.style.display = 'none';
    //         depositAmount.value = '';
    //         this.deposit = 'false';
    //     }
    // });

    // start.addEventListener('click', appData.start.bind(appData));
    // start.addEventListener('click', appData.inputsDisable);
    // cancel.addEventListener('click', appData.cancel);
    
    
    // expensesPlus.addEventListener('click', appData.addExpensesBlock);
    // incomePlus.addEventListener('click', appData.addIncomeBlock);
    // periodSelect.addEventListener('input', appData.inputRange, false);
    
    
    // let myString1 = 'расходы за месяц: ';
    // let splits1 = myString1.split(', ');
    // let myString2 = 'доходы за месяц: ';
    // let splits2 = myString2.split(', ');
    
    
    // function budgetDaily() {
    //     if(appData.budgetDay > 0) {
    //         console.log(appData.budgetDay);
    //     } else {
    //         console.log('Что-то пошло не так');
    //     }
    // }
    // budgetDaily();
    

    const AppData = () => {
            this.income = {};
            this.incomeMonth = 0;
            this.addIncome = [];
            this.expenses = {};
            this.addExpenses = [];
            this.deposit = false;
            this.percentDeposit = 0;
            this.moneyDeposit = 0;
            this.budget = 0;
            this.budgetDay = 0;
            this.budgetMonth = 0;
            this.expensesMonth = 0;
    };
    AppData.prototype.start = () =>{
            this.budget = +salaryAmount.value;
            this.getExpenses();
            this.getIncome();
            this.getExpensesMonth();
            this.getInfoDeposit();
            this.getBudget();
            this.getAddExpenses();
            this.getAddIncome();
            this.showResult();
            this.inputsDisable();
      };
      AppData.prototype.cancel = () => {
        let inputClear = document.querySelectorAll('input[type=text]');
        inputClear.forEach(function(item){
            item.disabled = false;
            item.value = '';
        });
        periodAmount.innerHTML = 1;
        periodSelect.value = 1;
        expensesPlus.style.display = 'block';
        incomePlus.style.display = 'block';
        if(expensesItems.length === 2){
            expensesItems[0].parentNode.removeChild(expensesItems[1]);
        } else if (expensesItems.length === 3){
            expensesItems[0].parentNode.removeChild(expensesItems[1]);
            expensesItems[0].parentNode.removeChild(expensesItems[2]);
        }
        if(incomeItems.length === 2){
            incomeItems[0].parentNode.removeChild(incomeItems[1]);
        } else if (incomeItems.length === 3){
            incomeItems[0].parentNode.removeChild(incomeItems[1]);
            incomeItems[0].parentNode.removeChild(incomeItems[2]);
        }
        appData.income = {},
        appData.incomeMonth = 0,
        appData.addIncome = [],
        appData.expenses = {},
        appData.addExpenses = [],
        appData.deposit = false,
        appData.percentDeposit = 0,
        appData.moneyDeposit = 0,
        appData.budget = 0,
        appData.budgetDay = 0,
        appData.budgetMonth = 0,
        appData.expensesMonth = 0,
        start.style.display = 'block';
        cancel.style.display = 'none';
};
AppData.prototype.showResult = () =>{
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(',');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcPeriod();
        periodSelect.addEventListener('change', function(){
        incomePeriodValue.value = appData.calcPeriod();
   });
    };
    AppData.prototype.addIncomeBlock = () => {
        
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3){
            incomePlus.style.display = 'none';
        }
        cloneIncomeItem.querySelectorAll('input').forEach((item) => {
            item.value = '';
        });
    };
    AppData.prototype.getIncome = () =>{
        incomeItems.forEach((item) =>{
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome !== '' && cashIncome !== ''){
                this.income[itemIncome] = cashIncome;
            }
        });
        for(let key in self.income){
            self.incomeMonth += +self.income[key];
        }
    };
    AppData.prototype.addExpensesBlock = () =>{
        
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
            expensesPlus.style.display = 'none';
        }
    };
    AppData.prototype.getExpenses = () =>{
        expensesItems.forEach((item) =>{
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
                this.expenses[itemExpenses] = cashExpenses;
            }
        });
    };
    
    AppData.prototype.getAddExpenses = () =>{
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach((item) =>{
            item = item.trim();
            if (item !== ''){
                this.addExpenses.push(item);
            }
        });
    };
    AppData.prototype.getAddIncome = () =>{
        additionalIncomeItem.forEach((item) =>{
            let itemValue = item.value.trim();
            if (itemValue !== ''){
                this.addIncome.push(itemValue);
            }
        });
    };
    AppData.prototype.inputRange = () =>{
        periodAmount.innerHTML = periodSelect.value;
        let amountPosition = (periodSelect.value / periodSelect.max);
    }
    AppData.prototype.inputsDisable = () =>{
        document.querySelectorAll('.data input[type=text]').forEach(function(item){
            item.disabled = true;
        });
        start.style.display = 'none';
        cancel.style.display = 'block';
    };
    
    AppData.prototype.getExpensesMonth = () => {
        let sumCost = 0;
        for(let key in this.expenses) {
            sumCost += +this.expenses[key];
        }
        this.expensesMonth = sumCost; 
    };
    AppData.prototype.getBudget = () => {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit) / 12;
        this.budgetDay = Math.ceil(this.budgetMonth / 30);
    };
    AppData.prototype.getTargetMonth = () => {
        return targetAmount.value / this.budgetMonth;
        };
    AppData.prototype.getStatusIncome = () => {
        if (this.budgetDay >= 800) {
            return ('Высокий уровень дохода');
        } else if (this.budgetDay >= 300 && this.budgetDay < 800) {
            return ('Средний уровень дохода');
        } else if (this.budgetDay >= 0 && this.budgetDay < 300) {
            return ('Низкий уровень дохода');
        } else if (this.budgetDay < 1) {
            return ('Что-то пошло не так');
        }
        };
    AppData.prototype.include = () =>{
        for(let key in this){
            console.log('Наша программа включает в себя данные: ' + key + ' - ' + this[key]); 
        }
    };
    AppData.prototype.getInfoDeposit = () =>{
        do{
            this.percentDeposit = depositPercent.value;
            this.moneyDeposit = depositAmount.value;
            console.log(this.percentDeposit);
            console.log(this.moneyDeposit);
        }
        while(isNaN(this.percentDeposit) || this.percentDeposit == '' || this.percentDeposit == null);
        while(isNaN(this.moneyDeposit) || this.moneyDeposit == '' || this.moneyDeposit == null);
    };
    AppData.prototype.calcPeriod = () =>{
        return this.budgetMonth * periodSelect.value;
    };
    AppData.prototype.eventsToRunCode = () => {
        depositCheck.addEventListener('change', () =>{
            if(depositCheck.checked){
                depositBank.style.display = 'inline-block';
                depositAmount.style.display = 'inline-block';
                this.deposit = 'true';
                depositBank.addEventListener('change', () =>{
                    let selectIndex = this.options[this.selectedIndex].value;
                    if(selectIndex === 'other') {
                        depositPercent.style.display = 'inline-block';
                        depositPercent.value = '';
                    } else {
                     depositPercent.style.display = 'none';
                        depositPercent.value = selectIndex;
                    }
             });
         } else {
                depositBank.style.display = 'none';
                depositAmount.style.display = 'none';
                depositAmount.value = '';
                this.deposit = 'false';
            }
        });

    start.addEventListener('click', appData.start.bind(appData));
    start.addEventListener('click', appData.inputsDisable);
    cancel.addEventListener('click', appData.cancel);
    
    
    expensesPlus.addEventListener('click', appData.addExpensesBlock);
    incomePlus.addEventListener('click', appData.addIncomeBlock);
    periodSelect.addEventListener('input', appData.inputRange, false);
  }

  

const appData = new AppData();

// appData.eventsToRunCode();



