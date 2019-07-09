'use strict';

let money;
let start = function(){
    do{
        money = prompt('Ваш месячный доход?');
        console.log(money);
    }
    while(isNaN(money) || money == '' || money == null);
}
start();



// let mandatoryExpenses1;
// let mandatoryExpenses2;

// let expensesMonth;
// let targetMonth;

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 1000000,
    period: 10,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
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
                let sum,
                    answer,
                    question;
                for(let i = 0; i < 2; i++) {
                    if(i === 0) {
                        question = prompt('Введите обязательную статью расходов', '');
                        answer = +prompt('Во сколько это обойдется?');
                        appData.expenses[question] = answer;
                    } else if (i === 1) {
                        question = prompt('Введите обязательную статью расходов', '');
                        answer = +prompt('Во сколько это обойдется?');
                        appData.expenses[question] = answer;
                    }
                }
                // return sum;
    },
    getExpensesMonth: function getExpensesMonth() {
        let sumCost = 0;
        for(let key in appData.expenses) {
            sumCost += appData.expenses[key];
        }
        // console.log(sumCost);
        return sumCost; 
    },
    getBudget: function getBudget() {
        // let expensesAmount = appData.getExpensesMonth();
        appData.budgetMonth = appData.budget - appData.getExpensesMonth();
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function getTargetMonth() {
       let targetMonth = Math.floor(appData.mission / appData.budgetMonth);
        if (targetMonth > 0){
            return ('Цель будет достигнута через ' + targetMonth + " месяца/месяцев"); 
         } else {
            return ('Цель не будет достигнута');
            }
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
        // if(appData.deposit){
            
            
        // }
        do{
            appData.percentDeposit = prompt('Какой годовой процент?');
            appData.moneyDeposit = prompt('Какая сумма заложена?');
            console.log(appData.percentDeposit);
            console.log(appData.moneyDeposit);
        }
        while(isNaN(appData.percentDeposit) || appData.percentDeposit == '' || appData.percentDeposit == null);
        while(isNaN(appData.moneyDeposit) || appData.moneyDeposit == '' || appData.moneyDeposit == null);

    },
    calcSavedMoney: function calcSavedMoney(){
        return appData.budgetMonth * appData.period;
    }
}


appData.asking();
appData.getExpensesMonth();
appData.getBudget();
// appData.getBudget();
appData.include();
appData.getInfoDeposit();
// console.log('расходы за месяц: ' + appData.getExpensesMonth());
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());
console.log(appData.calcSavedMoney());
console.log(appData.percentDeposit);
console.log(appData.moneyDeposit);

// console.log(appData.getAccumulatedMonth);


// console.log(appData.getTargetMonth);


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

// console.log(appData.getStatusIncome);
// console.log(appData);