'use strict';

let money;
let income = 'Фриланс, Спорт';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mandatoryExpenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let mandatoryExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
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
    while(isNaN(money) || money == '' || money == null)
    // while (isNaN(money) || money == '' || money == null){
    //     money = prompt('Ваш месячный доход?');
    //     console.log(money);
    // }
};
start();

function getExpensesMonth() {
    let sum = 0;
    for(let i = 0; i < 2; i++){
        sum += +prompt('Во сколько это обойдется?');
    }
    return sum;
    // while(isNaN(expensesMonth) || expensesMonth == '' || expensesMonth == null){ //Валидация
    //     console.log(expensesMonth);
    // }
};

let expensesAmount = getExpensesMonth();


function getAccumulatedMonth() {
    accumulatedMonth = money - expensesAmount;
}
getAccumulatedMonth();
console.log(accumulatedMonth);

function getTargetMonth() {
    targetMonth = Math.floor(mission / accumulatedMonth);
    if (targetMonth > 0){
        console.log('Цель будет достигнута через ' + targetMonth + " месяца/месяцев"); 
     } else {
        console.log('Цель не будет достигнута');
        }
    }
getTargetMonth(); // почему когда тут писал return вместо console.log, то ничего не выводилось,
                  // но ниже в getStatusIncome выводится


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
