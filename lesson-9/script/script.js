'use strict';

let start = document.querySelector('#start'),
    cancel = document.querySelector('#cancel'),
    incomePlus = document.getElementsByTagName('button')[0],
    expensesPlus = document.getElementsByTagName('button')[1],
    check = document.querySelector('#deposit-check'),
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
    depositAmount = document.querySelector('.deposit-amount'),
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

    
    let appData = {
        income: {},
        incomeMonth: 0,
        addIncome: [],
        expenses: {},
        addExpenses: [],
        deposit: false,
        percentDeposit: 0,
        moneyDeposit: 0,
        budget: 0,
        budgetDay: 0,
        budgetMonth: 0,
        expensesMonth: 0,
        start: function(){
            this.budget = +salaryAmount.value;
            this.getExpenses();
            this.getIncome();
            this.getExpensesMonth();
            this.getAddExpenses();
            this.getAddIncome();
            this.getBudget();
            this.showResult();
            this.inputsDisable();
            // this.reset();
            // appData.include();
            // appData.getInfoDeposit();
        },
        cancel: function(){
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
            this.income = {},
            this.incomeMonth = 0,
            this.addIncome = [],
            this.expenses = {},
            this.addExpenses = [],
            this.deposit = false,
            this.percentDeposit = 0,
            this.moneyDeposit = 0,
            this.budget = 0,
            this.budgetDay = 0,
            this.budgetMonth = 0,
            this.expensesMonth = 0,
            start.style.display = 'block';
            cancel.style.display = 'none';
    },
        showResult: function(){
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
        },
        addExpensesBlock: function(){
            
            let cloneExpensesItem = expensesItems[0].cloneNode(true);
            expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
            expensesItems = document.querySelectorAll('.expenses-items');
            if(expensesItems.length === 3){
                expensesPlus.style.display = 'none';
            }
        },
        addIncomeBlock: function(){
            
            let cloneIncomeItem = incomeItems[0].cloneNode(true);
            incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
            incomeItems = document.querySelectorAll('.income-items');
            if(incomeItems.length === 3){
                incomePlus.style.display = 'none';
            }
        },
        getExpenses: function(){
            expensesItems.forEach(function(item){
                let itemExpenses = item.querySelector('.expenses-title').value;
                let cashExpenses = item.querySelector('.expenses-amount').value;
                if(itemExpenses !== '' && cashExpenses !== ''){
                    appData.expenses[itemExpenses] = cashExpenses;
                }
            });
        },
        getIncome: function(){
            incomeItems.forEach(function(item){
                let itemIncome = item.querySelector('.income-title').value;
                let cashIncome = item.querySelector('.income-amount').value;
                if(itemIncome !== '' && cashIncome !== ''){
                    appData.income[itemIncome] = cashIncome;
                }
                for(let key in appData.income){
                    appData.incomeMonth += +appData.income[key];
                }
            });
        },
        getAddExpenses: function(){
            const self = this;
            let addExpenses = additionalExpensesItem.value.split(',');
            addExpenses.forEach(function(item){
                item = item.trim();
                if (item !== ''){
                    self.addExpenses.push(item);
                }
            })
        },
        getAddIncome: function(){
            const self = this;
            additionalIncomeItem.forEach(function(item){
                let itemValue = item.value.trim();
                if (itemValue !== ''){
                    self.addIncome.push(itemValue);
                }
            });
        },
        inputRange: function(){
            periodAmount.innerHTML = periodSelect.value;
            let amountPosition = (periodSelect.value / periodSelect.max);
        },
        inputsDisable: function(){
            document.querySelectorAll('.data input[type=text]').forEach(function(item){
                item.disabled = true;
            });
            start.style.display = 'none';
            cancel.style.display = 'block';
        },
        
        getExpensesMonth: function getExpensesMonth() {
            let sumCost = 0;
            for(let key in this.expenses) {
                sumCost += +this.expenses[key];
            }
            this.expensesMonth = sumCost; 
        },
        getBudget: function getBudget() {
            this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
            this.budgetDay = Math.ceil(this.budgetMonth / 30);
        },
        getTargetMonth: function getTargetMonth() {
            return targetAmount.value / this.budgetMonth;
            },
        getStatusIncome: function getStatusIncome() {
            if (this.budgetDay >= 800) {
                return ('Высокий уровень дохода');
            } else if (this.budgetDay >= 300 && this.budgetDay < 800) {
                return ('Средний уровень дохода');
            } else if (this.budgetDay >= 0 && this.budgetDay < 300) {
                return ('Низкий уровень дохода');
            } else if (this.budgetDay < 1) {
                return ('Что-то пошло не так');
            }
            },
        include: function include(){
            for(let key in this){
                console.log('Наша программа включает в себя данные: ' + key + ' - ' + this[key]); 
            }
        },
        getInfoDeposit: function getInfoDeposit(){
            do{
                this.percentDeposit = prompt('Какой годовой процент?');
                this.moneyDeposit = prompt('Какая сумма заложена?');
                console.log(this.percentDeposit);
                console.log(this.moneyDeposit);
            }
            while(isNaN(this.percentDeposit) || this.percentDeposit == '' || this.percentDeposit == null);
            while(isNaN(this.moneyDeposit) || this.moneyDeposit == '' || this.moneyDeposit == null);
        },
        calcPeriod: function(){
            return this.budgetMonth * periodSelect.value;
        },
    }

    start.addEventListener('click', appData.start.bind(appData));
    start.addEventListener('click', appData.inputsDisable);
    cancel.addEventListener('click', appData.cancel);
    
    
    expensesPlus.addEventListener('click', appData.addExpensesBlock);
    incomePlus.addEventListener('click', appData.addIncomeBlock);
    periodSelect.addEventListener('input', appData.inputRange, false);
    
    
    let myString1 = 'расходы за месяц: ';
    let splits1 = myString1.split(', ');
    let myString2 = 'доходы за месяц: ';
    let splits2 = myString2.split(', ');
    
    
    function budgetDaily() {
        if(appData.budgetDay > 0) {
            console.log(appData.budgetDay);
        } else {
            // console.log('Что-то пошло не так');
        }
    }
    budgetDaily();
    



































// console.log(start);
// console.log(plus1);
// console.log(plus2);
// console.log(check);
// console.log(input);
// console.log(findValue);



