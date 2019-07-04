'use strict';

let money;
let start = function(){
    do{
        money = prompt('Ваш месячный доход?');
        console.log(money);
    }
    while(isNaN(money) || money == '' || money == null);
    // while (isNaN(money) || money == '' || money == null){
    //     money = prompt('Ваш месячный доход?');
    //     console.log(money);
    // }
}
start();

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
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
            appData.addExpenses = addExpenses.toLowerCase().split(',');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
    },
    gem: function getExpensesMonth() {
        let sum = 0;
        for(let i = 0; i < 2; i++){
            if(i === 0) {
                mandatoryExpenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
            } else if(i === 1){
                mandatoryExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
            }
            sum += +prompt('Во сколько это обойдется?');
        }
    
        // while(isNaN(sum) || sum == '' || sum == null) {
        //     for(let i = 0; i < 2; i++){
        //         sum += +prompt('Во сколько это обойдется?');
        //     }
        // }
        // return sum;
    
        if(!isNaN(sum) && sum != '' && sum != null){
            return sum;
        } else {
            for(let i = 0; i < 2; i++){
                sum += +prompt('Во сколько это обойдется?');
            }
        } 
    },
    gam: function getAccumulatedMonth() {
        accumulatedMonth = money - expensesAmount;
    },
    gtm: function getTargetMonth() {
        targetMonth = Math.floor(appData.mission / accumulatedMonth);
        if (targetMonth > 0){
            return ('Цель будет достигнута через ' + targetMonth + " месяца/месяцев"); 
         } else {
            return ('Цель не будет достигнута');
            }
        },
    gsi: function getStatusIncome() {
        if (budgetDay >= 800) {
            return ('Высокий уровень дохода');
        } else if (budgetDay >= 300 && budgetDay < 800) {
            return ('Средний уровень дохода');
        } else if (budgetDay >= 0 && budgetDay < 300) {
            return ('Низкий уровень дохода');
        } else if (budgetDay < 1) {
            return ('Что-то пошло не так');
        }
        }
}

let mandatoryExpenses1;
let mandatoryExpenses2;
let accumulatedMonth;
let expensesMonth;
let targetMonth;


console.log(appData.getAccumulatedMonth);
// console.log(accumulatedMonth);


appData.getTargetMonth;
console.log(appData.getTargetMonth);

let budgetDay = accumulatedMonth / 30;

function budgetDaily() {
    if(budgetDay > 0) {
        console.log(budgetDay);
    } else {
        console.log('Что-то пошло не так');
    }
}
budgetDaily();

console.log(appData.getStatusIncome);
