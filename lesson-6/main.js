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
    mission: 1000000,
    period: 10,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function asking(){
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
        appData.budgetDay = appData.budgetMonth / 30;
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
            console.log('Наша программа включает в себя данные: ', appData);
        }
    }
}


appData.asking();
appData.getExpensesMonth();
appData.getBudget();
// appData.getBudget();
appData.include();
// console.log(appData.getAccumulatedMonth);
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());


// console.log(appData.getAccumulatedMonth);
appData.getTargetMonth;

// console.log(appData.getTargetMonth);



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