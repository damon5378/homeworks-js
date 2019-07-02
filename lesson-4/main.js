'use strict';

let money = +prompt('Ваш месячный доход?');
let income = 'Фриланс, Спорт';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mandatoryExpenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let mandatoryExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let cost1 = +prompt('Во сколько это обойдется?');
let cost2 = +prompt('Во сколько это обойдется?');
let mission = 1000000;
let period = 10;
let budgetMonth = money - cost1 - cost2;
let budgetDay = budgetMonth / 30;
let expensesMonth;
let accumulatedMonth;
let targetMonth;

function getExpensesMonth() {
    expensesMonth = cost1 + cost2;
}
getExpensesMonth();
console.log(expensesMonth);

function getAccumulatedMonth() {
    accumulatedMonth = money - expensesMonth;
}
getAccumulatedMonth();
console.log(accumulatedMonth);

function getTargetMonth() {
    targetMonth = mission - accumulatedMonth;
}
getTargetMonth();
console.log(Math.ceil(targetMonth)); // вот тут что-то не то

let showTypeof = function(item) {
  console.log(item, typeof item);  
};
showTypeof(money);
showTypeof(income);
showTypeof(deposit);


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
