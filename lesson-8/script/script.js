'use strict';

let start = document.querySelector('#start'),
    incomePlus = document.getElementsByTagName('button')[0],
    expensesPlus = document.getElementsByTagName('button')[1],
    check = document.querySelector('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    // findValue = document.querySelectorAll('[class$="value"]'),   
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0],
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
    incomeItems = document.querySelectorAll('.income-items');

    
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
            if(salaryAmount.value === ''){
                alert('Поле "Месячный доход" обязательно для заполнения');
                return;
            }
            appData.budget = +salaryAmount.value;
            // console.log(salaryAmount.value);
            appData.getExpenses();
            appData.getIncome();
            appData.getExpensesMonth();
            appData.getAddExpenses();
            appData.getAddIncome();
            appData.getBudget();
            appData.showResult();
            // appData.include();
            // appData.getInfoDeposit();
        },
        showResult: function(){
            budgetMonthValue.value = appData.budgetMonth;
            budgetDayValue.value = appData.budgetDay;
            expensesMonthValue.value = appData.getExpensesMonth;
            additionalExpensesValue.value = appData.addExpenses.join(', ');
            additionalIncomeValue.value = appData.addIncome.join(',');
            targetMonthValue.value = Math.ceil(appData.getTargetMonth());
            incomePeriodValue.value = appData.calcPeriod();
            accumulatedMonthValue.value = appData.getIncome();
        },
        addExpensesBlock: function(){
            
            let cloneExpensesItem = expensesItems[0].cloneNode(true);
            expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
            expensesItems = document.querySelectorAll('.expenses-items');
            if(expensesItems.length === 3){
                expensesPlus.style.display = 'none';
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
                    appData.incomeMonth += +appData.income[key]
                }
            });
        },
        getAddExpenses: function(){
            let addExpenses = additionalExpensesItem.value.split(',');
            addExpenses.forEach(function(item){
                item = item.trim();
                if (item !== ''){
                    appData.addExpenses.push(item);
                }
            })
        },
        getAddIncome: function(){
            additionalIncomeItem.forEach(function(item){
                let itemValue = item.value.trim();
                if (itemValue !== ''){
                    appData.addIncome.push(itemValue);
                }
            });
        },
        asking: function asking(){
    
            if(confirm('Есть ли у вас дополнительный источник заработка?')){
                let itemIncome;
                let cashIncome; 
                do {
                    itemIncome = prompt('Какой у вас дополнительный заработок?');
                    cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?');
                }
                while(!isNaN(itemIncome) && itemIncome != '' && itemIncome != null);
                while(isNaN(cashIncome) || cashIncome === '' || cashIncome === null);
                appData.income[itemIncome] = cashIncome;
            }
    
            let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
                appData.addExpenses = addExpenses.toLowerCase().split(',');
                appData.deposit = confirm('Есть ли у вас депозит в банке?');
                    // let sum,
                    //     answer,
                    //     question;
                    // for(let i = 0; i < 2; i++) {
                    //     if(i === 0) {
                    //         question = prompt('Введите обязательную статью расходов', '');
                    //         answer = +prompt('Во сколько это обойдется?');
                    //         appData.expenses[question] = answer;
                    //     } else if (i === 1) {
                    //         question = prompt('Введите обязательную статью расходов', '');
                    //         answer = +prompt('Во сколько это обойдется?');
                    //         appData.expenses[question] = answer;
                    //     }
                    // }
        },
        getExpensesMonth: function getExpensesMonth() {
            let sumCost = 0;
            for(let key in appData.expenses) {
                sumCost += appData.expenses[key];
            }
            return sumCost; 
        },
        getBudget: function getBudget() {
            appData.budgetMonth = appData.budget + appData.incomeMonth - appData.getExpensesMonth();
            appData.budgetDay = Math.floor(appData.budgetMonth / 30);
        },
        getTargetMonth: function getTargetMonth() {
            return targetAmount.value / appData.budgetMonth;
        //    let targetMonth = Math.floor(appData.mission / appData.budgetMonth);
        //     if (targetMonth > 0){
        //         return ('Цель будет достигнута через ' + targetMonth + " месяца/месяцев"); 
        //      } else {
        //         return ('Цель не будет достигнута');
        //         }
            },
        getStatusIncome: function getStatusIncome() {
            if (appData.budgetDay >= 800) {
                return ('Высокий уровень дохода');
            } else if (appData.budgetDay >= 300 && appData.budgetDay < 800) {
                return ('Средний уровень дохода');
            } else if (appData.budgetDay >= 0 && appData.budgetDay < 300) {
                return ('Низкий уровень дохода');
            } else if (appData.budgetDay < 1) {
                return ('Что-то пошло не так');
            }
            },
        include: function include(){
            for(let key in appData){
                console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]); 
            }
        },
        getInfoDeposit: function getInfoDeposit(){
            do{
                appData.percentDeposit = prompt('Какой годовой процент?');
                appData.moneyDeposit = prompt('Какая сумма заложена?');
                console.log(appData.percentDeposit);
                console.log(appData.moneyDeposit);
            }
            while(isNaN(appData.percentDeposit) || appData.percentDeposit == '' || appData.percentDeposit == null);
            while(isNaN(appData.moneyDeposit) || appData.moneyDeposit == '' || appData.moneyDeposit == null);
        },
        calcPeriod: function(){
            return appData.budgetMonth * periodSelect.value;
        }
    }

    start.addEventListener('click', appData.start);
    
    expensesPlus.addEventListener('click', appData.addExpensesBlock);
    
    // console.log(appData.getTargetMonth());
    // console.log(appData.getStatusIncome());
    // console.log(appData.calcSavedMoney());
    // console.log(appData.percentDeposit);
    // console.log(appData.moneyDeposit);
    
    
    let myString1 = 'расходы за месяц: ';
    let splits1 = myString1.split(', ');
    let myString2 = 'доходы за месяц: ';
    let splits2 = myString2.split(', ');
    function toUpper(str) {
        return str
            .toLowerCase()
            .split(' ')
            .map(function(word) {
                return word[0].toUpperCase() + word.substr(1);
            })
            .join(' '); 
         }
         console.log(toUpper(splits1 + appData.getExpensesMonth()));
         console.log(toUpper(splits2 + (appData.budget - appData.getExpensesMonth())));
    
    
    function budgetDaily() {
        if(appData.budgetDay > 0) {
            console.log(appData.budgetDay);
        } else {
            console.log('Что-то пошло не так');
        }
    }
    budgetDaily();
    



































// console.log(start);
// console.log(plus1);
// console.log(plus2);
// console.log(check);
// console.log(input);
// console.log(findValue);



