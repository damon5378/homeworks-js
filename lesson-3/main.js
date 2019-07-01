'use strict';

let money = prompt('Ваш месячный доход?');
let income = 'Фриланс, Спорт';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = console.log(confirm('Есть ли у вас депозит в банке?'));
let mandatoryExpenses1 = console.log(prompt('Какие обязательные ежемесячные расходы у вас есть?'));
let mandatoryExpenses2 = console.log(prompt('Какие обязательные ежемесячные расходы у вас есть?'));
let cost1 = prompt('Во сколько это обойдется?');
let cost2 = prompt('Во сколько это обойдется?');
let mission = 1000000;
let period = 10;
let budgetMonth = money - cost1 - cost2;
let budgetDay = budgetMonth / 30;


console.log(budgetMonth);
console.log(Math.ceil(mission / budgetMonth) + " месяцев до цели)))");
console.log(Math.floor(budgetDay));

if (budgetDay >= 800) {
    console.log('Высокий уровень дохода');
} else if (budgetDay >= 300 && budgetDay < 800) {
    console.log('Средний уровень дохода');
} else if (budgetDay >= 0 && budgetDay < 300) {
    console.log('Низкий уровень дохода');
} else if (budgetDay < 1) {
    console.log('Что-то пошло не так');
}

console.log(addExpenses.split(', '));
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);








