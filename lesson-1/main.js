// let money = 580000;
//     income = "150000";
//     addExpenses = "Ноутбук, Мышь, Печеньки";
//     deposit = true;
//     mission = 1000000;
//     period = 10;
//     budgetDay = money / 30;

// console.log(typeof money );
// console.log(typeof income );
// console.log(typeof deposit );
// console.log(income.length);
// console.log("Период " + period + " месяцев");
// console.log("Цель заработать " + mission + " долларов");
// console.log(addExpenses.toLowerCase().split(', '));
// console.log(budgetDay);
// console.log(money % 30);

let num = 266219;
    tempArray = [];
    digit = num.toString();
    mult = 1;

for (let i = 1; i < digit.length; i++) {
    tempArray[i] = digit.charAt(i);
}
for (let i = 1; i < tempArray.length; i++) {
    console.log(tempArray[i]);
    mult *= parseInt(tempArray[i]); 
}
console.log("Произведение чисел: " + mult);