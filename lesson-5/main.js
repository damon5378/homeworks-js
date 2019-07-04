'use strict';

let money;
let income = 'Фриланс, Спорт';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mandatoryExpenses1;
let mandatoryExpenses2;
// let cost1 = +prompt('Во сколько это обойдется?');
// let cost2 = +prompt('Во сколько это обойдется?');
let mission = 1000000;
let period = 10;
let accumulatedMonth;

let expensesMonth;
// let budgetMonth = money - expensesAmount;

let targetMonth;


let start = function(){
    // money = prompt('Ваш месячный доход?');
    // console.log(money);
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

function getExpensesMonth() {
    let sum = 0;
    for(let i = 0; i < 2; i++){
        if(i === 0) {
            mandatoryExpenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
        } else if(i === 1){
            mandatoryExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
        }


        sum += +prompt('Во сколько это обойдется?');
    }
    if(!isNaN(sum) && sum != '' && sum != null){
        return sum;
    } else {
        for(let i = 0; i < 2; i++){
            sum += +prompt('Во сколько это обойдется?');
        }
    } 
}

let expensesAmount = getExpensesMonth();


function getAccumulatedMonth() {
    accumulatedMonth = money - expensesAmount;
}
getAccumulatedMonth();
console.log(accumulatedMonth);

function getTargetMonth() {
    targetMonth = Math.floor(mission / accumulatedMonth);
    if (targetMonth > 0){
        return ('Цель будет достигнута через ' + targetMonth + " месяца/месяцев"); 
     } else {
        return ('Цель не будет достигнута');
        }
    }
getTargetMonth();
console.log(getTargetMonth());

let showTypeof = function(item) {
  console.log(item, typeof item);  
};
showTypeof(money);
showTypeof(income);
showTypeof(deposit);

let budgetDay = accumulatedMonth / 30;

function budgetDaily() {
    if(budgetDay > 0) {
        console.log(budgetDay);
    } else {
        console.log('Что-то пошло не так');
    }
}
budgetDaily();

function getStatusIncome() {
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
console.log(getStatusIncome());
