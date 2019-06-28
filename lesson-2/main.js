let money = 580000;
    income = "Фриланс, Спорт";
    addExpenses = "Ноутбук, Мышь, Печеньки";
    deposit = true;
    mission = 1000000;
    period = 10;
    budgetDay = money / 30;

console.log(typeof money );
console.log(typeof income );
console.log(typeof deposit );
console.log(income.length);
console.log("Период " + period + " месяцев");
console.log("Цель заработать " + mission + " долларов");
console.log(addExpenses.toLowerCase().split(', '));
console.log(budgetDay);
console.log(money % 30);

let num = 266219;
    lastDigit = 1;
    multOfAllDigits = 1;

while(num != 0)
{
lastDigit= num % 10;
multOfAllDigits = multOfAllDigits * lastDigit;
num = parseInt(num/10);
}
document.write("Произведение чисел = ", multOfAllDigits + "\n");
document.write("Возведение в степень полученного числа = ", multOfAllDigits ** 3 + "\n");
document.write("Вывод первых двух цифр = ", String(multOfAllDigits ** 3).slice(0,2));

